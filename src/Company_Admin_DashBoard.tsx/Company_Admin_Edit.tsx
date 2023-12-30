import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { Company_Admin_Form } from "./Company_Admin_Form";
import {
  getAdminEditData,
  updateAdmin,
} from "../Company_Admin_Apicalls/apiCalls";
import { tableData } from "../Company_Admin_types/types";
import { authTocken } from "../context/authContext";

const Company_Admin_Edit = ({ dataFromParent }: { dataFromParent: string }) => {
  const { tocken } = useContext(authTocken);
  const [editData, setEditData] = useState<tableData>({
    _id: "",
    username: "",
    firstname: "",
    middlename: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAdminEditData(dataFromParent, tocken);
      setEditData(data);
    };
    fetchData();
  }, [dataFromParent]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(editData);
    const data = await updateAdmin(editData, tocken);
    console.log(data);

    // onForm(formControll);
  };
  return (
    <div>
      <Company_Admin_Form
        label={"Edit"}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
        formData={editData}
      />
    </div>
  );
};

export default Company_Admin_Edit;
