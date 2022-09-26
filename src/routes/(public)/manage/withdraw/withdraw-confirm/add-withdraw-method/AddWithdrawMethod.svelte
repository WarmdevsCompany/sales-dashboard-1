<script>
	import AddressForm from './AddressForm.svelte';
	import BankAccountForm from './BankAccountForm.svelte';
	import { t } from '$lib/translations/i18n.js';
	import { globalData, verificationId } from '$lib/globalStore';
	import { slide } from 'svelte/transition';
	import { createForm } from 'svelte-forms-lib';
	import Dropdown from '$lib/components/Dropdown.svelte';
	import * as yup from 'yup';
	export let submitBtnText = $t('SAVE');
	let isLoading = false,
		formStep = 1,
		verifyId = $verificationId,
		globalLegalType = 'Legal type*',
		globalLegalTypeError = '',
		legalTypeArray = ['Private', 'Business'],
		validationFormData = {
			initialValues: null,
			validationSchema: null,
			initialPrivateValues: null,
			validationPrivateSchema: null
		},
		mainForm;
	const activeCurrency = 'USD'; //$globalData.data.currency.code;
	const userCountry = 'United Kingdom'; //$globalData.data.country.countryName;
	$: verifyId, globalLegalType, globalLegalTypeError, validationFormData, mainForm;

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
		fullName: yup.string().required('Enter full name')
	};
	// Euro or UK or US
	const ivBankEuro = { iban: '' };
	const yupBankEuro = { iban: yup.string().required('Enter IBAN') };
	const ivBankUK = { shortCode: '', ibanOrAccountNumber: '' };
	const yupBankUK = {
		shortCode: yup.string().required('Enter short code'),
		ibanOrAccountNumber: yup.string().required('Enter IBAN or Account Number')
	};

	const ivBankUS = { routingNumber: '', accountNumber: '', accountType: '' };
	const yupBankUS = {
		routingNumber: yup.string().required('Enter routing number'),
		accountNumber: yup.string().required('Enter account number'),
		accountType: yup.string().required('Chouse account type')
	};

	const ivAddressData = { state: '', zipCode: '', city: '', address: '' };
	let yupAddressDataRequired = {
		state: yup.string().required('Enter state'),
		zipCode: yup.string().required('Enter Zip code'),
		city: yup.string().required('Enter city'),
		address: yup.string().required('Enter address')
	};

	let yupAddressData = {
		state: yup.string(),
		zipCode: yup.string(),
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
		if (activeCurrency === 'EURO') {
			validationFormData.initialValues = ivBussinessEURO;
			validationFormData.validationSchema = vsBussinessEURO;

			validationFormData.initialPrivateValues = ivPrivateEURO;
			validationFormData.validationPrivateSchema = vsPrivateEURO;
		} else if (userCountry === 'United States') {
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

	const businessForm = createForm({
		initialValues: validationFormData.initialValues,
		validationSchema: yup.object().shape(validationFormData.validationSchema),
		onSubmit: async (value) => {
			console.log(value);
			// isLoading = true;
			// submitBtnText = `${$t('LOADING')}...`;
			// POST in Backend
			// isLoading = false;
			// submitBtnText = $t('SAVE');
		}
	});
	const privateForm = createForm({
		initialValues: validationFormData.initialPrivateValues,
		validationSchema: yup.object().shape(validationFormData.validationPrivateSchema),
		onSubmit: async (value) => {
			console.log(value);
			// isLoading = true;
			// submitBtnText = `${$t('LOADING')}...`;
			// POST in Backend
			// isLoading = false;
			// submitBtnText = $t('SAVE');
		}
	})
	$: {
		checkFormStatus();
		if (globalLegalType === 'Private') {
			mainForm = privateForm;
		} else {
			mainForm = businessForm;
		}
	}
	const checkLegalType = () => {
		if (globalLegalType != 'Legal type*') {
			formStep = 2;
		} else {
			globalLegalTypeError = 'Chouse legal type';
		}
	};
</script>


{#if formStep === 1}
	<div class="legal_type">
		<Dropdown
			itemsData={legalTypeArray}
			bind:activeItem={globalLegalType}
			errorMessageState={globalLegalTypeError}
			handleClickByItem={() => (globalLegalTypeError = '')}
		/>
		{#if globalLegalTypeError}
			<small transition:slide|local class="error_text mt-0_5">{globalLegalTypeError}</small>
		{/if}
		<button class="btn btn_center" on:click={checkLegalType}>{submitBtnText}</button>
	</div>
{:else if formStep === 2}
	<form on:submit|preventDefault={mainForm.handleSubmit}>
		<BankAccountForm
			legalType={globalLegalType}
			{activeCurrency}
			{userCountry}
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
		<button class="btn btn_center ">{submitBtnText}</button>
	</form>
{/if}

<style>
	.btn {
		margin-top: 4rem;
	}
	.legal_type {
		max-width: 360px;
		margin: 2rem auto 0 auto;
	}
	.legal_type .btn {
		margin-top: 2rem;
	}
</style>
