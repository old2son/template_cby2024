<script>
	import { onMount, tick } from 'svelte';
	import { fade, slide } from 'svelte/transition';
	import { page } from '$app/stores';
	import { med } from '$lib/data/med.js';
	import { get } from 'svelte/store';
	import { voteStore } from '$lib/stores/voteStore.js';
	import initMedNav from '$lib/scripts/initMedNav.js';
	import ensureMedImageExists from '$lib/scripts/ensureMedImageExists.js';
	import NoResult from '$lib/components/NoResult.svelte';
	import Loading from '$lib/components/Loading.svelte';

	let href = '';
	let isShowIntro = false;
	let isShowReason = false;
	let isVote = true;
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
		// await tick();
		// textEllipsis('.js-cpjs', 7).then(async (res) => {
		// 	cpjsData = res[0];

		// 	await tick();
		// 	if (!cpjsData.isShow) {
		// 		cpjsData.sliceHeight = cpjsEle.scrollHeight;
		// 	}
		// });
	});
</script>

<div class="cbyp-med">
	<div class="detail-box">
		<div class="overview" class:num={get(voteStore)}>{get(voteStore) ? `目前票数${data.sequence || 0}` : '好评即将开启，敬请期待'}</div>

		<div class="img-box">
			<img class="detail-img" src="/images/meds/{data.imgSrc}" alt={data.name} />
		</div>

		{#if data?.id}
			<div class="box-inner" transition:fade>
				<p class="nov hide">目前好评数&ensp;<em>{data.sequence}</em></p>
				<div class="subscribe-box hide"></div>
				<p class="name"></p>
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

				<div class="box-cont js-med-cpjs">
					<em class="title">产品介绍</em>
					<pre class="cpjs lock"></pre>
					<button class="down">点击展开</button>
				</div>
				
				<div class="box-cont js-med-sbly">
					<em class="title">上榜理由</em>
					<pre class="sbly lock"></pre>
					<button class="down">点击展开</button>
				</div>
			</div>
		{:else}
			<Loading message={loadingMsg.msg} visible={loadingMsg.visible} />
		{/if}

		{#if get(voteStore)}
			<div class="btn-vote">
				<button class="dovote">为ta好评</button>
			</div>
		{:else}
			<a class="detail-btn-sinup" href="https://img.familydoctor.com.cn/component/channels/cbyp2023/signup">我要报名</a>
		{/if}
		
		<a class="btn-back" {href} on:click|preventDefault={() => history.back()}>返回</a>

	</div>
</div>

<style lang="scss"></style>
