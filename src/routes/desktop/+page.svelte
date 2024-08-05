<script>
	import { guide } from '$lib/data/guide.js';
	import { contactPerson } from '$lib/data/contactPerson.js';
	import { medTypeList, dailyTypeList, foodTypeList } from '$lib/data/homeList.js';
	import { mediaBusiness, mediaNews, mediaNet } from '$lib/data/mediaList.js';
	import GoTop from '$lib/components/GoTop.svelte';
	import GoRank from '$lib/components/GoRank.svelte';
</script>

<svelte:head>
	<title>首页</title>
</svelte:head>

<div class="top-banner">
	<img src="/images/pc/banner_main.jpg" alt="常备药头图" />
</div>

<div class="content-body">
	<div class="hdjs-wrap mode-wrap js-nav-item" id="hdjs">
		<div class="wrap-title">
			<img src="/images/pc/tl_intro.png" alt="" />
		</div>
		<div class="hdjs-content wrap-content">
			<div class="corner-box">
				{@html guide}
			</div>
		</div>
	</div>
	<div class="time-wrap">
		<div class="wrap-inner">
			<div class="common-tl-sm">
				<h2>时间流程</h2>
			</div>
			<div class="wrap-cont">
				<dl class="month-5">
					<dt></dt>
					<dd>报名渠道开通<br />活动专题上线</dd>
				</dl>
				<dl class="month-629">
					<dt></dt>
					<dd>报名资料收集审核<br />活动宣传持续曝光</dd>
				</dl>
				<dl class="month-9">
					<dt></dt>
					<dd>人气网络<br />票选</dd>
				</dl>
				<dl class="month-10">
					<dt></dt>
					<dd>榜单公布</dd>
				</dl>
				<dl class="month-11">
					<dt></dt>
					<dd>颁奖典礼</dd>
				</dl>
			</div>
		</div>
	</div>
	<div class="jxsz-wrap mode-wrap">
		<div class="wrap-title">
			<img src="/images/pc/tl_rank.jpg" alt="" />
		</div>
		<div class="jxsz-content wrap-content">
			<div class="jxsz-corner jxsz-bd js-list-drug js-nav-item" id="cbyb">
				<div class="common-tl-sm">
					<h2>家庭常备药上榜品牌</h2>
				</div>
				<div class="bd-content">
					{#each medTypeList as item}
						<a target="_blank" href={`/desktop/cbyList/${item.id}`} class="jxsz-btn">{item.name}</a>
					{/each}
				</div>
			</div>
			<div class="jxsz-corner jxsz-bd js-list-food js-nav-item" id="bjsp">
				<div class="common-tl-sm">
					<h2>家庭常备保健食品上榜品牌</h2>
				</div>
				<div class="bd-content">
					{#each foodTypeList as item}
						<div class="bjp-box">
							<dl>
								<dt>
									<img
										src="/images/meds/{item.imgSrc}"
										alt={item.name}
									/>
								</dt>
								<dd class="med-info">
									<p class="med-name">
										<a href="/desktop/cbyMed/{item.id}" target="_blank">{item.name}</a>
									</p>
									<p class="company">{item.factoryName}</p>
								</dd>
								<dd class="fr">
									<a href="/desktop/cbyMed/{item.id}" target="_blank">查看</a>
								</dd>
							</dl>
						</div>
					{/each}
				</div>
			</div>
			<div class="jxsz-corner jxsz-bd js-list-qx js-nav-item" id="ylqx">
				<div class="common-tl-sm">
					<h2>家庭常备医疗器械及消毒用品上榜品牌</h2>
				</div>
				<div class="bd-content">
					{#each dailyTypeList as item}
						<div class="bjp-box">
							<dl>
								<dt>
									<img
										src="/images/meds/{item.imgSrc}"
										alt={item.name}
									/>
								</dt>
								<dd class="med-info">
									<p class="med-name">
										<a href="/desktop/cbyMed/{item.id}" target="_blank">{item.name}</a>
									</p>
									<p class="company">{item.factoryName}</p>
								</dd>
								<dd class="fr">
									<a href="/desktop/cbyMed/{item.id}" target="_blank">查看</a>
								</dd>
							</dl>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
	<div class="swhz-wrap mode-wrap js-nav-item" id="swhz">
		<div class="common-inner">
			<div class="wrap-title">
				<img src="/images/pc/tl_partner.jpg" alt="" />
			</div>
			<div class="swhz-content">
				{#each contactPerson as item, index}
					<div class="card-box card-box-{index % 4 + 1}">
						<div class="top-text">
							{item.name}
							<i class="line-lt-long"></i>
							<i class="line-lt-short"></i>
							<i class="line-rt-long"></i>
							<i class="line-rt-short"></i>
						</div>
						{@html item.cont}
					</div>
				{/each}
			</div>
		</div>
	</div>
	<div class="mtzy-wrap js-nav-item" id="mtzy">
		<h2 class="wrap-title">
			<img src="/images/pc/tl_reporter.jpg" alt="" />
		</h2>
		<div class="mtzy-content-wrap">
			<div class="wrap-inner">
				<div class="wrap-media wrap-media-1">
					<div class="top-text">
						行业媒体
						<i class="line-lt-long"></i>
						<i class="line-lt-short"></i>
						<i class="line-rt-long"></i>
						<i class="line-rt-short"></i>
					</div>
					<ul>
						{#each mediaBusiness as item}
							<li><img src="{item}" alt="行业图标"></li>
						{/each}
					</ul>
				</div>
				<div class="wrap-media wrap-media-2">
					<div class="top-text">
						新闻媒体
						<i class="line-lt-long"></i>
						<i class="line-lt-short"></i>
						<i class="line-rt-long"></i>
						<i class="line-rt-short"></i>
					</div>
					<ul>
						{#each mediaNews as item}
							<li><img src="{item}" alt="媒体图标"></li>
						{/each}
					</ul>
				</div>
				<div class="wrap-media wrap-media-3">
					<div class="top-text">
						网络媒体
						<i class="line-lt-long"></i>
						<i class="line-lt-short"></i>
						<i class="line-rt-long"></i>
						<i class="line-rt-short"></i>
					</div>
					<ul>
						{#each mediaNet as item}
							<li><img src="{item}" alt="媒体图标"></li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</div>

	<GoTop />
	<GoRank />
</div>

<div class="bottom-img">
	<img src="/images/pc/bottom_sponsor.jpg" alt="主办机构">
</div>

<style lang="scss"></style>
