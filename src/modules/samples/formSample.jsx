import { ReactComponent as Selected } from "@assets/icons/radio-selected.svg";
import { ReactComponent as Unselected } from "@assets/icons/radio-unselected.svg";
import RHFCheckBox from "@components/forms/checkbox/checkbox";
import MyForm from "@components/forms/form/form";
import RHFInput from "@components/forms/input/input";
import RHFSelect from "@components/forms/select/select";
import RHFTextArea from "@components/forms/textarea/textarea";
import { statusOptions } from "@components/utils/constants";
import { FormSampleSchema } from "@components/utils/validations";
import classNames from "classnames";
import { useState } from "react";

import styles from "./formSample.module.scss";

const FormSample = () => {
	const [colorsFormIsValid, setColorsFormIsValid] = useState(false);
	const [gender, setGender] = useState("");

	const handleFormValidityChange = (isValid) => {
		setColorsFormIsValid(isValid);
	};

	const handleFormSubmit = (formValues) => {
		console.log(colorsFormIsValid, formValues);
	};

	// const [data, setData] = useState(initialData);

	return (
		<section>
			<h1>Form Sample</h1>
			<MyForm
				className={classNames(styles.light, styles.horizontal,styles.formField)}
				debounceTime={300}
				defaultValues={{
					name: "",
					email: "",
					phone: "",
					status: "",
				}}
				onSubmit={handleFormSubmit}
				onValidityChange={handleFormValidityChange}
				schema={FormSampleSchema()}
			>
				<RHFInput
					className={classNames(styles.formField, styles.fieldColorName)}
					label="Name"
				/>
				<RHFInput
					className={classNames(styles.formField, styles.fieldColorName)}
					label="Email"
				/>
				<RHFInput
					className={classNames(styles.formField, styles.fieldColorName)}
					label="Phone"
				/>
				<RHFSelect
					label={"Status"}
					options={statusOptions}
					showEmptyOptions={false}
				/>
				<RHFCheckBox
					checked={gender === "male"}
					checkedIcon={<Selected />}
					icon={<Unselected />}
					label="Male"
					labelClassName={styles.check}
					labelPlacement="end"
					onCheck={() => setGender("male")}
				/>
				<RHFCheckBox
					checked={gender === "female"}
					checkedIcon={<Selected />}
					icon={<Unselected />}
					label="Female"
					labelClassName={styles.check}
					labelPlacement="end"
					onCheck={() => setGender("female")}
				/>
				<RHFTextArea label="textarea" maxLength={150} rows={4} />
				<button type="submit">Save</button>
				<button>Cancel</button>
			</MyForm>
		</section>
	);
};

export default FormSample;
