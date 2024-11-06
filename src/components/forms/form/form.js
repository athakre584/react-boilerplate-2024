// import { debounce } from "@components/utils/functions";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import classNames from "classnames";
import PropTypes from "prop-types";
import React, { useCallback, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

import styles from "./form.module.scss";

const MyForm = React.forwardRef(
  (
    {
      children,
      className,
      debounceTime = 300,
      defaultValues,
      onCTA,
      onFormBlur,
      onFormChange,
      onSubmit,
      onSubmitError,
      onValidityChange,
      schema = {},
    },
    ref
  ) => {
    const methods = useForm({
      defaultValues,
      mode: "onBlur",
      resolver: zodResolver(schema),
    });

    const { control, formState, getValues, handleSubmit, reset } = methods;
    const { isValid } = formState;

    const submitForm = useCallback(
      // debounce(
      (data) => {
        console.log("Submitting form with data:", data); // Debug log
        onSubmit(data);
      },

      // ),
      [onSubmit]
    );

    const resetForm = () => {
      reset();
    };

    const handleKeyUp = useCallback(
      (e) => {
        onFormChange && onFormChange(getValues());

        if (e.key !== "Enter") {
          return;
        }

        e.preventDefault();

        submitForm();
      },
      [getValues, onFormChange, submitForm]
    );

    const handleOnBlur = () => {
      if (onFormBlur) {
        onFormBlur(getValues());
      }
    };

    useEffect(() => {
      onValidityChange(isValid);
    }, [isValid]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
      document.addEventListener("keyup", handleKeyUp);
      return () => {
        document.removeEventListener("keyup", handleKeyUp);
      };
    }, [handleKeyUp]);

    // Use useImperativeHandle to expose the child method to the parent component
    React.useImperativeHandle(ref, () => ({
      resetForm,
    }));

    useEffect(() => {
      if (process.env.NODE_ENV === "development") {
        <DevTool control={control} />;
      }
    }, [control]);

    const handleChildClicked = (data) => {
      submitForm(data);
    };

    return (
      <FormProvider {...methods}>
        <form
          className={classNames(styles.form, className)}
          data-is="Form"
          onBlur={handleOnBlur}
          onSubmit={handleSubmit(handleChildClicked, onSubmitError)}
        >
          {children}
        </form>
      </FormProvider>
    );
  }
);

MyForm.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  debounceTime: PropTypes.number,
  defaultValues: PropTypes.object,
  onCTA: PropTypes.func,
  onChange: PropTypes.func,
  onFormBlur: PropTypes.func,
  onFormChange: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
  onSubmitError: PropTypes.func,
  onValidityChange: PropTypes.func,
  schema: PropTypes.object,
};

MyForm.displayName = "MyForm";

MyForm.defaultValues = {
  defaultValues: {},
};

export default MyForm;
