import { writable } from "svelte/store";

export const listAfterSearch = writable([])
export const searching = writable(false)

export let updateListAfterSearch = (data) => {
	listAfterSearch.set(data);
};