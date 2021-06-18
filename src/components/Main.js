import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Card from './Card';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, cards, onCardLike, onCardDelete }) {
    
    const currentUser = React.useContext(CurrentUserContext);


    return (
        <main className="content">

        <section className="profile">
            <div className="profile__avatar-container" onClick={onEditAvatar}>
                <img className="profile__avatar" src={currentUser.avatar} alt="Фото профиля" />
                <div className="profile__avatar-act"></div>
            </div>
            <div className="profile__info">
                <h1 className="profile__info-author">{currentUser.name}</h1>
                <button className="profile__edit-button" type="button" aria-label="Редактировать форму" 
                onClick={onEditProfile}></button>
                <p className="profile__info-subline">{currentUser.about}</p>
            </div>

            <button className="profile__add-button" type="button" aria-label="Добавить фото" onClick={onAddPlace}></button>
        </section>

        <section className="cards">
        <ul className="cards__list">
          {cards.map((card) => {
            return (
              <Card card={card} onCardClick={onCardClick} key={card._id} onCardLike={onCardLike} onCardDelete={onCardDelete} />
            );
          })
          }
        </ul>
      </section>
    </main>
  );
}

export default Main;