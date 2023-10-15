import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
export const getUserInfo = () => {
  const authToken = Cookies.get("auth");
  if (authToken) {
    const decodedData = jwtDecode(authToken);
    return decodedData;
  } else {
    return "";
  }
};

export const isLoggedIn = () => {
  const authToken = Cookies.get("auth");
  return !!authToken;
};

export const removeUserInfo = (key: string) => {
  return Cookies.remove("auth");
};
