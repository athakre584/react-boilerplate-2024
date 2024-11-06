import { ReactComponent as Selected } from "@assets/icons/radio-selected.svg";
import { ReactComponent as Unselected } from "@assets/icons/radio-unselected.svg";
import RHFCheckBox from "@components/forms/checkbox/checkbox";
import MyForm from "@components/forms/form/form";
import RHFInput from "@components/forms/input/input";
import RHFSelect from "@components/forms/select/select";
import RHFTextArea from "@components/forms/textarea/textarea";
import SimpleTable from "@components/table/simpletable/simpletable";
import { statusOptions } from "@components/utils/constants";
import { ColorsSchema } from "@components/utils/validations";
import classNames from "classnames";
import { useState } from "react";

import styles from "./colors.module.scss";

const Colors = () => {
  const [colorsFormIsValid, setColorsFormIsValid] = useState(false);
  const [colorCheckbox, setColorCheckbox] = useState(false);

  const handleFormValidityChange = (isValid) => {
    setColorsFormIsValid(isValid);
  };

  const handleFormSubmit = (formValues) => {
    console.log(colorsFormIsValid, formValues);
  };

  const columns = [
    { key: "age", label: "Age" },
    { key: "email", label: "Email" },
    { key: "name", label: "Name" },
  ];

  const initialData = [
    { age: 28, email: "john.doe@example.com", id: "23", name: "John Doe" },
    { age: 34, email: "jane.smith@example.com", id: "232", name: "Jane Smith" },
  ];

  const actions = [
    {
      label: "Delete",
      onClick: (row) => {
        console.log("Delete clicked for", row);
      },
    },
  ];
  // const [data, setData] = useState(initialData);

  return (
    <section>
      <h1>Colors</h1>
      <MyForm
        debounceTime={300}
        defaultValues={{
          "Color Name": "",
          Status: "",
        }}
        onSubmit={handleFormSubmit}
        onValidityChange={handleFormValidityChange}
        schema={ColorsSchema()}
      >
        <RHFInput
          className={classNames(styles.formField, styles.fieldColorName)}
          label="Color Name"
        />
        <RHFSelect
          label={"Status"}
          options={statusOptions}
          showEmptyOptions={false}
        />
        <RHFCheckBox
          checked={colorCheckbox}
          checkedIcon={<Selected />}
          icon={<Unselected />}
          label="Checkbox"
          labelClassName={styles.check}
          labelPlacement="end"
          onCheck={() => setColorCheckbox((prev) => !prev)}
        />
        <RHFTextArea label="textarea" maxLength={150} rows={4} />
        <button type="submit">Save</button>
        <button>Cancel</button>
      </MyForm>
      <SimpleTable
        actions={actions}
        columns={columns}
        initialData={initialData}
        onRowClick={(row) => console.log("Row clicked:", row)}
      />
    </section>
  );
};

export default Colors;
