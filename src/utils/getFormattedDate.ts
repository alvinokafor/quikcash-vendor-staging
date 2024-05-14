export default function getFormattedDate(date: string) {
  const formattedDate = Intl.DateTimeFormat("en-US", {
    day: "numeric",
    year: "numeric",
    month: "long",
    minute: "numeric",
    hour: "numeric",
  }).format(new Date(date));

  return formattedDate;
}
