import { writable } from "svelte/store";

export const modalClassName = writable('greenForm')
export const confirmModalState = writable(false)
export const profileEditForm = writable(null)