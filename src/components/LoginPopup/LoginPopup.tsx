import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import {
    Box,
    Button,
    TextField,
    Typography,
    Checkbox,
    FormControlLabel,
    IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface LoginPopupProps {
    setShowLogin: (show: boolean) => void;
}

const LoginPopup: React.FC<LoginPopupProps> = ({ setShowLogin }) => {
    const { url, setToken } = useContext(StoreContext);
    const [currState, setCurrState] = useState("Login");
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const onLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        let newUrl = url;

        if (currState === "Login") {
            newUrl += "/api/user/login";
        } else {
            newUrl += "/api/user/register";
        }

        try {
            const response = await axios.post(newUrl, data);

            if (response.data.success) {
                setToken(response.data.token);
                localStorage.setItem("token", response.data.token);
                setShowLogin(false);
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            alert("Something went wrong. Please try again.");
        }
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
            }}
        >
            <Box
                sx={{
                    backgroundColor: "white",
                    padding: 3,
                    borderRadius: 2,
                    width: 400,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                }}
            >
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="h5">{currState}</Typography>
                    <IconButton onClick={() => setShowLogin(false)}>
                        <CloseIcon />
                    </IconButton>
                </Box>

                <form onSubmit={onLogin} noValidate>
                    {currState === "Sign Up" && (
                        <TextField
                            name="name"
                            label="Your name"
                            onChange={onChangeHandler}
                            value={data.name}
                            fullWidth
                            required
                            sx={{ marginBottom: 2 }}
                        />
                    )}

                    <TextField
                        name="email"
                        label="Your email"
                        onChange={onChangeHandler}
                        value={data.email}
                        type="email"
                        fullWidth
                        required
                        sx={{ marginBottom: 2 }}
                    />

                    <TextField
                        name="password"
                        label="Password"
                        onChange={onChangeHandler}
                        value={data.password}
                        type="password"
                        fullWidth
                        required
                        sx={{ marginBottom: 2 }}
                    />

                    <Button type="submit" variant="contained" fullWidth>
                        {currState === "Sign Up" ? "Create account" : "Login"}
                    </Button>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <FormControlLabel
                            control={<Checkbox required />}
                            label="By continuing, I agree to the terms of use & privacy policy."
                        />
                    </Box>

                    {currState === "Login" ? (
                        <Typography>
                            Create a new account?{" "}
                            <span
                                onClick={() => setCurrState("Sign Up")}
                                style={{ color: "#FF5722", cursor: "pointer" }}
                            >
                Click here
              </span>
                        </Typography>
                    ) : (
                        <Typography>
                            Already have an account?{" "}
                            <span
                                onClick={() => setCurrState("Login")}
                                style={{ color: "#FF5722", cursor: "pointer" }}
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

export default LoginPopup;
