export const formatDate = (date) => {
  const dateObj = new Date(date);

  let day = dateObj.getDate(),
    month = dateObj.getMonth() + 1,
    year = dateObj.getFullYear();

  if (day < 10) {
    day = "0" + day;
  }

  if (month < 10) {
    month = `0${month}`;
  }

  return `${year}-${month}-${day}`;
};

export const formatDateTime = (date) => {
  const input = new Date(date);

  const result = input.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  return result;
};
