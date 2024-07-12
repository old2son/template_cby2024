<script>
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	export let distanceY = 300;

	let visible = false;
	let flag = false;
	const goTop = () => {
		if (flag) {
			return;
		}
		flag = true;
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		});
	};
	const handler = () => {
		window.scrollY > distanceY ? (visible = true) : (visible = false);

		if (window.scrollY === 0) {
			flag = false;
		}
	};

	onMount(() => {
		handler();
	});
</script>

<svelte:window on:scroll={handler} />

{#if visible}
	<button class="btn-gotop" on:click={goTop} transition:slide={{ duration: 200, axis: 'x' }}
		>返回顶端</button
	>
{/if}

<style>
</style>
