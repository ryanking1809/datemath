import { standardizeDuration, cloneDuration } from "./durationHelpers"
import { cloneDate } from "./unitHelpers";

export const addDurations = (leftDuration, rightDuration) => {
    leftDuration = standardizeDuration(leftDuration);
    rightDuration = standardizeDuration(rightDuration);
    Object.keys(leftDuration).forEach(
		unit => (leftDuration[unit] += rightDuration[unit])
	);
    return leftDuration
}

export const subDurations = (leftDuration, rightDuration) => {
	leftDuration = standardizeDuration(leftDuration);
	rightDuration = standardizeDuration(rightDuration);
	Object.keys(leftDuration).forEach(
		unit => (leftDuration[unit] -= rightDuration[unit])
    );
    return leftDuration
};

export const multiplyDurationBy = (duration, multiplier) => {
    duration = cloneDuration(duration);
    Object.keys(duration).forEach(unit => (duration[unit] *= multiplier));
	return duration;
}

export const divideDurationBy = (duration, multiplier) => {
	duration = cloneDuration(duration);
	Object.keys(duration).forEach(unit => (duration[unit] /= multiplier));
	return duration;
};

export const transfromDuration = (duration, transformer = (unit, val) => val ) => {
	duration = cloneDuration(duration);
	Object.keys(duration).forEach(unit => (duration[unit] = transformer(unit, duration[unit])));
	return duration;
};