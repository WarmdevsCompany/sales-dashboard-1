<script>
  export let group = undefined;
  export let value = undefined;
</script>

<label class="container-checkbox">
  <input type="checkbox" bind:group {value} />
  <span class="checkmark"></span>
  <slot />
</label>

<style>
  .container-checkbox {
    display: block;
    position: relative;
    padding-left: 2rem;
   
    cursor: pointer;
    color: var( --text-color);
    font-size: var(--text-font-xsmall);
    line-height: var(--text-line-height);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

/* Hide the browser's default checkbox */
.container-checkbox input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: auto;
}

/* Create a custom checkbox */
.container-checkbox .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 24px;
    width: 24px;
    background-color: white;
    border: 1px solid #DDDDDD;
    border-radius: 3px;
}


/* Create the checkmark/indicator (hidden when not checked) */
.container-checkbox .checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

/* Show the checkmark when checked */
.container-checkbox input:checked ~ .checkmark:after {
    display: block;
}

/* Style the checkmark/indicator */
.container-checkbox .checkmark:after {
    content: '';
    left: 1px;
    top: 1px;
    width: 20px;
    height: 20px;
	background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.08335 13.8212L3.92251 10.6604C3.76535 10.5086 3.55484 10.4246 3.33635 10.4265C3.11785 10.4284 2.90884 10.516 2.75433 10.6705C2.59982 10.825 2.51218 11.034 2.51029 11.2525C2.50839 11.471 2.59238 11.6815 2.74418 11.8387L6.49418 15.5887C6.65045 15.7449 6.86238 15.8327 7.08335 15.8327C7.30432 15.8327 7.51624 15.7449 7.67251 15.5887L16.8392 6.42203C16.991 6.26486 17.075 6.05436 17.0731 5.83586C17.0712 5.61736 16.9835 5.40835 16.829 5.25384C16.6745 5.09934 16.4655 5.0117 16.247 5.0098C16.0285 5.0079 15.818 5.09189 15.6608 5.24369L7.08335 13.8212Z' fill='url(%23paint0_linear_3977_12665)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_3977_12665' x1='17.0731' y1='5.00977' x2='1.10406' y2='13.0343' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FF2E00'/%3E%3Cstop offset='1' stop-color='%23FF6B00'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E");
}
@media only screen and (max-width: 991px) {
  .container-checkbox {
    text-align: left;
    font-size: var(--text-font-xxsmall);
    line-height: var(--text-line-height-xxsmall);
  }
}
</style>
