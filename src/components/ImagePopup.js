function ImagePopup({ card, onClose }) {
    return (
        <div className={`popup popup_type_image ${card ? 'popup_opened' : ''}`}>
          <div className="popup__img-container">
            <img className="popup__img" alt={card ? card.name : ''} src={card ? card.link : ''} />
            <div className="popup__img-caption">{card ? card.name : ''}</div>
            <button className="popup__close" type="button" aria-label="Закрыть окно" onClick={onClose}></button>
          </div>
        </div>
      );
    }
    export default ImagePopup;