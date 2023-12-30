import { Link } from "react-router-dom";
import { Button, Grid, Container } from "@mui/material";

const Buttons = () => {
  return (
    <Container
      maxWidth="lg"
      style={{ position: "absolute", top: "20%", left: "auto" }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Link to={`/admin/compadmins/adminadd`}>
            <Button fullWidth variant="contained">
              Add Admin
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link to={`/admin/compadmins/adminedit/`}>
            <Button fullWidth variant="contained">
              Edit Admin
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/admin/compadmins/admindelete">
            <Button fullWidth variant="contained">
              Delete Admin
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Buttons;
