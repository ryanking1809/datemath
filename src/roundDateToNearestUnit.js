import { unitChildren, unitGetters, unitSetters, smallestUnitSize } from "./unitHelpers";
import { cloneDate } from "./dateHelpers";

export const roundDateToNearestUnit = (date, unit, multiple = 1) => {
    date = cloneDate(date)
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

export const roundDateToNearestUnitAfter = (date, unit, multiple = 1) => {
	date = cloneDate(date);
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

export const roundDateToNearestUnitBefore = (date, unit, multiple = 1) => {
	date = cloneDate(date);
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