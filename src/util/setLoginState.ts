import { User } from "../lib/typsescriptInterfaces";

const setLoginState = (user: User | undefined, token: string | undefined) => {
  localStorage.clear();
  if (user && token) {
    window.localStorage.setItem("id", user.id ? user.id : "");
    window.localStorage.setItem("name", user.name ? user.name : "");
    window.localStorage.setItem("email", user.email ? user.email : "");
    window.localStorage.setItem("easyId", user.easyId ? user.easyId : "");
    window.localStorage.setItem("token", token);
  }
  return [];
};

export default setLoginState;
