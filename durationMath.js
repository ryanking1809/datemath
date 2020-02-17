import { standardizeDuration } from "./durationHelpers"

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
    duration = {...duration}
    Object.keys(duration).forEach(unit => (duration[unit] *= multiplier));
	return duration;
}

export const divideDurationBy = (duration, multiplier) => {
	duration = { ...duration };
	Object.keys(duration).forEach(unit => (duration[unit] /= multiplier));
	return duration;
};

export const transfromDuration = (duration, transformer = (unit, val) => val ) => {
	duration = { ...duration };
	Object.keys(duration).forEach(unit => (duration[unit] = transformer(unit, duration[unit])));
	return duration;
};