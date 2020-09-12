export const cloneDate = date => {
	return date ? new Date(date.getTime ? date.getTime() : date) : date;
};

export const newDate = () => new Date(1970, 0, 1) 

export const defaultDate = (...args) => {
	let date;
	for (const arg of args) {
		date = new Date(arg && arg.getTime ? arg.getTime() : arg)
		if (date instanceof Date && date.getTime()) {
		break
		}
	}
	if (!(date instanceof Date) || !date.getTime()) {
		date = newDate()
	}
	return date;
}