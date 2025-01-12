function toggleCategoryClass(button) {
  // Get all buttons with the 'category_active' class
  const activeButton = document.querySelector('.category_active');

  // If there's already a button with the 'category_active' class
  if (activeButton) {
    // Change its class to 'category'
    activeButton.classList.remove('category_active');
    activeButton.classList.add('category');
  }

  // Toggle the class of the clicked button
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

document.querySelectorAll('.thumbnail').forEach(thumbnail => {
  let originalDuration = thumbnail.getAttribute('data-duration');
  let [hours, minutes, seconds] = originalDuration.split(':').map(num => parseInt(num));

  if (isNaN(hours)) {
    hours = 0;
    [minutes, seconds] = [minutes, seconds];
  }

  let totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
  let countdownTimer;

  // Function to update the countdown display
  function updateCountdown() {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    const formattedTime = `${mins}:${secs < 10 ? '0' + secs : secs}`;
    thumbnail.setAttribute('data-duration', formattedTime);
    totalSeconds--;

    if (totalSeconds < 0) {
      clearInterval(countdownTimer); // Stop the countdown once it hits 0
      thumbnail.setAttribute('data-duration', '0:00');
    }
  }

  // Event listener for hover
  thumbnail.addEventListener('mouseenter', () => {
    countdownTimer = setInterval(updateCountdown, 1000);
  });

  // Event listener for hover out (reset the countdown)
  thumbnail.addEventListener('mouseleave', () => {
    clearInterval(countdownTimer);
    thumbnail.setAttribute('data-duration', originalDuration);
  });
});
