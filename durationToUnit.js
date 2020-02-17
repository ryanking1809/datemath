import { cloneDate } from "./unitHelpers";
import { addDurationToDate } from "./addDurationToDate";
import { unitsBetween } from "./unitsBetween";

export const durationToUnit = (duration, unit, multiple = 1, dateRef) => {
	let startDate = dateRef || duration.dateRef || new Date();
	startDate = cloneDate(startDate);
	let endDate = addDurationToDate(startDate, duration);
	return unitsBetween(startDate, endDate, unit, multiple);
};
