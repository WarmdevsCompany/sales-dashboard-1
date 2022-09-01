<script context="module">
	import { goto } from '$app/navigation';
	import { browser, dev } from '$app/environment';
  
  
  // /** @type {import('./$types').PageLoad} */
  //export function load() {
	// let data;
	// if (browser) {
	//     // Use Goto to redirect users if neccessary
	//      data = localStorage.getItem("token")
	//     if(data){
	//       goto('/overview/general');
	//     }else{
	//       goto('/auth/login');
	//     }
		
	// }
	// return {
	//   authData: data
	// };
  //}
	// import your user store here.
  
  
	// if (browser && $user)
  
	// Add your specific guard logic here, you need to include the 'browser' 
	//check otherwise Vite tries to process it on the server side
	// if (browser) {
	//     // Use Goto to redirect users if neccessary
	//     const token = localStorage.getItem("token")
	//     if(token){
	//       goto('/overview/general');
	//     }else{
	//       goto('/auth/login');
	//     }
		
	// }
  
  </script>
  <script>
  import "../../app.css";
	   import '$lib/api/api'
	   export let authData = false;
  </script>
  <svelte:head>
	<link
	  href="https://fonts.googleapis.com/css?family=Gelasio"
	  rel="stylesheet"
	/>
  </svelte:head>
  
  <slot />
  
  