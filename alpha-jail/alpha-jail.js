document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  let currentCharacter = null;
  const outside = document.querySelector('.outside');
  const inside = document.querySelector('.inside');

  body.addEventListener('mousemove', (e) => {
      if (currentCharacter && currentCharacter.classList.contains('follow')) {
          currentCharacter.style.left = `${e.clientX - 10}px`;
          currentCharacter.style.top = `${e.clientY - 10}px`;

          if (isPointerInside(e, inside)) {
              currentCharacter.classList.add('trapped');
          } else {
              currentCharacter.classList.remove('trapped');
          }
      }
  });

  document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
          removeAllCharacters();
          return;
      }

      if (isLetterKey(e.key)) {
          if (currentCharacter) {
              currentCharacter.classList.remove('follow');
              currentCharacter = null;
          }

          currentCharacter = createCharacter(e.key);
          body.appendChild(currentCharacter);
      }
  });

  function isPointerInside(event, element) {
      const rect = element.getBoundingClientRect();
      return event.clientX >= rect.left && event.clientX <= rect.right &&
             event.clientY >= rect.top && event.clientY <= rect.bottom;
  }

  function createCharacter(letter) {
      const charDiv = document.createElement('div');
      charDiv.textContent = letter;
      charDiv.classList.add('character', 'follow');
      return charDiv;
  }

  function removeAllCharacters() {
      const characters = document.querySelectorAll('.character');
      characters.forEach(char => char.remove());
      currentCharacter = null;
  }
  
  inside.addEventListener('mouseleave', () => {
      if (currentCharacter && currentCharacter.classList.contains('trapped')) {
          currentCharacter.classList.remove('follow');
          currentCharacter = null;
      }
  });
});

function isLetterKey(key) {
  return key.length === 1 && key.match(/[a-z]/i);
}
