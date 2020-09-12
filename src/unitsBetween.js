import { unitMs } from "./unitHelpers";
import { defaultDate, newDate } from "./dateHelpers";
import { wholeUnitsBetween } from './wholeUnitsBetween'

export const unitsBetween = (startDate, endDate, unit, multiple = 1) => {
  if (unit === 'weeks') {
    unit = 'days'
    multiple = 7
  }
	startDate = defaultDate(startDate)
  endDate = defaultDate(endDate)
  const multiUnit = unitMs[unit] * multiple
  const fullUnits = wholeUnitsBetween(startDate, endDate, unit, multiple)
  const fullUnitMs = fullUnits * multiUnit
  const partialUnitMs = endDate - startDate - fullUnitMs
  const partialUnits = partialUnitMs / multiUnit
  return fullUnits + partialUnits
}
