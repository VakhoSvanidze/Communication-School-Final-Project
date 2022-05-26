import decode from "jwt-decode";

function setToken(token) {
  localStorage.setItem("accessToken", token);
}

function removeToken() {
  localStorage.removeItem("accessToken");
}

function parse(accessToken) {
  if(!accessToken) {
    return {
      valid: false,
      payload: null,
    };
  }

  const decodedToken = decode(accessToken);
  const currentTime = Date.now() / 1000;

  return {
    valid: decodedToken.exp > currentTime,
    payload: decodedToken.payload
  };
}

export { parse, setToken, removeToken };
