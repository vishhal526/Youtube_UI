// change category active option
function toggleCategoryClass(button) {
  
  const activeButton = document.querySelector('.category_active');

  if (activeButton) {

    activeButton.classList.remove('category_active');
    activeButton.classList.add('category');
  }

  if (button.classList.contains('category')) {
    button.classList.remove('category');
    button.classList.add('category_active');
  } else {
    button.classList.remove('category_active');
    button.classList.add('category');
  }
}


function changeImage() {
  const img = document.getElementById('toggleImage');

  // Toggle between two images
  if (img.src.includes('placeholder')) {
    img.src = 'https://via.placeholder.com/200/FF0000/FFFFFF?text=Clicked+Image';
  } else {
    img.src = 'https://via.placeholder.com/200';
  }
}

// Toggle the sidebar visibility
function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  var main_body = document.getElementById("main_body");
  var main = document.getElementById("main");

  // If the sidebar is hidden, show it
  if (sidebar.style.width === "250px") {
      sidebar.style.width = "0";
      main_body.style.marginLeft = "0px"
      //main.style.marginLeft = "0";
  } else {
      sidebar.style.width = "250px"; // Set sidebar width when shown
      main_body.style.marginLeft = "250px"
      //main.style.marginLeft = "250px"; // Push the main content to the right
  }
}


// Thumbnail counter updater
document.querySelectorAll('.thumbnail').forEach(thumbnail => {
  let originalDuration = thumbnail.getAttribute('data-duration');
  let [hours, minutes, seconds] = originalDuration.split(':').map(num => parseInt(num));

  if (isNaN(seconds)) {
    [minutes, seconds] = [hours, minutes];
    hours = 0;
  }

  let totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
  let countdownTimer;

  function updateCountdown() {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    const formattedTime = `${mins}:${secs < 10 ? '0' + secs : secs}`;
    thumbnail.setAttribute('data-duration', formattedTime);
    totalSeconds--;

    if (totalSeconds < 0) {
      clearInterval(countdownTimer); 
      thumbnail.setAttribute('data-duration', '0:00');
    }
  }

  thumbnail.addEventListener('mouseenter', () => {
    countdownTimer = setInterval(updateCountdown, 1000);
  });

  thumbnail.addEventListener('mouseleave', () => {
    clearInterval(countdownTimer);
    totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
    thumbnail.setAttribute('data-duration', originalDuration);
  });
});
