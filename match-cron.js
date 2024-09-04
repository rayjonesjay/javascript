function matchCron(cronString, date) {
    const [cronMin, cronHour, cronDay, cronMonth, cronDayOfWeek] = cronString.split(' ');
    
    const minute = date.getMinutes();
    const hour = date.getHours();
    const day = date.getDate();
    const month = date.getMonth() + 1; 
    const dayOfWeek = date.getDay() || 7; 

    function matches(cronPart, datePart) {
        return cronPart === '*' || parseInt(cronPart, 10) === datePart;
    }

    return matches(cronMin, minute) &&
           matches(cronHour, hour) &&
           matches(cronDay, day) &&
           matches(cronMonth, month) &&
           matches(cronDayOfWeek, dayOfWeek);
}