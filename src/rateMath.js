import { cloneRate } from "./RateHelpers"
import { normalizeRate } from "./normalizeRate";
import { subRateFromDate, addRateToDate } from "./addRateToDate";
import { matchRateUnits } from "./matchRateUnits";
import { simplifyRate } from "./simplifyRate";
import { simplifyDuration } from "./simplifyDuration";

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
  amount = rate.amount / unitMs[Object.keys(rate.per)[0]] 
  amount *= unitMs[Object.keys(duration)[0]] 
  amount *= Object.values(duration)[0] 
  return amount
}