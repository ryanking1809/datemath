import { durationToUnit } from "./durationToUnit";
import { simplifyDuration } from "./simplifyDuration";

export const matchDurationUnits = (duration1, duration2) => {
    duration1 = simplifyDuration(rate1);
    duration2 = simplifyDuration(rate2);
    duration1Unit = Object.keys(duration1)[0]
    duration2Unit = Object.keys(duration1)[0]
    duration2Divider = durationToUnit(duration1, rate1Unit)
    let newDuration2 = {}
    newDuration2[duration1Unit] = duration2[duration2Unit] / duration2Divider
    return [duration1, newDuration2]
}