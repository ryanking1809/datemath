import {
	durationObj,
	unitGetters,
	cloneDate,
	unitSetters,
	baseUnits,
} from "./unitHelpers";
import { shiftAndCloneDatesForCalculation, durationDaysToWeeks } from "./durationHelpers";
import { wholeUnitsBetween } from "./wholeUnitsBetween";

export const durationBetween = (_startDate = new Date(), _endDate = new Date()) => {
    let { startDate, endDate } = shiftAndCloneDatesForCalculation(
		_startDate,
        _endDate	
    );
    let duration = {...durationObj}
    duration.dateRef = cloneDate(_startDate);
    const units = [...baseUnits].reverse();
    units.forEach(unit => {
        duration[unit] = wholeUnitsBetween(startDate, endDate, unit);
        startDate = unitSetters[unit](
			startDate,
			unitGetters[unit](startDate) + duration[unit]
		);
    })
    duration = durationDaysToWeeks(duration);
    return duration;
}