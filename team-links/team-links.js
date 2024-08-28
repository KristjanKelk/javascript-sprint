
function createLinks(teams) {
  const existingList = document.getElementById('team-list-nav');
  if (existingList) {
      existingList.remove();
  }

  const ul = document.createElement('ul');
  ul.id = 'team-list-nav';
  ul.className = 'team-links';

  teams.forEach(team => {
      const li = document.createElement('li');
      li.style.backgroundColor = team.primary;

      const a = document.createElement('a');
      a.href = team.url;
      a.textContent = team.name;
      a.style.color = team.secondary;

      
      li.addEventListener('mouseenter', () => {
          a.style.fontWeight = 'bold';
      });
      li.addEventListener('mouseleave', () => {
          a.style.fontWeight = 'normal';
      });

      const span = document.createElement('span');
      span.textContent = '[copy]';
      span.style.cursor = 'pointer';

      
      span.addEventListener('click', () => {
          navigator.clipboard.writeText(team.url).then(() => {
              alert('URL copied to clipboard');
          }).catch(err => {
              console.error('Failed to copy text: ', err);
          });
      });

      li.appendChild(a);
      li.appendChild(span);
      ul.appendChild(li);
  });

  
  document.body.appendChild(ul);
}
