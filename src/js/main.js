"use strict";

const arrayContainer = document.querySelector(".js-section");
let userContainer = document.querySelectorAll(".js-container");
//// VARIABLES PARA LA FUNCIÓN PAINTUSERS
let allUsers = [];
//
////FUNCIÓN QUE PINTA LOS DATOS EN LA SECTION
function paintUsers() {
  let html = "";
  for (const info of allUsers) {
    html += ` <li class="js-container main__section--container" id="${info.login.uuid}">`;
    html += `<img
           class="js-image main__section--container--img"
           id=""
           src="${info.picture.medium}"
           alt=""
         />`;
    html += ` <h3 class="js-user main__section--container--text--user">@${info.login.username}</h3>`;
    html += `<h1 class="js-name main__section--container--text--name">${info.name.first}</h1>`;
    html += `<h3 class="js-city main__section--container--text--city">${info.location.city}</h3>`;
  }
  arrayContainer.innerHTML = html;
}
//--FUNCIÓN DEL THEN QUE BUSCA LOS DATOS DE LA API Y LOS DEVUELVE--
const convertToJS = (response) => {
  return response.json();
};

//
// isFriend: false

fetch("https://randomuser.me/api/?results=10")
  .then(
    (response) =>
      //SI LA FUNCIÓN SOLO TIENE UN PARÁMETRO SE LE PUEDE QUITAR LOS PARÉNTESIS
      response.json() //SI EL RETURN SOLO TIENE UNA LÍNEA, SE PUEDEN QUITAR LLAVES Y EL RETURN
  )

  .then((data) => {
    allUsers = data.results;
    for (const friend of allUsers) {
      friend.isFriend = false;
    }

    paintUsers();
  });

//function handleFriend(ev) {
//  console.log(ev.currentTarget);
//}
//
//function listenFriends() {
//  for (const user of allUsers) {
//    userContainer.addEventListener("click", handleFriend);
//  }
//  console.log(listenFriend);
//}
//listenFriend();
