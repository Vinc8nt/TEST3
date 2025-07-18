function scrollToInfo() {
  document.getElementById('course-info').scrollIntoView({ behavior: 'smooth' });
}

function revealCircuits() {
  const button = document.querySelector('.facility-button');
  const container = document.querySelector('.circuit-container');
  button.classList.add('move-side');
  container.classList.remove('hidden');
}
