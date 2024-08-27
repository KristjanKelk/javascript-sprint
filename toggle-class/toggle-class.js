document.addEventListener('DOMContentLoaded', function () {
  const mainDiv = document.createElement('div');
  mainDiv.className = 'content';

  const contentParagraph = document.createElement('p');
  contentParagraph.textContent = 'code';
  mainDiv.appendChild(contentParagraph);

  document.body.appendChild(mainDiv);

  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'button-container';
  document.body.appendChild(buttonContainer);

  function createButton(id, text, toggleFunction) {
      const button = document.createElement('button');
      button.id = id;
      button.textContent = text;
      button.addEventListener('click', toggleFunction);
      buttonContainer.appendChild(button);
  }

  function toggleBold() {
      contentParagraph.classList.toggle('bold');
  }

  function toggleItalic() {
      contentParagraph.classList.toggle('italics');
  }

  function toggleUnderline() {
      contentParagraph.classList.toggle('underline');
  }

  function toggleHighlight() {
      mainDiv.classList.toggle('highlight');
  }

  createButton('bold', 'B', toggleBold);
  createButton('italics', 'I', toggleItalic);
  createButton('underline', 'U', toggleUnderline);
  createButton('highlight', 'Highlight', toggleHighlight);
});
