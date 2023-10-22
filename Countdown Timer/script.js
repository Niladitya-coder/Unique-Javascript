function startTimer() {
    const selectedDate = new Date(document.getElementById('date').value).getTime();

    if (!isNaN(selectedDate)) {
        setInterval(function() {
            const now = new Date().getTime();
            const timeDifference = selectedDate - now;

            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            document.getElementById('timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

            if (timeDifference < 0) {
                clearInterval();
                document.getElementById('timer').innerHTML = 'Countdown Expired';
            }
        }, 1000);
    } else {
        alert('Please select a valid date and time.');
    }
}
