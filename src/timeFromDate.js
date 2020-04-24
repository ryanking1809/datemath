import { cloneDate, newDate } from "./dateHelpers";
import {
    cleanDuration
} from "./durationHelpers";

export const timeFromDate = (
	date = newDate()
) => {
    date = cloneDate(date);
    let time = cleanDuration({dateRef: date});
    time.milliseconds = date.getMilliseconds();
    time.seconds = date.getSeconds();
    time.minutes = date.getMinutes();
    time.hours = date.getHours();
	return time;
};

export const smallestTimeUnit = (duration) => {
    if (duration.milliseconds) return "milliseconds";
    if (duration.seconds) return "seconds";
    if (duration.minutes) return "minutes";
    if (duration.hours) return "hours";
}

export const smallestTimeUnitFromDate = (date = newDate()) => {
    return smallestTimeUnit(timeFromDate(date))
};
