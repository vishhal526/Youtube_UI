// array for the video in body
const videoData = [
  {
    thumbnail: "Images/Video_Thumbnail/Eminem_Video_song.jpg",
    channelIcon: "Images/Channel_Photo/Enimen.jpg",
    title: "Bump Heads",
    channelName: "EminemMusic",
    views: "94M views",
    date: "6 years ago",
    duration: "4:42"
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
    thumbnail: "Images/Video_Thumbnail/Nice_Guy.jpg",
    channelIcon: "Images/Channel_Photo/Niga_Higa.jpg",
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
    duration: "2:06"
  },

  {
    thumbnail: "Images/Video_Thumbnail/Indian_From_1976.jpg",
    channelIcon: "Images/Channel_Photo/India_in_Pixels_by_Ashris.jfif",
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
    thumbnail: "Images/Video_Thumbnail/Growing_up.jpg",
    channelIcon: "Images/Channel_Photo/KirtiChow.jpg",
    title: "Growing Up Alone...",
    channelName: "KirtiChow",
    views: "504k views",
    date: "2 months",
    duration: "10:53"
  },

  {
    thumbnail: "Images/Video_Thumbnail/Bleach_trailer.jpg",
    channelIcon: "Images/Channel_Photo/Aniplex.jpg",
    title: "TVアニメ『BLEACH 千年血戦篇』ティザーPV／２０２２年１０月放送開始",
    channelName: "Aniplex",
    views: "12M views",
    date: "3 years",
    duration: "1:50"
  },

  {
    thumbnail: "Images/Video_Thumbnail/Akuma_no_ko.jpg",
    channelIcon: "Images/Channel_Photo/Ai_Higuchi.jpg",
    title: "Ai Higuchi “Akuma no Ko” Anime Special Ver.",
    channelName: "Ai Higuchi",
    views: "153M views",
    date: "2 years",
    duration: "3:49"
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


function changeImage(optionName, element) {
  // Get all icons in the side menu
  const allIcons = document.querySelectorAll('.side-menu .icon img');

  // Loop through all icons and reset them to light versions
  allIcons.forEach((icon) => {
      const currentSrc = icon.src; // Full path of the current src
      const name = currentSrc.split('/').pop().split('.')[0]; // Extract name without extension

      // Check if the current src is already a light version
      if (!name.includes('_light')) {
          icon.src = `Icon/${name}_light.svg`;
      } else {
          // If already light, reset without adding "_light" again
          icon.src = `Icon/${name}.svg`;
      }
      icon.classList.remove('active_img');
  });

  // Set the clicked option to the dark version
  element.src = `Icon/${optionName}.svg`;
  element.classList.add('active_img');
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

//Shuffled array
function shuffleArray(array) {

  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {

    const randomIndex = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
  }

  return shuffled;
}
const shuffledVideoData = shuffleArray(videoData);

// render thumbnail in the section tag
function renderVideos(sectionID, videos) {
  const section = document.getElementById(sectionID);
  section.innerHTML = ""; // Clear previous content

  videos.forEach(video => {
    const article = document.createElement("article");
    article.classList.add("video-container");

    article.innerHTML = `
          <a href="#" class="thumbnail" data-duration="${video.duration}">
              <img class="thumbnail-image" src="${video.thumbnail}" />
          </a>
          <div class="video-bottom">
              <a href="#">
                  <img src="${video.channelIcon}" class="channel-icon">
              </a>
              <div class="video-details">
                  <a href="#" class="video-title">${video.title}</a>
                  <a href="#" class="video-channel-name">${video.channelName}</a>
                  <div class="video-metadata">
                      <span>${video.views}</span>
                      •
                      <span>${video.date}</span>
                  </div>
              </div>
          </div>
      `;

    section.appendChild(article);
  });
}

// refresh the page
function refresh() {
  const shuffledData = shuffleArray(videoData);
  const shuffledrecommandation = shuffleArray(videoData);
  renderVideos("recommendationSection", shuffledrecommandation);
  renderVideos("videoSection", shuffledData);
  addDurationHandlers();
}

// update thumbnail on page load
window.onload = refresh();

// Thumbnail counter updater
function addDurationHandlers() {
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
}


