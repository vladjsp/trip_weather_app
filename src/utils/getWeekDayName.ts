export const getWeekDayName = (date: string) => {
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dateObj = new Date(date);
  const weekdayName = weekdays[dateObj.getUTCDay()];

  return weekdayName;
};
