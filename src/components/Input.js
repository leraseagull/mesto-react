function Input({ type, placeholder, minlength, name, maxlength }) {
    return (
        <label className="popup__field">
            <input className="popup__input" type={type} placeholder={placeholder} name="name" required minLength={minlength} maxLength={maxlength}/>
            <span className="popup__input-error"></span>
        </label>
    );
}

export default Input;