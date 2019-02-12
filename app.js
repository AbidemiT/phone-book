let search = document.getElementById('search-input');
let message = document.getElementById('message');
let div = document.querySelectorAll('.contact');
let p = document.querySelectorAll('p');
let main = document.querySelectorAll('#contact-container');

search.addEventListener('keyup', () => {
  let searchValue = search.value.toLowerCase();

  p.forEach(pElement => {
    if (pElement.textContent.toLowerCase().indexOf(searchValue) !== -1) {
      pElement.style.display = 'block';
      pElement.parentElement.style.display = 'block'
    } else if (pElement.textContent.toLowerCase().indexOf(searchValue) === -1) {
      pElement.style.display = 'none';
      div.forEach((divChild) => {
        if (divChild.innerText.length === 2) {
          divChild.style.display = 'none';
        }
      });
    }
  });

  main.forEach((content, i) => {
    if (content.innerText === '' || content.innerText.length === 11) {
      message.style.display = 'block';
    } else {
      message.style.display = 'none';
    }
  });
});