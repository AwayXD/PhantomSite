AOS.init();

function openModal() {
  document.getElementById('downloadModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('downloadModal').style.display = 'none';
}

const statusMessages = [
  'Scanning memory...',
  'Analyzing packets...',
  'Verifying player input...',
  'No cheats detected.',
  'Running in stealth mode.'
];

let index = 0;
setInterval(() => {
  document.getElementById('islandStatus').textContent = statusMessages[index];
  index = (index + 1) % statusMessages.length;
}, 4000);
