function showCountdown() {
  document.getElementById("welcome-section").style.display = "none";
  document.getElementById("countdown-section").style.display = "block";
  document.getElementById("carousel-section").style.display = "none";
}

let iscountdown = false;

function updateCountdown() {
  const birthday = new Date("2024-12-27T00:00:00");
  const now = new Date();
  const timeDiff = birthday - now;

  if (timeDiff > 0) {
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
    iscountdown = false;
  } else {
    document.querySelector(".countdown-container h1").textContent =
      "Happy Birthday! 🎉";
    document.querySelector(".countdown-timer").style.display = "none";
    iscountdown = true;
  }
}

setInterval(updateCountdown, 1000);

let currentSlide = 0;

function showCarousel() {
      if (!iscountdown) {
        const text = [
          "Patience is a virtue! The time isn’t here yet. 🎉",
          "Sorry, the big moment is still on its way. ⏳",
          "Hold on tight! It's not your birthday yet. 🕒",
          "The clock is ticking, but it’s not time to celebrate just yet. ⌛",
          "Not so fast! You’ll have to wait a little longer. 😜",
          "Good things come to those who wait—check back later! 🎈",
        ];
        const randomText = text[Math.floor(Math.random() * text.length)];
        document.querySelector(".countdown-container h1").textContent =
          randomText;
        return;
      }
  document.getElementById("countdown-section").style.display = "none";
  document.getElementById("carousel-section").style.display = "block";
  const birthdayAudio = document.getElementById("birthday-audio");
  if (birthdayAudio && !birthdayAudio.paused) {
    birthdayAudio.pause();
    birthdayAudio.currentTime = 0;
    isPlaying = false;
  }
  showSlide(currentSlide);
  document.getElementById("wish-section").style.display = "none";
}

function changeSlide(direction) {
  const slides = document.querySelectorAll(".slide");
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
  showConfetti();
  playSound();
}

function showConfetti() {
  const confettiContainer = document.createElement("div");
  confettiContainer.classList.add("confetti-container");

  for (let i = 0; i < 30; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.animationDelay = `${Math.random()}s`;
    confetti.style.backgroundColor = getRandomColor();
    confettiContainer.appendChild(confetti);
  }

  document.body.appendChild(confettiContainer);
  setTimeout(() => confettiContainer.remove(), 3000);
}
function playSound() {
  const audio = document.getElementById("clicksound");
  audio.volume = 0.2;
  audio.play();
}
function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[index].classList.add("active");
}
function showWish() {
  document.getElementById("carousel-section").style.display = "none";
  document.getElementById("wish-section").style.display = "block";
  createBalloons();
  toggleMusic();
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlide);
});

function createBalloons() {
  const container = document.getElementById("balloons-container");
  for (let i = 0; i < 20; i++) {
    const balloon = document.createElement("div");
    balloon.classList.add("balloons");
    balloon.style.left = `${Math.random() * 100}%`;
    balloon.style.animationDelay = `${Math.random() * 3}s`;
    balloon.style.backgroundColor = getRandomColor();
    container.appendChild(balloon);
  }
}

function getRandomColor() {
  const colors = ["#FF6F61", "#FFB6C1", "#FFD700", "#87CEEB", "#98FB98"];
  return colors[Math.floor(Math.random() * colors.length)];
}

let isPlaying = false;

function toggleMusic() {
  const audio = document.getElementById("birthday-audio");
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
  isPlaying = !isPlaying;
}
