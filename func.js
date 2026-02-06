const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const mainContent = document.getElementById('main-content');
const successContent = document.getElementById('success-content');
const message = document.getElementById('message');

// Make the "No" button run away
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    
    // Show the "shy" message from the video
    message.style.display = 'block';
});

// Handle the "Yes" click
yesBtn.addEventListener('click', () => {
    mainContent.style.display = 'none';
    successContent.style.display = 'block';
});