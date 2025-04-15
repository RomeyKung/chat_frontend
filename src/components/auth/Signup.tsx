import { Link } from "react-router-dom";
import { Box, Link as MUILink } from "@mui/material";
import Auth from "./Auth";

const Signup = () => {
  return (
    <Auth submitLabel="Signup" onSubmit={async () => {}}>
      <Box sx={{ alignSelf: "center" }}>
        Already have an account?
        <Link to="/login">
          <MUILink>Login</MUILink>
        </Link>
      </Box>
    </Auth>
  );
};

export default Signup;
