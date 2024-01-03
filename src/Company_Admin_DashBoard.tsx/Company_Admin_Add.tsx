import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { Company_Admin_Form } from "./Company_Admin_Form";
import { addAdmin } from "../Company_Admin_Apicalls/apiCalls";
import { MyFormData } from "../Company_Admin_types/types";
import { authTocken } from "../context/authContext";

const initialData = {
  firstname: "",
  middlename: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const Company_Admin_Add = () => {
  const [formData, setFormData] = useState<MyFormData>(initialData);
  const { tocken } = useContext(authTocken);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const data = await addAdmin(formData, tocken);
    console.log(data);
  };

  return (
    <div>
      <Company_Admin_Form
        label={"Add"}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
        formData={formData}
      />
    </div>
  );
};

export default Company_Admin_Add;
