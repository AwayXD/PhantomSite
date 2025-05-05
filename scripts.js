// Initialize AOS (Animate on Scroll)
AOS.init();

// Modal logic
function openModal() {
  document.getElementById('downloadModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('downloadModal').style.display = 'none';
}

// Dynamic island fake status updates
const statusMessages = [
  'Scanning memory...',
  'Monitoring player actions...',
  'No threats detected.',
  'Checking for aimbots...',
  'All systems normal.'
];
let currentIndex = 0;

setInterval(() => {
  document.getElementById('islandStatus').textContent = statusMessages[currentIndex];
  currentIndex = (currentIndex + 1) % statusMessages.length;
}, 4000);
