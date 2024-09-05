document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  let currentCharacter = null;
  let lastCursorX = 0;
  let lastCursorY = 0;
  let animationFrameId = null;

  // Create two zones: outside (left) and inside (right)
  const outsideZone = createZone('outside');
  const insideZone = createZone('inside');
  body.append(outsideZone, insideZone);

  // Event listener for mouse movement
  body.addEventListener('mousemove', (e) => {
    lastCursorX = e.clientX;
    lastCursorY = e.clientY;

    if (currentCharacter && !animationFrameId) {
      animationFrameId = requestAnimationFrame(() => {
        updateCharacterPosition(); // Update character position on each frame
        animationFrameId = null;
      });
    }
  });

  // Event listener for keydown events
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      removeAllCharacters(); // Remove all characters if Escape is pressed
    } else if (isLetterKey(e.key)) {
      createNewCharacter(e.key); // Create a new character on letter key press
    }
  });

  // Function to create zones
  function createZone(className) {
    const zone = document.createElement('div');
    zone.classList.add('zone', className);
    return zone;
  }

  // Function to create a new character
  function createNewCharacter(letter) {
    if (currentCharacter) {
      currentCharacter.classList.remove('follow');
      currentCharacter = null;
    }

    currentCharacter = document.createElement('div');
    currentCharacter.textContent = letter;
    currentCharacter.classList.add('character', 'follow');
    currentCharacter.style.backgroundColor = 'white'; // Ensure background is white
    body.appendChild(currentCharacter);

    updateCharacterPosition(); // Position the character initially
  }

  // Function to update the character's position based on the mouse movement
  function updateCharacterPosition() {
    if (!currentCharacter) return;

    let x = lastCursorX - currentCharacter.offsetWidth / 2;
    let y = lastCursorY - currentCharacter.offsetHeight / 2;

    // If the cursor is inside the jail (insideZone)
    if (isPointerInside(insideZone)) {
      const rect = insideZone.getBoundingClientRect();
      // Adjust x and y to stay within the insideZone bounds
      x = Math.max(rect.left, Math.min(x, rect.right - currentCharacter.offsetWidth));
      y = Math.max(rect.top, Math.min(y, rect.bottom - currentCharacter.offsetHeight));

      currentCharacter.classList.add('trapped');
      currentCharacter.style.backgroundColor = 'var(--orange)'; // Turn background to orange
    } else if (currentCharacter.classList.contains('trapped')) {
      snapToJailEdge(); // Snap the character to the edge when leaving the jail
      currentCharacter.classList.remove('follow');
      currentCharacter = null;
      return;
    }

    // Set the character's position, ensuring it follows the mouse in the center
    currentCharacter.style.left = `${x}px`;
    currentCharacter.style.top = `${y}px`;
  }

  // Snap character to jail edge when it leaves the jail
  function snapToJailEdge() {
    const rect = insideZone.getBoundingClientRect();
    let x = lastCursorX;
    let y = lastCursorY;

    x = Math.max(rect.left + currentCharacter.offsetWidth / 2, Math.min(x, rect.right - currentCharacter.offsetWidth / 2));
    y = Math.max(rect.top + currentCharacter.offsetHeight / 2, Math.min(y, rect.bottom - currentCharacter.offsetHeight / 2));

    currentCharacter.style.left = `${x - currentCharacter.offsetWidth / 2}px`;
    currentCharacter.style.top = `${y - currentCharacter.offsetHeight / 2}px`;
  }

  // Check if the mouse pointer is inside a given element (zone)
  function isPointerInside(element) {
    const rect = element.getBoundingClientRect();
    return lastCursorX >= rect.left && lastCursorX <= rect.right &&
           lastCursorY >= rect.top && lastCursorY <= rect.bottom;
  }

  // Remove all characters when Escape is pressed
  function removeAllCharacters() {
    document.querySelectorAll('.character').forEach(char => char.remove());
    currentCharacter = null;
  }

  // Check if the pressed key is a letter (a-z)
  function isLetterKey(key) {
    return /^[a-z]$/.test(key);
  }
});
