let btn = document.getElementById('menuBtn');
let sidebar = document.querySelector('.sidebar');
let searchBtn = document.querySelector('.bx-search');

btn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

searchBtn.addEventListener('click', () => {
  sidebar.classList.add('active');
});
