<script>
  import StatusIcon from "./icons/StatusIcon.svelte";

  export let status;
  export let iconColor = "initial";
  $: if(status === 'restart'){
   status = 'suspended';
  }
</script>

<div class="d-flex ">
  <button class="status d-flex justify-cc {status}" > {status}</button>
  <StatusIcon bgColor={iconColor} />
</div>
 
<style>
  .status {
    margin-right: 4px;
    min-width: 81px ;
    padding: 5px;
    border-radius: 8px;
    font-size: var(--text-font-small);
    line-height: var(--text-line-height-small);
    font-weight: var(--font-weight-medium);
    color: var(--white);
    max-width: 93px;
    border: none;
    text-transform: capitalize;
  }
  .status.active{
    width: 81px;
    background-color: var(--secondary-color);
  }
  .status.paused{
    width: 81px;
    background-color: var(--pause-btn-color);
  }
  .status.stoped{
    width: 81px;
    background-color: #5A7186;
  }
  .status.suspended{
    width: 93px;
    background-color: var(--red-color);
  }

</style>
