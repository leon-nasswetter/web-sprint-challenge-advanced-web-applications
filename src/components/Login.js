import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { axiosWithAuth } from "../helpers/axiosWithAuth";

const initialUser = {
  credentials: {
    username: "",
    password: "",
  },
  error: "",
};

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [user, setUser] = useState(initialUser);
  const history = useHistory();

  useEffect(() => {
    axios
      .delete(`http://localhost:5000/api/colors/1`, {
        headers: {
          authorization:
            "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98",
        },
      })
      .then((res) => {
        axios
          .get(`http://localhost:5000/api/colors`, {
            headers: {
              authorization: "",
            },
          })
          .then((res) => {
            console.log(res);
          });
        console.log(res);
      });
  });

  const handleChange = (e) => {
    setUser({
      credentials: {
        ...user.credentials,
        [e.target.name]: e.target.value,
      },
      error: "",
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/login", user.credentials)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", JSON.stringify(res.data.payload));
        history.push("/bubbles-page");
      })
      .catch((err) => setUser({ error: err }));
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleLogin}>
        <label>
          Username
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={null}
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={null}
            onChange={handleChange}
          />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.
