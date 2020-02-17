import { cloneDate, standardUnits, unitMs, unitChildren, unitGetters, unitSetters, smallestUnitSize } from "./unitHelpers";

export const roundDateToNearestUnit = (date, unit, multiple) => {
    date = cloneDate(date)
    // everything below is unecessary work for standard units of time
	if (standardUnits.includes(unit)) {
		return new Date(
			Math.round(date.getTime() / unitMs[unit] / multiple) * multiple
		);
    }
    let childUnit = unitChildren[unit];
    date = unitSetters[unit](
		date,
		Math.round(unitGetters[unit](date) / multiple) * multiple
	);
    while (childUnit) {
        date = unitSetters[childUnit](date, smallestUnitSize[childUnit]);
        childUnit = unitChildren[childUnit];
    }
    return date;
}

export const roundDateToNearestUnitAfter = (date, unit, multiple) => {
	date = cloneDate(date);
	// everything below is unecessary work for standard units of time
	if (standardUnits.includes(unit)) {
		return new Date(
			Math.ceil(date.getTime() / unitMs[unit] / multiple) * multiple
		);
	}
	date = unitSetters[unit](
		date,
		Math.ceil(unitGetters[unit](date) / multiple) * multiple
	);
	let childUnit = unitChildren[unit];
	while (childUnit) {
		date = unitSetters[childUnit](date, smallestUnitSize[childUnit]);
		childUnit = unitChildren[childUnit];
	}
    return date;
};

export const roundDateToNearestUnitBefore = (date, unit, multiple) => {
	date = cloneDate(date);
	// everything below is unecessary work for standard units of time
	if (standardUnits.includes(unit)) {
		return new Date(
			Math.floor(date.getTime() / unitMs[unit] / multiple) * multiple
		);
	}
	date = unitSetters[unit](
		date,
		Math.floor(unitGetters[unit](date) / multiple) * multiple
	);
	let childUnit = unitChildren[unit];
	while (childUnit) {
		date = unitSetters[childUnit](date, smallestUnitSize[childUnit]);
		childUnit = unitChildren[childUnit];
	}
    return date;
};