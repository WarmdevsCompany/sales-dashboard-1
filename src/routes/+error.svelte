<script>
	import { page } from '$app/stores';
  import { browser } from '$app/environment';
  import { getCookie } from '$lib/functions/getCookie';
	import { goto } from '$app/navigation';

		if (browser) {
			const token = getCookie('esiToken');
			if (!token) {
				 goto('/auth/login');
			} else if(token){
				 goto('/404');
			}
		}
</script>

<h1>{$page.status}: {$page.error.message}</h1>
<p>New page</p>
dfgdfh
