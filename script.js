document.addEventListener("DOMContentLoaded", function () {
  const button = document.createElement("button");
  button.textContent = "Нажми меня!";
  document.body.appendChild(button);

  button.addEventListener("click", function () {
    alert("Привет, Анастасия! Сайт работает 🎉");
  });
});
