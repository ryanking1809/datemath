import { simplifyRate } from "./simplifyRate";
import { durationToUnit } from "./durationToUnit";

export const matchRateUnits = (rate1, rate2) => {
    rate1 = simplifyRate(rate1);
    rate2 = simplifyRate(rate2);
    rate1Unit = Object.keys(rate1.per)[0];
    rate2Divider = durationToUnit(rate2.per, rate1Unit);
    rate2.amount /= rate2Divider;
    rate2.per = rate1.per;
    return [rate1, rate2];
}