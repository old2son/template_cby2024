<script>
	import { onMount, tick } from 'svelte';
	import { fade, slide } from 'svelte/transition';
	import { page } from '$app/stores';
	import { med } from '$lib/data/med.js';
	import { get } from 'svelte/store';
	import { voteStore } from '$lib/stores/voteStore.js';
	import initMedNav from '$lib/scripts/initMedNav.js';
	import ensureMedImageExists from '$lib/scripts/ensureMedImageExists.js';
	import Loading from '$lib/components/Loading.svelte';
	import Toast from '$lib/components/Toast.svelte';

	let href = '';
	let voteNum = 0;
	let isVote = true;
	let data;
	let cpjsEle;
	let sblyEle;
	let cpjsData = {
		cont: '',
		sliceCont: '',
		height: 'auto',
		sliceHeight: 'auto',
		isShow: true
	};

	let sblyData = {
		cont: '',
		sliceCont: '',
		height: 'auto',
		sliceHeight: 'auto',
		isShow: true
	};

	const toastMsg = {
		visible: false,
		message: '投票成功',
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

	const Url = new URLSearchParams($page.url.search);
	href = `${Url.get('listId')}` || '/m/';

	data = med.filter((item) => {
		return item.id === parseInt($page.params.id, 10);
	});

	onMount(async () => {

		console.log($page)

		loadingMsg.visible = false;
		if (!data.length) {
			return;
		}

		initMedNav(data[0]?.campaignBdId || null);
		data[0].imgSrc = await ensureMedImageExists(data[0].imgSrc);
		data = data[0];
		voteNum = data.sequence;
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
		{#if data?.id}
			<div class="overview" class:num={get(voteStore)}>
				{get(voteStore) ? `目前票数${voteNum}` : '好评即将开启，敬请期待'}
			</div>

			<div class="img-box">
				<img class="detail-img" src="/images/meds/{data.imgSrc}" alt={data.name} />
			</div>

			<div class="box-inner" transition:fade>
				<p class="nov hide">目前好评数&ensp;<em>{voteNum}</em></p>
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

			{#if get(voteStore)}
				<div class="btn-vote">
					<button
						class="dovote"
						on:click={() => {
							if (toastMsg.visible) {
								return;
							}

							voteNum++;
							toastMsg.visible = true;
							setTimeout(() => {
								toastMsg.visible = false;
							}, 500);
						}}>为ta好评</button
					>
				</div>
			{:else}
				<a
					class="detail-btn-sinup"
					href="https://img.familydoctor.com.cn/component/channels/cbyp2023/signup">我要报名</a
				>
			{/if}
		{:else}
			<Loading message={loadingMsg.msg} visible={loadingMsg.visible} />
			<div class:hide={loadingMsg.visible} class="nodata">没有此药品</div>
		{/if}
		
		<a class="btn-back" {href} transition:slide={{ duration: 200, axis: 'x' }}>返回列表</a>
	</div>

	<Toast visible={toastMsg.visible} message={toastMsg.message} />
</div>

<style lang="scss">
	.nodata {
		margin-top: 10rem;
		overflow: hidden;
		text-align: center;
		color: #fff;
		font-size: 1.3rem;
	}

	.btn-back {
		display: block;
		position: fixed;
		top: 50%;
		right: -10rem;
		height: 2.2rem;
		line-height: 2.2rem;
		padding: 0 0.5rem 0 1rem;
		border-radius: 4rem 0 0 4rem;
		text-align: center;
		color: #f7eae1;
		font-size: 1rem;;
		background-color: rgba(#060807, 0.7);

		&:active {
			background-color: rgba(#060807, 0.7);
		}
	}
</style>
