# Datemath

Essentially `date-fns` and `duration-fns` with more flexibile duration functions. I expect `date-fns` to eventually catch up on duration functionality but I need something now.

    npm install @ryki/datemath

## Functions

    import { Function } from "@ryki/datemath"

| Function | Description |
| ----------- | ----------- |
| addDurationToDate(`Date`, `Duration`) -> `Date` | Adds duration to a date |
| subDurationFromDate(`Date`, `Duration`) -> `Date` | Subtracts duration from date |
| addUnitToDate(`Date`, `Unit`, `Number`) -> `Date` | Adds Number of Units to Date |
| subUnitFromDate(`Date`, `Unit`, `Number`) -> `Date`| Subtracts Number of Units from Date |
| durationBetween(`Date`, `Date`) -> `Duration` | Get duration between 2 dates. The earliest date being the first argument. |
| addDurations(`Duration`, `Duration`) -> `Duration` | Adds 2 durations |
| subsDurations(`Duration`, `Duration`) -> `Duration` | Subtracts the 2nd duration from the first (1st - 2nd) |
| multiplyDurationBy(`Duration`, `Number`) -> `Duration` | Multiplies duration by number |
| divideDurationBy(`Duration`, `Number`) -> `Duration` | Divides duration by number |
| durationToUnit(`Duration`, `Unit`, `Number`, `Date`) -> `Number` | Converts duration into a number of units or multiples of units. Date is a reference for calculating duration units. |
| largestWholeUnitBetween(`Date`, `Date`) -> `Duration` | Returns a single unit duration with the largest non-decimal unit. ie. 14 days -> 2 weeks, 15 days -> 15 days, 0.5 days -> 12 hours |
| normalizeDuration(`Duration`,`Date`) -> `Duration` | Converts duration into simplest possible whole unit form expressed using multiple units |
| simplifyDuration(`Duration`,`Date`) -> `Duration` | Converts duration into simplest possible who unit form |
| timeFromDate(`Date`) -> `Duration` | Returns time of day as a duration |
| smallestTimeUnitFromDate(`Date`) -> `Unit` | Returns smallest unit of time in the time of day  |
| unitsBetween(`Date`, `Date`, `Unit`, `Number`) -> `Number` | Get number of units or multiples of units between 2 dates. |
| wholeUnitsBetween(`Date`, `Date`, `Unit`, `Number`) -> `Number` | Get number of whole units or multiples of units between 2 dates. |