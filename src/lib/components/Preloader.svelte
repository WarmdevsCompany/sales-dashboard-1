<div class="loader__wrapper">
    <div class="loader" style="width: {$$props.loaderWidth}rem; height: {$$props.loaderHeight}rem; border-width: {$$props.borderWidth}rem;"></div>
</div>


<style>
.loader__wrapper{
  height: 100%;
  display: grid;
  place-items: center;
}


.loader {
  border-radius: 50%;
  border: solid;
  border-color: var(--custor-scroll-tumb);
  border-top-color: var(--plan-safe-bg );
  box-sizing: border-box;
  background: transparent;
  animation: loading 1s linear infinite;
}

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  0% {
    transform: rotate(360deg);
  }
}
</style>