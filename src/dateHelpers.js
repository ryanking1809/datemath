export const cloneDate = date => {
	return date ? new Date(date.getTime ? date.getTime() : date) : date;
};

export const newDate = () => new Date(1970, 0, 1) 