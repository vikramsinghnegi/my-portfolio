var typed = new Typed('#book', {
    strings: ['Frontend developer', 'Innovator','Problem-Solver',' Designer '
 ],
    typeSpeed: 300,
    loop: true,
  });




// After the animation is done, show the website content
window.addEventListener('load', function() {
    // Set a delay that matches the total animation time (3 seconds)
    setTimeout(function() {
        // Hide the preloader
        document.getElementById('preloader').style.display = 'none';
        // Show the main content
        document.getElementById('content').style.display = 'block';
        // Allow scrolling again
        document.body.style.overflow = 'auto';
    }, 3000); // Delay for the total animation duration
});




// Select the ball element

// Select the outer ball element
const cursorBall = document.querySelector('.cursor-ball');

// Function to move the ball
function moveBall(x, y) {
  cursorBall.style.transform = `translate(${x - cursorBall.offsetWidth / 2}px, ${y - cursorBall.offsetHeight / 2}px)`;
}

// Event listener for desktop (mousemove)
document.addEventListener('mousemove', (e) => {
  moveBall(e.clientX, e.clientY);
});

// Event listener for mobile (touchmove)
document.addEventListener('touchmove', (e) => {
  const touch = e.touches[0];
  moveBall(touch.clientX, touch.clientY);
});



// time


function updateTime() {
    const timeElement = document.getElementById("time");
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
  
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
  }
  
  setInterval(updateTime, 1000);
  updateTime(); // Call initially to show time immediately
  


//   back 




// JavaScript to toggle the mobile menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

