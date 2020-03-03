import { unitGetters, cloneDate, unitSetters, baseUnits } from "./unitHelpers";
import {
	shiftAndCloneDatesForCalculation,
	durationDaysToWeeks,
	standardDuration,
    cleanDuration
} from "./durationHelpers";
import { wholeUnitsBetween } from "./wholeUnitsBetween";

export const timeFromDate = (
	date = new Date()
) => {
    date = cloneDate(date);
    let time = cleanDuration({dateRef: date});
    time.milliseconds = date.getMilliseconds();
    time.seconds = date.getSeconds();
    time.minutes = date.getMinutes();
    time.hours = date.getMinutes();
	return time;
};

export const smallestTimeUnit = (duration) => {
    if (duration.milliseconds) return "milliseconds";
    if (duration.seconds) return "seconds";
    if (duration.minutes) return "minutes";
    if (duration.hours) return "hours";
}

export const smallestTimeUnitFromDate = (date = new Date()) => {
    return smallestTimeUnit(timeFromDate(date))
};
