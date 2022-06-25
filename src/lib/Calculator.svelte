<script>
	export let placeholder = 'Type an expression to get started';

	/* 

{#each}
<Input {input} {output} {afterPseudo} class="flex gap-20"/>
{/each}

*/
</script>

<div class="calculator bg-slate-700 p-4 px-4">
	<div class="calculator-wrapper flex justify-between gap-4">
		<div class="user-interface  ">
			<textarea {placeholder} class="bg-slate-700 text-slate-100" />
		</div>
		<div class="output-interface text-teal-400 border-l border-slate-500 p-4">
			<output>
				<!-- <label for="output">Results</label> -->
				6
				<output />
			</output>
		</div>
	</div>
</div>
