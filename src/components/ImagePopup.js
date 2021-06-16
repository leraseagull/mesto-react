function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup_type_image ${card ? 'popup_opened' : ''}`}>
      <div className="popup__img-container">
        <img className="popup__img" src="#" alt=""/>
        <p className="popup__img-caption"></p>
        <button className="popup__close" type="button" aria-label="Закрыть" onClick={onClose}></button>
      </div>
    </div>
  );
}
export default ImagePopup;