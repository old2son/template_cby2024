<script>
	import { onMount } from 'svelte';
	import anime from '$lib/utils/anime.js';
    
	let btnGoHome;
	let flag = false;
	let timeID = null;

	const handler = () => {
		if (flag) {
			return;
		}
        timeID && clearTimeout(timeID);
        flag = true;
		timeID = setTimeout(() => {
			flag = false;
			anime({
				targets: btnGoHome,
				translateY: window.scrollY + (window.innerHeight / 1.5) + 50
			});
		}, 350);
	};

	onMount(() => {
		handler();
	});
</script>

<svelte:window on:scroll={handler} />
<a class="btn-back" bind:this={btnGoHome} href="/m">返回首页</a>

<style>
</style>
