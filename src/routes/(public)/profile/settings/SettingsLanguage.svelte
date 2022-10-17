<script>
	import { isFetching } from '$lib/globalStore.js';
	import  Dropdown  from '$lib/components/Dropdown.svelte';
	import { t, locale, locales } from '$lib/translations/i18n.js';
	import { setLanguage } from '$lib/functions/setLanguage.js';
</script>

<div class="b-radius-8 settings_card">
	<div class="text-3 settings_card--head">{$t('SETTINGS.LANG')}</div>
	<Dropdown itemsData={locales} bind:activeItem={$locale} disabled = {$isFetching} handleClickByItem={()=>setLanguage($locale)}/>
</div>

