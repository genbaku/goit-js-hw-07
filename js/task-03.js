const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');
nameInput.addEventListener('input', handleInput);
function handleInput() {
  nameOutput.textContent = nameInput.value.trim() || 'Anonymous';
}
handleInput();