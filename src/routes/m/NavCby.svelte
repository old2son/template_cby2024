<script>
	import { onMount } from 'svelte';
	import { getStores, navigating, page, updated } from '$app/stores';
	import { pushState, replaceState } from '$app/navigation';
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
			name: '活动<br>介绍',
			class: 'nav-intro',
			url: '/m/#hdjs',
			target: false
		},
		{
			name: '常备<br>药榜',
			class: 'nav-drug',
			url: '/m/#cbyb',
			target: false
		},
		{
			name: '保健<br>食品榜',
			class: 'nav-food',
			url: '/m/#bjsp',
			target: false
		},
		{
			name: '医疗器械<br>消毒用品',
			class: 'nav-equip',
			url: '/m/#ylqx',
			target: false
		},
		{
			name: '商务<br>合作',
			class: 'nav-partner',
			url: '/m/#swhz',
			target: false
		},
		{
			name: '媒体<br>资源',
			class: 'nav-reporter',
			url: '/m/#mtzy',
			target: false
		},
	];

	const handler = () => {
		if (window.scrollY > getOffsetTop(nav.parentNode)) {
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
			const bottom = item.getBoundingClientRect().bottom;
			
			if (window.scrollY >= height && bottom >= 0) {
				index = i;
			}
		});
	};

	const replaceUrl = (data) => {
		data.map((item, index) => {
			index !== data.length - 1 ? (item.url = item.url.replace('/m/', '')) : '';
		});
	};

	// 点击点亮
	const scrollFn = (e) => {
		if ($page.url.pathname === '/m/') {
			e.preventDefault();
		}

		if (click || !navItems.length) {
			return;
		}
		
		click = true;
		const target = e.target;
		const dataIndex = parseInt(target.getAttribute('data-index'), 10);
		Array.prototype.map.call(navItems, (item, i) => {
			if (dataIndex === 0 && i === 0) {
				index = 0;
				pushState(`${$page.url.origin + $page.url.pathname}`);
				anime({
					targets: 'html, body',
					scrollTop: 0,
					duration: 350,
					easing: 'easeInOutQuad'
				});
			}
			else if (dataIndex === i + 1) {
				index = i + 1;
				pushState(`${$page.url.origin + $page.url.pathname + target.getAttribute('href')}`);
				anime({
					targets: 'html, body',
					scrollTop: getOffsetTop(document.querySelector(`#${item.id}`)) - (nav.offsetHeight + 20),
					duration: 350,
					easing: 'easeInOutQuad'
				});
			}
		});
		setTimeout(() => {
			click = false;
		}, 400);
	};

	const onceScroll = () => {
		if (!$page.url.hash) {
			return;
		}

		anime({
			targets: 'html, body',
			scrollTop: getOffsetTop(document.querySelector($page.url.hash)) - (nav.getBoundingClientRect().height + 20),
			duration: 350,
			easing: 'easeInOutQuad'
		});
	};

	navStore.subscribe((value) => {
		index = value;
	});

	onMount(() => {
		urlData = [...urlData];
		top = 0;
		navItems = document.querySelectorAll('.js-nav-item');
	
		if ($page.url.pathname === '/m') {
			replaceUrl(urlData);
			onceScroll();
			handler();
		}
	});
</script>

<svelte:window on:scroll={handler} />

<div class="top-nav-wrap">
    <div class="js-nav top-nav-inner" bind:this={nav} class:fixed>
		{#each urlData as item, i}
			<a
				target={item.target ? '_blank' : '_self'}
				href={item.url}
				class="{item.class}"
				class:on={index === i}
				data-index={i}
				on:click={scrollFn}><em>{@html item.name}</em></a
			>
		{/each}
    </div>
</div>

<style lang="scss"></style>
