import { standardizeDuration, cloneDuration } from "./durationHelpers"
import { normalizeDuration } from "./normalizeDuration";
import { subDurationFromDate, addDurationToDate } from "./addDurationToDate";
import { matchDurationUnits } from "./matchDurationUnits";
import { durationToUnit } from "./durationToUnit";
import { simplifyDuration } from "./simplifyDuration";

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

export const multiplyDurations = (leftDuration, rightDuration) => {
	const [lDuration, rDuration] = matchDurationUnits(leftDuration, rightDuration)
	const unit = Object.keys(lDuration)[0];
	const amount = lDuration[unit] *= rDuration[unit];
	let duration = {}
	duration[unit] = amount
	// powerDuration
	return {duration, power: 2};
}

export const divideDurations = (leftDuration, rightDuration) => {
	const [lDuration, rDuration] = matchDurationUnits(leftDuration, rightDuration)
	const unit = Object.keys(lDuration)[0]
	return lDuration[unit] / rDuration[unit]
}

export const dividePowerDurationByDuration = (powerDuration, duration) => {
	const powerDurationVal = simplifyDuration(powerDuration.duration)
	const unit = Object.keys(powerDurationVal)[0]
	const divider = durationToUnit(duration, unit)
	const amount = Object.values(powerDurationVal)[0] / divider
	let duration = {}
	duration[unit] = amount
	const power = powerDuration.power - 1
	if (power === 1) {
		return duration;
	} else if (power === 0) {
		return amount;
	} else {
		return { duration, power: 2 }
	}
}