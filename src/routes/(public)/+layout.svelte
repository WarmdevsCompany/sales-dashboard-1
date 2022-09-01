<script context="module">
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
  
	import {userAuthToken} from '$lib/globalStore'
  
	// import your user store here.
  
	// if (browser && $user)
  
	// Add your specific guard logic here, you need to include the 'browser' 
	//check otherwise Vite tries to process it on the server side
  
	// if (browser) {
	//     // Use Goto to redirect users if neccessary
	//     const userToken = localStorage.getItem("token")
	//     if(userToken){
	//       console.log("User Token Exist")
	//     }else{
	//       goto('/auth/login');
	//     }
		
	// }
  
  </script>
  <script>
	import Header from "$lib/header/Header.svelte";
	import Sidebar from "$lib/sidebar/Sidebar.svelte";
	import "../../app.css";
	import "$lib/api/api";
	import logoForBg from "$lib/assets/img/logo-big.svg";
	import Loader from "$lib/components/Loader.svelte";
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";
  
	let loading = true;
	onMount(() => {
	  loading = false;
	});
  </script>
  
  <svelte:head>
	<link
	  href="https://fonts.googleapis.com/css?family=Gelasio"
	  rel="stylesheet"
	/>
  </svelte:head>
  
  <main>
	{#if !loading}
	  <Sidebar />
	  <div in:fade class="main-content ml-1_25">
		<Header />
		<div class="mt-3">
		  <slot />
		</div>
	  </div>
	  <img in:fade class="logo_bg" src={logoForBg} alt="esi logo" />
	{:else}
	  <Loader />
	{/if}
  </main>
  
  <style>
	main {
	  flex: 1;
	  display: flex;
	  padding: 0.5rem 1.25rem;
	  width: 100%;
	  margin: 0 auto;
	  min-height: 100vh;
	  box-sizing: border-box;
	}
	.main-content {
	  width: 100%;
	}
	.logo_bg {
	  position: fixed;
	  top: 270px;
	  left: 68px;
	  z-index: -1;
	}
	@media only screen and (max-width: 991px) {
	  .logo_bg {
		display: none;
	  }
	  main {
		flex-wrap: wrap;
	  }
	  .main-content {
		margin: 0;
	  }
	}
  </style>
  