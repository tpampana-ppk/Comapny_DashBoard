import React, { ChangeEvent, FormEvent } from "react";
import { TextField, Button, Grid, Typography, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { MyFormData } from "../Company_Admin_types/types";
import { useNavigate } from "react-router-dom";

interface MyFormProps {
  label: string;
  formData: MyFormData;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent) => void;
}

export const Company_Admin_Form: React.FC<MyFormProps> = ({
  label,
  formData,
  onInputChange,
  onSubmit,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(e);
  };
const navigate=useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(e);
  };

  const isFormEmpty = Object.values(formData).some((value) => value === "");

  const isPasswordMatch = formData.password === formData.confirmPassword;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90vh",
      }}
    >
      <div
        style={{
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          width: "90%",
          padding: "20px",
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          {label} Form
        </Typography>
        <Box style={{ position: "absolute", left: "65%", top: "38%" }}>
            <CloseIcon onClick={()=>{navigate(`/admin/compadmins/`); }}/>
        </Box>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <TextField
                label="First Name"
                variant="outlined"
                fullWidth
                margin="normal"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Middle Name"
                variant="outlined"
                fullWidth
                margin="normal"
                name="middlename"
                value={formData.middlename}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Last Name"
                variant="outlined"
                fullWidth
                margin="normal"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Password"
                variant="outlined"
                fullWidth
                margin="normal"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Confirm Password"
                variant="outlined"
                fullWidth
                margin="normal"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                error={!isPasswordMatch}
                helperText={!isPasswordMatch && "Passwords do not match"}
              />
            </Grid>
          </Grid>

          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            style={{ marginTop: "20px" }}
            disabled={isFormEmpty || !isPasswordMatch}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};
