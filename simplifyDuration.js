import { cloneDate } from "./unitHelpers";
import { addDurationToDate } from "./addDurationToDate";
import { largestWholeUnitBetween } from "./largestWholeUnitBetween";

export const simplifyDuration = (duration, dateRef) => {
    let startDate = dateRef || duration.dateRef || new Date();
    startDate = cloneDate(startDate);
    let endDate = addDurationToDate(startDate, duration);
    return largestWholeUnitBetween(startDate, endDate);
}