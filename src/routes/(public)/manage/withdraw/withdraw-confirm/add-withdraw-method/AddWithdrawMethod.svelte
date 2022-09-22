<script>
	import AddressForm from './AddressForm.svelte';
	import BankAccountForm from './BankAccountForm.svelte';
	import { t } from '$lib/translations/i18n.js';
    import { globalData, verificationId } from '$lib/globalStore';
	import { createForm } from 'svelte-forms-lib';
	import * as yup from 'yup';
    export let submitBtnText = $t('SAVE');
	let isLoading = false;
	let verifyId = $verificationId;
	$: verifyId;
     allValues = {
        legalType: '',
        fullName: '',
        firstName: '',
        lastName: '',
        shortCode: '',
        accountNumber: '',
        iban: '',
        state: '',
        zipCode:'',
        city: '',
        address: ''
    }
    ivBussinessUsUSD = {}
    ivPrivateUsUSD = {}

    ivBussinessUsEURO = {}
    ivPrivateUsEURO = {}

    







    const { form, errors, state, handleChange, handleSubmit } = createForm({
		initialValues: {
			legalType: ''
		},
		validationSchema: yup.object().shape({
			email: yup.string().matches(emailrRegEx, $t('INCORRECT_EMAIL')).required($t('ENTER_EMAIL'))
		}),
		onSubmit: async (value) => {
			// isLoading = true;
			// submitBtnText = `${$t('LOADING')}...`;
            // POST in Backend
			// isLoading = false;
			// submitBtnText = $t('SAVE');
		}
	});
</script>


<form  on:submit|preventDefault={handleSubmit} >
	<BankAccountForm />
	<AddressForm />
	<button class="btn btn_center ">{submitBtnText}</button>
</form>

<style>
	.btn {
		margin-top: 4rem;
	}
</style>
