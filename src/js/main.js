"use strict";

const arrayContainer = document.querySelector(".js-section");
//const friend =
// const clickedFriend = event.currentTarget;
//
// if (ev.currentTarget.id === friend) {
//   containerBackground.classList.add('friended');
// } else {
//   containerBackground.classList.remove('friended');
// }
//
//
// const image = document.querySelector(".js-image");
//// VARIABLES PARA LA FUNCIÓN PAINTUSERS
let allUsers = [];
let allUsersImg = [];
let allUsersName = [];
let allUsersLogin = [];
let allUsersCity = [];
let allUsersId = [];
//
////FUNCIÓN QUE PINTA LOS DATOS EN LA SECTION
function paintUsers() {
  let html = "";
  for (const info of allUsers) {
    allUsersId = info.id;
    allUsersLogin = info.login;
    allUsersImg = info.picture.medium;
    allUsersName = info.name;
    allUsersCity = info.location.city;
    html += ` <li class="js-container main__section--container" id="${allUsersId}">`;
    html += `<img
           class="js-image main__section--container--img"
           id=""
           src="${allUsersImg}"
           alt=""
         />`;
    html += ` <h3 class="js-user main__section--container--text--user">${allUsersLogin}</h3>`;
    html += `<h1 class="js-name main__section--container--text--name">${allUsersName}</h1>`;
    html += `<h3 class="js-city main__section--container--text--city">${allUsersCity}</h3>`;
  }
  arrayContainer.innerHTML = html;
}
//--FUNCIÓN DEL THEN QUE BUSCA LOS DATOS DE LA API Y LOS DEVUELVE--
const convertToJS = (response) => {
  return response.json();
};

//

fetch("https://randomuser.me/api/?results=10")
  .then(
    (response) =>
      //SI LA FUNCIÓN SOLO TIENE UN PARÁMETRO SE LE PUEDE QUITAR LOS PARÉNTESIS
      response.json() //SI EL RETURN SOLO TIENE UNA LÍNEA, SE PUEDEN QUITAR LLAVES Y EL RETURN
  )

  .then((data) => {
    allUsers = data;
    paintUsers();
  });
