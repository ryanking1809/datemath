import { unitMs } from "./unitHelpers";
import { newDate } from "./dateHelpers";
import { wholeUnitsBetween } from './wholeUnitsBetween'

export const unitsBetween = (startDate = newDate(), endDate = newDate(), unit, multiple = 1) => {
  if (unit === 'weeks') {
    unit = 'days'
    multiple = 7
  }
  const multiUnit = unitMs[unit] * multiple
  const fullUnits = wholeUnitsBetween(startDate, endDate, unit, multiple)
  const fullUnitMs = fullUnits * multiUnit
  const partialUnitMs = endDate - startDate - fullUnitMs
  const partialUnits = partialUnitMs / multiUnit
  return fullUnits + partialUnits
}
