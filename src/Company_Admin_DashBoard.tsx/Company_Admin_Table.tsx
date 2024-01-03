import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { getCompanyAdmins } from "../Company_Admin_Apicalls/apiCalls";
import { admindata } from "../Company_Admin_types/types";
import { authTocken } from "../context/authContext";

const Company_Admin_Table = ({
  onDataSelect,
}: {
  onDataSelect: (data: string) => void;
}) => {
  const [adminData, setAdminData] = useState<admindata[]>([]);
  const { tocken } = useContext(authTocken);
  useEffect(() => {
    const fetchdata = async () => {
      const data = await getCompanyAdmins(tocken);
      setAdminData(data);
    };
    fetchdata();
  }, [tocken]);

  const handleRowClick = (data: admindata) => {
    onDataSelect(data._id);
  };

  return (
    <Box
      sx={{
        display: "flex",
        position: "relative",
        top: "5rem",
        zIndex: 1,
        overflow: "scroll",
        height: "70vh",
        width: "60rem",
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>AdminName</TableCell>
            <TableCell>role</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>created at</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {adminData.map((element, index) => (
            <TableRow
              key={index}
              onClick={() => handleRowClick(element)}
              hover
              style={{ cursor: "pointer" }}
            >
              <TableCell>{element.username}</TableCell>
              <TableCell>{element.role}</TableCell>
              <TableCell>{element.email}</TableCell>
              <TableCell>{element.createdAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default Company_Admin_Table;
