//Selektoren
const inputName = document.querySelector(".name");
const inputDate = document.querySelector(".date");
const inputAmount = document.querySelector(".amount");
const formularInp = document.querySelectorAll("#formular input");
const formular = document.querySelector(".formular");
const table = document.querySelector(".table");

const submitbtn = document.querySelector(".submit-btn");

//state Form
const state = {
  item: [],
};

function submitForm(e) {
  e.preventDefault();
  //get data
  const array = Array.from(formularInp).reduce(
    (acc, input) => ({ ...acc, [input.id]: input.value }),
    {}
  );

  state.item.push(array);

  //render Item
  let tdElementName = document.createElement("td");
  let tdElementDate = document.createElement("td");
  let tdElementAmount = document.createElement("td");
  const trElement = document.createElement("tr");
  tdElementName.innerText = array.name;
  tdElementDate.innerText = array.date;
  tdElementAmount.innerText = array.amount;
  //appendchild
  table.appendChild(trElement);
  trElement.appendChild(tdElementName);
  trElement.appendChild(tdElementDate);
  trElement.appendChild(tdElementAmount);
  console.log(table);
}

formular.addEventListener("submit", submitForm);
