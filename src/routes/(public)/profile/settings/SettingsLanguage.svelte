<script>
	import { t, locale, locales } from '$lib/translations/i18n.js';
	import { setLanguage } from '$lib/functions/setLanguage.js';
</script>

<div class="b-radius-8 settings_card">
	<div class="text-3 settings_card--head">{$t('SETTINGS.LANG')}</div>
	<select bind:value={$locale} on:change={setLanguage($locale)}>
		{#each locales as l}
			<option value={l}>{l}</option>
		{/each}
	</select>
</div>

<style>
	select {
		-webkit-appearance: none;
		padding: 23px 30px;
		width: 100%;
		border-radius: 10px;
		border-color: var(--border-color);
		text-transform: uppercase;
		background-image: url('../../../../lib/assets/img/dd-arrow.svg');
		background-repeat: no-repeat;
		background-position: right 30px top 18px;
		cursor: pointer;
	}
</style>
