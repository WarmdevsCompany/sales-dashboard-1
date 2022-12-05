import {get, writable } from 'svelte/store';

export const stepCounter = writable(1);
export const headSteps = writable({
    firstStep: true,
    secondStep: false,
    thirdStep: false,
    fourthStep: false,
    fifthStep: false
})
export const popUpHeight = writable()
export function incrementStep() {
    stepCounter.update(n => n + 1)
}
export function decrementStep() {
    if(get(stepCounter) > 1){
        stepCounter.update(n => n - 1 )
    }
}
export const userAuthToken = writable()
export const clientSecretToken = writable()

export let subscribeAllState = writable(false)












