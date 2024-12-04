function showCountdown() {
    document.getElementById('welcome-section').style.display = 'none';
    document.getElementById('countdown-section').style.display = 'block';
}

function updateCountdown() {
    const birthday = new Date('2024-12-20T00:00:00');
    const now = new Date();
    const timeDiff = birthday - now;

    if (timeDiff > 0) {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
    } else {
        document.querySelector('.countdown-container h1').textContent = "Happy Birthday! 🎉";
        document.querySelector('.countdown-timer').style.display = "none";
    }
}

setInterval(updateCountdown, 1000);


// function exploreSite() {
//     alert("Welcome to your special birthday website! 🎂");
// }

//basic code down
// function showMessage() {
//     document.getElementById('message').innerText = "You are mmy best friend. Happy Birthday, my friend!";
// }
