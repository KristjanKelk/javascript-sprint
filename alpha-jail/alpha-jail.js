document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  let currentCharacter = null;
  let lastCursorX = 0;
  let lastCursorY = 0;
  let isMoving = false;

  const outsideZone = document.createElement('div');
  outsideZone.classList.add('zone', 'outside');
  body.appendChild(outsideZone);

  const insideZone = document.createElement('div');
  insideZone.classList.add('zone', 'inside');
  body.appendChild(insideZone);

  body.addEventListener('mousemove', (e) => {
      lastCursorX = e.clientX;
      lastCursorY = e.clientY;

      if (!isMoving) {
          isMoving = true;
          requestAnimationFrame(updateCharacterPosition);
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

          currentCharacter = createCharacter(e.key, lastCursorX, lastCursorY);
          body.appendChild(currentCharacter);

          if (isPointerInside({ clientX: lastCursorX, clientY: lastCursorY }, insideZone)) {
              currentCharacter.classList.add('trapped');
          }
      }
  });

  function updateCharacterPosition() {
      if (currentCharacter && currentCharacter.classList.contains('follow')) {
          let x = lastCursorX;
          let y = lastCursorY;

          if (currentCharacter.classList.contains('trapped')) {
              const insideRect = insideZone.getBoundingClientRect();
              x = Math.max(insideRect.left, Math.min(x, insideRect.right - currentCharacter.offsetWidth));
              y = Math.max(insideRect.top, Math.min(y, insideRect.bottom - currentCharacter.offsetHeight));
          }

          currentCharacter.style.left = `${x}px`;
          currentCharacter.style.top = `${y}px`;

          if (!currentCharacter.classList.contains('trapped') && isPointerInside({ clientX: lastCursorX, clientY: lastCursorY }, insideZone)) {
              currentCharacter.classList.add('trapped');
          }

          isMoving = false;
      }

      if (isMoving) {
          requestAnimationFrame(updateCharacterPosition);
      }
  }

  insideZone.addEventListener('mouseleave', () => {
      if (currentCharacter && currentCharacter.classList.contains('trapped')) {
          currentCharacter.classList.remove('follow');
          currentCharacter = null;
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
      charDiv.style.left = `${x}px`;
      charDiv.style.top = `${y}px`;

      body.appendChild(charDiv);
      charDiv.style.left = `${x - charDiv.offsetWidth / 2}px`;
      charDiv.style.top = `${y - charDiv.offsetHeight / 2}px`;

      return charDiv;
  }

  function removeAllCharacters() {
      const characters = document.querySelectorAll('.character');
      characters.forEach(char => char.remove());
      currentCharacter = null;
  }

  function isLetterKey(key) {
      return key.length === 1 && key >= 'a' && key <= 'z';
  }
});
