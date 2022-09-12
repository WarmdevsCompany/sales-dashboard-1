<script>
	import Change from './change/Change.svelte';
	import PlansMain from './plans/PlansMain.svelte';
	import TakeBreak from './take-a-break/TakeBreak.svelte';
	import { t } from '$lib/translations/i18n.js';
</script>

<svelte:head>
	<title>{$t('MANAGE_CONTRIBUTIONS')}</title>
	<meta name="description" content="Contributions page" />
</svelte:head>
<Change />
<PlansMain />
<TakeBreak />
