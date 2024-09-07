<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { medList } from '$lib/data/medList.js';
	import initMedNav from '$lib/scripts/initMedNav.js';
	import ensureMedImageExists from '$lib/scripts/ensureMedImageExists.js';
	import NoResult from '$lib/components/NoResult.svelte';
	import Loading from '$lib/components/Loading.svelte';
	import GoHome from '@src/routes/m/GoHome.svelte';

	let orginData = [];
	let listData = [];
	let searchCont = '';

	const NoResultMsg = {
		title: '空空如也',
		time: '人气榜投选即将在11月开启',
		msg: '敬请期待~'
	};

	const loadingMsg = {
		msg: '正在加载列表中',
		visible: true
	};

	const search = () => {
		const searchData = orginData[0].data;

		if (!searchCont.trim()) {
			listData = JSON.parse(JSON.stringify(orginData[0].data));
			return;
		}

		listData = searchData.filter((item) => {
			return item.product.name.includes(searchCont);
		});
	};

	orginData = JSON.parse(
		JSON.stringify(
			medList.filter((item) => {
				return item.id === parseInt($page.params.id, 10);
			})
		)
	);

	onMount(async () => {
		loadingMsg.visible = false;

		if (!orginData.length) {
			return;
		}

		initMedNav(orginData[0]?.data[0]?.campaignBdId || null);

		for (const item of orginData[0].data) {
			item.product.imgSrc = await ensureMedImageExists(item.product.imgSrc); // 判断图片是否存在
		}
		orginData = [...orginData]; // 手动触发数据更新
		listData = JSON.parse(JSON.stringify(orginData[0].data));
	});
</script>

<svelte:head>
	<title>常备药列表-{orginData[0]?.title || ''}</title>
</svelte:head>

<div class="cbyp-list js-list-rank">
	<div class="search-box">
		<div class="search-form">
			<input
				type="search"
				placeholder="请输入药品名称"
				class="js-search-list-rank"
				autocomplete="off"
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
			<!-- <button>搜索</button> -->
		</div>
	</div>

	<h2 class="wrap-title">
		<img src="/images/mobile/tl_rank_active.jpg" alt="标题头图" />
	</h2>

	{#if orginData.length}
		<div class="bd-wrap js-bd-wrap">
			<div class="common-tl-sm">
				<h2 class="js-tl-drug-total">{orginData[0]?.title || ''}</h2>
			</div>
			{#each listData as item (item.id)}
				<div class="meds-box">
					<div class="med">
						<div class="med-img-box">
							<a href="/m/cbyMed/{item.id}?listId={$page.params.id}"
								><img src="/images/meds/{item.product.imgSrc}" alt={item.product.name} /></a
							>
						</div>
						<div class="med-info">
							<a class="name" href="/m/cbyMed/{item.id}?listId={$page.params.id}"
								><p class="name">{item.product.name}</p></a
							>
							<p class="com">{item.product.factoryName || item.product.enterpriseName}</p>
							<p class="nov"></p>
						</div>
						<div class="vote-box">
							<a class="dovote" href="/m/cbyMed/{item.id}?listId={$page.params.id}"
								><i class="icon icon-vote">查看</i></a
							>
						</div>
					</div>
				</div>
			{/each}
		</div>
	{:else}
		<Loading message={loadingMsg.msg} visible={loadingMsg.visible} />
		<NoResult {...NoResultMsg} />
	{/if}

	<GoHome />
</div>
