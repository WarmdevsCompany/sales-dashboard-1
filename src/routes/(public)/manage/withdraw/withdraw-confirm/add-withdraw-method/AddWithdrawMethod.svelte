<script>
	import { getIdByName } from '$lib/functions/getIdByName.js';
	import { withdrawBalance, withdrawContribution } from '../../withdrawStore';
	import AddressForm from './AddressForm.svelte';
	import BankAccountForm from './BankAccountForm.svelte';
	import { t } from '$lib/translations/i18n.js';
	import { globalData, verificationId, updateGlobalData, isFetching } from '$lib/globalStore';
	import { slide } from 'svelte/transition';
	import { createForm } from 'svelte-forms-lib';
	import Dropdown from '$lib/components/Dropdown.svelte';
	import * as yup from 'yup';
	import { afterUpdate, onMount } from 'svelte';
	import Preloader from '$lib/components/Preloader.svelte';
	import {
		addWithdrawalPaymentMethod,
		getTypesForWithdrawal,
		makeWithdrawal,
		updateGlobalDataObj
	} from '$lib/api/axios';
	export let submitBtnText = $t('SAVE'),
		withdrawRequestProcessed, selectedPaymentMethod;
	let isLoading = false,
		formStep = 1,
		verifyId = $verificationId,
		globalLegalType = $t('MANAGE_LEGAL_TYPE') + '*',
		globalLegalTypeError = '',
		legalTypeArray = [],
		paymentMethodTypes = [],
		accountTypeArray = [],
		accountMethodTypes = [],
		legalTypeId = false,
		validationFormData = {
			initialValues: null,
			validationSchema: null,
			initialPrivateValues: null,
			validationPrivateSchema: null
		},
		mainForm;
	const activeCurrency = $globalData.data.currency.code;
	const userCountry = $globalData.data.country.countryName;
	const userCountryId = $globalData.data.country.countryId;
	const userCurrencyId = $globalData.data.currency.currencyId;
	$: {
		verifyId,
			globalLegalType,
			globalLegalTypeError,
			withdrawRequestProcessed,
			validationFormData,
			mainForm;
	}

	afterUpdate(()=>{
		legalTypeId = getIdByName(globalLegalType, paymentMethodTypes)
	})

	// Bussiness or Private
	const ivPrivate = {
		firstName: '',
		lastName: ''
	};

	const yupPrivate = {
		firstName: yup.string().required($t('ENTER_FIRST_NAME')),
		lastName: yup.string().required($t('ENTER_LAST_NAME'))
	};

	const ivBussiness = { fullName: '' };
	const yupBussiness = {
		fullName: yup.string().required($t('ENTER_FULL_NAME'))
	};

	// Euro or UK or US
	const ivBankEuro = { iban: '' };
	const yupBankEuro = { iban: yup.string().required($t('ENTER_IBAN')) };
	const ivBankUK = { sortCode: '', ibanOrAccountNumber: '' };

	const yupBankUK = {
		sortCode: yup.number().typeError($t('NUMBER_VALIDATION')).required($t('ENTER_SHORT_CODE')),
		ibanOrAccountNumber: yup.string().required($t('ENTER_IBAN_OR_AN'))
	};

	const ivBankUS = { routingNumber: '', accountNumber: '', accountType: '' };


	const yupBankUS = {
		routingNumber: yup.number().typeError($t('NUMBER_VALIDATION')).required($t('ENTER_ROUTING_NUMB')),
		accountNumber: yup.number().typeError($t('NUMBER_VALIDATION')).required($t('ENTER_ACCOUNT_NUMB')),
		accountType: yup.string().required($t('CHOOSE_ACCOUNT_TYPE'))
	};

	const ivAddressData = { state: '', zipCode: '', city: '', address: '' };
	let yupAddressDataRequired = {
		state: yup.string().required($t('ENTER_STATE')),
		zipCode: yup.number().typeError($t('NUMBER_VALIDATION')).required($t('ENTER_ZIP')),
		city: yup.string().required($t('ENTER_CITY')),
		address: yup.string().required($t('ENTER_ADDRESS'))
	};

	let yupAddressData = {
		state: yup.string(),
		zipCode: yup.string().nullable(),
		city: yup.string(),
		address: yup.string()
	};

	const ivPrivateUS = { ...ivPrivate, ...ivBankUS, ...ivAddressData };
	const ivPrivateUK = { ...ivPrivate, ...ivBankUK, ...ivAddressData };
	const ivPrivateEURO = { ...ivPrivate, ...ivBankEuro, ...ivAddressData };

	const ivBussinessUS = { ...ivBussiness, ...ivBankUS, ...ivAddressData };
	const ivBussinessUK = { ...ivBussiness, ...ivBankUK, ...ivAddressData };
	const ivBussinessEURO = { ...ivBussiness, ...ivBankEuro, ...ivAddressData };

	const vsPrivateUS = { ...yupPrivate, ...yupBankUS, ...yupAddressDataRequired };
	const vsPrivateUK = { ...yupPrivate, ...yupBankUK, ...yupAddressDataRequired };
	const vsPrivateEURO = { ...yupPrivate, ...yupBankEuro, ...yupAddressData };

	const vsBussinessUS = { ...yupBussiness, ...yupBankUS, ...yupAddressDataRequired };
	const vsBussinessUK = { ...yupBussiness, ...yupBankUK, ...yupAddressDataRequired };
	const vsBussinessEURO = { ...yupBussiness, ...yupBankEuro, ...yupAddressData };

	const checkFormStatus = () => {
		if (activeCurrency === 'EUR') {
			validationFormData.initialValues = ivBussinessEURO;
			validationFormData.validationSchema = vsBussinessEURO;

			validationFormData.initialPrivateValues = ivPrivateEURO;
			validationFormData.validationPrivateSchema = vsPrivateEURO;
		} else if (userCountryId === 5235134) {
			validationFormData.initialValues = ivBussinessUS;
			validationFormData.validationSchema = vsBussinessUS;

			validationFormData.initialPrivateValues = ivPrivateUS;
			validationFormData.validationPrivateSchema = vsPrivateUS;
		} else {
			validationFormData.initialValues = ivBussinessUK;
			validationFormData.validationSchema = vsBussinessUK;

			validationFormData.initialPrivateValues = ivPrivateUK;
			validationFormData.validationPrivateSchema = vsPrivateUK;
		}
	};
	checkFormStatus();
	const createRequestWithdrawalObj = (countryId, currency, currencyId, formData) => {
		let body = {
			paymentMethodTypeId: null,
			currencyId: null,
			countryId: null,
			fullName: null,
			firstName: null,
			lastName: null,
			routingNumber: null,
			sortCode: null,
			accountNumber: null,
			accountTypeId: null,
			state: null,
			zipcode: null,
			city: null,
			address: null,
			verificationId: $verificationId,
			withdrawalMethodId: null,
			amount: $withdrawBalance,
			greenSafe: $withdrawContribution.safeValue,
			greenAdventure: $withdrawContribution.adventureValue,
			greenFounder: $withdrawContribution.founderValue
		};

		if (legalTypeId === 5240596) {
			body.paymentMethodTypeId = 5240596;
			body.fullName = formData.fullName;
		}
		if (legalTypeId === 5240597) {
			body.paymentMethodTypeId = 5240597;
			body.firstName = formData.firstName;
			body.lastName = formData.lastName;
		}
		if (currency === 'EUR') {
			body.accountNumber = formData.iban;
		} else if (countryId === 5235134) {
			const accountTypeId = getIdByName(formData.accountType, accountMethodTypes);
			body.routingNumber = formData.routingNumber;
			body.accountNumber = formData.accountNumber;
			body.accountTypeId = accountTypeId;
		} else {
			body.sortCode = formData.sortCode;
			body.accountNumber = formData.ibanOrAccountNumber;
		}
		body.countryId = countryId;
		body.currencyId = currencyId;
		body.state = formData.state;
		body.zipcode = formData.zipCode;
		body.city = formData.city;
		body.address = formData.address;

		return body;
	};

	const businessForm = createForm({
		initialValues: validationFormData.initialValues,
		validationSchema: yup.object().shape(validationFormData.validationSchema),
		onSubmit: async (values) => {
			isLoading = true;
			submitBtnText = `${$t('LOADING')}...`;
			$isFetching = true 
			const body = createRequestWithdrawalObj(
				userCountryId,
				activeCurrency,
				userCurrencyId,
				values
			);
			
				const makeWithdrawalResponse = await makeWithdrawal(body);
				if (makeWithdrawalResponse.status) {
					selectedPaymentMethod = makeWithdrawalResponse.data
					await updateGlobalDataObj()
					withdrawRequestProcessed = true;
				}
			
			$isFetching = false 
			isLoading = false;
			submitBtnText = $t('SAVE');
		}
	});
	const privateForm = createForm({
		initialValues: validationFormData.initialPrivateValues,
		validationSchema: yup.object().shape(validationFormData.validationPrivateSchema),
		onSubmit: async (values) => {
			
			isLoading = true;
			submitBtnText = `${$t('LOADING')}...`;
			$isFetching = true 
			const body = createRequestWithdrawalObj(
				userCountryId,
				activeCurrency,
				userCurrencyId,
				values
			);
			
			 	const makeWithdrawalResponse = await makeWithdrawal(body);
				if (makeWithdrawalResponse.status) {
					selectedPaymentMethod = makeWithdrawalResponse.data
					await updateGlobalDataObj()
					withdrawRequestProcessed = true;
				}
			//}
			$isFetching = false 
			isLoading = false;
			submitBtnText = $t('SAVE');
		}
	});
	$: {
		checkFormStatus();
		if (legalTypeId === 5240597) {
			mainForm = privateForm;
		} else {
			mainForm = businessForm;
		}
	}
	const checkLegalType = () => {
		if (legalTypeId) {
			formStep = 2;
		} else {
			globalLegalTypeError = $t('MANAGE_CHOUSE_LEGAL_TYPE');
		}
	};


	onMount(async () => {
		const { data } = await getTypesForWithdrawal($globalData.data.lang.idobject);
		paymentMethodTypes = data.payment_method_types;
		accountMethodTypes = data.account_types;
		accountTypeArray = accountMethodTypes.map((item) => item.name);
		legalTypeArray = paymentMethodTypes.map((item) => item.name);
	});
