const track = document.getElementById("image-track");

const handleOnDown = e => {
  track.dataset.mouseDownAt = e.clientX;
  track.style.transition = ""; // Remove transition during dragging to avoid interference
};

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";  
  track.dataset.prevPercentage = track.dataset.percentage;
  track.style.transition = "transform 0.3s ease"; // Add back the transition after dragging
};

const handleOnMove = e => {
  if (track.dataset.mouseDownAt === "0") return;

  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
  const maxDelta = window.innerWidth / 2;
  
  const percentage = (mouseDelta / maxDelta) * -100;
  const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage;
  const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

  track.dataset.percentage = nextPercentage;
  track.style.transform = `translate(${nextPercentage}%, -50%)`;

  const imageStartPercentage = 60;
  const imageEndPercentage = 90;
  const imageRange = imageEndPercentage - imageStartPercentage;

  const captions = track.getElementsByClassName("caption");

  for (const imageContainer of track.getElementsByClassName("image-container")) {
    const image = imageContainer.querySelector(".image");
    const caption = imageContainer.querySelector(".caption");

    const imageLeft = imageContainer.getBoundingClientRect().left;
    const imageRight = imageContainer.getBoundingClientRect().right;
    const middleOfViewport = window.innerWidth / 2;

    const offset = 100; // Adjust this value to control the proximity to the middle

    if (imageLeft <= middleOfViewport + offset && imageRight >= middleOfViewport - offset) {
      caption.classList.add("show-caption"); // Add 'show-caption' class to the corresponding caption
    } else {
      caption.classList.remove("show-caption"); // Remove 'show-caption' class from the corresponding caption
    }

    const imagePercentage = imageStartPercentage + (nextPercentage / 100) * imageRange;
    image.style.objectPosition = `${imagePercentage}% center`;
  }

  // Loop the carousel
  const trackWidth = track.scrollWidth;
  const trackPosition = parseFloat(track.dataset.prevPercentage);
  if (trackPosition > 0) {
    track.scrollLeft = track.scrollWidth / 2;
    track.dataset.prevPercentage = track.dataset.percentage = -50;
  } else if (trackPosition < -100) {
    track.scrollLeft = track.scrollWidth / 2;
    track.dataset.prevPercentage = track.dataset.percentage = -50;
  }
};

/* -- Had to add extra lines for touch events -- */

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);

// Initial check when the page loads
document.addEventListener("DOMContentLoaded", handleOnMove);
