import { User } from "../lib/typsescriptInterfaces";
import Router from "next/router";

const login = (user: User, token?: string, page?: string) => {
  window.localStorage.setItem("id", user.id ? user.id : "");
  window.localStorage.setItem("easyId", user.easyId ? user.easyId : "");
  window.localStorage.setItem("email", user.email ? user.email : "");
  window.localStorage.setItem("name", user.name ? user.name : "");
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
