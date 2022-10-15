import { writable } from 'svelte/store';
export let userAuthToken = writable();
export let globalData = writable();
export let contributionStatus = writable();
export let notificationList = writable([]);
export let notificationSettings = writable([]);
export let selectedNotification = writable({
	head: '',
	body: ''
});
export const verificationId = writable(null)
export let loading = writable(false);

export let updateLoading = (status) => {
	loading.set(status);
};

export let updateGlobalData = (data) => {
	globalData.set(data);
};
export let updateNotificationData = (data) => {
	notificationList.set(data);
};
export let updateNotificationSettings = (data) => {
	notificationSettings.set(data);
};
export let currentSideBarStatus = writable(null);
export let isFetching = writable(false)

export let updateFetching = (status)=>{
	isFetching.set(status)
}
