import { writable } from "svelte/store";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const amountErrorMessageState = writable(false);

export const contributionData = writable({
  period: {},
  country: {},
  amount: "",
  monthlyValue: 0,
  nextPaymentDate: {
    day: null,
    month: null,
    year: null,
  },
});

export const allocatedContributions = writable({
  safe: 0,
  safeName: "0 of Total Contribution",
  adventure: 0,
  adventureName: "0 of Total Contribution",
  founder: 0,
  founderName: "0 of Total Contribution",
});
