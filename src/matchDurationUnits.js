import { durationToUnit } from "./durationToUnit";
import { simplifyDuration } from "./simplifyDuration";

export const matchDurationUnits = (duration1, duration2) => {
    duration1 = simplifyDuration(duration1)
    duration2 = simplifyDuration(duration2)
    const duration1Unit = Object.keys(duration1)[0]
    const duration2Unit = Object.keys(duration2)[0]
    const duration2Amount = durationToUnit(duration2, duration1Unit)
    let newDuration2 = {}
    newDuration2[duration1Unit] = duration2Amount
    return [duration1, newDuration2]
}