export function formatDay(date) {
  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()
  return `${day}/${month}/${year}`
}

export function objectToArray(obj) {
  return Object.entries(obj).map(([name, value]) => (
    { name, value }
  ))
}
