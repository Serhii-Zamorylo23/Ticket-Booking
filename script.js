// Змінна для тестування успіху або провалу бронювання
const ticketsAvailable = Math.random() > 0.5;

const resultElement = document.querySelector(".result");
const bookButton = document.getElementById("bookButton");

bookButton.addEventListener("click", () => {
  bookButton.style.display = "none";
  resultElement.textContent = "Починаємо бронювання квитка...";

  const bookTicket = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ticketsAvailable) {
        resolve("Успішно! Ваш квиток заброньовано 🎟️");
      } else {
        reject("На жаль, квитки розпродані 😞");
      }
    }, 3000);
  });

  bookTicket
    .then((successMessage) => {
      resultElement.textContent = successMessage;
    })
    .catch((errorMessage) => {
      resultElement.textContent = errorMessage;
    })
    .finally(() => {
      PNotify.info({
        text: "Процес бронювання завершено. Дякуємо за звернення!",
        delay: 3000, 
      });
    });
});
