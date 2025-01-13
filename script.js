// array for the video in body
const videoData = [
  {
    thumbnail: "Images/Video_Thumbnail/Eminem_Video_song.jpg",
    channelIcon: "Images/Channel_Photo/Enimen.jpg",
    title: "Bump Heads",
    channelName: "EminemMusic",
    views: "94M views",
    date: "6 years ago",
    duration: "04:42"
  },

  {
    thumbnail: "Images/Video_Thumbnail/Die_with_a_Smile.jpg",
    channelIcon: "Images/Channel_Photo/Lady_Gaga.jpg",
    title: "Lady Gaga, Bruno Mars - Die With a Smile (Official Music Video)",
    channelName: "Lady Gaga",
    views: "434M views",
    date: "4 months ago",
    duration: "4:13"
  },

  {
    thumbnail: "Images/Video_Thumbnail/AIB-GOT.jpg",
    channelIcon: "Images/Channel_Photo/AIB.jpg",
    title: "AIB : Game Of Thrones Salesman",
    channelName: "AIB",
    views: "3.3M views",
    date: "7 years",
    duration: "6:18"
  },

  {
    thumbnail: "Images/Video_Thumbnail/Niga_Higa.jpg",
    channelIcon: "Images/Channel_Photo/Nice_Guys.jpg",
    title: "Nice Guys",
    channelName: "NigaHiga",
    views: "91M views",
    date: "13 years",
    duration: "2:50"
  },

  {
    thumbnail: "Images/Video_Thumbnail/Omar_Abdullah_Int.jpg",
    channelIcon: "Images/Channel_Photo/Uf_by_Samdish.jpg",
    title: "I Interviewed Jammu & Kashmir's former Chief Minister | Unfiltered by Samdish ft. Omar Abdullah",
    channelName: "UNFILTERED by Samdish",
    views: "3M views",
    date: "1 years",
    duration: "2.06"
  },

  {
    thumbnail: "Images/Video_Thumbnail/India_From_1967.jpg",
    channelIcon: "Images/Channel_Photo/India_in_Pixels_by_Ashirs.jfif",
    title: "Indians from 1967 talk about the future",
    channelName: "India in Pixels by Ashirs",
    views: "1.4M views",
    date: "5 years",
    duration: "11:01"
  },

  {
    thumbnail: "Images/Video_Thumbnail/721_books_in_2018.jpg",
    channelIcon: "Images/Channel_Photo/Pewdiepie.jpg",
    title: "I read 721 books in 2018",
    channelName: "Pewdiepie",
    views: "8.6M views",
    date: "6 years",
    duration: "12:06"
  },

  {
    thumbnail: "Images/Video_Thumbnail/Join_in_the_booth.jpg",
    channelIcon: "Images/Channel_Photo/Seedhe_Maut.jfif",
    title: "Joint in the Booth - Seedhe Maut",
    channelName: "Seedhe Maut",
    views: "2.1M views",
    date: "1 years",
    duration: "2:50"
  },

  {
    thumbnail: "Images/Video_Thumbnail/UpDown_Funk.jpg",
    channelIcon: "Images/Channel_Photo/Mark_Ronson.jpg",
    title: "Mark Ronson - Uptown Funk (Official Video) ft. Bruno Mars",
    channelName: "Mark Ronson",
    views: "5.4B views",
    date: "10 years",
    duration: "4:31"
  },
  
  {
    thumbnail: "Images/Video_Thumbnail/",
    channelIcon: "Images/Channel_Photo/",
    title: "",
    channelName: "",
    views: "M views",
    date: " years",
    duration: ""
  },
  {
    thumbnail: "Images/Video_Thumbnail/",
    channelIcon: "Images/Channel_Photo/",
    title: "",
    channelName: "",
    views: "M views",
    date: " years",
    duration: ""
  },
  {
    thumbnail: "Images/Video_Thumbnail/",
    channelIcon: "Images/Channel_Photo/",
    title: "",
    channelName: "",
    views: "M views",
    date: " years",
    duration: ""
  },
]

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
