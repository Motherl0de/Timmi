document.addEventListener("DOMContentLoaded", function () {
  const button = document.createElement("button");
  button.textContent = "Путешествие начинается";
  document.body.appendChild(button);

  button.addEventListener("click", function () {
    const message = document.createElement("p");
    message.textContent = "Ты сделал первый шаг в мир грёз и путешествий ✨";
    document.body.appendChild(message);
  });
// Добавим анимацию лепестков сакуры
  const petalsContainer = document.createElement("div"); 
  petalsContainer.classList.add("petals");
  document.body.appendChild(petalsContainer); 
  for (let i = 0; i < 15; i++) {
    const petal = document.createElement("div");
    petal.classList.add("petal");
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = 5 + Math.random() * 5 + "s"; 
    petalsContainer.appendChild(petal); 
  }
  // Добавим декоративный элемент — символику кои
  const koi = document.createElement("div");
  koi.textContent = "🐟";
  koi.classList.add("koi");
  document.body.appendChild(koi);
});
