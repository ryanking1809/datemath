const millisecondsMs = 1
const secondsMs = 1000
const minutesMs = secondsMs * 60
const hoursMs = minutesMs * 60
const daysMs = hoursMs * 24
const weeksMs = daysMs * 7
const yearsMs = daysMs * 365.25
const monthsMs = yearsMs / 12;

export const unitMs = {
    milliseconds: millisecondsMs,
    seconds: secondsMs,
    minutes: minutesMs,
    hours: hoursMs,
    days: daysMs,
    weeks: weeksMs,
    months: monthsMs,
    years: yearsMs,
}

export const baseUnits = [
    "milliseconds",
    "seconds",
    "minutes",
    "hours",
    "days",
    "months",
    "years",
]

export const standardUnits = [
	"milliseconds",
	"seconds",
	"minutes",
	"hours"
];

export const unitGetters = {
    milliseconds: date => date.getMilliseconds(),
    seconds: date => date.getSeconds(),
    minutes: date => date.getMinutes(),
    hours: date => date.getHours(),
    days: date => date.getDate(),
    months: date => date.getMonth(),
    years: date => date.getFullYear(),
}

export const unitSetters = {
	milliseconds: (date, val) => cloneDate(date.setMilliseconds(val)),
	seconds: (date, val) => cloneDate(date.setSeconds(val)),
	minutes: (date, val) => cloneDate(date.setMinutes(val)),
	hours: (date, val) => cloneDate(date.setHours(val)),
	days: (date, val) => cloneDate(date.setDate(val)),
	months: (date, val) => cloneDate(date.setMonth(val)),
	years: (date, val) => cloneDate(date.setFullYear(val))
};

export const unitChildren = {
	milliseconds: null,
	seconds: "milliseconds",
	minutes: "seconds",
	hours: "minutes",
	days: "hours",
	months: "days",
	years: "months",
};

export const unitParents = {
	milliseconds: "seconds",
	seconds: "minutes",
	minutes: "hours",
	hours: "days",
	days: "months",
	months: "years",
	years: null,
};

export const isLastUnit = {
    milliseconds: date => date.getMilliseconds() === largestUnitSize.milliseconds(date) - 1,
    seconds: date => date.getSeconds() === largestUnitSize.seconds(date) - 1,
    minutes: date => date.getMinutes() === largestUnitSize.minutes(date) - 1,
    hours: date => date.getHours() === largestUnitSize.hours(date) - 1,
    days: date => date.getDate() === largestUnitSize.days(date),
    months: date => date.getMonth() === largestUnitSize.months(date) - 1,
    years: date => false
};

export const largestUnitSize = {
	milliseconds: date => 1000,
	seconds: date => 60,
	minutes: date => 60,
	hours: date => hoursInDay(date),
	days: date => daysInMonth(date),
	months: date => 12,
	years: date => Infinity
};

export const smallestUnitSize = {
	milliseconds: 0,
	seconds: 0,
	minutes: 0,
	hours: 0,
	days: 1,
	months: 0,
	years: 1
};

export const hoursInDay = date => {
    const startOfDay = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const dayAfter = new Date(
		date.getFullYear(),
		date.getMonth(),
		date.getDate()+1
	);
    return (dayAfter - startOfDay) / hoursMs;
}

export const daysInMonth = date => {
    // next month -1 day
    return new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
}

export const cloneDate = date => {
    return new Date(date.getTime ? date.getTime() : date);
}