  // Basic setup
  const SLIDE_WIDTH = 412;
  const GAP_WIDTH = 12;
  const TOTAL_SLIDES = 9;  // 9 columns in the grid
  const SLIDES_PER_VIEW = 3;  // display 3 slides at once
  const track = document.getElementById("carouselTrack");

  // Calculate total track width:
  // 9 slides * 412px each + 8 gaps * 12px = 3804px
  const trackWidth = (SLIDE_WIDTH * TOTAL_SLIDES) + (GAP_WIDTH * (TOTAL_SLIDES - 1));

  // We want exactly 3 pages (0, 1, 2)
  const totalPages = 3;

  // Each page is trackWidth / totalPages = 3804 / 3 = 1268
  const pageWidth = trackWidth / totalPages;

  // Current page index (0-based)
  let currentPage = 0;

  // Pagination Dots
  const dotElements = document.querySelectorAll("#carouselPagination > div");

  // Attach click events to each dot => jump to that page
  dotElements.forEach((dot) => {
    dot.addEventListener("click", () => {
      const pageIndex = parseInt(dot.getAttribute("data-page"), 10);
      goToPage(pageIndex);
    });
  });

  // Arrow buttons
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  prevBtn.addEventListener("click", () => {
    const prevPage = (currentPage - 1 + totalPages) % totalPages;
    goToPage(prevPage);
  });

  nextBtn.addEventListener("click", () => {
    const nextPage = (currentPage + 1) % totalPages;
    goToPage(nextPage);
  });

  // Function to move track to a specific page
  function goToPage(pageIndex) {
    currentPage = pageIndex;
    // Shift the grid with translateX
    track.style.transform = `translateX(-${pageWidth * currentPage}px)`;

    // Update dot styles
    dotElements.forEach((d, i) => {
      if (i === currentPage) {
        d.classList.add("bg-[#C19A6B]");
        d.classList.remove("bg-[#ffffff]");
      } else {
        d.classList.remove("bg-[#C19A6B]");
        d.classList.add("bg-[#ffffff]");
      }
    });
  }

  // Initialize at page 0
  goToPage(0);

  // (Optional) Auto-advance every 5 seconds
  setInterval(() => {
    const nextPage = (currentPage + 1) % totalPages;
    goToPage(nextPage);
  }, 5000);
