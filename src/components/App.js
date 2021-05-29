import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import Input from './Input';
import React from 'react';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(0);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(0);
  }

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        {/* <!-- Попап редактировать профиль --> */}
        <PopupWithForm title="Редактировать&nbsp;профиль" buttonText='Сохранить' name='edit-profile' isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}>
          <Input type="text" placeholder="Имя" name="name" minlength="2" maxlength="40" />
          <Input type="text" placeholder="Работа" name="about" minlength="2" maxlength="200" />
        </PopupWithForm>

        {/* <!-- Попап добавить карточку --> */}
        <PopupWithForm title="Новое место" buttonText='Создать' name='add-card' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <Input type="text" placeholder="Название" name="name" minlength="2" maxlength="30" />
          <Input type="url" placeholder="Ссылка на картинку" name="link" />
        </PopupWithForm>

        {/* <!-- Попап изменить аватар --> */}
        <PopupWithForm title="Обновить аватар" buttonText='Сохранить' name='edit-avatar' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <Input type="url" placeholder="Ссылка на картинку" name="link" />
        </PopupWithForm>
        {/* <!-- Попап удалить карточку --> */}
        <PopupWithForm title="Вы уверены?" name='delete-card' onClose={closeAllPopups} />

        {/* <!-- Попап открыть картинку --> */}
        <ImagePopup onClose={closeAllPopups} card={selectedCard} />
      </div>
    </div>
  );
}

export default App;
