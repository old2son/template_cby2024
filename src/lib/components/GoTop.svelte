<script>
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import anime from '$lib/utils/anime.js';

	export let distanceY = 300;

	let visible = false;
	let flag = false;
	const goTop = () => {
		if (flag) {
			return;
		}
		flag = true;
		
		anime({
			targets: 'html, body',
			scrollTop: 0,
			duration: 200,
			easing: 'easeInOutQuad'
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
