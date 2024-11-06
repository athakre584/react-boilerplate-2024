import { TextField } from "@mui/material";
import classNames from "classnames";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

import formStyles from "../form/form.module.scss";
import styles from "./textarea.module.scss";

const RHFTextArea = ({ className, label, maxLength, rows, placeholder }) => {
  const { control } = useFormContext();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <Controller
      control={control}
      defaultValue=""
      name={label}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <TextField
            aria-invalid={!!error}
            className={classNames(
              formStyles.formField,
              styles.input,
              className
            )}
            data-is="TextArea"
            error={!!error}
            fullWidth={true}
            label={label}
            multiline={true}
            onChange={onChange}
            placeholder={placeholder}
            rows={rows ? rows : 4}
            type={"text"}
            value={value}
            variant="outlined"
          />
          {maxLength && (
            <p className={styles.charactersCount}>
              {!value || value.length === 0
                ? maxLength
                : maxLength - value.length}{" "}
              characters
            </p>
          )}
        </>
      )}
      rules={{ required: true }}
    />
  );
};

RHFTextArea.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
};

RHFTextArea.displayName = "RHFTextArea";

export default RHFTextArea;
