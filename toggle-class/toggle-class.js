document.addEventListener('DOMContentLoaded', function () {
  console.log('JavaScript is running');

  const contentParagraph = document.querySelector('#content p');

  // Create the button container and buttons
  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'controls';
  document.body.appendChild(buttonContainer);

  // Create the toggle bold button
  const toggleBoldButton = document.createElement('button');
  toggleBoldButton.id = 'bold';
  toggleBoldButton.textContent = 'B';
  toggleBoldButton.addEventListener('click', toggleBold);
  buttonContainer.appendChild(toggleBoldButton);

  // Create the toggle Italic button
  const toggleItalicButton = document.createElement('button');
  toggleItalicButton.id = 'italic';
  toggleItalicButton.textContent = 'I';
  toggleItalicButton.addEventListener('click', toggleItalic);
  buttonContainer.appendChild(toggleItalicButton);

  // Create the toggle Underline button
  const toggleUnderlineButton = document.createElement('button');
  toggleUnderlineButton.id = 'underline';
  toggleUnderlineButton.textContent = 'U';
  toggleUnderlineButton.addEventListener('click', toggleUnderline);
  buttonContainer.appendChild(toggleUnderlineButton);

  // Create the toggle Highlight button
  const toggleHighlightButton = document.createElement('button');
  toggleHighlightButton.id = 'highlight';
  toggleHighlightButton.textContent = 'H';
  toggleHighlightButton.addEventListener('click', toggleHighlight);
  buttonContainer.appendChild(toggleHighlightButton);

  function toggleBold() {
      const currentFontWeight = window.getComputedStyle(contentParagraph).fontWeight;
      if (currentFontWeight === 'bold' || currentFontWeight === '700') {
          contentParagraph.style.fontWeight = 'normal';
      } else {
          contentParagraph.style.fontWeight = 'bold';
      }
  }

  function toggleItalic() {
      const currentFontStyle = window.getComputedStyle(contentParagraph).fontStyle;
      if (currentFontStyle === 'italic') {
          contentParagraph.style.fontStyle = 'normal';
      } else {
          contentParagraph.style.fontStyle = 'italic';
      }
  }

  function toggleUnderline() {
    const currentTextDecoration = window.getComputedStyle(contentParagraph).textDecorationLine;
    if (currentTextDecoration === 'underline') {
        contentParagraph.style.textDecoration = 'none';
    } else {
        contentParagraph.style.textDecoration = 'underline';
    }
}
function toggleHighlight() {
  const currentBackgroundColor = window.getComputedStyle(contentParagraph).backgroundColor;
  if (currentBackgroundColor === 'rgb(255, 255, 0)') {
      contentParagraph.style.backgroundColor = 'transparent';
  } else {
      contentParagraph.style.backgroundColor = 'yellow';
  }
}
});
