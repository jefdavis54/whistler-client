import { User } from "../lib/typsescriptInterfaces";
import Router from "next/router";

const login = (user: User, token?: string, page?: string) => {
  window.localStorage.setItem("name", user.name ? user.name : "");
  window.localStorage.setItem("email", user.email ? user.email : "");
  if (token) {
    window.localStorage.setItem("token", token);
  }
  if (page) {
    Router.push({
      pathname: page,
    });
  }
};

export default login;
