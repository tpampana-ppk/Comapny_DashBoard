import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { authTocken } from "../context/authContext";
import { getCompanies } from "../Company_ApiCalls/apiCalls";
import { CompanyData } from "../Company_Types/types";

const Company_Table = () => {
  const [companies, setCompanies] = useState<CompanyData[]>([]);
  const { tocken } = useContext(authTocken);
  useEffect(() => {
    const fetchdata = async () => {
      const data = await getCompanies(tocken);
      setCompanies(data);
    };
    fetchdata();
  }, [tocken]);

  const handleRowClick = (data: CompanyData) => {
    console.log(data);
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
            <TableCell>Company Name</TableCell>
            <TableCell>Company Url</TableCell>
            <TableCell>AdminLinkExtension</TableCell>
            <TableCell>NumberOfTrainees</TableCell>
            <TableCell>NumberOfDepartments</TableCell>
            <TableCell>IsActive</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {companies.map((element, index) => (
            <TableRow
              key={index}
              onClick={() => handleRowClick(element)}
              hover
              style={{ cursor: "pointer" }}
            >
              <TableCell>{element.companyName}</TableCell>
              <TableCell>{element.companyUrl}</TableCell>
              <TableCell>{element.adminLinkExtension}</TableCell>
              <TableCell>{element.numberOfTrainees}</TableCell>
              <TableCell>{element.numberOfDepartments}</TableCell>
              <TableCell>{element.isActive.toString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default Company_Table;
