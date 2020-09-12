import { cloneDate, defaultDate } from './dateHelpers'
import { addDurationToDate } from "./addDurationToDate";
import { durationBetween } from "./durationBetween";

export const normalizeDuration = (duration, dateRef) => {
    let startDate = defaultDate(dateRef, duration.dateRef);
    let endDate = addDurationToDate(startDate, duration);
    return durationBetween(startDate, endDate)
}