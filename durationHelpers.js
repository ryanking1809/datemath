import { cloneDate, unitChildren, unitSetters, unitGetters, isLastUnit, unitMs } from "./unitHelpers";

export const shiftAndCloneDatesForCalculation = (
	startDate = new Date(),
	endDate = new Date(),
	unit
) => {
	startDate = cloneDate(startDate);
	endDate = cloneDate(endDate);
	// if a date is at the end of a month and can screw up future calculations
	// as the length of an month can vary - same with day length
	const adjustDay = !unit || unit === "months";
	const adjustHour = !unit || unit === "days";

	// if date is the end of the month we can move backwards 3 days
	// as every month has at least 28 days

	// note: we need to move the date backwards not forwards
	// as 31 Jan -> 28/29 Feb (01 Jan-01 Feb) would end up being 1 month long
	// and will break when adding a duration to a date, ie. 31 Jan + 1 month = 02 March
	let addHours =
		(adjustDay && isLastUnit["days"](startDate) ? -3 * 25 : 0) + // 25 hours to account for dst
		(adjustHour && isLastUnit["hours"](startDate) ? -2 : 0);
	if (addHours) {
		startDate = new Date(startDate.getTime() + addHours * unitMs["hours"]);
		endDate = new Date(endDate.getTime() + addHours * unitMs["hours"]);
	}
	return { startDate, endDate };
};

export const moveDateWholeUnitDistance = (
	startDate = new Date(),
	endDate = new Date(),
	unit
) => {
	let fullUnitEndDate = cloneDate(endDate);
	// to make the end date whole units distance away from the start
	// we make all smaller values equal to the start value
	let childUnit = unitChildren[unit];
	while (childUnit) {
		// end of month/day can a problem here if not adjusted prior
		fullUnitEndDate = unitSetters[childUnit](
			fullUnitEndDate,
			unitGetters[childUnit](startDate)
		);
		childUnit = unitChildren[childUnit];
	}
	// if the endDate unit in the opposite direction to the date direction
	// we will have accidently moved the dates outside the original range
	// and need to adjust by +/- 1 unit to move it back withing the range
	const direction = Math.sign(endDate - startDate) || 1;
	const newDirection = Math.sign(fullUnitEndDate - endDate);
	if (newDirection && direction == newDirection) {
		fullUnitEndDate = unitSetters[unit](
			fullUnitEndDate,
			unitGetters[unit](endDate) - direction
		);
	}
	return fullUnitEndDate;
};

export const durationDaysToWeeks = duration => {
	const days = duration.days;
	duration.weeks = Math.trunc(days / 7);
	duration.days = days - duration.weeks * 7;
	return duration;
};
