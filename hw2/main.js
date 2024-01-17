// переменная для фотографий
const imagesElem = document.querySelectorAll(".slider_img");
// переменная контейнера для фотография
const sliderLineElem = document.querySelector(".slider_line");
// переменная для точек
const dotsElem = document.querySelectorAll(".dot");
// переменные для кнопок назад - вперед
const btnPrevElem = document.querySelector(".btn_prev");
const btnNextElem = document.querySelector(".btn_next");

// счетчик
let sliderIndex = 0;
// ширина слайдера (нужно для перелистывания)
let sliderWidth = document.querySelector(".slider").offsetWidth;
console.log(sliderWidth);

// события на кнопках
btnPrevElem.addEventListener("click", prevSlid); // назад
btnNextElem.addEventListener("click", nextSlid); // вперед

// нажатие на точку
dotsElem.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    sliderIndex = index;
    rollSlider();
    activeDot(sliderIndex);
  });
});

// ************** Ф У Н К Ц И И ******************

// переличтывание слайдера вперед
function nextSlid() {
  sliderIndex++;
  if (sliderIndex >= imagesElem.length) sliderIndex = 0;
  rollSlider();
  activeDot(sliderIndex);
}
// переличтывание слайдера назад
function prevSlid() {
  sliderIndex--;
  if (sliderIndex < 0) sliderIndex = imagesElem.length - 1;
  rollSlider();
  activeDot(sliderIndex);
}

// шаг перелистывания
function rollSlider() {
  sliderLineElem.style.transform = `translateX(${
    -sliderIndex * sliderWidth
  }px)`;
}

// переключение активного класса у точек
function activeDot(index) {
  dotsElem.forEach((item) => item.classList.remove("active_dot"));
  dotsElem[index].classList.add("active_dot");
}
