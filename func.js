const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const mainContent = document.getElementById("main-content");
const successContent = document.getElementById("success-content");
const message = document.getElementById("message");

// 1. Handle the "Yes" Click
yesBtn.addEventListener("click", () => {
    mainContent.style.display = "none";
    successContent.style.display = "block";
});

// 2. The Logic to Move the Button
function moveButton() {
    // Get the current screen size
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Get the button's size (so we don't push it off the edge)
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // Calculate safe boundaries
    // We subtract the button size so it never overlaps the edge
    const maxX = screenWidth - btnWidth - 20; // 20px padding for safety
    const maxY = screenHeight - btnHeight - 20;

    // Generate random coordinates within those safe boundaries
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Apply the new position
    // IMPORTANT: specific styling to make it jump around the whole screen
    noBtn.style.position = "fixed"; // 'fixed' uses the window screen as reference
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
    
    // Optional: Show the cheeky message
    message.style.display = "block";
}

// 3. Trigger for Desktop (Hover)
noBtn.addEventListener("mouseover", moveButton);

// 4. Trigger for Mobile (Touch)
// We use 'touchstart' so it moves *before* they can successfully click it
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault(); // Prevents the click from firing
    moveButton();
});
