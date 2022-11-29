const daysDisplay = document.querySelector('.days-num');
const hoursDisplay = document.querySelector('.hours-num');
const minsDisplay = document.querySelector('.mins-num');
const secsDisplay = document.querySelector('.secs-num');

const countDownDate = new Date('Jan 01, 2023 00:00:00').getTime();

// Update the count down every 1 second
const countDown = setInterval(() => {
  // Get todays date and time
  const now = new Date().getTime();

  // Find the distance between now an the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysDisplay.textContent = days;
  hoursDisplay.textContent = hours;
  minsDisplay.textContent = minutes;
  secsDisplay.textContent = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(countDown);

    const text = document.createElement('h2');
    text.textContent = 'Welcome to NEW YEAR - 2023 !!!';
    document.body.append(text);
  }
}, 1000);
