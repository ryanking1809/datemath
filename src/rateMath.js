import { cloneRate } from "./rateHelpers"
import { matchRateUnits } from "./matchRateUnits";
import { simplifyRate } from "./simplifyRate";
import { simplifyDuration } from "./simplifyDuration";
import { unitMs } from "./unitHelpers";
import { ratePerUnit } from "./ratePerUnit";

export const addRates = (leftRate, rightRate) => {
	const [lRate, rRate] = matchRateUnits(leftRate, rightRate)
	lRate.amount += rRate.amount;
    return lRate
}

export const subRates = (leftRate, rightRate) => {
	const [lRate, rRate] = matchRateUnits(leftRate, rightRate)
	lRate.amount -= rRate.amount
	return lRate
};

export const multiplyRateBy = (rate, multiplier) => {
    rate = cloneRate(rate);
    rate.amount *= multiplier;
	return rate;
}

export const divideRateBy = (rate, divider) => {
	rate = cloneRate(rate);
    rate.amount /= divider
	return Rate;
};

export const multiplyRateByDuration = (rate, duration) => {
	rate = simplifyRate(rate)
	duration = simplifyDuration(duration)
	let amount = rate.amount / unitMs[Object.keys(rate.per)[0]] 
	amount *= unitMs[Object.keys(duration)[0]] 
	amount *= Object.values(duration)[0] 
	return amount
}

export const divideNumberByRate = (number, rate) => {
	rate = simplifyRate(rate)
	number /= rate.amount
	const unit = Object.keys(rate.per)[0]
	let duration = {}
	duration[unit] = number
	return duration
}

export const divideNumberByDuration = (number, duration) => {
	return cloneRate({amount: number, duration})
}