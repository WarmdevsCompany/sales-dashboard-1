<script>
	// based on suggestions from:
	// Sami Keijonen https://webdesign.tutsplus.com/tutorials/how-to-make-custom-accessible-checkboxes-and-radio-buttons--cms-32074
	// and Inclusive Components by Heydon Pickering https://inclusive-components.design/toggle-button/
	export let options;
	export let userSelected = options[0].value;
	export let fontSize = 16;
	export let flexDirection = 'column';
	export let verify = false;
	export let tabId = 1;

	const uniqueID = Math.floor(Math.random() * 100);

	const slugify = (str = '') => str.toLowerCase().replace(/ /g, '-').replace(/\./g, '');
</script>

{#if verify}
	<div
		role="radiogroup"
		class="group-container"
		aria-labelledby={`label-${uniqueID}`}
		style="font-size:{fontSize}px; flex-direction:{flexDirection}"
		id={`group-${uniqueID}`}
	>
		<div class="legend" id={`label-${uniqueID}`} />
		{#each options as { value, label, id }}
			<input
				class="sr-only"
				type="radio"
				id={slugify(label)}
				bind:group={userSelected}
				on:change={() => {
					tabId = id;
				}}
				{value}
			/>
			<label for={slugify(label)} class="verify_tab">
				
					{label}
				

				<span><div class="dot" /></span>
			</label>
		{/each}
	</div>
{:else}
	<div
		role="radiogroup"
		class="group-container"
  
		aria-labelledby={`label-${uniqueID}`}
		style="font-size:{fontSize}px; flex-direction:{flexDirection}"
		id={`group-${uniqueID}`}
	>
		<div class="legend" id={`label-${uniqueID}`} />
		{#each options as { value, label }}
			<input class="sr-only" type="radio" id={slugify(label)} bind:group={userSelected} {value} />

			<label for={slugify(label)} >
				<span><div class="dot" /></span>
			
					{label}
				
			</label>
		{/each}
	</div>
{/if}

<style>
	:root {
		--accent-color: CornflowerBlue;
		--gray: #ccc;
	}

	.group-container {
		border-radius: 2px;
		display: flex;
		flex-direction: row;
	}


	.legend {
		font-weight: bold;
	}
	label {
		cursor: pointer;
		user-select: none;
		color: var(--label--color-secondary);
		line-height: 24px;
		padding: 0;
		margin-bottom: 10px;
	}

	.sr-only {
		position: absolute;
		clip: rect(1px, 1px, 1px, 1px);
		padding: 0;
		border: 0;
		height: 1px;
		width: 1px;
		overflow: hidden;
	}

	input[type='radio'] {
		position: absolute;
	}

	input[type='radio'] + label {
		display: flex;
		align-items: center;
		position: relative;
		text-align: left;
	}

	input[type='radio'] + label span {
		line-height: 20px;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 16px;
		width: 20px;
		height: 20px;
		background: transparent;
		border: 2px solid #5a7186;
		border-radius: 50%;
	}

	input[type='radio']:checked + label span {
		border: 2px solid #0085ff;
		border-radius: 50%;
	}

	input[type='radio'] + label span .dot {
		position: absolute;
		width: 10px;
		height: 10px;
		background: #0085ff;
		border-radius: 50%;
		transform: scale(0);
	}

	input[type='radio']:checked + label span .dot {
		opacity: 1;
		transform: scale(1);
	}

	input[type='radio']:focus + label span {
		box-shadow: 0 0 0 1px var(--accent-color, #282828);
		border-radius: 50%;
	}

	input[type='radio']:disabled + label {
		color: darken(var(--gray, #ccc), 10);
	}

	input[type='radio']:disabled + label span {
		background: var(--gray, #ccc);
	}
	/* gravy */

	input[type='radio'] + label span {
		transition: background 0.3s ease-out;
	}

	input[type='radio']:checked + label span {
		transition: background 0.3s ease-in;
	}

	input[type='radio'] + label span .dot {
		transition: transform 0.2s ease-out;
	}

	input[type='radio']:checked + label span .dot {
		transition: transform 0.2s ease-in;
	}

	input[type='radio']:focus + label span {
		box-shadow: 0 0px 8px var(--accent-color, #282828);
		border-radius: 50%;
	}
	input[type='radio'] + label.verify_tab {
		margin-bottom: 0;
	}
	input[type='radio'] + label.verify_tab span {
		margin: 0 0 0 0.75rem;
	}
	input[type='radio'] + label.verify_tab span:first-child {
		margin: 0 1.875rem 0 0.75rem;
	}
</style>
