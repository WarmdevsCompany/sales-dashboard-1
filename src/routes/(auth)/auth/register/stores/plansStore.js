import { get, writable } from "svelte/store";

export const plansModalData = writable({
  class: "safe",
  name: "Plan 1",
  desc: 'The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  lottie:
    "https://uploads-ssl.webflow.com/627ca4b5fcfd5674acf264e6/6281f1b9694dfd538fae0ee3_Safe.json",
});

export const plansModalState = writable(false);
export const errorMessageState = writable(false);
export const sortPersantageVariable = writable("all");

export let planData = [
  {
    sortName: "all",
    persentage: 0,
    visibility: true,
  },
  {
    sortName: "fourth",
    persentage: 25,
    visibility: true,
  },
  {
    sortName: "fourth",
    persentage: 50,
    visibility: true,
  },
  {
    sortName: "fourth",
    persentage: 75,
    visibility: true,
  },
  {
    sortName: "fourth",
    persentage: 100,
    visibility: true,
  },
];

export const planModalData = [
  {
    safe: {
      head: "Plan 1",
      class: "safe",
      desc: 'The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      lottie:
        "https://uploads-ssl.webflow.com/627ca4b5fcfd5674acf264e6/6281f1b9694dfd538fae0ee3_Safe.json",
    },
    adventure: {
      head: "Plan 2",
      class: "adventure",
      desc: 'The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      lottie:
        "https://uploads-ssl.webflow.com/627ca4b5fcfd5674acf264e6/628203b9fca88d2dde5b697f_Adventure.json",
    },
    founder: {
      head: "Plan 3",
      class: "founder",
      desc: 'The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      lottie:
        "https://uploads-ssl.webflow.com/627ca4b5fcfd5674acf264e6/628203e11d51fd22eede66f3_Founder.json",
    },
  },
];

export const portfolioItems = [
  {
    safe: {
      main: [
        "Lorem ipsum dalmet retaret",
        "Lorem ipsum dalmet retaret",
        "Lorem ipsum dalmet retaret",
      ],
      detail: "*depending on lorem and size",
    },
    adventure: {
      main: [
        "Lorem ipsum dalmet retaret",
        "Lorem ipsum retaret frew",
        "Lorem ipsum dalmet retaret",
      ],
      detail: false,
    },
    founder: {
      main: ["Lorem ipsum dalmet retaret"],
      detail: "Lorem ipsum ",
    },
  },
];
