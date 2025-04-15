import { useState } from "react";
import { Button, Stack, TextField } from "@mui/material";

interface AuthProps {
  submitLabel: string;
  onSubmit: (credential: { email: string; password: string }) => Promise<void>;
  children: React.ReactNode;
}

const Auth = ({ submitLabel, onSubmit, children }: AuthProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Stack
      spacing={3}
      sx={{
        height: "100vh",
        maxWidth: {
          xs: "100%", // 100% width on extra small screens
          sm: "80%", // 80% width on small screens
          md: "60%", // 60% width on medium screens
          lg: "50%", // 50% width on large screens
          xl: "40%", // 40% width on extra large screens
        },
        // width: "50%",
        margin: "0 auto",
        justifyContent: "center",
      }}
    >
      <TextField
        label="Email"
        type="email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" onClick={() => onSubmit({ email, password })}>
        {submitLabel}
      </Button>
      {children}
    </Stack>
  );
};

export default Auth;
