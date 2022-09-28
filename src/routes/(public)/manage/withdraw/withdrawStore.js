import { writable } from "svelte/store";

export const modalClassName = writable('greenForm')
export const confirmModalState = writable(false)
export const withdrawMethod = writable('1')
export const withdrawBalance = writable()
export const withdrawFormState = writable(false)
export const withdrawContribution = writable({
    safePercentage: '',
    safeValue: '',
    adventurePercentage: '',
    adventureValue: '',
    founderPercentage: '',
    founderValue: ''
})