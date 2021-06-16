import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import React from 'react';
import api from '../utils/api';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function App() {

    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);
    const [currentUser, setCurrentUser] = React.useState({});
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
      Promise.all([api.getInitialCards(), api.getUserInfo()])
        .then(([cardsData, userData]) => {
          setCards(cardsData);
          setCurrentUser(userData);
        }).catch(err => console.error(err));
    }, []);

    function handleCardLike(card) {
      const isLiked = card.likes.some(i => i._id === currentUser._id);
      api.changeLikeCardStatus(card._id, isLiked)
      .then(newCard => {
        setCards(state => state.map(c => c._id === card._id ? newCard : c));
      })
      .catch(err => console.error(err));
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(_ => {
        setCards(state => {
          return state.filter(c => c._id !== card._id);
        })
      }).catch(err => console.error(err));
  }


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
    setSelectedCard(null);
  }

  function handleUpdateUser(name, about) {
    api.setUserInfo(name, about)
      .then(userData => {
        setCurrentUser(userData);
        closeAllPopups();
      }).catch(err => console.error(err));
  }


  function handleUpdateAvatar(avatar) {
    api.setUserAvatar(avatar)
      .then(userData => {
        setCurrentUser(userData);
        closeAllPopups();
      }).catch(err => console.error(err));
  }

  function handleAddPlaceSubmit(name, link) {
    api.addCard(name, link)
      .then(card => {
        closeAllPopups();
        setCards([card, ...cards]);
      }).catch(err => console.error(err));

  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
          <Header />
          <Main onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
          <Footer />

          {/* Попап редактировать профиль */}
          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}
           onUpdateUser={handleUpdateUser} />

          {/* <!-- Попап добавить карточку --> */}
          <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />

          {/* <!-- Попап изменить аватар --> */}
          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
          {/* <!-- Попап удаления карточки --> */}
          <PopupWithForm title="Вы уверены?" 
          name='confirm-delete-card' 
          onClose={closeAllPopups} />

          {/* <!-- Попап полной картинки --> */}
          <ImagePopup onClose={closeAllPopups} card={selectedCard}/>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;