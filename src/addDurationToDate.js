import { unitMs } from "./unitHelpers"
import { defaultDate } from './dateHelpers'
import { standardizeDuration } from "./durationHelpers";

export const addDurationToDate = (date, duration) => {
    date = defaultDate(date)
	duration = standardizeDuration(duration);

	const months = duration.years * 12 + duration.months;
	const partialMonths = months % 1;
	const days = duration.weeks * 7 + duration.days;
	const partialDays = days % 1;
	const partialHours = duration.hours % 1
	const partialMinutes = duration.minutes % 1
	const partialSeconds = duration.seconds % 1

	// set date, month, year will always round to lowest integer
	// so we need to add the milliseconds for partial months
    date.setMonth(date.getMonth() + duration.years * 12 + duration.months);
	date.setDate(date.getDate() + duration.weeks * 7 + duration.days);
	date.setHours(
		date.getHours() + duration.hours,
		date.getMinutes() + duration.minutes,
		date.getSeconds() + duration.seconds,
		date.getMilliseconds() +
			duration.milliseconds +
			partialSeconds * unitMs["seconds"] +
			partialMinutes * unitMs["minutes"] +
			partialHours * unitMs["hours"] +
			partialDays * unitMs["days"] +
			partialMonths * unitMs["months"]
	);
	return date;
}

export const subDurationFromDate = (date, duration) => {
	date = defaultDate(date)
	duration = standardizeDuration(duration);

	const months = duration.years * 12 + duration.months;
	const partialMonths = months % 1;
	const days = duration.weeks * 7 + duration.days;
	const partialDays = days % 1;
	const partialHours = duration.hours % 1
	const partialMinutes = duration.minutes % 1
	const partialSeconds = duration.seconds % 1

	// set date, month, year will always round to lowest integer
	// so we need to add the milliseconds for partial months
	date.setMonth(date.getMonth() - duration.years * 12 - duration.months);
	date.setDate(date.getDate() - duration.weeks * 7 - duration.days);
	date.setHours(
		date.getHours() - duration.hours,
		date.getMinutes() - duration.minutes,
		date.getSeconds() - duration.seconds,
		date.getMilliseconds() -
			duration.milliseconds -
			partialSeconds * unitMs["seconds"] -
			partialMinutes * unitMs["minutes"] -
			partialHours * unitMs["hours"] -
			partialDays * unitMs["days"] -
			partialMonths * unitMs["months"]
	);
	return date;
};

export const addUnitToDate = (date, unit, value) => {
	let duration = {};
	duration[unit] = value;
	return addDurationToDate(date, duration)
}

export const subUnitFromDate = (date, unit, value) => {
	let duration = {};
	duration[unit] = value;
	return subDurationFromDate(date, duration);
};