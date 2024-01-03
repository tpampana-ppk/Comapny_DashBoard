import { Route, Routes } from "react-router-dom";
import DashBoard from "../components/DashBoard";
import Company_Admin from "./Company_Admin";
import Department_Delete from "./Department_Delete";
import Company_Admin_Add from "./Company_Admin_Add";
import Company_Admin_Table from "./Company_Admin_Table";
import Company_Admin_Edit from "./Company_Admin_Edit";
import { useState } from "react";
import Company_Table from "../Companies/Companies_Table";
import Company_Template from "../Companies/Company_Template";
import Company_Form from "../Companies/Company_Form";
import Company_Delete from "../Companies/Company_Delete";

const AppRoutes = () => {
  const [rowId, setRowId] = useState<string>("");
  const handleInput = (id: string) => {
    setRowId(id);
  };
  return (
    <Routes>
      <Route path="/" element={<DashBoard />}></Route>
      <Route path="/admin/" element={<DashBoard />} />
      <Route path="/admin/companies" element={<Company_Template />}>
        <Route index element={<Company_Table />} />
        <Route path="compadd" element={<Company_Form />} />
        <Route path="compedit" element={<Company_Form />} />
        <Route path="compdelete" element={<Company_Delete />} />
      </Route>

      <Route path={`/admin/compadmins/`} element={<Company_Admin />}>
        <Route
          index
          element={<Company_Admin_Table onDataSelect={handleInput} />}
        />
        <Route path="adminadd" element={<Company_Admin_Add />} />
        <Route
          path="adminedit"
          element={<Company_Admin_Edit dataFromParent={rowId} />}
        />
        <Route path="admindelete" element={<Department_Delete />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
