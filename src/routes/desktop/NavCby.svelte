<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { navStore } from '$lib/stores/navStore.js';
	import getOffsetTop from '$lib/utils/getOffsetTop.js';

	let index = 0;
	let fixed = false;
	let click = false;
	let top = '-200px';
	let nav;
	let navItems = [];
	
	let urlData = [
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
			fixed = true;
		} 
		else {
			fixed = false;
		}
	};

	const replaceUrl = (data) => {
		data.map((item, index) => {
			if (index === 0) {
				data[0].url = 'javascript:void(0);';
			} 
			else if (index === data.length - 1) {
				return '';
			} 
			else {
				item.url = item.url.replace('/desktop/', '');
			}
		});
	};

	const scrollFn = (e) => {
		if (click) {
			return;
		}
		click = true;
		const target = e.target;
		const dataIndex = parseInt(target.getAttribute('data-index'), 10);
		Array.prototype.map.call(navItems, (item, i) => {
			if (dataIndex === 0) {
				index = 0;
				window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
			}
			else if (dataIndex === i + 1) {
				index = i + 1;
				const height = getOffsetTop(navItems[i]) - nav.offsetHeight;
				window.scrollTo({ top: height, left: 0, behavior: 'smooth' });
			}
		});
		setTimeout(() => {
			click = false;
		}, 500);
	};

	onMount(() => {
		if (window.location.pathname === '/desktop') {
			replaceUrl(urlData);
		}
		urlData = [...urlData];
		top = 0;

		navItems = document.querySelectorAll('.js-nav-item');
		handler();
	});
</script>

<svelte:window on:scroll={handler} />

<div class="nav-wrap">
	<div class="nav-inner" bind:this={nav} class:fixed style:top>
		<dl>
			<dt class="js-nav-tabs">
				{#each urlData as item, i}
					{#if item.url !== urlData[urlData.length - 1].url}
						<a
							href={item.url}
							class:on={index === i}
							data-index={i}
							on:click|preventDefault={scrollFn}>{item.name}</a
						>
					{/if}
				{/each}
			</dt>
			<dd>
				<a href={urlData[urlData.length - 1].url} target="_blank"
					>{urlData[urlData.length - 1].name}</a
				>
			</dd>
		</dl>
	</div>
</div>

<style lang="scss">
</style>
