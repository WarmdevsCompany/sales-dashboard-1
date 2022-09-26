<script>
	import { convertDateToUTC } from '$lib/functions/convertDateToUTC.js';
	import ThreeDotsIcon from '$lib/components/icons/ThreeDotsIcon.svelte';
	import Tooltip from './Tooltip.svelte';
	import { t } from '$lib/translations/i18n.js';
	import { globalData } from '$lib/globalStore';

	let firstName = '',
		lastName = '',
		gender = '',
		dobUNIX = '',
		email = '',
		username = '',
		dobDate = '',
		month,
		day,
		year;
	$: {
		firstName = $globalData.data.personalInfo.firstname;
		lastName = $globalData.data.personalInfo.lastname;
		username = $globalData.data.personalInfo.username;
		gender = $globalData.data.personalInfo.gender;
		dobUNIX = $globalData.data.personalInfo?.dob;
		email = $globalData.data.personalInfo.email;
		// convert date to UTC
		const date = convertDateToUTC(dobUNIX);
		dobDate = `${date.day} ${$t('MONTH_SHORT_' + date.month)} ${date.year}`;
		firstName, lastName, username, gender, dobDate, dobUNIX, email, month, day, year;
	}
</script>

<div>
	<div class="text-3 mb-1">{$t('PROFILE.GENERAL.TITLE')}</div>
	<div class="input__wrapper">
		<label for="name" class="label">{$t('USER_NAME')}</label>
		<div class="relative">
			<input class="" type="text" value={username} />
			<div class="abs__input__dots">
				<Tooltip title={$t('CHANGE_USER_NAME')} width={280} formName={'userName'}
					><ThreeDotsIcon bgColor="green" /></Tooltip
				>
			</div>
		</div>
	</div>
	<div class="grid-2 mt-1_5">
		<div class="input__wrapper">
			<label for="name" class="label">{$t('FIRST_NAME')}</label>
			<div class="relative">
				<input class="" type="text" value={firstName} />
				<div class="abs__input__dots">
					<Tooltip title={$t('CHANGE_FIRST_NAME')} width={208} formName={'firstAndLastName'}
						><ThreeDotsIcon bgColor="green" /></Tooltip
					>
				</div>
			</div>
		</div>
		<div class="input__wrapper">
			<label for="name" class="label">{$t('LAST_NAME')}</label>
			<div class="relative">
				<input class="" type="text" value={lastName} />
				<div class="abs__input__dots">
					<Tooltip title={$t('CHANGE_LAST_NAME')} width={265} formName={'firstAndLastName'}
						><ThreeDotsIcon bgColor="green" /></Tooltip
					>
				</div>
			</div>
		</div>
	</div>
	<div class="grid-2 mt-3 mob_fix">
		<div class="input__wrapper">
			<label for="name" class="label">{$t('GENDER')}</label>
			<div class="relative">
				<input class="gender" type="text" value={gender} />
				<div class="abs__input__dots">
					<Tooltip title={$t('CHANGE_GENDER')} width={215} formName={'gender'}
						><ThreeDotsIcon bgColor="green" /></Tooltip
					>
				</div>
			</div>
		</div>
		<div class="input__wrapper">
			<label for="name" class="label">{$t('DATE_OF_BIRTH')}</label>
			<div class="relative">
				<input class="" type="text" value={dobDate} />
				<div class="abs__input__dots">
					<Tooltip title={$t('CHANGE_DATE_OF_BIRTH')} width={290} formName={'dob'}
						><ThreeDotsIcon bgColor="green" /></Tooltip
					>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="contact">
	<div class="text-3 mb-1 ">{$t('PROFILE.GENERAL.CONTACT')}</div>
	<div class="grid-2 ">
		<div class="input__wrapper">
			<label for="name" class="label">Email</label>
			<div class="relative">
				<input class="" type="email" value={email} />
				<div class="abs__input__dots">
					<Tooltip title={$t('CHANGE_EMAIL')} width={225} formName={'email'}
						><ThreeDotsIcon bgColor="green" /></Tooltip
					>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	* {
		color: var(--green-dark-medium);
	}
	label.label {
		color: var(--label--color);
	}
	input {
		pointer-events: none;
		user-select: none;
	}
	.grid-2 {
		grid-gap: 24px;
	}
	.contact {
		margin-top: 2.125rem;
		padding-bottom: 4.5rem;
	}

	@media only screen and (max-width: 1300px) {
		.contact .input__wrapper {
			grid-column-start: 1;
			grid-column-end: 3;
		}
	}
	@media only screen and (max-width: 991px) {
		.grid-2 {
			grid-gap: 10px;
		}
		.mob_fix {
			margin-top: 10px;
		}
		.contact {
			padding-bottom: 2rem;
		}
	}
</style>
