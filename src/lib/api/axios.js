import { variables } from '$lib/variables';
import { getCookie } from '$lib/functions/getCookie';
import axios from 'axios';
import { setCookie } from '../functions/setCookie';
import { goto } from '$app/navigation';
import { deleteCookie } from '../functions/deleteCookie';
import { updateFetching, updateGlobalData } from '../globalStore';
const esiToken = getCookie('esiToken') || null;
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['accept'] = 'application/json';
const publicPath = axios.create({
	baseURL: variables.publicPath
});

const privatePath = axios.create({
	baseURL: variables.privatePath
});

// --------------------    Public API     -----------------------
export const login = async (body) => {
	try {
		let response = await publicPath.post('/login', {
			login: body.login,
			password: body.password
		});
		if (response.data.status) {
			setCookie('esiToken', response.data.data.token, { secure: true, 'max-age': 84600 });
			privatePath.defaults.headers.common['Authorization'] = response.data.data.token;
			updateFetching(false)
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

export const forgotPassword = async (emailOrPhone) => {
	try {
		let response = await publicPath.post('/forgotPassword', { emailOrPhone });
		return response.data;
	} catch (error) {
		console.error(error);
	}
};
export const verifyCodeForgotPassword = async (code, emailOrPhone) => {
	try {
		let response = await publicPath.post('/verifyCodeForgotPassword', { code, emailOrPhone });
		return response.data;
	} catch (error) {
		console.error(error);
	}
};
export const changeForgotPassword = async (emailOrPhone, password, verificationId) => {
	try {
		let response = await publicPath.post('/changeForgotPassword', {
			emailOrPhone,
			password,
			verificationId
		});
		return response.data;
	} catch (error) {
		console.error(error);
	}
};
export const getTypesForWithdrawal = async (langId) => {
	try {
		let response = await publicPath.post('/getTypesForWithdrawal',{langId});
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

// --------------------    Private API     -----------------------

// set default headers
privatePath.defaults.headers.common['Authorization'] = esiToken;

export const setNewAuthHeaders = (header) => {
	setCookie('esiToken', header, { secure: true, 'max-age': 84600 });
	privatePath.defaults.headers.common['Authorization'] = header;
};

export const addWithdrawalPaymentMethod = async (body) => {
	try {
		let response = await privatePath.post('/addWithdrawalPaymentMethod', body);
		return response.data;
	} catch (error) {
		console.error(error);
		//redirect to 404
		if (error.response.status != 401 && error.response.data != 'Bad Authorization string')
			goto('/404');
		// // redirect to auth when
		if (error.response.data === 'Bad Authorization string') goto('/auth/login');
	}
};
export const makeWithdrawal = async (body) => {
	try {
		let response = await privatePath.post('/makeWithdrawal', body);
		return response.data;
	} catch (error) {
		console.error(error);
		// redirect to 404
		if (error.response.status != 401 && error.response.data != 'Bad Authorization string')
			goto('/404');
		// // redirect to auth when
		if (error.response.data === 'Bad Authorization string') goto('/auth/login');
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
		// redirect to 404
		if (error.response.status != 401 && error.response.data != 'Bad Authorization string')
			goto('/404');
		// redirect to auth when
		if (error.response.data === 'Bad Authorization string') goto('/auth/login');
	}
};
export const verifyCode = async (body) => {
	try {
		let response = await privatePath.post('/verifyCode', {
			code: body
		});
		return response.data;
	} catch (error) {
		console.error(error);
		// redirect to 404
		if (error.response.status != 401 && error.response.data != 'Bad Authorization string')
			goto('/404');
		// redirect to auth when
		if (error.response.data === 'Bad Authorization string') goto('/auth/login');
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
		return response.data;
	} catch (error) {
		console.error(error);
		// redirect to 404
		if (error.response.status != 401 && error.response.data != 'Bad Authorization string')
			goto('/404');
		// redirect to auth when
		if (error.response.data === 'Bad Authorization string') goto('/auth/login');
	}
};

export const updateGlobalDataObj = async ()=>{
	const data = await getGeneralData()
	updateGlobalData(data)
}

export const getAvatar = async () => {
	try {
		let response = await privatePath.post('/getAvatar');
		return response.data;
	} catch (error) {
		console.error(error);
		// redirect to 404
		if (error.response.status != 401 && error.response.data != 'Bad Authorization string')
			goto('/404');
		// redirect to auth when
		if (error.response.data === 'Bad Authorization string') goto('/auth/login');
	}
};

export const changeLang = async (langId) => {
	try {
		let response = await privatePath.post('/changeLang', { langId: langId });
		return response.data;
	} catch (error) {
		console.error(error);
		// redirect to 404
		if (error.response.status != 401 && error.response.data != 'Bad Authorization string')
			goto('/404');
		// redirect to auth when
		if (error.response.data === 'Bad Authorization string') goto('/auth/login');
	}
};
export const setNotificationViewed = async (id) => {
	let integerID = +id;
	try {
		let response = await privatePath.post('/setNotificationViewed', { notificationId: integerID });
		return response.data;
	} catch (error) {
		console.error(error);
		// redirect to 404
		if (error.response.status != 401 && error.response.data != 'Bad Authorization string')
			goto('/404');
		// redirect to auth when
		if (error.response.data === 'Bad Authorization string') goto('/auth/login');
	}
};
export const setNotificationRemoved = async (id) => {
	let integerID = +id;
	try {
		let response = await privatePath.post('/hideNotification', { notificationId: integerID });
		return response.data;
	} catch (error) {
		console.error(error);
		// redirect to 404
		if (error.response.status != 401 && error.response.data != 'Bad Authorization string')
			goto('/404');
		// redirect to auth when
		if (error.response.data === 'Bad Authorization string') goto('/auth/login');
	}
};
export const changePhoto = async (objSrc) => {
	try {
		let response = await privatePath.post('/updateClientPhoto', { photo: objSrc });
		return response.data;
	} catch (error) {
		console.error(error);
		// redirect to 404
		if (error.response.status != 401 && error.response.data != 'Bad Authorization string')
			goto('/404');
		// redirect to auth when
		if (error.response.data === 'Bad Authorization string') goto('/auth/login');
	}
};
export const changeUserName = async (username, verificationId) => {
	const body = { username, verificationId };
	try {
		let response = await privatePath.post('/changeUsername', body);
		return response.data;
	} catch (error) {
		console.error(error);
		// redirect to 404
		if (error.response.status != 401 && error.response.data != 'Bad Authorization string')
			goto('/404');
		// redirect to auth when
		if (error.response.data === 'Bad Authorization string') goto('/auth/login');
	}
};
export const changeFirstAndLastname = async (firstname, lastname, verificationId) => {
	const body = { firstname, lastname, verificationId };
	try {
		let response = await privatePath.post('/changeFirstAndLastname', body);
		return response.data;
	} catch (error) {
		console.error(error);
		// redirect to 404
		if (error.response.status != 401 && error.response.data != 'Bad Authorization string')
			goto('/404');
		// redirect to auth when
		if (error.response.data === 'Bad Authorization string') goto('/auth/login');
	}
};
export const changeGender = async (gender, verificationId) => {
	const body = { gender, verificationId };
	try {
		let response = await privatePath.post('/changeGender', body);
		return response.data;
	} catch (error) {
		console.error(error);
		// redirect to 404
		if (error.response.status != 401 && error.response.data != 'Bad Authorization string')
			goto('/404');
		// redirect to auth when
		if (error.response.data === 'Bad Authorization string') goto('/auth/login');
	}
};
export const changeDOB = async (dob, verificationId) => {
	const body = { dob, verificationId };
	try {
		let response = await privatePath.post('/changeDOB', body);
		return response.data;
	} catch (error) {
		console.error(error);
		// redirect to 404
		if (error.response.status != 401 && error.response.data != 'Bad Authorization string')
			goto('/404');
		// redirect to auth when
		if (error.response.data === 'Bad Authorization string') goto('/auth/login');
	}
};
export const changeEmail = async (email, verificationId) => {
	const body = { email, verificationId };
	try {
		let response = await privatePath.post('/changeEmail', body);
		return response.data;
	} catch (error) {
		console.error(error);
		// redirect to 404
		if (error.response.status != 401 && error.response.data != 'Bad Authorization string')
			goto('/404');
		// redirect to auth when
		if (error.response.data === 'Bad Authorization string') goto('/auth/login');
	}
};
export const changePassword = async (password, verificationId) => {
	const body = { password, verificationId };
	try {
		let response = await privatePath.post('/changePassword', body);
		return response.data;
	} catch (error) {
		console.error(error);
		// redirect to 404
		if (error.response.status != 401 && error.response.data != 'Bad Authorization string')
			goto('/404');
		// redirect to auth when
		if (error.response.data === 'Bad Authorization string') goto('/auth/login');
	}
};

export const changeNotificationSettings = async (id, value) => {
	try {
		let response = await privatePath.post('/changeNotificationSetting', {
			notificationId: id,
			notificationValue: value
		});
		return response.data;
	} catch (error) {
		console.error(error);
		// redirect to 404
		if (error.response.status != 401 && error.response.data != 'Bad Authorization string')
			goto('/404');
		// redirect to auth when
		if (error.response.data === 'Bad Authorization string') goto('/auth/login');
	}
};

export const changeContribution = async (amount, periodId) => {
	try {
		let response = await privatePath.post('/changeContribution', { amount, periodId });
		return response.data;
	} catch (error) {
		console.error(error);
		// redirect to 404
		if (error.response.status != 401 && error.response.data != 'Bad Authorization string')
			goto('/404');
		// redirect to auth when
		if (error.response.data === 'Bad Authorization string') goto('/auth/login');
	}
};

export const pauseContribution = async (periodId) => {
	try {
		let response = await privatePath.post('/pauseContribution', { monthPeriodId: periodId });
		return response.data;
	} catch (error) {
		console.error(error);
		// redirect to 404
		if (error.response.status != 401 && error.response.data != 'Bad Authorization string')
			goto('/404');
		// redirect to auth when
		if (error.response.data === 'Bad Authorization string') goto('/auth/login');
	}
};
export const restartContribution = async () => {
	try {
		let response = await privatePath.post('/restartContribution');
		return response.data;
	} catch (error) {
		console.error(error);
		// redirect to 404
		if (error.response.status != 401 && error.response.data != 'Bad Authorization string')
			goto('/404');
		// redirect to auth when
		if (error.response.data === 'Bad Authorization string') goto('/auth/login');
	}
};
export const stopContribution = async () => {
	try {
		let response = await privatePath.post('/stopContribution');
		return response.data;
	} catch (error) {
		console.error(error);
		// redirect to 404
		if (error.response.status != 401 && error.response.data != 'Bad Authorization string')
			goto('/404');
		// redirect to auth when
		if (error.response.data === 'Bad Authorization string') goto('/auth/login');
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
		return response.data;
	} catch (error) {
		console.error(error);
		// redirect to 404
		if (error.response.status != 401 && error.response.data != 'Bad Authorization string')
			goto('/404');
		// redirect to auth when
		if (error.response.data === 'Bad Authorization string') goto('/auth/login');
	}
};
