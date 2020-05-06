import { standardizeDuration, cloneDuration } from "./durationHelpers"
import { normalizeDuration } from "./normalizeDuration";
import { subDurationFromDate, addDurationToDate } from "./addDurationToDate";

export const addDurations = (leftDuration, rightDuration) => {
    leftDuration = standardizeDuration(leftDuration);
    rightDuration = standardizeDuration(rightDuration);
    Object.keys(leftDuration).forEach(
		unit => (leftDuration[unit] += rightDuration[unit])
	);
	leftDuration.dateRef =
		leftDuration.dateRef ||
		rightDuration.dateRef && subDurationFromDate(
			rightDuration.dateRef,
			rightDuration
		);
    return normalizeDuration(leftDuration)
}

export const subDurations = (leftDuration, rightDuration) => {
	leftDuration = standardizeDuration(leftDuration);
	rightDuration = standardizeDuration(rightDuration);
	Object.keys(leftDuration).forEach(
		unit => (leftDuration[unit] -= rightDuration[unit])
    );
	leftDuration.dateRef = leftDuration.dateRef || rightDuration.dateRef && addDurationToDate(rightDuration.dateRef, rightDuration);
    return normalizeDuration(leftDuration);
};

export const multiplyDurationBy = (duration, multiplier) => {
    duration = cloneDuration(duration);
    Object.keys(duration).forEach(unit => (duration[unit] *= multiplier));
	return normalizeDuration(duration);
}

export const divideDurationBy = (duration, divider) => {
	duration = cloneDuration(duration);
	Object.keys(duration).forEach(unit => (duration[unit] /= divider));
	return normalizeDuration(duration);
};

export const transformDuration = (duration, transformer = (unit, val) => val ) => {
	duration = cloneDuration(duration);
	Object.keys(duration).forEach(unit => (duration[unit] = transformer(unit, duration[unit])));
	return normalizeDuration(duration);
};