import { cloneDate } from "./unitHelpers";
import { addDurationToDate } from "./addDurationToDate";
import { unitsBetween } from "./unitsBetween";

export const durationToUnit = (duration, unit, dateRef) => {
	let startDate = dateRef || duration.dateRef || new Date();
	startDate = cloneDate(startDate);
	let endDate = addDurationToDate(startDate, duration);
	return unitsBetween(startDate, endDate, unit);
};
