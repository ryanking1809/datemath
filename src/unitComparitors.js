import { unitGetters } from "./unitHelpers";
import { defaultDate } from './dateHelpers'

export const unitLessThan = (
	startDate,
	endDate,
	unit
) => {
	startDate = defaultDate(startDate);
	endDate = defaultDate(endDate);
	let unitGetter = unitGetters[unit];
	return unitGetter(startDate) < unitGetter(endDate);
};

export const unitLessThanEqual = (
	startDate,
	endDate,
	unit
) => {
	startDate = defaultDate(startDate);
	endDate = defaultDate(endDate);
	let unitGetter = unitGetters[unit];
	return unitGetter(startDate) <= unitGetter(endDate);
};

export const unitEqual = (
	startDate,
	endDate,
	unit
) => {
	startDate = defaultDate(startDate);
	endDate = defaultDate(endDate);
	let unitGetter = unitGetters[unit];
	return unitGetter(startDate) === unitGetter(endDate);
};

export const unitGreaterThan = (
	startDate,
	endDate,
	unit
) => {
	startDate = defaultDate(startDate);
	endDate = defaultDate(endDate);
	let unitGetter = unitGetters[unit];
	return unitGetter(startDate) > unitGetter(endDate);
};

export const unitGreaterThanEqual = (
	startDate,
	endDate,
	unit
) => {
	startDate = defaultDate(startDate);
	endDate = defaultDate(endDate);
	let unitGetter = unitGetters[unit];
	return unitGetter(startDate) >= unitGetter(endDate);
};
