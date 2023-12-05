import { configApi } from "./configApi";
class Api {
  constructor(configApi) {
    this._url = configApi.url;
    this._header = configApi.header;
  }

  _checkStateServ(res) {
    if (!res.ok) {
      return Promise.reject(`error: ${res.status}`);
    }
    return res.json();
  }

  getDefaultCard() {
    return fetch(`${this._url}/cards`, {
      method: "GET",
      headers: this._header,
    }).then((res) => this._checkStateServ(res));
  }

  createNewCard(data) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._header,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then((res) => this._checkStateServ(res));
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: this._header,
    }).then((res) => this._checkStateServ(res));
  }

  setAvatar(item) {
    return fetch(`${this._url}/users/me/avatar `, {
      method: "PATCH",
      headers: this._header,
      body: JSON.stringify({
        avatar: item.link,
      }),
    }).then((res) => this._checkStateServ(res));
  }

  setInfoUser(data) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._header,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then((res) => this._checkStateServ(res));
  }

  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._header,
    }).then((res) => this._checkStateServ(res));
  }

  addLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._header,
    }).then((res) => this._checkStateServ(res));
  }

  deleteLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._header,
    }).then((res) => this._checkStateServ(res));
  }

  changeLikeCardStatus(cardId, isLiked) {
    if (!isLiked) {
      return api.deleteLike(cardId);
    } else {
      return api.addLike(cardId);
    }
  }
}

export const api = new Api(configApi);
