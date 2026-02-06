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

  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}

// Подключаем обработчики клика
document.getElementById("noBtn").addEventListener("click", handleNoClick);
document.getElementById("yesBtn").addEventListener("click", handleYesClick);
