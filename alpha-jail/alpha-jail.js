document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  let currentCharacter = null;
  let lastCursorX = 0;
  let lastCursorY = 0;
  let animationFrameId = null;

  const outsideZone = document.createElement('div');
  outsideZone.classList.add('zone', 'outside');
  body.appendChild(outsideZone);

  const insideZone = document.createElement('div');
  insideZone.classList.add('zone', 'inside');
  body.appendChild(insideZone);

  body.addEventListener('mousemove', (e) => {
      lastCursorX = e.clientX;
      lastCursorY = e.clientY;

      if (currentCharacter && currentCharacter.classList.contains('follow')) {
          if (animationFrameId === null) {
              animationFrameId = requestAnimationFrame(updateCharacterPosition);
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

          currentCharacter = createCharacter(e.key, lastCursorX, lastCursorY);
          body.appendChild(currentCharacter);

          if (isPointerInside({ clientX: lastCursorX, clientY: lastCursorY }, insideZone)) {
              currentCharacter.classList.add('trapped');
          }

          animationFrameId = requestAnimationFrame(updateCharacterPosition);
      }
  });

  function updateCharacterPosition() {
      if (currentCharacter && currentCharacter.classList.contains('follow')) {
          let x = lastCursorX;
          let y = lastCursorY;

          if (isPointerInside({ clientX: x, clientY: y }, insideZone)) {
              if (!currentCharacter.classList.contains('trapped')) {
                  currentCharacter.classList.add('trapped');
              }
              const insideRect = insideZone.getBoundingClientRect();
              x = Math.max(insideRect.left, Math.min(x, insideRect.right - currentCharacter.offsetWidth));
              y = Math.max(insideRect.top, Math.min(y, insideRect.bottom - currentCharacter.offsetHeight));
          }

          currentCharacter.style.left = `${x - currentCharacter.offsetWidth / 2}px`;
          currentCharacter.style.top = `${y - currentCharacter.offsetHeight / 2}px`;

          // Check if the cursor is outside the jail and the character is trapped
          if (!isPointerInside({ clientX: lastCursorX, clientY: lastCursorY }, insideZone) && currentCharacter.classList.contains('trapped')) {
              snapToJailEdge();
              currentCharacter.classList.remove('follow');
              cancelAnimationFrame(animationFrameId);
              animationFrameId = null;
          } else {
              animationFrameId = requestAnimationFrame(updateCharacterPosition);
          }
      }
  }

  function snapToJailEdge() {
      const insideRect = insideZone.getBoundingClientRect();
      let x = Math.max(insideRect.left, Math.min(lastCursorX, insideRect.right - currentCharacter.offsetWidth));
      let y = Math.max(insideRect.top, Math.min(lastCursorY, insideRect.bottom - currentCharacter.offsetHeight));
      currentCharacter.style.left = `${x - currentCharacter.offsetWidth / 2}px`;
      currentCharacter.style.top = `${y - currentCharacter.offsetHeight / 2}px`;
  }

  insideZone.addEventListener('mouseleave', () => {
      if (currentCharacter && currentCharacter.classList.contains('trapped')) {
          snapToJailEdge();
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