</script>

{#if formStep === 1}
	<div class="legal_type">
		<div class="text-center mb-1">{$t('MANAGE_WITHDRAW_HEAD')}</div>
		<div class="wrapper relative">
			{#if legalTypeArray.length === 0}
				<div class="absolute_preloder">
					<Preloader loaderWidth={2} loaderHeight={2} borderWidth={0.2} />
				</div>
			{/if}

			<Dropdown
				itemsData={legalTypeArray}
				bind:activeItem={globalLegalType}
				errorMessageState={globalLegalTypeError}
				handleClickByItem={() => (globalLegalTypeError = '')}
			/>
		</div>

		{#if globalLegalTypeError}
			<small transition:slide|local class="error_text mt-0_5">{globalLegalTypeError}</small>
		{/if}
		<button class="btn btn_center" on:click={checkLegalType}>{$t('NEXT')}</button>
	</div>
{:else if formStep === 2}
	<form on:submit|preventDefault={mainForm.handleSubmit}>
		<BankAccountForm
			{legalTypeId}
			{activeCurrency}
			{userCountry}
			{accountTypeArray}
			form={mainForm.form}
			errors={mainForm.errors}
			{isLoading}
			handleChange={mainForm.handleChange}
		/>
		<AddressForm
			{activeCurrency}
			{userCountry}
			form={mainForm.form}
			errors={mainForm.errors}
			{isLoading}
			handleChange={mainForm.handleChange}
		/>
		<button class="btn btn_center" class:is_fetching={$isFetching}>{submitBtnText}</button>
	</form>
{/if}

<style>
	.btn {
		margin-top: 4rem;
	}
	.legal_type {
		max-width: 639px;
		margin: 2rem auto 0 auto;
	}
	.legal_type .btn {
		margin-top: 2rem;
	}
	.absolute_preloder {
		position: absolute;
		width: 100%;
		height: 100%;
		background: white;
		z-index: 3;
	}
</style>
