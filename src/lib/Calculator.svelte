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

	// https://codepen.io/Sejuani/pen/vLvmwV

	const inputChecker = (/** @type {{ target: any; }} */ e) => {
		let userInputChar = e.target;
		console.log(e.target.value);

		const value = userInputChar.value; // but textarea has no value => just use input?
		// console.log(value);

		let spaceMultiple = value.match(/\x20+/g);
		let space = value.match(/( )/g);
		// TODO add a {space + (operands || operators) REGEX}

		//Separate out any number of connected digits followed by an optional decimal point and additional digits, place matching patterns into an array
		let operands = value.match(/\d+(\.\d+)?/g);
		//Separate out +, -, /, *, or ^ characters into an array
		let operators = value.match(/[\+\-\/\*\^\%]/g);
		//Gets if the debug flag is set
		let debug = value.match(/\$d/);

		// console.table({ operands: operands, operators: operators, space: space });

		// TODO add hashmap or history to collect results or expressions
		if (value == operands || value == operators || value == space) {
			console.log('match');
			resOutput = value;
		} else {
			// const numVal = value.replace(/\D/, ''); // only letters
			// console.log('nomatch');
			const numVal = value.replace(/\D/, '');
			resOutput = numVal;
		}
	}; // FIXME doesn't allow newlines
	// const regexPattern = `/(?<number> (?: \d+ (?:\.\d*)?)| (?:\d*\.\d+))| (?<immediate> (?<str> (?: ' (?<__str__> (?:[^'\\]|\\')*) ')| (?: \ (?<__str__>.)))| (?<operator> (?: p| \»| R| \_| \-| \°| r| \∩| \«| \∞| \∅| \~| \/| \]| C| \%| P| \*| \^| \∪| d| \[| F| l| s| \!| \+| \=| h| f| c))| (?<apply>\$)| (?<space>\s+))/mxuJ`; // https://regex101.com/r/eP0nH2/1
	// const regex = new RegExp(regexPattern);
	// if (numVal == regex)
	// return userInputChar;
	// TODO Add linebreak regex !!!

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
			wrap: 'soft',
			maxlength: 333
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
			wrap: 'hard',
			maxlength: 12
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
				maxlength={inOut[0].maxlength}
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

<!-- You can prevent newlines being entered via the input event and simply using a replace(/\n/g, '').
https://stackoverflow.com/a/5286671
 -->
<!-- /* 
{#each}
<Input {input} {output} {afterPseudo} class="flex gap-20"/>
{/each}
*/ -->
