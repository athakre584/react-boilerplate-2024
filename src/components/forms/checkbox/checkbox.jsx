import { Checkbox, FormControlLabel } from "@mui/material";
import classNames from "classnames";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

import styles from "./checkbox.module.scss";

const RHFCheckBox = ({
  className,
  inputProps,
  label,
  checkedIcon,
  checked,
  icon,
  onCheck,
  required,
  color,
  size,
  labelClassName,
  labelPlacement,
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
    <Controller
      control={control}
      defaultValue={checked}
      name={label}
      render={({ fieldState: { error } }) => (
        <FormControlLabel
          className={labelClassName}
          control={
            <Checkbox
              aria-invalid={!!error}
              checked={checked}
              checkedIcon={checkedIcon}
              className={classNames(styles.checkbox, className)}
              color={color}
              data-is="checkBox"
              icon={icon}
              inputProps={inputProps}
              size={size}
            />
          }
          label={label}
          labelPlacement={labelPlacement}
          onChange={onCheck}
        />
      )}
      rules={{ required }}
    />
  );
};

RHFCheckBox.propTypes = {
  checked: PropTypes.bool.isRequired,
  checkedIcon: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    "default",
    "primary",
    "secondary",
    "error",
    "info",
    "success",
  ]),
  icon: PropTypes.node,
  inputProps: PropTypes.object,
  label: PropTypes.string.isRequired,
  labelClassName: PropTypes.string,
  labelPlacement: PropTypes.oneOf(["end", "start", "top", "bottom"]),
  onCheck: PropTypes.func.isRequired,
  required: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium"]),
};

export default RHFCheckBox;
