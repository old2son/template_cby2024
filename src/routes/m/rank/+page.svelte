<script>
	import Toast from '@src/lib/components/Toast.svelte';
	import { onMount } from 'svelte';
	import rankList from '$lib/data/rankList.js';
	import NoResult from '$lib/components/NoResult.svelte';
	import Loading from '$lib/components/Loading.svelte';
	import GoHome from '@src/routes/m/GoHome.svelte';
	import Image from '@src/routes/m/rank/Image.svelte';

	let orginData = [];
	let listData = [];
	let searchCont = '';
	let page = 1;
	let size = 20;
	let allLoaded = false;

	const NoResultMsg = {
		title: '空空如也',
		time: '人气榜投选即将在11月开启',
		msg: '敬请期待~'
	};

	const toastProps = {
		message: '',
		visible: false
	};

	const loadingMsg = {
		msg: '正在加载列表中',
		visible: true
	};

	const loadMore = () => {
		if (allLoaded) {
			return
		};

		const start = (page - 1) * size;
		const end = start + size;
		const newItems = orginData.slice(start, end);

		if (newItems.length > 0) {
			listData = [...listData, ...newItems];
			page++;
		} 
		else {
			allLoaded = true;
			toastProps.message = '没有更多数据了';
			toastProps.visible = true;
			setTimeout(() => {
				toastProps.visible = false;
			}, 2000);
			window.removeEventListener('scroll', handleScroll);
		}
	};

	const handleScroll = () => {
		if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
			loadMore();
		}
	};

	const search = () => {
		if (!searchCont.trim()) {
			listData = JSON.parse(JSON.stringify(orginData));
			return;
		}

		listData = orginData.filter((item) => {
			return item.name.includes(searchCont) || item.id === Number(searchCont);
		});
	};

	onMount(() => {
		loadingMsg.visible = false;
		orginData = JSON.parse(JSON.stringify(rankList));
		listData = JSON.parse(JSON.stringify(orginData.slice(0, 20)));
		page++;
	});
</script>

<svelte:window on:scroll={handleScroll} />

<div class="cbyp-rank js-cbyp-rank">
	<div class="search-box rank-search">
		<div class="search-form">
			<input
				type="search"
				placeholder="请输入药品名称或药品编号"
				class="js-search-rank"
				bind:value={searchCont}
				on:input={search}
			/>
			<button
				class="btn-clear"
				class:hide={!searchCont.trim()}
				on:click={() => {
					searchCont = '';
					search();
				}}
			></button>
		</div>
	</div>
	<h2 class="wrap-title">
		<img src="/images/mobile/tl_rank_list.jpg" alt="排行榜标题" />
	</h2>

	{#if listData.length}
		<div class="rank-wrap">
			<div class="rank-th">
				<div class="tr rank">排名</div>
				<div class="tr avatar">头像</div>
				<div class="tr number">编号</div>
				<div class="tr name">药名</div>
				<div class="tr nov">好评数</div>
			</div>
			<div class="rank-list">
				{#each listData as item, index}
					<a class="rank-item" href="/m/cbyMed/{item.id}"
						><div
							class="rank"
							class:first={index + 1 === 1}
							class:second={index + 1 === 2}
							class:third={index + 1 === 3}
						>
							{index + 1}
						</div>
						<div class="avatar">
							<Image imgSrc={item.imgSrc} name={item.name} />
						</div>
						<div class="number">{item.id}</div>
						<div class="name">{item.name}</div>
						<div class="nov">{item.voteNum}</div></a
					>
				{/each}
			</div>
		</div>
	{:else}
		<Loading message={loadingMsg.msg} visible={loadingMsg.visible} />
		<NoResult {...NoResultMsg} />
	{/if}

	<GoHome />
	<Toast {...toastProps} />
</div>
