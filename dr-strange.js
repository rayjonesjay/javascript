function addWeek(date) {
  const daysOfWeek = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
    'secondMonday', 'secondTuesday', 'secondWednesday', 'secondThursday', 'secondFriday', 'secondSaturday', 'secondSunday'
  ];

  const dayIndex = Math.floor((date.getTime() - new Date('0001-01-01').getTime()) / (1000 * 60 * 60 * 24)) % 14;
  return daysOfWeek[dayIndex];
}

function timeTravel({ date, hour, minute, second }) {
  const newDate = new Date(date);
  newDate.setHours(hour);
  newDate.setMinutes(minute);
  newDate.setSeconds(second);
  return newDate;
}