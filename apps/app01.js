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
  const formAdd = document.querySelector(".popup__form-edit");
  const inputPlace = document.querySelector(".popup__input-lugar");
  const popupAdd = document.querySelector(".popup__add");
  const addButton = document.querySelector(".profile__add-button");
  const closeAddButton = document.querySelector(".popup__close-add-button");
  const cardContainer = document.querySelector(".cards__container");

  formAdd.addEventListener("submit", function (evt) {
    evt.preventDefault();
  });

  function popupAddOpen() {
    popupAdd.style.display = "block";
  }
  function popupAddClose() {
    popupAdd.style.display = "none";
  }

  addButton.addEventListener("click", function () {
    popupAddOpen();
    addPlace();
  });
  closeAddButton.addEventListener("click", function () {
    popupAddClose();
  });

  function addPlace() {
    cardContainer.innerHTML += `
    <div class="card">
      <button class="card__trash-button button"></button>
      <img src="./images/yoshemite.jpg" alt="" class="card__image" />
      <div class="card__info">
       <p class="card__text">Valle de Yosemite</p>
        <button class="card__like-button button"></button>
      </div>
    </div>`;
  }
  addPlace();
});
