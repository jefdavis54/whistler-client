import Router from "next/router";

const logout = () => {
  window.localStorage.removeItem("id");
  window.localStorage.removeItem("easyId");
  window.localStorage.removeItem("name");
  window.localStorage.removeItem("token");
  Router.push({
    pathname: "/",
  });
};

export default logout;
