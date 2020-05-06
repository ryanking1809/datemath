import { cloneDate, newDate } from "./dateHelpers";
import { cloneRate } from "./rateHelpers";
import { simplifyDuration } from "./simplifyDuration";

export const simplifyRate = (rate) => {
    rate = cloneRate(rate);
    rate.per = simplifyDuration(rate.per);
    const durationUnit = Object.keys(rate.per)[0];
    const durationAmount = Object.values(rate.per)[0];
    rate.amount /= durationAmount;
    rate.per[durationUnit] = 1
    return rate;
}