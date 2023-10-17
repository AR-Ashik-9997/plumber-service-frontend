import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
export const authKey = "auth";

export const getUserInfo = () => {
  const authToken = Cookies.get(authKey);
  if (authToken) {
    const decodedData = jwtDecode(authToken);
    return decodedData;
  } else {
    return "";
  }
};

export const isLoggedIn = () => {
  const authToken = Cookies.get(authKey);
  return !!authToken;
};

export const removeUserInfo = (key: string) => {
  return Cookies.remove(key);
};

export const authAccess = Cookies.get(authKey);