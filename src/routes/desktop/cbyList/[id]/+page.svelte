<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { medList } from '$lib/data/medList.js';
	import NoResult from '@src/lib/components/NoResult.svelte';

	let data = [];

	const NoResultMsg = {
		title: '空空如也',
		time: '人气榜投选即将在11月开启',
		msg: '敬请期待~'
	};

	const ensureImageExists = (imgSrc) => {
		return new Promise((resolve) => {
			const img = new Image();
			img.src = `/images/meds/${imgSrc}`;
			img.onload = () => {
				resolve(imgSrc);
			};
			img.onerror = () => {
				resolve('img_miss.jpg');
			};
		});
	};

	data = medList.filter((item) => {
		return item.id === parseInt($page.params.id, 10);
	});

	onMount(async () => {
		// 判断图片是否存在
		if (data.length) {
			for (const item of data[0].data) {
				item.product.imgSrc = await ensureImageExists(item.product.imgSrc);
			}
		}

		// 手动触发数据更新
		data = [...data];
	});
</script>

<div class="list-body">
	<div class="top-banner">
		<img src="/images/banner_secondary.jpg" alt="常备药头图" />
	</div>

	<div class="wrap-title">
		<img src="/images/tl_rank_active.jpg" alt="上榜标题图" />
	</div>

	{#if data.length}
		<div class="list-box js-bd-wrap">
			<div class="common-tl-sm">
				<h2 class="js-list-tl">{data[0]?.title || ''}</h2>
			</div>
			<div class="list-content js-list-cont">
				{#each data[0].data as item (item.id)}
					<div class="med-box">
						<dl>
							<dt>
								<a target="_blank" href="/desktop/cbyMed/{item.id}" style="height: 100%;"
									><img
										style="width: 100%;height: 100%;object-fit: cover;"
										src="/images/meds/{item.product.imgSrc}"
										alt={item.product.name}
									/></a
								>
							</dt>
							<dd class="med-info">
								<p class="med-name">
									<a href="/desktop/cbyMed/{item.id}" target="_blank"
										>{item.product.enterpriseName}</a
									>
								</p>
								<p class="company">{item.product.factoryName}</p>
								<p class="voteNum hide">目前好评数 {item.product.sequence}</p>
							</dd>
							<dd class="fr">
								<a href="/desktop/cbyMed/{item.id}" target="_blank">查看</a>
							</dd>
						</dl>
					</div>
				{/each}
			</div>
		</div>
	{:else}
		<NoResult {...NoResultMsg} />
	{/if}

	<a class="common-btn-light" href="/desktop" target="_blank">返回首页</a>
</div>
