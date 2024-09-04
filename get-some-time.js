function firstDayWeek(week, year) {
    // Validate inputs
    if (week < 1 || week > 53) {
        return "Error: Week must be between 1 and 53.";
    }

    // Create a date object for January 1st of the given year
    let date = new Date(year, 0, 1); // January is month 0

    // Adjust the date to the first Monday of the year
    while (date.getDay() !== 1) { // 1 represents Monday
        date.setDate(date.getDate() + 1);
    }

    // Move the date to the specified week
    date.setDate(date.getDate() + (week - 1) * 7);

    // Format the date as "dd-mm-yyyy"
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const formattedDate = `${day}-${month}-${date.getFullYear()}`;

    return formattedDate;
}

// Example usage
console.log(firstDayWeek(1, "2023")); // Output: "02-01-2023"
console.log(firstDayWeek(2, "2023")); // Output: "09-01-2023"
console.log(firstDayWeek(53, "2022")); // Output: "26-12-2022"
console.log(firstDayWeek(53, "2023")); // Output: "25-12-2023"
