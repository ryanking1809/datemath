import { standardUnits, baseUnitMuliplyers, unitMs } from "./unitHelpers";
import { shiftAndCloneDatesForCalculation, moveDateWholeUnitDistance } from "./durationHelpers";

export const unitsBetween = (
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
		return (_endDate - _startDate) / multiUnit;
	}

	let { startDate, endDate } = shiftAndCloneDatesForCalculation(
		_startDate,
		_endDate,
		unit
	);
	const fullUnitEndDate = moveDateWholeUnitDistance(startDate, endDate, unit);
	const fullUnitMs = fullUnitEndDate - startDate;
	let fullUnits = Math.round(fullUnitMs / unitMs[unit]);
	fullUnits = Math.trunc((fullUnits * unitMs[unit]) / multiUnit);

	// just divide the partial units by average unit definitions
	// the decimal value itself probably isn't that valuable
	// as long as addDurationToDate correctly reverses the value
	const partialUnitMs = endDate - startDate - fullUnitMs;
	const partialUnits = partialUnitMs / multiUnit;
	return fullUnits + partialUnits;
};
