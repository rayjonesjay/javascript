function dayOfTheYear(date) {
    // Ensure the date is a valid Date object
    if (!(date instanceof Date) || isNaN(date)) {
        throw new Error('Invalid Date');
    }

    // Get the year from the given date
    const year = date.getFullYear();

    // Create a Date object for January 1st of the given year
    const startOfYear = new Date(year, 0, 1);

    // Calculate the difference in milliseconds between the given date and January 1st
    const differenceInMillis = date.getTime() - startOfYear.getTime();

    // Convert milliseconds to days
    const millisecondsInADay = 1000 * 60 * 60 * 24;
    const daysSinceStart = Math.floor(differenceInMillis / millisecondsInADay) + 1; // Add 1 to include the first day

    return daysSinceStart;
}

