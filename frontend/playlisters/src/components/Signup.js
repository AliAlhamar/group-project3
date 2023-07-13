import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

function Signin() {
  const SignInCard = styled(Card)(({ theme }) => ({
    backgroundColor: "#02040f",
    color: "black",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
    width: "390px",
    height: "460px",
  }));

  const SignInForm = styled(CardContent)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    color: "black",
  });

  const SignInButton = styled(Button)(({ theme }) => ({
    marginTop: theme.spacing(2),
    backgroundColor: "#FF0000",
    color: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#FF9999",
    },
  }));

  const SignInFooter = styled(Grid)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "16px",
  });

  const WhiteOutlinedTextField = styled(TextField)({
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#FFFFFF",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#FFFFFF",
    },
    "& .MuiOutlinedInput-input": {
      color: "#FFFFFF",
    },
    "& .MuiInputLabel-outlined": {
      color: "#FFFFFF",
    },
  });

  return (
    <Grid item xs={12} md={6}>
      <SignInCard sx={{ marginLeft: "38%", marginTop: "7%" }}>
        <CardHeader title="Sign Up" sx={{ color: "#EDF2F4" }} />
        <SignInForm>
          <WhiteOutlinedTextField
            label="Name"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoFocus
            name="name"
          />
          <WhiteOutlinedTextField
            label="Email"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="email"
            type="email"
          />
          <WhiteOutlinedTextField
            label="Password"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            type="password"
          />
          <SignInButton variant="contained" fullWidth>
            Register
          </SignInButton>
        </SignInForm>
        <SignInFooter container spacing={2}>
          <Grid item xs>
            <Button color="primary" fullWidth>
              Forgot password?
            </Button>
          </Grid>
          <Grid item xs>
            <Button color="primary" fullWidth>
              <Link to="/signin" className="anchor-reg">
                Signin
              </Link>
            </Button>
          </Grid>
        </SignInFooter>
      </SignInCard>
    </Grid>
  );
}

export default Signin;
