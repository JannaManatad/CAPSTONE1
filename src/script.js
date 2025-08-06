const bell = document.getElementById('notificationBell');
const dropdown = document.getElementById('notificationDropdown');
const modal = document.getElementById('notificationModal');
const messageBox = document.getElementById('modalMessage');

bell.addEventListener('click', () => {
  dropdown.classList.toggle('hidden');
});

function openModal(message) {
  messageBox.textContent = message;
  modal.classList.remove('hidden');
  dropdown.classList.add('hidden');
}

function closeModal() {
  modal.classList.add('hidden');
}

// Close dropdown if clicked outside
window.addEventListener('click', (e) => {
  if (!bell.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.add('hidden');
  }
});
