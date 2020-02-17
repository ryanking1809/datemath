import { cloneDate, durationObj } from "./unitHelpers"

export const addDurationToDate = (date, duration) => {
    date = cloneDate(date)
    duration = { ...durationObj, ...duration };
    date.setMonth(date.getMonth() + duration.years * 12 + duration.months);
	date.setDate(date.getDate() + duration.weeks * 7 + duration.days);
	date.setHours(
		date.getHours() + duration.hours,
		date.getMinutes() + duration.minutes,
		date.getSeconds() + duration.seconds,
		date.getMilliseconds() + duration.milliseconds
	);
	return date;
}