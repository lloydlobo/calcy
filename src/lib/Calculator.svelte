<script lang="ts">
	export let placeholder = 'Type an expression to get started';
	/**
	 * @type {string}
	 */
	let resOutput;
	let counter = 0;
	$: resOutput = '';
	$: counter = 0;

	const handleOutput = () => {
		counter += 1;
		return counter == 0 ? resOutput : (resOutput = counter.toString());
	};

	const handleResetOutput = () => {
		counter = 0;
		resOutput = '';
	};

	export let buttons = [
		{ text: 'Increment', id: 'btnIncrement', event: handleOutput },
		{ text: 'Decrement', id: 'btnDecrement', event: handleOutput },
		{ text: 'Reset', id: 'btnReset', event: handleResetOutput }
	];
</script>

<div class="calculator max-w-full bg-slate-700 p-4 sm:max-w-lg">
	<div class="calculator-wrapper flex justify-between gap-4">
		<div class="user-interface  ">
			<input bind:value={resOutput} {placeholder} type="text" class="bg-slate-700 text-slate-100" />
			<textarea bind:value={resOutput} {placeholder} class="bg-slate-700 text-slate-100" />
		</div>
		<div class="output-interface border-l border-slate-500 p-4 text-teal-400">
			<textarea class="bg-slate-700 text-slate-100">
				{resOutput.toString()}
			</textarea>
		</div>
	</div>

	{#each buttons as { id, text, event }}
		<button
			on:click={event}
			{id}
			class="button aspect-auto rounded-sm bg-slate-200 p-0 px-3 shadow-sm">{text}</button
		>
	{/each}
</div>
<!-- /* 
{#each}
<Input {input} {output} {afterPseudo} class="flex gap-20"/>
{/each}
*/ -->
