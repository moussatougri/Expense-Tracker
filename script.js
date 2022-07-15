//Selektoren
const inputName = document.querySelector(".name");
const inputDate = document.querySelector(".date");
const inputAmount = document.querySelector(".amount");
const formularInp = document.querySelectorAll("#formular input");
const formular = document.querySelector(".formular");

const submitbtn = document.querySelector(".submit-btn");

//state Form
const state = {
  item: [],
};

function submitForm(e) {
  e.preventDefault();
  const array = Array.from(formularInp).reduce(
    (acc, input) => ({ ...acc, [input.id]: input.value }),
    {}
  );

  console.log(array);
  state.item.push(array);
  console.log(state.item);
}

formular.addEventListener("submit", submitForm);
