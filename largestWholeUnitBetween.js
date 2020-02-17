import { cloneDate, unitParents } from "./unitHelpers";
import { unitsBetween } from "./unitsBetween";

export const largestWholeUnitBetween = (
	_startDate = new Date(),
	_endDate = new Date()
) => {
	let duration = {};
	duration.dateRef = cloneDate(_startDate);
	let smallestUnit = null;
	let parentUnit = unitParents["milliseconds"];
	let unitVal = 0;
	while (parentUnit) {
		const units = unitsBetween(_startDate, _endDate, parentUnit);
		if (units && units % 1 === 0) {
			smallestUnit = parentUnit;
			unitVal = units;
			parentUnit = unitParents[parentUnit];
		} else {
			parentUnit = null;
			break;
		}
	}
	// set to milliseconds if no results
	smallestUnit = smallestUnit || "milliseconds";
	unitVal = unitVal || _endDate - _startDate;
	// check weeks
	if (smallestUnit === "days" && unitVal % 7 === 0) {
		smallestUnit = "weeks";
		unitVal = unitVal / 7;
	}
	duration[smallestUnit] = unitVal;
	return duration;
};
