document.addEventListener('DOMContentLoaded', () => {
  const correctPin = "1234";
  let enteredPin = "";
  const pinDots = document.querySelectorAll('.pin-dot');
  const errorMessage = document.getElementById('error-message');

  document.querySelector('.keypad').addEventListener('click', (event) => {
      if (!event.target.matches('.key')) return;

      errorMessage.classList.add('hidden');
      const key = event.target.textContent;

      if (key === '⌫') {
          enteredPin = enteredPin.slice(0, -1);
      } else if (enteredPin.length < 4) {
          enteredPin += key;
      }

      updatePinDisplay();

      if (enteredPin.length === 4) {
          checkPin();
      }
  });

  function updatePinDisplay() {
      pinDots.forEach((dot, index) => {
          if (index < enteredPin.length) {
              dot.classList.add('filled');
          } else {
              dot.classList.remove('filled');
          }
      });
  }

  function checkPin() {
      if (enteredPin === correctPin) {
          window.location.href = 'selecao.html';
      } else {
          errorMessage.classList.remove('hidden');
          setTimeout(() => {
              enteredPin = "";
              updatePinDisplay();
          }, 500);
      }
  }
});