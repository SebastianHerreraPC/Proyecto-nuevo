document.addEventListener("DOMContentLoaded", function () {
  const editButton = document.querySelector(".profile__edit-button");
  const closeButton = document.querySelector(".popup__close-button");
  const profileName = document.querySelector(".profile__name-text");
  const inputName = document.querySelector(".popup__input-name");
  const inputjob = document.querySelector(".popup__input-job");
  const profileJob = document.querySelector(".profile__job");
  const popupEdit = document.querySelector(".popup__edit");

  function popupOpen() {
    popupEdit.style.display = "block";
  }
  function popupClose() {
    popupEdit.style.display = "none";
  }
  editButton.addEventListener("click", function () {
    popupOpen();
    inputName.value = profileName.textContent;
    inputjob.value = profileJob.textContent;
    inputjob.value = "";
    inputName.value = "";
  });
  closeButton.addEventListener("click", function (evt) {
    popupClose();
  });
  popupEdit.addEventListener("submit", function (evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileJob.textContent = inputjob.value;

    popupClose();
  });

  //add images
  const formAdd = document.querySelector(".popup__form-add");
  const popupAdd = document.querySelector(".popup__add");
  let placeName = document.querySelector(".popup__input-lugar");
  const cardContainer = document.querySelector(".cards__container");
  const nodeTemplate = document.querySelector("#card__template");
  const addButton = document.querySelector(".profile__add-button");
  const closeAddButton = document.querySelector(".popup__close-add-button");
  const submitAdd = document.querySelector(".button__submit-add");

  function popupAddOpen() {
    popupAdd.style.display = "block";
  }
  function popupAddClose() {
    popupAdd.style.display = "none";
  }

  addButton.addEventListener("click", function () {
    popupAddOpen();
  });
  closeAddButton.addEventListener("click", function () {
    popupAddClose();
  });

  formAdd.addEventListener("submit", function (evt) {
    evt.preventDefault();
    const value = placeName.value;
    const newCard = nodeTemplate.content.querySelector(".card").cloneNode(true);
    newCard.querySelector(".card__image");
    newCard.querySelector(".card__text").cardContainer.append(newCard);
    formAdd.reset();

    popupAddClose();
  });

  // function addPlace() {
  //   const nodeTemplate = document.querySelector("#card__template").content;
  //   const newCard = document.querySelector('.card').cloneNode(true);
  //   newCard.querySelector('.')

  // }

  console.log(typeof document.querySelector(".popup__input-lugar").value);
});
