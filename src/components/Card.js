import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = card.owner._id === currentUser._id;
    const cardDeleteButtonClassName = (
        `card__delete ${isOwn ? '' : 'card__delete_hidden'}`
    );

    const isLike = card.likes.some(item => item._id === currentUser._id);
    const cardLikeButtonClassName = (
        `card__like ${isLike && 'card__like_active'}`
    )

    function handleClick() {
        onCardClick(card);
    }
    function handleLikeClick() {
        onCardLike(card);
      }
    
    function handleDeleteClick() {
        onCardDelete(card);
    }

    return (
        <li className="card">
            <img className="card__photo" src={card.link} alt={card.name} onClick={handleClick} />
            <div className="card__info">
                <h4 className="card__title">{card.name}</h4>
                <div className="card__like-contain">
                    <button className={cardLikeButtonClassName} type="button" aria-label="Лайк" onClick={handleLikeClick}></button>
                    <p className="card__like-count">{card.likes.length}</p>
                </div>
                <button className={cardDeleteButtonClassName} type="button" aria-label="Удалить" onClick={handleDeleteClick}></button>
            </div>
        </li>
    );
}

export default Card;