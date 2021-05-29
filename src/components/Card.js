function Card({ card, onCardClick }) {
    function handleClick() {
        onCardClick(card);
    }

    return (
        <li className="card">
            <img className="card__photo" src={card.link} alt={card.name} onClick={handleClick} />
            <div className="card__info">
                <h4 className="card__title">{card.name}</h4>
                <div className="card__like-contain">
                    <button className="card__like" type="button" aria-label="Лайк"></button>
                    <p className="card__like-count">{card.likes.length}</p>
                </div>
                <button className="card__delete" type="button" aria-label="Удалить"></button>
            </div>
        </li>
    )
}

export default Card;