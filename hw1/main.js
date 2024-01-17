scheduleData = [
  {
    object: "Шахматы",
    date: "18 января 2024 год",
    maxPerson: 18,
    currentPerson: 2,
  },
  {
    object: "Дзюдо",
    date: "19 января 2024 год",
    maxPerson: 16,
    currentPerson: 7,
  },
  {
    object: "Фитнес",
    date: "20 января 2024 год",
    maxPerson: 20,
    currentPerson: 19,
  },
];

const scheduleElem = document.querySelector(".schedule");

// печать рассписания
function printSchedule() {
  for (const item of scheduleData) {
    // div для каждого элемента рассписаняи
    const divElem = document.createElement("div");
    divElem.classList.add("item");
    scheduleElem.appendChild(divElem);

    // заголовок рассписания
    const h2Elem = document.createElement("h2");
    h2Elem.classList.add("object_title");
    h2Elem.textContent = item.object;
    divElem.appendChild(h2Elem);

    // блок информации
    const divInfoElem = document.createElement("div");
    divInfoElem.classList.add("info");
    divElem.appendChild(divInfoElem);

    //дата проведения
    const dataElem = document.createElement("div");
    dataElem.textContent = `Дата проведения: ${item.date}`;
    divInfoElem.appendChild(dataElem);

    // количество человек
    const maxPersonElem = document.createElement("div");
    maxPersonElem.textContent = `Кол-во человек: ${item.maxPerson}`;
    divInfoElem.appendChild(maxPersonElem);

    // колчиство записаных человек
    const currentPersonElem = document.createElement("div");
    currentPersonElem.classList.add("currentPerson");
    currentPersonElem.textContent = `Кол-во записанных человек: ${item.currentPerson}`;
    divInfoElem.appendChild(currentPersonElem);

    // кнопки записаться, отменить запись
    // блок для кнопок
    const divButtonsElem = document.createElement("div");
    divButtonsElem.classList.add("btn");
    divElem.appendChild(divButtonsElem);
    //кнопка записаться
    const subscribeBtnElem = document.createElement("button");
    subscribeBtnElem.classList.add("btn_item");
    subscribeBtnElem.classList.add("btn_in");
    subscribeBtnElem.textContent = "записаться";
    divButtonsElem.appendChild(subscribeBtnElem);
    //кнопка отменить запись
    const subscribeOutBtnElem = document.createElement("button");
    subscribeOutBtnElem.classList.add("btn_item");
    subscribeOutBtnElem.classList.add("btn_out");
    subscribeOutBtnElem.textContent = "отменить запись";
    divButtonsElem.appendChild(subscribeOutBtnElem);
  }
}

printSchedule();

// метод для перезаписывания блока информации
function changeInfo() {

}

let arrayButtonsInElem = document.querySelectorAll(".btn_in");
let arrayButtonsOutElem = document.querySelectorAll(".btn_out");

// записаться на урок
for (let index = 0; index < arrayButtonsInElem.length; index++) {
  arrayButtonsInElem[index].addEventListener("click", () => {
    if (scheduleData[index].currentPerson >= scheduleData[index].maxPerson) {
      alert("записаться нельзя");
    } else {
      scheduleData[index].currentPerson = scheduleData[index].currentPerson + 1;

    //   scheduleElem.innerHTML = "";
    //   printSchedule();
    //   console.log(scheduleData); 

    // меняю количество записанных человек по итедсу нажатой кнопки
      const currentPersonElem = document.querySelectorAll('.currentPerson')
    //   console.log(currentPersonElem);
      currentPersonElem[index].textContent=`Кол-во записанных человек: ${scheduleData[index].currentPerson}`;
    }
  });
}

// отменить запись на урок
for (let index = 0; index < arrayButtonsOutElem.length; index++) {
  arrayButtonsOutElem[index].addEventListener("click", () => {
    scheduleData[index].currentPerson = scheduleData[index].currentPerson - 1;

    // scheduleElem.innerHTML = "";
    // printSchedule();
    // console.log(scheduleData);

    const currentPersonElem = document.querySelectorAll('.currentPerson')
    // console.log(currentPersonElem);
    currentPersonElem[index].textContent=`Кол-во записанных человек: ${scheduleData[index].currentPerson}`;
  });
}
