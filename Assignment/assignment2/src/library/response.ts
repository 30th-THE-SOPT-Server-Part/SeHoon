export const success = (status: number, message: string, data?: object) => {
	return {
		status,
		success: true,
		message,
		data,
	};
};

export const fail = (status: number, message: string) => {
	return {
		status,
		success: false,
		message,
	};
};
