<script>
	import { fade } from 'svelte/transition';
    import logo from "$lib/assets/img/logo.svg";
</script>

<div class="loading d-flex justify-cc align-center">
        <img class="logo_bg" src={logo} alt="esi logo" />
</div>

<style>
    .loading {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: var(--green-dark-color);
        color: var(--white);
    }
    .logo_bg{
     width: 180px;
    }
</style>