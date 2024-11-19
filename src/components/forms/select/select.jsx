import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import classNames from "classnames";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

import formStyles from "../form/form.module.scss";
import styles from "./select.module.scss";

const RHFSelect = ({
  className,
  defaultValue,
  inputProps,
  label,
  options,
  showEmptyOptions,
}) => {
  const { control } = useFormContext();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <FormControl
      className={classNames(formStyles.formField, styles.input, className)}
      style={{ width: "100%" }}
    >
      <InputLabel id={inputProps?.name ? inputProps.name : ""}>
        {label}
      </InputLabel>
      <Controller
        control={control}
        defaultValue={defaultValue}
        name={inputProps && inputProps.name ? inputProps.name : label}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Select
            aria-invalid={!!error}
            className={classNames(styles.input, className)}
            data-is="EqxSelect"
            defaultValue={defaultValue ? defaultValue : ""}
            error={!!error}
            fullWidth={true}
            inputProps={inputProps}
            label={label}
            labelId={inputProps?.name ? inputProps.name : ""}
            onChange={onChange}
            value={value ? value : ""}
            variant="outlined"
          >
            {showEmptyOptions && (
              <MenuItem value="">
                <em>Select...</em>
              </MenuItem>
            )}
            {options &&
              options.map((option) => {
                const { label, value } = option;

                return (
                  <MenuItem
                    className={styles.menuItem}
                    key={value}
                    value={value}
                  >
                    {label}
                  </MenuItem>
                );
              })}
          </Select>
        )}
        rules={{ required: true }}
      />
    </FormControl>
  );
};

RHFSelect.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  inputProps: PropTypes.object,
  label: PropTypes.string.isRequired,
  options: PropTypes.array,
  showEmptyOptions: PropTypes.bool,
};

export default RHFSelect;
