import React, { useState } from "react";

import axios from "axios";
import "./style/Reset.css";
import "./style/Login.css";
import loginImage from "./src/Startup life-pana.png";
import RegisterPage from "../RegisterPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Swal from "sweetalert2";

const LoginPage = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    console.log({ ...user });
    try {
      const res = await axios({
        method: "POST",
        url: "http://68.183.224.29:5000/api/v1/auth/sign-in",
        data: { ...user },
      });

      console.log(res.data);
      localStorage.setItem("token", JSON.stringify(res.data.token));
      Swal.fire({
        width: "400",
        height: "100",
        backdrop: "none",
        showCloseButton: true,
        icon: "success",
        title: "Đăng nhập thành công",
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
      });
      props.history.replace("/");
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };
  return (
    <div className="login">
      <div className="login__left">
        <h1 className="login__title">Sign in</h1>
        <h2 className="login__desc">Welcome to Deadline Farmers</h2>
        <form
          autoComplete="off"
          id="login__form"
          className="login__form"
          onSubmit={loginSubmit}
        >
          <div className="login__information">
            <div className="login__email">
              <label
                htmlFor="email"
                className="login__label login__label--input"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="login__input"
                required
                placeholder="Email"
                value={user.email}
                onChange={onChangeInput}
              />
            </div>
            <div className="login__password">
              <label
                htmlFor="password"
                className="login__label login__label--input"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="login__input"
                required
                placeholder="Password"
                value={user.password}
                onChange={onChangeInput}
              />
            </div>
          </div>
          <button
            type="submit"
            form="login__form"
            value="Submit"
            className="login__button"
          >
            Sign in
          </button>
        </form>
        <div className="login__redirect">
          Not registered yet?
          <Link to="../register"> Register</Link>
        </div>
      </div>
      <div className="login__right">
        <img src={loginImage} alt="" className="login__image" />
      </div>
    </div>
  );
};
export default LoginPage;
