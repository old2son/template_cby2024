<script>
	import { onMount } from 'svelte';
	import { navStore } from '$lib/stores/navStore.js';

	let index = 0;
	let fixed = false;
	let wrap;	
	let nav;	

	const urlData = [
		{
			name: '专题首页',
			url: '/desktop/'
		},
		{
			name: '活动介绍',
			url: '/desktop/#hdjs'
		},
		{
			name: '常备药榜',
			url: '/desktop/#cbyb'
		},
		{
			name: '保健食品榜',
			url: '/desktop/#bjsp'
		},
		{
			name: '医疗器械及消毒用品榜',
			url: '/desktop/#ylqx'
		},
		{
			name: '商务合作',
			url: '/desktop/#swhz'
		},
		{
			name: '媒体资源',
			url: '/desktop/#mtzy'
		},
		{
			name: '申报通道',
			url: '/desktop/signup'
		}
	];

	const handler = () => {
		if (window.scrollY > nav.offsetHeight) {
			wrap.style.position = 'static';
			fixed = true;
		}
		else {
			wrap.style.position = 'relative';	
			fixed = false;
		}
	};

	// navStore.subscribe((value) => {
	// 	index = value;
	// 	console.log(index);
	// }); 

	// navStore.update((value) => {
	// 	return value;
	// });

	onMount(() => {
		if (window.location.pathname === '/desktop') {
			urlData.map((item, index) => {
				if (index === 0) {
					urlData[0].url = 'javascript:void(0);';
				}
				else if (index === urlData.length - 1) {
					return;
				}
				else {
					item.url = item.url.replace('/desktop/', '');
				}

			});

			console.log(urlData);
		}

		handler();
	});
</script>

<svelte:window on:scroll={handler} />

<div class="nav-wrap" bind:this={wrap}>
	<div class="nav-inner" bind:this={nav} class:fixed >
		<dl>
			<dt class="js-nav-tabs">
				{#each urlData as item}
					{#if item.url !== urlData[urlData.length - 1].url}
						<a href="{item.url}">{item.name}</a>
					{/if}
				{/each}
			</dt>
			<dd>
				<a href="{urlData[urlData.length - 1].url}" target="_blank">{urlData[urlData.length - 1].name}</a>
			</dd>
		</dl>
	</div>
</div>

<style lang="scss">
	
</style>
