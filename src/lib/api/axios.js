import { variables } from '$lib/variables';
import { getCookie } from '$lib/functions/getCookie';
import axios from 'axios';
import { setCookie } from '../functions/setCookie';
import { goto } from '$app/navigation';
import { deleteCookie } from '../functions/deleteCookie';
const esiToken = getCookie('esiToken') || null;
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['accept'] = 'application/json';
const publicPath = axios.create({
	baseURL: variables.publicPath
});

const privatePath = axios.create({
	baseURL: variables.privatePath
});

// set default headers
privatePath.defaults.headers.common['Authorization'] = esiToken;

export const login = async (body) => {
	try {
		let response = await publicPath.post('/login', {
			login: body.login,
			password: body.password
		});
		if (response.data.status) {
			setCookie('esiToken', response.data.data.token, { secure: true, 'max-age': 84600 });
			privatePath.defaults.headers.common['Authorization'] = response.data.data.token;
			goto('/overview/general');
		} else {
			return response.data;
		}
	} catch (error) {
		console.error(error);
	}
};
export const verifyAccount = async (body) => {
	try {
		let response = await publicPath.post('/login', {
			login: body.login,
			password: body.password
		});
		return response.data;
	} catch (error) {
		console.error(error);
	}
};
export const requestValidation = async (body) => {
	try {
		let response = await privatePath.post('/requestValidation', {
			emailOrPhone: body
		});
		return response.data;
	} catch (error) {
		console.error(error);
	}
};
export const verifyCode = async (body) => {
	try {
		let response = await privatePath.post('/verifyCode', {
			code : body
		});
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

export const logout = () => {
	deleteCookie('esiToken');
	privatePath.defaults.headers.common['Authorization'] = '';
	goto('/auth/login');
};

export const getGeneralData = async () => {
	try {
		let response = await privatePath.post('/getGeneralInfo');
		if (response.data.status) {
			return response.data;
		} else {
			return response.data.errorMessage;
		}
	} catch (error) {
		console.error(error);
	}
};
export const changeLang = async (langId) => {
	try {
		let response = await privatePath.post('/changeLang', { langId: langId });
		if (response.data.status) {
			return response.data;
		} else {
			return response.data.errorMessage;
		}
	} catch (error) {
		console.error(error);
	}
};

export const changePhoto = async (objSrc) => {
	try {
		let response = await privatePath.post('/updateClientPhoto', { photo: objSrc });
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

export const changeNotificationSettings = async (id, value) => {
	try {
		let response = await privatePath.post('/changeNotificationSetting', {
			notificationId: id,
			notificationValue: value
		});
		if (response.data.status) {
			return response.data;
		} else {
			return response.data.errorMessage;
		}
	} catch (error) {
		console.error(error);
	}
};

export const changeContribution = async (amount, periodId) => {
	try {
		let response = await privatePath.post('/changeContribution', { amount, periodId });
		if (response.data.status) {
			return response.data;
		} else {
			return response.data.errorMessage;
		}
	} catch (error) {
		console.error(error);
	}
};

export const pauseContribution = async (periodId) => {
	try {
		let response = await privatePath.post('/pauseContribution', { monthPeriodId: periodId });
		if (response.data.status) {
			return response.data;
		} else {
			return response.data.errorMessage;
		}
	} catch (error) {
		console.error(error);
	}
};
export const restartContribution = async () => {
	try {
		let response = await privatePath.post('/restartContribution');
		if (response.data.status) {
			return response.data;
		} else {
			return response.data.errorMessage;
		}
	} catch (error) {
		console.error(error);
	}
};
export const stopContribution = async () => {
	try {
		let response = await privatePath.post('/stopContribution');
		if (response.data.status) {
			return response.data;
		} else {
			return response.data.errorMessage;
		}
	} catch (error) {
		console.error(error);
	}
};
export const changeContributionPlan = async (save, adv, founder) => {
	const body = {
		greenSafe: save,
		greenAdventure: adv,
		greenFounder: founder
	};
	try {
		let response = await privatePath.post('/changeContributionPlan', body);
		if (response.data.status) {
			return response.data;
		} else {
			return response.data.errorMessage;
		}
	} catch (error) {
		console.error(error);
	}
};
