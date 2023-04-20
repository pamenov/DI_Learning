var showMoreBtn = document.getElementById('show-more');
var contentDiv = document.getElementById('table');

showMoreBtn.addEventListener('click', function(e) {
  e.preventDefault();
  contentDiv.classList.toggle('expanded');
  if (contentDiv.classList.contains('expanded')) {
    showMoreBtn.innerHTML = 'Show less';
  } else {
    showMoreBtn.innerHTML = 'Show more';
  }
});
