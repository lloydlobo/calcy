<script lang="ts">
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

	const inputChecker = (e) => {
		let userInputChar = e.target;
		const value = userInputChar.value; // but textarea has no value => just use input?
		const numVal = value.replace(/\D/, '');
		resOutput = numVal;
		// return userInputChar;
	};

	let inOut = [
		{
			index: 0,
			name: 'input',
			id: 'textAreaInput',
			text: '',
			placeholder: 'Type an expression to get started',
			rows: 10,
			cols: 33,
			style: 'bg-slate-700 text-slate-100 px-1',
			wrap: 'hard'
		},
		{
			index: 1,
			name: 'output',
			id: 'textAreaOutput',
			text: '',
			placeholder: '',
			rows: 10,
			cols: 12,
			style: 'bg-slate-700 text-teal-400 pl-2 pr-2',
			wrap: 'hard'
		}
	];

	export let buttons = [
		{ text: 'Increment', id: 'btnIncrement', event: handleOutput },
		{ text: 'Decrement', id: 'btnDecrement', event: handleOutput },
		{ text: 'Reset', id: 'btnReset', event: handleResetOutput }
	];
</script>

<div class="calculator max-w-full bg-slate-700 p-4 ">
	<div class="calculator-wrapper flex   gap-4">
		<div class="user-interface">
			<textarea
				on:input={inputChecker}
				bind:value={resOutput}
				rows={inOut[0].rows}
				cols={inOut[0].cols}
				id={inOut[0].id}
				placeholder={inOut[0].placeholder}
				class={inOut[0].style}
				wrap="soft"
			/>
		</div>
		<div class="output-interface border-l border-slate-500 text-teal-400">
			{#each inOut as { id, placeholder, style, rows, cols, wrap, index }}
				{#if index == 1}
					<textarea {id} {placeholder} class={style} {rows} {cols} readonly {wrap}
						>{resOutput}</textarea
					>
					<!-- {resOutput.toString().trim()} -->
				{/if}
			{/each}
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
