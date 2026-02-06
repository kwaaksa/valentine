const messages = [
  "Ты уверен?",
  "Правда??",
  "Ты точно уверен?",
  "Пожалуйста... подумай ещё",
  "Если ты нажмешь нет, мне будет очень грустно...",
  "Очень...",
  "Очень очень грустно...",
  "Ню, не разбивай моё сердечко...",
  "Ладно, если ты уверен, не буду уговаривать...",
  "Шучу, просто жмякай на дя❤️"
];

let messageIndex = 0;

function handleNoClick() {
  const noButton = document.getElementById("noBtn");
  const yesButton = document.getElementById("yesBtn");

  // 1) Меняем текст
  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  // 2) Увеличиваем кнопку "дя"
  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.2}px`;
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}

// Убираем стандартный click (чтобы не было проблем)
document.getElementById("noBtn").removeAttribute("onclick");
document.getElementById("yesBtn").removeAttribute("onclick");

// Теперь кнопка "нит" будет убегать при наведении
document.getElementById("noBtn").addEventListener("mouseover", () => {
  const noButton = document.getElementById("noBtn");

  // создаём случайные координаты в пределах окна
  const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const y = Math.random() * (window.innerHeight - noButton.offsetHeight);

  noButton.style.position = "absolute";
  noButton.style.left = x + "px";
  noButton.style.top = y + "px";
});

// клики
document.getElementById("noBtn").addEventListener("click", handleNoClick);
document.getElementById("yesBtn").addEventListener("click", handleYesClick);
