import RModal from "@components/forms/modal/modal";
import SimpleTable from "@components/table/simpletable/simpletable";
import React from "react";
import { useState } from "react";
import styles from "./tableSample.module.scss";

export default function TableSample() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const columns = [
		{ key: "age", label: "Age" },
		{ key: "email", label: "Email" },
		{ key: "name", label: "Name" },
	];

	const initialData = [
		{ age: 28, email: "john.doe@example.com", id: "23", name: "John Doe" },
		{ age: 34, email: "jane.smith@example.com", id: "22", name: "Jane Smith" },
	];

	const actions = [
		{
			label: "Delete",
			onClick: (row) => {
				console.log("Delete clicked for", row);
			},
		},
	];

	const handleAddRow = () => {
		console.log("add");
	};

	const [formData, setFormData] = useState({});

	const handleInputChange = (e, key) => {
		setFormData({ ...formData, [key]: e.target.value });
	};

	const handleSubmit = () => {
		handleAddRow(formData);
		setFormData({});
		setIsModalOpen(false);
	};

	return (
		<>
			{isModalOpen && (
				<RModal>
					<h3>Add New Row</h3>
					{columns.map((field) => (
						<div key={field.key} className={styles.inputGroup}>
							<label>{field.label}</label>
							<input
								type={field.type || "text"}
								onChange={(e) => handleInputChange(e, field.key)}
								placeholder={`Enter ${field.label}`}
								value={formData[field.key] || ""}
							/>
						</div>
					))}
					<div className={styles.modalActions}>
						<button onClick={handleSubmit} className={styles.addButton}>
							Submit
						</button>
						<button onClick={()=>setIsModalOpen(false)} className={styles.cancelButton}>
							Cancel
						</button>
					</div>
				</RModal>
			)}
			<button onClick={() => setIsModalOpen(true)}>Add</button>
			<SimpleTable
				actions={actions}
				columns={columns}
				initialData={initialData}
				onRowClick={(row) => console.log("Row clicked:", row)}
			/>
		</>
	);
}
