import { writable } from "svelte/store";
import safeLottie from '$lib/assets/lottie/Flex-lottie.json'
import advLottie from '$lib/assets/lottie/Adventure-lottie.json'
import foundLottie from '$lib/assets/lottie/Founder-lottie.json'
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
let currentDate = new Date();
//let currentMonthIndex = currentDate.getMonth();
let paymentMounthIndex = 8;
// currentMonthIndex + 1;
export const subscribeAllState = writable(false);
export const plansModalState = writable(false);
export const errorMessageState = writable(false);
export const plansModalData = writable({
  class: "safe",
  name: "Green Safe",
  desc: "Safe as a bank account. This fund invests exclusively in green bonds and is the perfect option for Green Savers who want to be sure their funds are secure. The Green Safe plan involves a commitment to institutional and governmental bonds and enables subscribers to have a global, national, and local impact.",
  lottie:
  "https://uploads-ssl.webflow.com/627ca4b5fcfd5674acf264e6/6281f1b9694dfd538fae0ee3_Safe.json",
});
export const sortPersantageVariable = writable("all");
export const planModalData = [
  {
    safe: {
      head: "Green Safe",
      class: "safe",
      desc: "Safe as a bank account. This fund invests exclusively in green bonds and is the perfect option for Green Savers who want to be sure their funds are secure. The Green Safe plan involves a commitment to institutional and governmental bonds and enables subscribers to have a global, national, and local impact.",
      lottie:
        safeLottie,
    },
    adventure: {
      head: "Green Adventure",
      class: "adventure",
      desc: "A growth fund with more risks and more rewards. The Green Adventure plan is for Green Savers who want to put their funds toward ventures that have a significantly more direct impact on mitigating climate change and are devoted to creating and developing green businesses around the world. The plan also includes investments in green equities to reward companies that already make a difference and an activism investment fund for pressuring companies to become green.",
      lottie:
      advLottie,
    },
    founder: {
      head: "Green Change",
      class: "founder",
      desc: "The ESi future is green, and we want YOU to be part of it. Becoming a founder Green Saver involves owning part of ESi. This option is limited to a predetermined target, and you will own a portion of ESi based on your contribution up to a collective 35% of ESi capital. Our vision is to create a sustainable green finance ecosystem making ethical green investing accessible. Collectively, we plan to become the most prominent green investor and green financial product provider.",
      lottie:
      foundLottie,
    },
  },
];

export const contributionData = writable({
  period: {},
  country: {
    countryId: 5234974,
    countryName: "France",
    "2DigitCode": "FR",
    phoneCode: "+33",
    currency: {
      currencyId: 5235201,
      currencyName: "Euro",
      symbol: "€",
      code: "EUR",
    },
    icon: {
      image: {
        mime: "image/png",
        data: "iVBORw0KGgoAAAANSUhEUgAAAfQAAAFOBAMAAACCqfKqAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURf///wBmtO4VHwBms+Lj5O/w8NTV1+0VH+4YIKWyzdyxoABote4dIOwYH/9mHwAVs3vlHIgAAAJRSURBVHja7dShSqRRHMbhgyBjMDicaJMBLQMeDm750jDRYjFssBoEiwgatAwGr2Bh+6ZNDt8diLBdvCDde3gn+fzu4OH9n1POv21lObQ+Ddbq+OMy3vXhQbibj7LsQ+3BWq/HJd7k/i7c6qmc9rpOrj60+pKn776mV5/PyrKNLUn/OqH46mdlcpemv87KYuxZ+rTlD/5s5yhNf38ry/0+Rg++t738wW/9S9Of/x98za6+rnub+ObS9Mcvep2m28TqB/HQ0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHRN0rfb1F4bcd5+m6e/lEWvQ5J+bqNG6BPHtLy+awsWh+T9D7tL3H59tbqOdxqVk7Dq9eWp2+XnXl69cO3sqhD9K3XsZ2cx7uIP/Wj2/Lzd7xfl/Gu/sb78wlFo0fkzZ4s4AAAAABJRU5ErkJggg==",
      },
    },
  },
  amount: "600",
  monthlyValue: 600,
  nextPaymentDay: 1,
  nextPaymentMonth: months[paymentMounthIndex],
});
export const allocatedContributions = writable({
  safe: 0,
  safeName: "0 of Total Contribution",
  adventure: 0,
  adventureName: "0 of Total Contribution",
  founder: 0,
  founderName: "0 of Total Contribution",
});
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

