(async function checkForUpdates() {
  const currentVersion = "1.0";
  const versionUrl =
    "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json";

  try {
    const response = await fetch(versionUrl);
    if (!response.ok) {
      console.warn("Could not fetch version information.");
      return;
    }
    const data = await response.json();
    const latestVersion = data.version;
    const updateMessage = data.updateMessage;

    if (currentVersion !== latestVersion) {
      alert(updateMessage);
    } else {
      console.log("You are using the latest version.");
    }
  } catch (error) {
    console.error("Error checking for updates:", error);
  }
})();

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
  const нитButton = document.querySelector(".нит-button");
  const дяButton = document.querySelector(".дя-button");

  // меняем текст
  нитButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  // увеличиваем кнопку "дя"
  const currentSize = parseFloat(window.getComputedStyle(дяButton).fontSize);
  дяButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}
