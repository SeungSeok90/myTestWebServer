// Countdown Timer Script
const countdownTimer = document.getElementById('countdown-timer');
const eventDate = new Date('2024-12-27T14:00:00');

function updateCountdown() {
    const now = new Date();
    const timeDifference = eventDate - now;
    
    if (timeDifference <= 0) {
        countdownTimer.textContent = 'The event has started!';
        return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    countdownTimer.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
