import Router from "next/router";

const logout = () => {
  window.localStorage.removeItem("name");
  window.localStorage.removeItem("email");
  window.localStorage.removeItem("token");
  Router.push({
    pathname: "/",
  });
};

export default logout;
