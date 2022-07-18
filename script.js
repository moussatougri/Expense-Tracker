//Selektoren
const formularInp = document.querySelectorAll("#formular input");
const formular = document.querySelector(".formular");
const table = document.querySelector(".table");

const submitbtn = document.querySelector(".submit-btn");

//state Form
const state = {
  items: [],
};

function submitForm(e) {
  e.preventDefault();
  //get data
  const array = Array.from(formularInp).reduce(
    (acc, input) => ({ ...acc, [input.id]: input.value }),
    {}
  );

  state.items.push(array);

  saveLocalTodos(array);

  //render Item
  createItem(array);
}

function createItem(array) {
  //create Item
  let tdElementName = document.createElement("td");
  let tdElementDate = document.createElement("td");
  let tdElementAmount = document.createElement("td");
  const trElement = document.createElement("tr");
  tdElementName.innerText = array.name;
  tdElementDate.innerText = array.date;
  tdElementAmount.innerText = array.amount;

  //delete Item
  const trForDeleteSection = document.createElement("tr");
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("trash-btn");
  deleteBtn.addEventListener("click", deleteItemfromArray);

  //appendchild
  table.appendChild(trElement);
  table.appendChild(trForDeleteSection);
  trElement.appendChild(tdElementName);
  trElement.appendChild(tdElementDate);
  trElement.appendChild(tdElementAmount);
  trElement.appendChild(deleteBtn);
}

function checkLocalItem() {
  if (localStorage.getItem("item") === null) {
    state.items;
  } else {
    state.items = JSON.parse(localStorage.getItem("item"));
  }
}

//save todo in localstorage
function saveLocalTodos(item) {
  checkLocalItem();
  state.items.push(item);
  localStorage.setItem("item", JSON.stringify(state.items));
}

function getItems() {
  checkLocalItem();
  state.items.forEach(function (item) {
    createItem(item);
  });
}

//delete Item
function deleteItemfromArray(e) {
  const item = e.target;
  if (item.classList[0] === "trash-btn") {
    //delete item from the window
    const deleteItem = items.parentElement;
    deleteItem.remove();
    //delete item from an array
    const index = state.items.findIndex(
      (x) => x.description === deleteItem.innerText
    );
    state.items.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(state.items));
  }
}

function eventListener() {
  formular.addEventListener("submit", submitForm);
  document.addEventListener("DOMContentLoaded", getItems);
  formular.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
      submitForm(e);
    }
  });
}

eventListener();
