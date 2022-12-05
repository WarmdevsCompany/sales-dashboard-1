import { get, writable } from "svelte/store";
export const allowItemIndexBilling = writable(1);
export const cardFormStatus = writable(false);
export const addressFormStatus = writable(false);
export const IBANFormStatus = writable(false);

export const cardAddedStatus = writable(false);
export const iBANAddedStatus = writable(false);

export const postalCode = writable(null)
export const billingeErrorMessage = writable({
  status: false,
  text: "Please add 1 billing method at least",
});
