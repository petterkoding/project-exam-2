import { DateTime } from "luxon";

export default function formatDate(date) {
  return DateTime.fromISO(date).toFormat("LLL dd");
}
