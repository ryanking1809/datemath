import {
	unitGetters,
	unitSetters,
	baseUnits,
} from "./unitHelpers";
import { cloneDate, defaultDate } from "./dateHelpers";
import { shiftAndCloneDatesForCalculation, durationDaysToWeeks, standardDuration } from "./durationHelpers";
import { wholeUnitsBetween } from "./wholeUnitsBetween";

export const durationBetween = (_startDate, _endDate) => {
    _startDate = defaultDate(_startDate);
    _endDate = defaultDate(_endDate)
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