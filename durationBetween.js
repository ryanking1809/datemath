import {
	unitGetters,
	unitSetters,
	baseUnits,
} from "./unitHelpers";
import { cloneDate, newDate } from "./dateHelpers";
import { shiftAndCloneDatesForCalculation, durationDaysToWeeks, standardDuration } from "./durationHelpers";
import { wholeUnitsBetween } from "./wholeUnitsBetween";

export const durationBetween = (_startDate = newDate(), _endDate = newDate()) => {
    let { startDate, endDate } = shiftAndCloneDatesForCalculation(
		_startDate,
        _endDate	
    );
    let duration = {...standardDuration}
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