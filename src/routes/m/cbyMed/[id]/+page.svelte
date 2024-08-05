<script>
	import { onMount, tick } from 'svelte';
	import { fade, slide } from 'svelte/transition';
	import { page } from '$app/stores';
	import { med } from '$lib/data/med.js';
	import initMedNav from '$lib/scripts/initMedNav.js';
	import ensureMedImageExists from '$lib/scripts/ensureMedImageExists.js';
	import NoResult from '$lib/components/NoResult.svelte';
	import Loading from '$lib/components/Loading.svelte';

	let isShowIntro = false;
	let isShowReason = false;
	let data;
	let cpjsEle;
	let cpjsData = {
		cont: '',
		sliceCont: '',
		height: 'auto',
		sliceHeight: 'auto',
		isShow: true
	};

	const resultMsg = {
		title: '空空如也',
		time: '人气榜投选即将在11月开启',
		msg: '敬请期待~'
	};

	const loadingMsg = {
		msg: '正在加载药品中',
		visible: true
	};

	const textEllipsis = (eleClassName, num) => {
		const data = [];
		const eles = document.querySelectorAll(eleClassName);
		const formatStr = (ele) => {
			const cont = ele.innerHTML;
			const totalTextLen = cont.length;
			const lineNum = num || 3;
			const baseWidth = window.getComputedStyle(ele).width;
			const baseFontSize = window.getComputedStyle(ele).fontSize;
			const lineWidth = +baseWidth.slice(0, -2); // 去除单位
			const height = ele.offsetHeight; // 返回原始高度
			const viewState = {
				cont: '',
				sliceCont: '',
				height: 'auto',
				isShow: true
			};

			const strNum = Math.floor(lineWidth / +baseFontSize.slice(0, -2));

			let sliceCont = '';

			const totalStrNum = Math.floor(strNum * lineNum);

			const lastIndex = totalStrNum - totalTextLen;

			// pre 识别回车，无法准确裁切
			if (totalTextLen > totalStrNum) {
				viewState.isShow = false;
				sliceCont = cont.slice(0, lastIndex - 3).concat('...');
			} else {
				sliceCont = cont;
			}

			viewState.cont = cont;
			viewState.sliceCont = sliceCont;
			viewState.height = height;
			data.push(viewState);
		};

		eles.forEach(function (element) {
			formatStr(element);
		});

		return new Promise((resolve) => {
			resolve(data);
		});
	};

	data = med.filter((item) => {
		return item.id === parseInt($page.params.id, 10);
	});

	onMount(async () => {
		loadingMsg.visible = false;
		if (!data.length) {
			return;
		}

		initMedNav(data[0]?.campaignBdId || null);
		data[0].imgSrc = await ensureMedImageExists(data[0].imgSrc);
		data = data[0];
		await tick();
		textEllipsis('.js-cpjs', 7).then(async (res) => {
			cpjsData = res[0];

			await tick();
			if (!cpjsData.isShow) {
				cpjsData.sliceHeight = cpjsEle.scrollHeight;
			}
		});
	});
</script>

<div class="med-body">
	<div class="top-banner">
		<img src="/images/pc/banner_secondary.jpg" alt="常备药头图" />
	</div>

	<div class="wrap-title">
		<img src="/images/pc/tl_rank_active.jpg" alt="常备药榜标题" />
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
					<pre
						class="cpjs js-cpjs"
						bind:this={cpjsEle}
						style:height={cpjsData.isShow
							? cpjsData.height + 'px'
							: cpjsData.sliceHeight + 'px'}>{cpjsData.isShow
							? data.introduction
							: cpjsData.sliceCont}</pre>
					{#if cpjsData.sliceCont}
						<button
							class="btn-show"
							on:click={(e) => {
								const target = e.target;
								cpjsData.isShow = !cpjsData.isShow;
							}}
							>{cpjsData.isShow ? '点击收起' : '点击展开'}<i
								class="js-cpjs-down"
								class:on={cpjsData.isShow}
							></i></button
						>
					{/if}
					<p class="sbly-top">
						<em class="title">推荐理由</em>
					</p>
					<pre class="sbly">{data.reason}</pre>
				</div>
			</div>
		{:else}
			<Loading message={loadingMsg.msg} visible={loadingMsg.visible} />
			<NoResult {...resultMsg} />
		{/if}
	</div>
</div>

<style lang="scss">
	/* :global(.loading) {
    	color: #fff;
  	} */
</style>
