function PopupWithForm({ title, name, isOpen, onClose, buttonText, children }) {
    return (
        <article className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
            <form className="popup__container" name={name} noValidate>
                <h3 className="popup__title">{title}</h3>

                {children}

                <button className="popup__save" type="submit">{buttonText}</button>
                <button className="popup__close" type="button" aria-label="Закрыть форму" onClick={onClose}></button>
            </form>
            </article>
    );
}

export default PopupWithForm;