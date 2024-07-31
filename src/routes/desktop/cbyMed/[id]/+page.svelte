<script>
	import { onMount, tick } from 'svelte';
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';
	import { med } from '$lib/data/med.js';
	import initMedNav from '$lib/scripts/initMedNav.js';
	import ensureMedImageExists from '$lib/scripts/ensureMedImageExists.js';
	import NoResult from '$lib/components/NoResult.svelte';
	import textEllipsis from '$lib/utils/textEllipsis.js';

	let isShowIntro = false;
	let isShowReason = false;
	let data;
	let cpjsData = {
		height: null,
		sliceCont: null,
		text: null
	}

	const NoResultMsg = {
		title: '空空如也',
		time: '人气榜投选即将在11月开启',
		msg: '敬请期待~'
	};

	let cpjsText = {};

	data = med.filter((item) => {
		return item.id === parseInt($page.params.id, 10);
	});

	onMount(async () => {
		data[0].imgSrc = await ensureMedImageExists(data[0].imgSrc);
		data = data[0];
		await tick();
		textEllipsis('.js-cpjs', 7).then((res) => {
			cpjsData = {...cpjsData, ...res[0]}
		})
	});
	// initMedNav();
</script>

<div class="med-body">
	<div class="top-banner">
		<img src="/images/banner_secondary.jpg" alt="常备药头图" />
	</div>

	<div class="wrap-title">
		<img src="/images/tl_rank_active.jpg" alt="常备药榜标题" />
	</div>

	<div class="meds-inner">
		{#if data?.id}
			<div class="meds-content" transition:fade>
				<div class="med-pic">
					<i><img src="/images/meds/{data.imgSrc}" alt={data.name} /></i>
					<div class="btn-vote js-btn-vote hide">为TA好评一票</div>
					<div class="nov hide">目前票数{data.sequence}</div>
					<div class="subscribe-box hide" style="display: none;"></div>
					<div class="btn-detail-vote hide">
						<p>扫码打开好评</p>
						<img src="" alt="二维码图片" />
					</div>
				</div>
				<div class="med-detail">
					<p class="detail-title">{data.name}</p>
					<div class="box-msg-basic">
						<p class="productnum">
							<em class="title">编号</em>
							<span>{data.id}</span>
						</p>
						<p class="bzgg">
							<em class="title">规格</em>
							<span>{data.bzgg}</span>
						</p>
						<p class="sccs">
							<em class="title">生产厂商</em>
							<span>{data.factoryName}</span>
						</p>
						<p class="pzwh">
							<em class="title">批准文号</em>
							<span>{data.permitNo}</span>
						</p>
					</div>
					<p class="cpjs-top">产品介绍</p>
					<pre class="cpjs js-cpjs">{data.introduction}</pre>
					<button class="btn-show">点击展开<i class="down js-cpjs-down"></i></button>
					<p class="sbly-top">
						<em class="title">推荐理由</em>
					</p>
					<pre class="sbly">{data.reason}</pre>
				</div>
			</div>
		{:else}
			<NoResult {...NoResultMsg} />
		{/if}
	</div>
</div>

<style lang="scss"></style>
