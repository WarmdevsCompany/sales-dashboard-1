<script>
    export let className;
</script>
<svg
  class={className}
  xmlns="http://www.w3.org/2000/svg"
  width="20"
  height="20"
  viewBox="0 0 20 20"
  fill="none"
>
  <path
    d="M7.08286 13.8212L3.92203 10.6604C3.76486 10.5086 3.55436 10.4246 3.33586 10.4265C3.11736 10.4284 2.90835 10.516 2.75384 10.6705C2.59934 10.825 2.5117 11.034 2.5098 11.2525C2.5079 11.471 2.59189 11.6815 2.74369 11.8387L6.49369 15.5887C6.64997 15.7449 6.86189 15.8327 7.08286 15.8327C7.30383 15.8327 7.51575 15.7449 7.67203 15.5887L16.8387 6.42203C16.9905 6.26486 17.0745 6.05436 17.0726 5.83586C17.0707 5.61736 16.983 5.40835 16.8285 5.25384C16.674 5.09934 16.465 5.0117 16.2465 5.0098C16.028 5.0079 15.8175 5.09189 15.6604 5.24369L7.08286 13.8212Z"
    fill="url(#paint0_linear_2960_1067)"
  />
  <defs>
    <linearGradient
      id="paint0_linear_2960_1067"
      x1="17.0726"
      y1="5.00977"
      x2="1.10357"
      y2="13.0343"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FF2E00" />
      <stop offset="1" stop-color="#FF6B00" />
    </linearGradient>
  </defs>
</svg>

<style>
  svg {
    opacity: 0;
    width: 100%;
    height: 100%;
    transition: all ease 0.2s;
  }
  svg.active__cb {
    opacity: 1;
  }
  
</style>
