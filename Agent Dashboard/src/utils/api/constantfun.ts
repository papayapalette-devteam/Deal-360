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
]

export function __authToken(): string | null {
  return localStorage.getItem("authUser")
}

export function __apiHeader() {
  return {
    headers: {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem("authUser") || "",
    },
  }
}

export function __apiFormHeader() {
  return {
    headers: {
      "Content-Type": "multipart/form-data",
      "auth-token": localStorage.getItem("authUser") || "",
    },
  }
}

export function __hasAnyValue(obj: Record<string, any>): boolean {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && obj[key] !== "" && obj[key] !== null) {
      return true
    }
  }
  return false
}

export function __generateRandomString(length: number): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  let result = ""

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    result += characters.charAt(randomIndex)
  }

  return result
}

export function __formatDate(date: string | Date): string {
  let inputDate = new Date(date)
  if (isNaN(inputDate.getTime())) {
    throw new Error("Input must be a valid Date object")
  }

  const day = inputDate.getDate().toString().padStart(2, "0")

  const month = monthNames[inputDate.getMonth()]
  const year = inputDate.getFullYear()
  const hoursNum = inputDate.getHours()
  const hours = hoursNum % 12 || 12
  const minutes = inputDate.getMinutes().toString().padStart(2, "0")
  const ampm = hoursNum >= 12 ? "PM" : "AM"

  const formattedDate = `${day} ${month}, ${year} ${hours}:${minutes} ${ampm}`

  return formattedDate
}

export function __formatDate2(date: string | Date): string {
  let inputDate = new Date(date)
  if (isNaN(inputDate.getTime())) {
    throw new Error("Input must be a valid Date object")
  }

  const day = inputDate.getDate().toString().padStart(2, "0")

  const month = (inputDate.getMonth() + 1).toString().padStart(2, "0")
  const year = inputDate.getFullYear()
  const formattedDate = `${year}-${month}-${day}`

  return formattedDate
}

export const __sleep = (time: number): Promise<void> =>
  new Promise<void>(resolve => setTimeout(() => resolve(), time))
