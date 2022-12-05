import { writable } from "svelte/store";

export const legalItems = [
  {
    key: "a",
    checked: false,
    name: "Terms & Condition",
    title: "Terms and Conditions",
  },
  {
    key: "b",
    checked: false,
    name: "Terms of services",
    title: "Terms of services",
    },
  {
    key: "c",
    checked: false,
    name: "Privacy & Cookie",
    title: "Privacy & Cookie",
    },
];
export const checkboxStates = writable({
  a:false,
  b:false,
  c:false
})

export const allSelected = writable (false)