document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  let currentCharacter = null;
  let lastCursorX = 0;
  let lastCursorY = 0;

  const outsideZone = createZone('outside');
  const insideZone = createZone('inside');
  body.append(outsideZone, insideZone);

  body.addEventListener('mousemove', (e) => {
      lastCursorX = e.clientX;
      lastCursorY = e.clientY;
      updateCharacterPosition();
  });

  document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
          removeAllCharacters();
      } else if (isLetterKey(e.key)) {
          createNewCharacter(e.key);
      }
  });

  function createZone(className) {
      const zone = document.createElement('div');
      zone.classList.add('zone', className);
      return zone;
  }

  function createNewCharacter(letter) {
      if (currentCharacter) {
          currentCharacter.classList.remove('follow');
          currentCharacter = null;
      }

      currentCharacter = document.createElement('div');
      currentCharacter.textContent = letter;
      currentCharacter.classList.add('character', 'follow');
      body.appendChild(currentCharacter);

      updateCharacterPosition();
  }

  function updateCharacterPosition() {
      if (!currentCharacter) return;

      let x = lastCursorX;
      let y = lastCursorY;

      if (isPointerInside(insideZone)) {
          const rect = insideZone.getBoundingClientRect();
          x = Math.max(rect.left + currentCharacter.offsetWidth / 2, Math.min(x, rect.right - currentCharacter.offsetWidth / 2));
          y = Math.max(rect.top + currentCharacter.offsetHeight / 2, Math.min(y, rect.bottom - currentCharacter.offsetHeight / 2));

          currentCharacter.classList.add('trapped');
      } else if (currentCharacter.classList.contains('trapped')) {
          snapToJailEdge();
          currentCharacter.classList.remove('follow');
          currentCharacter = null;
          return;
      }

      currentCharacter.style.left = `${x - currentCharacter.offsetWidth / 2}px`;
      currentCharacter.style.top = `${y - currentCharacter.offsetHeight / 2}px`;
  }

  function snapToJailEdge() {
      const rect = insideZone.getBoundingClientRect();
      let x = lastCursorX;
      let y = lastCursorY;

      x = Math.max(rect.left + currentCharacter.offsetWidth / 2, Math.min(x, rect.right - currentCharacter.offsetWidth / 2));
      y = Math.max(rect.top + currentCharacter.offsetHeight / 2, Math.min(y, rect.bottom - currentCharacter.offsetHeight / 2));

      currentCharacter.style.left = `${x - currentCharacter.offsetWidth / 2}px`;
      currentCharacter.style.top = `${y - currentCharacter.offsetHeight / 2}px`;
  }

  function isPointerInside(element) {
      const rect = element.getBoundingClientRect();
      return lastCursorX >= rect.left && lastCursorX <= rect.right &&
             lastCursorY >= rect.top && lastCursorY <= rect.bottom;
  }

  function removeAllCharacters() {
      document.querySelectorAll('.character').forEach(char => char.remove());
      currentCharacter = null;
  }

  function isLetterKey(key) {
      return /^[a-z]$/.test(key);
  }
});
