import { writable } from 'svelte/store';
import safeLottie from '$lib/assets/lottie/Flex-lottie.json';
import advLottie from '$lib/assets/lottie/Adventure-lottie.json';
import foundLottie from '$lib/assets/lottie/Founder-lottie.json';
const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];
let currentDate = new Date();
//let currentMonthIndex = currentDate.getMonth();
let paymentMounthIndex = 8;
// currentMonthIndex + 1;
export const subscribeAllState = writable(false);
export const plansModalState = writable(false);
export const errorMessageState = writable(false);
export const plansModalData = writable({
	class: 'safe',
	name: 'Plan 1',
	desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised',
	lottie:
		'https://uploads-ssl.webflow.com/627ca4b5fcfd5674acf264e6/6281f1b9694dfd538fae0ee3_Safe.json'
});
export const sortPersantageVariable = writable('all');
export const planModalData = [
	{
		safe: {
			head: 'Plan 2',
			class: 'safe',
			desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised',
			lottie: safeLottie
		},
		adventure: {
			head: 'Plan 3',
			class: 'adventure',
			desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised',
			lottie: advLottie
		},
		founder: {
			head: 'Green Change',
			class: 'founder',
			desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised',
			lottie: foundLottie
		}
	}
];

export const allocatedContributions = writable({
	safe: 0,
	safeName: '0 of Total Contribution',
	adventure: 0,
	adventureName: '0 of Total Contribution',
	founder: 0,
	founderName: '0 of Total Contribution'
});
export const sumOfPlans = writable(0);

export let planData = [
	{
		sortName: 'all',
		persentage: 0,
		visibility: true
	},
	{
		sortName: 'fourth',
		persentage: 25,
		visibility: true
	},
	{
		sortName: 'fourth',
		persentage: 50,
		visibility: true
	},
	{
		sortName: 'fourth',
		persentage: 75,
		visibility: true
	},
	{
		sortName: 'fourth',
		persentage: 100,
		visibility: true
	}
];
