export const cloneDate = date => {
	return date ? new Date(date.getTime ? date.getTime() : date) : date;
};

export const newDate = () => new Date(1970, 0, 1) 

export const defaultDate = (...args) => {
	let date;
	for(const arg of args) {
		date = new Date(date.getTime ? date.getTime() : date)
		if (date !== 'Invalid Date') {
			break;
		}
	}
	if (date === 'Invalid Date') {
		date = newDate();
	}
	return date;
}