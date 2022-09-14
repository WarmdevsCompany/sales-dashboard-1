<script>
import Status from "$lib/components/Status.svelte";

</script>
<div class="contribution__data--item">
    <Status
        status={$$props.status}
        iconColor="white"
    />
</div>