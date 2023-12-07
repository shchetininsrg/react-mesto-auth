const url = "https://auth.nomoreparties.co";
const headers = {
  "Content-Type": "application/json",
};

const checkStateServ = (res) => {
  if (!res.ok) {
    return Promise.reject(`error: ${res.status}`);
  }
  return res.json();
};

export const login = (email, password) => {
  return fetch(`${url}/signin`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      return checkStateServ(res);
    })
    .then((dataUser) => {
      localStorage.setItem("token", dataUser.token);
      return dataUser;
    });
};

export const register = (email, password) => {
  return fetch(`${url}/signup`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    return checkStateServ(res);
  });
};

export const checkToken = (jwt) => {
  return fetch(`${url}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
  }).then((res) => {
    return checkStateServ(res);
  });
};
