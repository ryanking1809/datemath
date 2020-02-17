import { cloneDate } from "./unitHelpers";
import { addDurationToDate } from "./addDurationToDate";
import { durationBetween } from "./durationBetween";

export const normalizeDuration = (duration, dateRef) => {
    let startDate = dateRef || duration.dateRef || new Date();
    startDate = cloneDate(startDate);
    let endDate = addDurationToDate(startDate, duration);
    return durationBetween(startDate, endDate)
}