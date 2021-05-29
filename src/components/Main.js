import React from 'react';
import avatar from '../images/avatar.png';
import api from '../utils/api';
import Card from './Card';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {

  const [userName, setUserName] = React.useState('Жак-Ив Кусто');
  const [userDescription, setUserDescription] = React.useState('Исследователь океана');
  const [userAvatar, setUserAvatar] = React.useState(avatar);
  const [cards, setCards] = React.useState([]);

  
  React.useEffect(() => {
    api.getUserInfo()
      .then(userData => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
      }).catch(err => console.error(err));

    api.getInitialCards()
      .then(cardsData => {
        setCards(cardsData)
      }).catch(err => console.error(err));
  }, []);

    return (
        <main className="content">

        <section className="profile">
            <div className="profile__avatar-container" onClick={onEditAvatar}>
                <img className="profile__avatar" src={userAvatar} alt="Фото профиля" />
                <div className="profile__avatar-act"></div>
            </div>
            <div className="profile__info">
                <h1 className="profile__info-author">{userName}</h1>
                <button className="profile__edit-button" type="button" aria-label="Редактировать форму" onClick={onEditProfile}></button>
                <p className="profile__info-subline">{userDescription}</p>
            </div>

            <button className="profile__add-button" type="button" aria-label="Добавить фото" onClick={onAddPlace}></button>
        </section>

        <section className="cards">
            <ul className="cards__list">
                {cards.map((card, i) => {
                    return (
                        <Card card={card} onCardClick={onCardClick} key={card._id} />
                    );
                })
                }
            </ul>
        </section>
    </main>
  );
}

export default Main;