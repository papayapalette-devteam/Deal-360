const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

export function __generateRandomString(length: number): string {
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }

    return result;
}

export function __formatDate(date: string | Date): string {
    let inputDate = new Date(date);
    if (isNaN(inputDate.getTime())) {
        throw new Error("Input must be a valid Date object");
    }

    const day = inputDate.getDate().toString().padStart(2, "0");

    const month = monthNames[inputDate.getMonth()];
    const year = inputDate.getFullYear();
    const hoursNum = inputDate.getHours();
    const hours = hoursNum % 12 || 12;
    const minutes = inputDate.getMinutes().toString().padStart(2, "0");
    const ampm = hoursNum >= 12 ? "PM" : "AM";

    const formattedDate = `${day} ${month}, ${year} ${hours}:${minutes} ${ampm}`;

    return formattedDate;
}

export function __setColor(status: string): string | undefined {
    if (status === "Complete") {
        return "#34c38f";
    } else if (status === "Pending") {
        return "#f1b44c";
    } else if (status === "Accept") {
        return "#50a5f1";
    } else if (status === "Cancel") {
        return "#f46a6a";
    } else if (status === "Spam") {
        return "#f46a6a";
    }
    return undefined;
}

export function __getTimeInfo(timeString: string | Date): string {
  const date = new Date(timeString);

  if (isNaN(date.getTime())) {
    throw new Error("Input must be a valid Date object");
  }

  const hoursNum = date.getHours();
  const minute = date.getMinutes().toString().padStart(2, "0");
  const amOrPm = hoursNum >= 12 ? "PM" : "AM";

  // Convert hour from 24-hour format to 12-hour format
  const hourIn12HourFormat = hoursNum % 12 || 12;

  return `${hourIn12HourFormat}:${minute} ${amOrPm}`;
}

export const handleErrorMessage = (res: any): string => {
  return (
    (res.data?.details && res.data.details.length > 0
      ? res.data.details[0].message
      : "") ||
    res.response?.response_message ||
    "Failed to save. Please try again."
  )
}
