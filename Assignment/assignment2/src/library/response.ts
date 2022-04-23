const success = (status: number, message: string, data?: object) => {
	return {
		status,
		success: true,
		message,
		data,
	};
};

const fail = (status: number, message: string) => {
	return {
		status,
		success: false,
		message,
	};
};

const responses = {
	success,
	fail,
};

export default responses;
