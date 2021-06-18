function ImagePopup(props) {
  return (
    <div className={`popup popup_type_image ${props.card ? 'popup_opened' : ''}`}>
      <div className="popup__img-container">
        <img className="popup__img" src={props.card ? props.card.link : ""} alt={props.card ? props.card.name : ""}/>
        <p className="popup__img-caption">{props.card ? props.card.name : ""}</p>
        <button className="popup__close" type="button" aria-label="Закрыть" onClick={props.onClose}></button>
      </div>
    </div>
  );
}
export default ImagePopup;