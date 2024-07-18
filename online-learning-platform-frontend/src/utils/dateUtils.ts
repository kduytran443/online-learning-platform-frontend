const getTimeAgoString = (date: string) => {
  const diffDays: number = getDiffDays(date);
  const daysOfAWeek: number = 7;

  if (diffDays <= 0) {
    return "Class has already started.";
  } else if (diffDays < daysOfAWeek) {
    return `Starting within ${diffDays} days.`;
  } else if (diffDays < 28) {
    const weeksLeft = Math.floor(diffDays / daysOfAWeek);
    return `Starting within ${weeksLeft} weeks.`;
  } else {
    // If more than or equal to 4 weeks
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    };
    const startDate = new Date(date);
    return startDate.toLocaleDateString("en-US", options);
  }
};

const getDiffDays = (date: string): number => {
  const now = new Date(); // Current date and time
  const startDate = new Date(date); // Start date and time
  const diffTime = startDate.getTime() - now.getTime(); // Time difference in milliseconds
  // Calculate the difference in days
  const diffDays: number = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

export { getTimeAgoString, getDiffDays };
