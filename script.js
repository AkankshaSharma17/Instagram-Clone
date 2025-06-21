document.addEventListener("DOMContentLoaded", () => {

 
  const bookmarkIcon = document.querySelector(".fa-bookmark");
  const titleElement = document.querySelector(".title");
  

  
  let isBookmarked = false;
  let isExpanded = false;


  // Bookmark toggle
  bookmarkIcon.addEventListener("click", () => {
    isBookmarked = !isBookmarked;
    bookmarkIcon.classList.toggle("fa-solid", isBookmarked);
    bookmarkIcon.classList.toggle("fa-regular", !isBookmarked);
  });

  // Expand description on "more"
  titleElement.addEventListener("click", () => {
    if (!isExpanded) {
      titleElement.innerHTML = `<span>Cardi B</span> Monsoon fury rained havoc in various parts of Himachal Pradesh this year with the death toll crossing 260. The rains caused landslides, floods, and damaged infrastructure throughout the region.`;
    } else {
      titleElement.innerHTML = `<span>Cardi B</span> Monsoon fury rained havoc in various parts of Himachal Pradesh this year with the death toll crossing 260. The rains...<br> more`;
    }
    isExpanded = !isExpanded;
  });


    // DARK MODE TOGGLE
    const darkModeBtn = document.querySelector('#clicked');
    let isDarkMode = false;

    darkModeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        isDarkMode = !isDarkMode;

        const text = darkModeBtn.querySelector('a');
        text.textContent = isDarkMode ? 'Light-mode' : 'Dark-mode';
    });

    // Highlight active sub-section
    const sections = document.querySelectorAll('.sub-section');
    sections.forEach(section => {
        section.addEventListener('click', () => {
            sections.forEach(s => s.classList.remove('active'));
            section.classList.add('active');
        });
    });
});


















