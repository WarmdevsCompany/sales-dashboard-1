<script>
	import Dropdown from '$lib/components/Dropdown.svelte';
	import { t } from '$lib/translations/i18n.js';
	import { globalData, verificationId, isFetching } from '$lib/globalStore';
	import { changeGender, updateGlobalDataObj } from '$lib/api/axios';
	export let submitBtnText = $t('CONTINUE');
	let isLoading = false;
	let verifyId = $verificationId;
	$: verifyId;

	let activeItem;
	const genderArrayForDropdown = [$t('MALE'), $t('FEMALE')];
	const genderArrayForBackend = ['male', 'female'];

	const submitFormData = async () => {
		isLoading = true;
		submitBtnText = `${$t('LOADING')}...`;
		$isFetching = true;
		const index = genderArrayForDropdown.indexOf(activeItem);
		const selectedGender = genderArrayForBackend[index];
		const res = await changeGender(selectedGender, verifyId);
		if (res.status) {
			await updateGlobalDataObj();
			$$props.submitChanges();
		}
		$isFetching = false;
		isLoading = false;
		submitBtnText = $t('CONTINUE');
	};
</script>

<div class=" mt-1">{$t('CHANGE_GENDER')}</div>
<div class="modal_main-row">
	<form on:submit|preventDefault={submitFormData} class="mt-1_5">
		<Dropdown itemsData={genderArrayForDropdown} bind:activeItem disabled={isLoading} />
		<button class="btn _218" class:is_fetching={$isFetching}>{submitBtnText}</button>
	</form>
</div>
