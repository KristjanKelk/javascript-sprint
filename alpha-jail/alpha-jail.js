document.addEventListener('DOMContentLoaded', () => {

  const outsideDiv = document.createElement('div');
  const insideDiv = document.createElement('div');


  outsideDiv.classList.add('zone', 'outside');
  insideDiv.classList.add('zone', 'inside');

  document.body.appendChild(outsideDiv);
  document.body.appendChild(insideDiv);

  let currentCharacter = null;

  document.addEventListener('keypress', (event) => {
      const char = event.key;

      if (char >= 'a' && char <= 'z') {
          if (currentCharacter) {
              currentCharacter.classList.remove('follow');
              currentCharacter = null;
          }

          const charDiv = document.createElement('div');
          charDiv.textContent = char;
          charDiv.classList.add('character', 'follow');
          currentCharacter = charDiv;

          const x = event.clientX - charDiv.offsetWidth / 2;
          const y = event.clientY - charDiv.offsetHeight / 2;
          charDiv.style.left = `${x}px`;
          charDiv.style.top = `${y}px`;

          document.body.appendChild(charDiv);

          const jailRect = insideDiv.getBoundingClientRect();
          if (
              event.clientX >= jailRect.left &&
              event.clientX <= jailRect.right &&
              event.clientY >= jailRect.top &&
              event.clientY <= jailRect.bottom
          ) {
              charDiv.classList.add('trapped');
              charDiv.style.backgroundColor = 'var(--orange)';
          }
      }
  });

  document.addEventListener('mousemove', (event) => {
      if (currentCharacter) {
          const jailRect = insideDiv.getBoundingClientRect();

          let x = event.clientX - currentCharacter.offsetWidth / 2;
          let y = event.clientY - currentCharacter.offsetHeight / 2;

          if (
              event.clientX >= jailRect.left &&
              event.clientX <= jailRect.right &&
              event.clientY >= jailRect.top &&
              event.clientY <= jailRect.bottom
          ) {
              currentCharacter.classList.add('trapped');
              currentCharacter.style.backgroundColor = 'var(--orange)';

              x = Math.max(jailRect.left, Math.min(x, jailRect.right - currentCharacter.offsetWidth));
              y = Math.max(jailRect.top, Math.min(y, jailRect.bottom - currentCharacter.offsetHeight));
          } else if (currentCharacter.classList.contains('trapped')) {
              currentCharacter.classList.remove('follow');
              currentCharacter = null;
              return;
          }

          currentCharacter.style.left = `${x}px`;
          currentCharacter.style.top = `${y}px`;
      }
  });

  document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
          document.querySelectorAll('.character').forEach(char => char.remove());
          currentCharacter = null;
      }
  });
});

const style = document.createElement('style');
style.textContent = `
  :root {
      --orange: orange;
  }

  body {
      margin: 0;
      overflow: hidden;
      display: flex;
      height: 100vh;
      font-family: Arial, sans-serif;
  }

  .zone {
      flex: 1;
      position: relative;
  }

  .outside {
      background-color: #f0f0f0;
  }

  .inside {
      background-color: #ccc;
      border-left: 2px solid #333;
  }

  .character {
      position: absolute;
      padding: 5px 10px;
      background-color: white;
      border-radius: 5px;
      font-size: 20px;
      pointer-events: none;
  }

  .trapped {
      background-color: var(--orange);
  }
`;
document.head.appendChild(style);
