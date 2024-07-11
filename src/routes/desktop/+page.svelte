<script>
	import { medTypeList } from '$lib/data/medTypeList.js';
	import { dailyTypeList } from '@src/lib/data/dailyTypeList.js';
	import { foodTypeList } from '$lib/data/foodTypeList.js';
	import GoTop from '@src/lib/components/GoTop.svelte';
	import GoRank from '@src/lib/components/GoRank.svelte';
</script>

<div class="top-banner">
	<img src="/images/banner_main.jpg" alt="常备药头图" />
</div>

<div class="content-body">
	<div class="hdjs-wrap mode-wrap js-nav-item" id="hdjs">
		<div class="wrap-title">
			<img src="images/tl_intro.png" alt="" />
		</div>
		<div class="hdjs-content wrap-content">
			<div class="corner-box">
				<p>
					家庭常备药上榜品牌活动，是由家庭医生在线、新生代市场监测机构联合打造的聚焦我国家庭健康防护，助力医药企业高质量发展的年度品牌活动。该活动自2016年创办以来，在各大医药企业及消费者中有着极高的关注度和参与度。
				</p>
				<p>
					今年起，更在“家庭常备药上榜品牌“基础上，延伸至”家庭常备保健食品上榜品牌“、”家庭常备医疗器械及消毒用品上榜品牌”，形成“三大榜单”，向广大老百姓倾力推出一份专业实用的家庭常备系列健康产品指南。
				</p>
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
			<img src="images/tl_rank.jpg" alt="" />
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
					{#each dailyTypeList as item}
						<div class="bjp-box">
							<dl>
								<dt>
									<img
										style="width: 100%;height: 100%;object-fit: cover;"
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
					{#each foodTypeList as item}
						<div class="bjp-box">
							<dl>
								<dt>
									<img
										style="width: 100%;height: 100%;object-fit: cover;"
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
				<img src="images/tl_partner.jpg" alt="" />
			</div>
			<div class="swhz-content">
				<div class="card-box card-box-1">
					<div class="top-text">
						刘先生
						<i class="line-lt-long"></i>
						<i class="line-lt-short"></i>
						<i class="line-rt-long"></i>
						<i class="line-rt-short"></i>
					</div>
					<p>
						电话：020-37617158/13432030367 <br />
						QQ：1379476930 <br />
						邮箱：liuxiannian@familydoctor.com.cn
					</p>
				</div>
				<div class="card-box card-box-2">
					<div class="top-text">
						郎女士
						<i class="line-lt-long"></i>
						<i class="line-lt-short"></i>
						<i class="line-rt-long"></i>
						<i class="line-rt-short"></i>
					</div>
					<p>
						电话：15013029327 微信：langlang705 <br />
						QQ：790494927<br />
						邮箱：langchenglin@familydoctor.com.cn
					</p>
				</div>
				<div class="card-box card-box-4">
					<div class="top-text">
						彭先生
						<i class="line-lt-long"></i>
						<i class="line-lt-short"></i>
						<i class="line-rt-long"></i>
						<i class="line-rt-short"></i>
					</div>
					<p>
						电话/微信：18820041981<br />
						QQ：45257182 <br />
						邮箱：pengzhimin@familydoctor.com.cn
					</p>
				</div>
			</div>
		</div>
	</div>
	<div class="mtzy-wrap js-nav-item" id="mtzy">
		<h2 class="wrap-title">
			<img src="images/tl_reporter.jpg" alt="" />
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
						<li>
							<img src="images/logo_media/medic/yyjjb.png" alt="" />
						</li>
						<li>
							<img src="images/logo_media/medic/jkj.png" alt="" />
						</li>
						<li>
							<img src="images/logo_media/medic/yxj.png" alt="" />
						</li>
						<li>
							<img src="images/logo_media/medic/swg.png" alt="" />
						</li>
						<li>
							<img src="images/logo_media/medic/yzw.png" alt="" />
						</li>
						<li>
							<img src="images/logo_media/medic/yqs.png" alt="" />
						</li>
						<li>
							<img src="images/logo_media/medic/dxy.png" alt="" />
						</li>
						<li>
							<img src="images/logo_media/medic/39.png" alt="" />
						</li>
						<li>
							<img src="images/logo_media/medic/dmw.png" alt="" />
						</li>
						<li>
							<img src="images/logo_media/medic/qyw.png" alt="" />
						</li>
						<li>
							<img src="images/logo_media/medic/xywy.png" alt="" />
						</li>
						<li>
							<img src="images/logo_media/medic/dxt.png" alt="" />
						</li>
						<li>
							<img src="images/logo_media/medic/yd.png" alt="" />
						</li>
						<li>
							<img src="images/logo_media/medic/yyzt.png" alt="" />
						</li>
						<li>
							<img src="images/logo_media/medic/sinayy.png" alt="" />
						</li>
						<li>
							<img src="images/logo_media/medic/jkyx.png" alt="" />
						</li>
						<li>
							<img src="images/logo_media/medic/kpzg.png" alt="" />
						</li>
						<li>
							<img src="images/logo_media/medic/ygw.png" alt="" />
						</li>
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
						<li>
							<img src="images/logo_media/news/rmrb.png" alt="" />
						</li>
						<li>
							<img src="images/logo_media/news/ys.png" alt="" />
						</li>
						<li>
							<img src="images/logo_media/news/xhw.png" alt="" />
						</li>
						<li>
							<img src="images/logo_media/news/zxw.png" alt="" />
						</li>
						<li>
							<img src="images/logo_media/news/nfrb.png" alt="" />
						</li>
						<li>
							<img src="images/logo_media/news/ycwb.png" alt="" />
						</li>
						<li>
							<img src="images/logo_media/news/gdws.png" alt="" />
						</li>
						<li>
							<img src="images/logo_media/news/gzrb.png" alt="" />
						</li>
						<li>
							<img src="images/logo_media/news/gzdst.png" alt="" />
						</li>
						<li>
							<img src="images/logo_media/news/xxsb.png" alt="" />
						</li>
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
						<li>
							<img src="images/logo_media/net/fhw.png" alt="" />
						</li>
						<li>
							<img src="images/logo_media/net/sina.png" alt="" />
						</li>
						<li>
							<img src="images/logo_media/net/tt.png" alt="" />
						</li>
						<li>
							<img src="images/logo_media/net/zaker.png" alt="" />
						</li>
						<li>
							<img src="images/logo_media/net/ydzx.png" alt="" />
						</li>
						<li>
							<img src="images/logo_media/net/txw.png" alt="" />
						</li>
						<li>
							<img src="images/logo_media/net/wy.png" alt="" />
						</li>
						<li>
							<img src="images/logo_media/net/sh.png" alt="" />
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>

	<GoTop />
	<GoRank />
</div>

<style lang="scss">
</style>
