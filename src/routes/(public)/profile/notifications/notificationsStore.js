import { writable } from "svelte/store";

export let notificationList = writable([]);
export let loading = writable(false);