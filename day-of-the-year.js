function dayOfTheYear(date) {
    if (!(date instanceof Date) || isNaN(date)) {
        throw new Error('Invalid Date');
    }

    const year = date.getFullYear();

    const startOfYear = new Date(year, 0, 1); // January is month 0

    const differenceInMillis = date - startOfYear;

    const millisecondsInADay = 1000 * 60 * 60 * 24;
    const daysSinceStart = Math.floor(differenceInMillis / millisecondsInADay) + 1; // Add 1 to include the first day

    return daysSinceStart;
}

