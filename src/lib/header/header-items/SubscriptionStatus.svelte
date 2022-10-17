<script>
import Status from "$lib/components/Status.svelte";

</script>
<div class="contribution__data--item">
    <Status
        statusName={$$props.status}
        statusId={$$props.statusId}
        iconColor="white"
    />
</div>