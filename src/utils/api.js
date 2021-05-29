    class Api {
        constructor({ address, token }) {
            this._address = address;
            this._token = token;
    }
  
    _checkResponse(res) {
      return res.ok
        ? res.json()
        : Promise.reject(`Ошибка: ${res.status}`);
    }
    
    getUserInfo() { //1. Загрузка информации о пользователе с сервера
        return fetch(`${this._address}/users/me`,
          {
            headers: {
              authorization: this._token
            }
          }).then(this._checkResponse);
      }

    editUserInfo({ name, about }) {
        return fetch(`${this._address}/users/me`,
        {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                about: about
            })
        }
        ).then(this._checkResponse);
    }
    
    getInitialCards() { //2. Загрузка карточек с сервера
        return fetch(`${this._address}/cards`,
          {
            headers: {
              authorization: this._token
            }
          }).then(this._checkResponse);
      }

    addCard({ name, link }) {
        return fetch(`${this._address}/cards`,
        {
            method: 'POST',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                link: link
            })
        }).then(this._checkResponse);
    }

    deleteCard() {
        return fetch(`${this._address}/cards/${this.elem._id}`,
        {
            method: 'DELETE',
            headers: {
                authorization: this._token,
            },
        }).then(this._checkResponse);
    }

    setCurrentElement(elem) {
        this.elem = elem;
    }

    deleteLike() {
        return fetch(`${this._address}/cards/likes/${this.elem._id}`,
        {
            method: 'Delete',
            headers: {
                authorization: this._token
            }
        }).then(this._checkResponse);
    }
    putLike() {
        return fetch(`${this._address}/cards/likes/${this.elem._id}`,
        {
            method: 'PUT',
            headers: {
                authorization: this._token
            }
        }).then(this._checkResponse);
    }

    editAvatarPhoto({ link }) {
        return fetch(`${this._address}/users/me/avatar`,
        {
            method: "PATCH",
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: link
            })
        }).then(this._checkResponse);
    }
}
//eslint-disable-next-line
const api = new Api({
    address: 'https://mesto.nomoreparties.co/v1/cohort-23',
    token: '3ba80848-84c8-48bd-a97a-d35ecfe36586'
  });

export default api;