document.addEventListener('DOMContentLoaded', function () {
  console.log('JavaScript is running');  // Debugging statement

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  let currentIndex = 0;
  let currentFontSize = 14;

  // Create the letter container and populate it with letters
  const letterContainer = document.createElement('div');
  letterContainer.className = 'letter-container';
  document.body.appendChild(letterContainer);

  alphabet.forEach((letter, index) => {
      const letterDiv = document.createElement('div');
      letterDiv.className = 'letter';
      letterDiv.id = letter.toLowerCase();
      letterDiv.textContent = letter;
      letterDiv.style.fontSize = `${currentFontSize}px`;  // Set initial font size
      letterDiv.addEventListener('click', () => selectLetter(index));
      letterContainer.appendChild(letterDiv);
  });

  // Initially select the first letter
  const letters = document.querySelectorAll('.letter');
  letters[currentIndex].classList.add('selected');

  // Create the button container and buttons
  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'button-container';
  document.body.appendChild(buttonContainer);

  const prevButton = document.createElement('button');
  prevButton.id = 'prev';
  prevButton.textContent = '<';
  prevButton.addEventListener('click', () => navigate(-1));
  buttonContainer.appendChild(prevButton);

  const nextButton = document.createElement('button');
  nextButton.id = 'next';
  nextButton.textContent = '>';
  nextButton.addEventListener('click', () => navigate(1));
  buttonContainer.appendChild(nextButton);

  const decreaseButton = document.createElement('button');
  decreaseButton.id = 'decrease';
  decreaseButton.textContent = '-';
  decreaseButton.addEventListener('click', decreaseFontSize);
  buttonContainer.appendChild(decreaseButton);

  const increaseButton = document.createElement('button');
  increaseButton.id = 'increase';
  increaseButton.textContent = '+';
  increaseButton.addEventListener('click', increaseFontSize);
  buttonContainer.appendChild(increaseButton);

  // Functions to handle navigation and selection
  function selectLetter(index) {
      letters[currentIndex].classList.remove('selected');
      currentIndex = index;
      letters[currentIndex].classList.add('selected');

      // Update the currentFontSize to reflect the selected letter's current font size
      currentFontSize = parseInt(window.getComputedStyle(letters[currentIndex]).fontSize);
  }

  function navigate(direction) {
      selectLetter((currentIndex + direction + 26) % 26);
  }

  function decreaseFontSize() {
      if (currentFontSize > 10) {
          currentFontSize -= 2;
          letters[currentIndex].style.fontSize = `${currentFontSize}px`;
      }
  }

  function increaseFontSize() {
      if (currentFontSize < 26) {
          currentFontSize += 2;
          letters[currentIndex].style.fontSize = `${currentFontSize}px`;
      }
  }
});
