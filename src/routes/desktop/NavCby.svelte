<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { navStore } from '$lib/stores/navStore.js';
	import getOffsetTop from '$lib/utils/getOffsetTop.js';
	import anime from '$lib/utils/anime.js';

	let index = null;
	let fixed = false;
	let click = false;
	let top = '-200px';
	let nav; // HTMLElement
	let navItems = [];
	
	let urlData = [
		{
			name: '专题首页',
			url: '/desktop/',
			target: false
		},
		{
			name: '活动介绍',
			url: '/desktop/#hdjs',
			target: true
		},
		{
			name: '常备药榜',
			url: '/desktop/#cbyb',
			target: true
		},
		{
			name: '保健食品榜',
			url: '/desktop/#bjsp',
			target: true
		},
		{
			name: '医疗器械及消毒用品榜',
			url: '/desktop/#ylqx',
			target: true
		},
		{
			name: '商务合作',
			url: '/desktop/#swhz',
			target: true
		},
		{
			name: '媒体资源',
			url: '/desktop/#mtzy',
			target: true
		},
		{
			name: '申报通道',
			url: '/desktop/signup',
			target: true
		}
	];

	const handler = () => {
		if (window.scrollY > nav.offsetHeight) {
			fixed = true;
		} 
		else {
			fixed = false;
		}

		if (click || !navItems.length) {
			return;
		}

		// 滚动点亮
		[].forEach.call(navItems, (item, i) => {
			const height = getOffsetTop(item) - nav.offsetHeight - 30;
			if (window.scrollY >= height) {
				index = i + 1;
			}
			else if (i === 0 && window.scrollY <= getOffsetTop(item) - nav.offsetHeight) {
				index = 0;
			}
		});
	};

	const replaceUrl = (data) => {
		data.map((item, index) => {
			if (index === 0) {
				data[0].url = 'javascript:void(0);';
			} 
			else {
				index !== data.length - 1 ? (item.url = item.url.replace('/desktop/', '')) : '';
			}

			item.target = false;
		});
	};

	// 点击点亮
	const scrollFn = (e) => {
		if (window.location.pathname === '/desktop') {
			e.preventDefault();
		}

		if (click || !navItems.length) {
			return;
		}
		
		click = true;
		const target = e.target;
		const dataIndex = parseInt(target.getAttribute('data-index'), 10);
		Array.prototype.map.call(navItems, (item, i) => {
			if (dataIndex === 0) {
				index = 0;
				window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
				history.pushState('', '', '#');
			}
			else if (dataIndex === i + 1) {
				index = i + 1;
				const height = getOffsetTop(item) - nav.offsetHeight;
				window.scrollTo({ top: height, left: 0, behavior: 'smooth' });
				history.pushState('', '', target.getAttribute('href'));
			}
		});
		setTimeout(() => {
			click = false;
		}, 650);
	};

	navStore.subscribe((value) => {
		index = value;
	});

	onMount(() => {
		if (window.location.pathname === '/desktop') {
			replaceUrl(urlData);
		}
		urlData = [...urlData];
		top = 0;

		navItems = document.querySelectorAll('.js-nav-item');
		handler();

		// test
		anime({
			targets: 'html, body',
			scrollTop: 1000,
			duration: 350,
			easing: 'easeInOutQuad'
		});
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
							target={item.target ? '_blank' : '_self'}
							href={item.url}
							class:on={index === i}
							data-index={i}
							on:click={scrollFn}>{item.name}</a
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
