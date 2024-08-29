document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  let currentCharacter = null;

  const outsideZone = document.createElement('div');
  outsideZone.classList.add('zone', 'outside');
  body.appendChild(outsideZone);

  const insideZone = document.createElement('div');
  insideZone.classList.add('zone', 'inside');
  body.appendChild(insideZone);

  const outside = document.querySelector('.outside');
  const inside = document.querySelector('.inside');

  body.addEventListener('mousemove', (e) => {
      if (currentCharacter && currentCharacter.classList.contains('follow')) {
          currentCharacter.style.left = `${e.clientX - currentCharacter.offsetWidth / 2}px`;
          currentCharacter.style.top = `${e.clientY - currentCharacter.offsetHeight / 2}px`;

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

          currentCharacter = createCharacter(e.key, e.clientX, e.clientY);
          body.appendChild(currentCharacter);

          if (isPointerInside({ clientX: e.clientX, clientY: e.clientY }, inside)) {
              currentCharacter.classList.add('trapped');
          }
      }
  });

  function isPointerInside(event, element) {
      const rect = element.getBoundingClientRect();
      return event.clientX >= rect.left && event.clientX <= rect.right &&
             event.clientY >= rect.top && event.clientY <= rect.bottom;
  }

  function createCharacter(letter, x, y) {
      const charDiv = document.createElement('div');
      charDiv.textContent = letter;
      charDiv.classList.add('character', 'follow');
      charDiv.style.position = 'absolute';
      charDiv.style.left = `${x - 10}px`;
      charDiv.style.top = `${y - 10}px`;
      return charDiv;
  }

  function removeAllCharacters() {
      const characters = document.querySelectorAll('.character');
      characters.forEach(char => char.remove());
      currentCharacter = null;
  }

  insideZone.addEventListener('mouseleave', () => {
      if (currentCharacter && currentCharacter.classList.contains('trapped')) {
          currentCharacter.classList.remove('follow');
          currentCharacter = null;
      }
  });
});

function isLetterKey(key) {
  return key.length === 1 && key >= 'a' && key <= 'z';
}
