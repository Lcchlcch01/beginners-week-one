function calculateChristmasCountdown(){

  var now = new Date('2019-12-04');
  var currentMonth = (now.getMonth(12)+ 1);
  var currentDay = now.getDate(4);
  var nextChristmasYear = now.getFullYear(2019);
  if(currentMonth == 12&& currentDay > 25){
    nextChristmasYear = nextChristmasYear + 1;
  }
  var nextChristmasDate = nextChristmasYear + '-12-25T00:00:00.000z';
  var christmasDay = new Date(nextChristmasDate);
}
  var diffSeconds = Math.floor((christmasDay.getTime() - now.getTime()) / 1000);
  var days = 0;
  var hours = 0;
  var minutes = 0;
  var seconds = 0;

  if(currentMonth != 12 || (currentMonth == 12 && currentDay != 25)) {
    days = Math.floor(diffSeconds / (3600*24));
    diffSeconds -= days * 3600 * 24;
    hours = Math.floor(diffSeconds / 3600);
    diffSeconds -= hours * 3600;
    minutes = Math.floor(diffSeconds / 60);
    diffSeconds -= minutes * 60;
    seconds = diffSeconds;

  }

document.getElementById('days').innerHTML = days + ' Days';
document.getElementById('hours').innerHTML = hours + ' Hours';
document.getElementById('minutes').innerHTML = minutes + ' Minutes';
document.getElementById('seconds').innerHTML = seconds + ' Seconds';

  setTimeout(calculateChristmasCountdown, 1000);

}

calculateChristmasCountdown();
