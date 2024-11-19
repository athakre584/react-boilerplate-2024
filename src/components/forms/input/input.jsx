import { TextField } from "@mui/material";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

import formStyles from "../form/form.module.scss";
import styles from "./input.module.scss";

const RHFInput = ({
  className,
  inputProps,
  label,
  type,
  helperText,
  fieldName,
  hasParentError,
}) => {
  const { control, trigger } = useFormContext();

  return (
    <Controller
      control={control}
      defaultValue=""
      name={label}
      render={({
        field: { onBlur, onChange, value },
        fieldState: { error },
      }) => (
        <TextField
          aria-invalid={!!error || hasParentError}
          className={classNames(formStyles.formField, styles.input, className)}
          data-is="TextInput"
          error={!!error || hasParentError}
          fullWidth
          helperText={
            !!error || hasParentError ? "Fill out to continue" : helperText
          }
          label={label}
          onBlur={onBlur}
          onChange={(e) => {
            onChange(e); // update the form value
            trigger(fieldName || label); // trigger validation onChange
          }}
          type={type}
          value={value}
          variant="outlined"
        />
      )}
      rules={{ required: true }}
    />
  );
};

RHFInput.propTypes = {
  className: PropTypes.string,
  fieldName: PropTypes.string,
  hasParentError: PropTypes.bool,
  helperText: PropTypes.string,
  inputProps: PropTypes.object,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default RHFInput;
