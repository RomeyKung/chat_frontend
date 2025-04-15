import { Link } from "react-router-dom";
import { Link as MUILink, Box } from "@mui/material";
import Auth from "./Auth";

const Login = () => {
  return (
    <Auth submitLabel="Login" onSubmit={async () => {}}>
      <Box sx={{ alignSelf: "center" }}>
        Don't have an account?
        <Link to="/signup">
          <MUILink>Sign up</MUILink>
        </Link>
      </Box>
    </Auth>
  );
};

export default Login;
