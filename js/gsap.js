document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default jump
      const targetId = this.getAttribute("href").substring(1); // Get target section ID without '#'
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        const headerOffset = 80; // Adjust offset for fixed headers
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;
  
        gsap.to(window, {
          duration: 1, // Duration of the scroll animation in seconds
          scrollTo: {
            y: offsetPosition, // Scroll to calculated position
          },
          ease: "power2.inOut" // Smooth easing function
        });
      }
    });
  });
  