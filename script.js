document.addEventListener("DOMContentLoaded", function () {
  const button = document.createElement("button");
  button.textContent = "Путешествие начинается";
  document.body.appendChild(button);

  button.addEventListener("click", function () {
    const message = document.createElement("p");
    message.textContent = "Ты сделал первый шаг в мир грёз и путешествий ✨";
    document.body.appendChild(message);
  });

  // Добавим декоративный элемент — символику кои
  const koi = document.createElement("div");
  koi.textContent = "🐟";
  koi.classList.add("koi");
  document.body.appendChild(koi);
});
