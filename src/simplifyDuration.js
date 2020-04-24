import { cloneDate, newDate } from "./dateHelpers";
import { addDurationToDate } from "./addDurationToDate";
import { largestWholeUnitBetween } from "./largestWholeUnitBetween";
import { cloneDuration } from "./durationHelpers";

export const simplifyDuration = (duration, dateRef) => {
    let startDate = dateRef || duration.dateRef || newDate();
    startDate = cloneDate(startDate);
    let endDate = addDurationToDate(startDate, duration);
    return largestWholeUnitBetween(startDate, endDate);
}