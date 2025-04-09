import React, { useState } from "react";
import { Box, Button, TextField, Typography, IconButton, Alert } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./LoginPopup.css";

interface LoginPopupProps {
  setShowLogin: (show: boolean) => void;
}

const LoginPopup: React.FC<LoginPopupProps> = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Basic Validation
    if (currState === "Sign Up" && !data.name.trim()) {
      setMessage("Please enter your name.");
      return;
    }
    if (!data.email.trim() || !data.password.trim()) {
      setMessage("Email and password are required.");
      return;
    }

    // Simulated Success Message
    setMessage(
      currState === "Login"
        ? "Login successful!"
        : "Account created successfully!"
    );

    // Clear fields (optional)
    setData({ name: "", email: "", password: "" });
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2000,
        fontFamily: "Montserrat", // Ensures the font is applied throughout the popup
      }}
    >
      <Box
        sx={{
          backgroundColor: "#f6e1d2",
          padding: 3,
          borderRadius: 2,
          width: 400,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          border: 3,
          borderColor: "gray",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h5"
            sx={{ fontFamily: "Montserrat, sans-serif" }}
          >
            {currState}
          </Typography>
          <IconButton onClick={() => setShowLogin(false)}>
            <CloseIcon />
          </IconButton>
        </Box>

        {message && (
          <Alert severity="success" sx={{ fontFamily: "Montserrat" }}>
            {message}
          </Alert>
        )}

        <form onSubmit={handleSubmit} noValidate>
          {currState === "Sign Up" && (
            <TextField
              name="name"
              placeholder="Your Name"
              className="field"
              onChange={onChangeHandler}
              value={data.name}
              fullWidth
              sx={textFieldStyles}
            />
          )}

          <TextField
            name="email"
            placeholder="Your Email"
            className="field"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            fullWidth
            sx={textFieldStyles}
          />

          <TextField
            name="password"
            placeholder="Password"
            onChange={onChangeHandler}
            value={data.password}
            className="field"
            type="password"
            fullWidth
            sx={textFieldStyles}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              fontFamily: "Montserrat, sans-serif",
              backgroundColor: "#7e3f12",
              marginTop: 1,
              "&:hover": { backgroundColor: "#5d2d0a" },
            }}
          >
            {currState === "Sign Up" ? "Create account" : "Login"}
          </Button>

          {currState === "Login" ? (
            <Typography
              sx={{ fontFamily: "Montserrat, sans-serif", marginTop: "10px" }}
            >
              Create a new account?{" "}
              <span
                onClick={() => {
                  setCurrState("Sign Up");
                  setMessage("");
                }}
                style={{
                  color: "#FF5722",
                  fontWeight: "800",
                  cursor: "pointer",
                }}
              >
                Click here
              </span>
            </Typography>
          ) : (
            <Typography
              sx={{ fontFamily: "Montserrat, sans-serif", marginTop: "10px" }}
            >
              Already have an account?{" "}
              <span
                onClick={() => {
                  setCurrState("Login");
                  setMessage("");
                }}
                style={{
                  color: "#FF5722",
                  cursor: "pointer",
                  fontWeight: "800",
                }}
              >
                Login here
              </span>
            </Typography>
          )}
        </form>
      </Box>
    </Box>
  );
};

const textFieldStyles = {
  marginBottom: 2,
  fontSize: "13px",
  fontFamily: "Montserrat, sans-serif",
  "& .MuiOutlinedInput-root": {
    fontFamily: "Montserrat, sans-serif",
    "& fieldset": {
      borderColor: "#ccc",
    },
    "&:hover fieldset": {
      borderColor: "#FF5722",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#FF5722",
      borderWidth: "3px",
    },
  },
  "& .MuiInputBase-input::placeholder": {
    fontFamily: "Montserrat, sans-serif",
  },
};

export default LoginPopup;
