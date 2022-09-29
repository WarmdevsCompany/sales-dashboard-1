<script>
	import { scrollToTop } from '$lib/functions/scrollToTop.js';
	import { t } from '$lib/translations/i18n.js';

	scrollToTop();
</script>

<svelte:head>
	<title>{$t('PAYMENT')}</title>
	<meta name="description" content={$t('PAYMENT')} />
</svelte:head>
