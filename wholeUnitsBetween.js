import { baseUnitMuliplyers, unitMs, standardUnits } from "./unitHelpers";
import { shiftAndCloneDatesForCalculation, moveDateWholeUnitDistance } from "./durationHelpers";

export const wholeUnitsBetween = (
	_startDate = new Date(),
	_endDate = new Date(),
	unit,
	multiplier = 1
) => {
	const baseUnitMuliplyer = baseUnitMuliplyers[unit];
	baseUnitMuliplyer && (unit = baseUnitMuliplyer.unit);
	baseUnitMuliplyer && (multiplier = baseUnitMuliplyer.multiplier);
	const multiUnit = unitMs[unit] * multiplier;

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
