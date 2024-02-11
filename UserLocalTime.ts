export function UserLocalTime() {
  const now = new Date();
  const convertToSeconds = now.getTimezoneOffset() * 60 * 1000;
  const localTime = new Date(now.getTime() - convertToSeconds);
  const time = localTime.toISOString().slice(0, -5) + "+03:30";
  return time;
}
