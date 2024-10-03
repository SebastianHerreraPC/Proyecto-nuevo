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
  let placeImg = document.querySelector(".popup__input-url");
  const addButton = document.querySelector(".profile__add-button");
  const closeAddButton = document.querySelector(".popup__close-add-button");
  const cardContainer = document.querySelector(".cards__container");
  const trashButton = document.querySelector(".card__trash-button");

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

  function addPlace() {
    cardContainer.insertAdjacentHTML(
      "beforeend",
      `
    <div class="card">
      <button class="card__trash-button button"></button>
      <img src="${placeImg.value}" alt="" class="card__image" />
      <div class="card__info">
       <p class="card__text">${placeName.value}</p>
        <button class="card__like-button button"></button>
      </div>
    </div>`
    );
  }

  formAdd.addEventListener("submit", function (evt) {
    evt.preventDefault();
    addPlace();
    placeImg.value = "";
    placeName.value = "";
    popupAddClose();
  });

  console.log(typeof document.querySelector(".popup__input-lugar").value);

  trashButton.addEventListener("click", function () {});
});
