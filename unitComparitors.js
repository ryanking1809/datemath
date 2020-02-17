import { unitGetters } from "./unitHelpers";

export const unitLessThan = (
	startDate = new Date(),
	endDate = new Date(),
	unit
) => {
	let unitGetter = unitGetters[unit];
	return unitGetter(startDate) < unitGetter(endDate);
};

export const unitLessThanEqual = (
	startDate = new Date(),
	endDate = new Date(),
	unit
) => {
	let unitGetter = unitGetters[unit];
	return unitGetter(startDate) <= unitGetter(endDate);
};

export const unitEqual = (
	startDate = new Date(),
	endDate = new Date(),
	unit
) => {
	let unitGetter = unitGetters[unit];
	return unitGetter(startDate) === unitGetter(endDate);
};

export const unitGreaterThan = (
	startDate = new Date(),
	endDate = new Date(),
	unit
) => {
	let unitGetter = unitGetters[unit];
	return unitGetter(startDate) > unitGetter(endDate);
};

export const unitGreaterThanEqual = (
	startDate = new Date(),
	endDate = new Date(),
	unit
) => {
	let unitGetter = unitGetters[unit];
	return unitGetter(startDate) >= unitGetter(endDate);
};
