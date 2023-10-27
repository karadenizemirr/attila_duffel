export const dateParser = (date: Date) => {
  try {
    const dateTime = new Date(date);
    const format_date = dateTime.toLocaleDateString("en", {
      month: "long",
      day: "numeric"
    });
    const format_time = dateTime.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: false
    });

    return {
      date: format_date,
      time: format_time
    };
  } catch (err) {
    return [];
  }
};