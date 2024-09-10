<script>
	import { onMount } from 'svelte';
	import rankList from '$lib/data/rankList.js';
	import NoResult from '$lib/components/NoResult.svelte';
	import Loading from '$lib/components/Loading.svelte';
	import GoHome from '@src/routes/m/GoHome.svelte';

	const NoResultMsg = {
		title: '空空如也',
		time: '人气榜投选即将在11月开启',
		msg: '敬请期待~'
	};

	const loadingMsg = {
		msg: '正在加载列表中',
		visible: true
	};
</script>

<div class="cbyp-rank js-cbyp-rank">
	<div class="search-box rank-search">
		<div class="search-form">
			<input type="search" value="" placeholder="请输入药品名称或药品编号" class="js-search-rank" />
			<button class="btn-clear hide"></button>
			<button>搜索</button>
		</div>
	</div>
	<h2 class="wrap-title">
		<img src="/images/mobile/tl_rank_list.jpg" alt="" />
	</h2>
	<div class="rank-wrap">
		<div class="rank-th">
			<div class="tr rank">排名</div>
			<div class="tr avatar">头像</div>
			<div class="tr number">编号</div>
			<div class="tr name">药名</div>
			<div class="tr nov">好评数</div>
		</div>
		<div class="rank-list">
			{#each rankList as item, index}
				<a class="rank-item" href="m/cbyMed/{item.id}"
					><div
						class="rank"
						class:first={(index + 1) === 1}
						class:second={(index + 1) === 2}
						class:third={(index + 1) === 3}
					>
						{index}
					</div>
					<div class="avatar">
						<img src="/images/meds/{item.imgSrc}" alt={item.name} />
					</div>
					<div class="number">{item.id}</div>
					<div class="name">{item.name}</div>
					<div class="nov">{item.voteNum}</div></a
				>
			{/each}
		</div>
	</div>
	<!-- <Loading message={loadingMsg.msg} visible={loadingMsg.visible} /> -->
	<!-- <NoResult {...NoResultMsg} /> -->

	<GoHome />
</div>
