import { unitMs, standardUnits } from "./unitHelpers";
import { shiftAndCloneDatesForCalculation, moveDateWholeUnitDistance } from "./durationHelpers";
import { defaultDate } from './dateHelpers'

export const wholeUnitsBetween = (
	_startDate,
	_endDate,
	unit,
	multiple = 1
) => {
	_startDate = defaultDate(_startDate)
  	_endDate = defaultDate(_endDate)
	if (unit === "weeks") {
		unit = "days";
		multiple = 7;
	}
	const multiUnit = unitMs[unit] * multiple;

	// everything below is unecessary work for standard units of time
	if (standardUnits.includes(unit)) {
		return Math.trunc((_endDate - _startDate) / multiUnit);
	}

	let { startDate, endDate } = shiftAndCloneDatesForCalculation(
		_startDate,
		_endDate,
		unit
	);
	// move the end date to be whole units away from the start date
	const fullUnitEndDate = moveDateWholeUnitDistance(startDate, endDate, unit);
	// although units like days and months can have inconsistant values
	// we know the end date is whole units away from the start
	// and variance in those values are never large enough to cause issue
	// so we can just round the average value
	const fullUnitMs = fullUnitEndDate - startDate;
	let fullUnits = Math.round(fullUnitMs / unitMs[unit]);
	fullUnits = Math.trunc((fullUnits * unitMs[unit]) / multiUnit);
	return fullUnits;
};
