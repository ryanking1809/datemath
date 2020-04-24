import { unitGetters } from "./unitHelpers";
import { newDate } from "./dateHelpers";

export const unitLessThan = (
	startDate = newDate(),
	endDate = newDate(),
	unit
) => {
	let unitGetter = unitGetters[unit];
	return unitGetter(startDate) < unitGetter(endDate);
};

export const unitLessThanEqual = (
	startDate = newDate(),
	endDate = newDate(),
	unit
) => {
	let unitGetter = unitGetters[unit];
	return unitGetter(startDate) <= unitGetter(endDate);
};

export const unitEqual = (
	startDate = newDate(),
	endDate = newDate(),
	unit
) => {
	let unitGetter = unitGetters[unit];
	return unitGetter(startDate) === unitGetter(endDate);
};

export const unitGreaterThan = (
	startDate = newDate(),
	endDate = newDate(),
	unit
) => {
	let unitGetter = unitGetters[unit];
	return unitGetter(startDate) > unitGetter(endDate);
};

export const unitGreaterThanEqual = (
	startDate = newDate(),
	endDate = newDate(),
	unit
) => {
	let unitGetter = unitGetters[unit];
	return unitGetter(startDate) >= unitGetter(endDate);
};
