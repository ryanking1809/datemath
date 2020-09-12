import { cloneDate, defaultDate, newDate } from "./dateHelpers";
import { addDurationToDate } from "./addDurationToDate";
import { largestWholeUnitBetween } from "./largestWholeUnitBetween";
import { cloneDuration } from "./durationHelpers";

export const simplifyDuration = (duration, dateRef) => {
    let startDate = defaultDate(dateRef, duration.dateRef);
    let endDate = addDurationToDate(startDate, duration);
    return largestWholeUnitBetween(startDate, endDate);
}