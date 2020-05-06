import { simplifyRate } from "./simplifyRate";
import { durationToUnit } from "./durationToUnit";

export const ratePerUnit = (rate, unit) => {
    rate = simplifyRate(rate)
    const divider = durationToUnit(rate.per, unit)
    rate.amount /= divider
    let duration = {}
    duration[unit] = 1
    rate.per = duration
    return rate;
}