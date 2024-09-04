function sunnySunday(date) {
    const referenceDate = new Date('0001-01-01');
    
    const msPerDay = 1000 * 60 * 60 * 24;
    const daysDifference = Math.floor((date - referenceDate) / msPerDay);

    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    const weekdayIndex = (daysDifference + 6) % 6; // +6 to handle negative values if needed

    return weekdays[weekdayIndex];
}