import { writable } from 'svelte/store';
export let userAuthToken = writable();
export let globalData = writable();
export let contributionStatus = writable()
export let updateGlobalData = (data) => {
    globalData.set(data);
}