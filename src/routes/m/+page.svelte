<script>
    import NavCby from '@src/routes/m/NavCby.svelte';
	import { contactPerson } from '$lib/data/contactPerson.js';
	import { medTypeList, dailyTypeList, foodTypeList } from '$lib/data/homeList.js';
	import { mediaBusiness, mediaNews, mediaNet } from '$lib/data/mediaList.js';
</script>

<svelte:head>
	<title>首页</title>
</svelte:head>

<div class="top-banner">
    <img src="/images/mobile/banner_main.jpg" alt="">
</div>

<NavCby/>

<div class="hdjs-wrap js-nav-item" id="hdjs">
    <h2 class="wrap-title" ><img src="/images/mobile/tl_intro.jpg" alt=""></h2>
    <div class="hdjs-cont-wrap js-cont-wrap on">
        <dl>
            <dt class="hdjs-box">
                <p>家庭常备药上榜品牌活动，是由家庭医生在线、新生代市场监测机构联合打造的聚焦我国家庭健康防护，助力医药企业高质量发展的年度品牌活动。该活动自2016年创办以来，在各大医药企业及消费者中有着极高的关注度和参与度。</p>
                <p>今年起，更在“家庭常备药上榜品牌“基础上，延伸至”家庭常备保健食品上榜品牌“、”家庭常备医疗器械及消毒用品上榜品牌”，形成“三大榜单”，向广大老百姓倾力推出一份专业实用的家庭常备系列健康产品指南。</p>
            </dt>
            <dd><button class="js-btn expand-hd">点击展开</button></dd>
        </dl>
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
                <dd>报名渠道开通<br>活动专题上线</dd>
            </dl>
            <dl class="month-629">
                <dt></dt>
                <dd>报名资料收集审核<br>活动宣传持续曝光</dd>
            </dl>
            <dl class="month-9">
                <dt></dt>
                <dd>人气网络<br>票选</dd>
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
<div class="index-rank-wrap">
    <h2 class="wrap-title" >
        <img src="/images/mobile/tl_rank.jpg" alt="">
    </h2>
    <div class="cbyb-wrap js-list-drug js-nav-item" id="cbyb">
        <div class="bd-wrap bd-content">
            <div class="common-tl-sm">
                <h2>家庭常备药上榜品牌</h2>
            </div>
            <div class="js-list med-list">
                {#each medTypeList as item}
                    <a href={`/m/cbyList/${item.id}`} class="cbyb-btn">{item.name}</a>
                {/each}
            </div>
        </div>
    </div>
    <div class="bd-wrap js-list-food js-nav-item" id="bjsp">
        <div class="common-tl-sm">
            <h2>家庭常备保健食品上榜品牌</h2>
        </div>
        <div class="bd-content">
            <div class="meds-box index-meds-box">
                {#each foodTypeList as item}
                    <div class="med">
                        <div class="med-img-box">
							<img src="/images/meds/{item.imgSrc}" alt={item.name} />
                        </div>
                        <div class="med-info">
                            <p class="name">{item.name}</p>
                            <p class="com">{item.factoryName}</p>
                        </div>
                        <div class="vote-box">
                            <a class="dovote" href="/m/cbyMed/{item.id}"><i class="icon icon-vote">查看</i></a>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
    <div class="bd-wrap js-list-equip js-nav-item" id="ylqx">
        <div class="common-tl-sm">
            <h2>家庭常备医疗器械及<br>消毒用品上榜品牌</h2>
        </div>
        <div class="bd-content">
            <div class="meds-box index-meds-box">
                {#each dailyTypeList as item}
                    <div class="med">
                        <div class="med-img-box">
							<img src="/images/meds/{item.imgSrc}" alt={item.name} />
                        </div>
                        <div class="med-info">
                            <p class="name">{item.name}</p>
                            <p class="com">{item.factoryName}</p>
                        </div>
                        <div class="vote-box">
                            <a class="dovote" href="/m/cbyMed/{item.id}"><i class="icon icon-vote">查看</i></a>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>
<div class="swhz-wrap js-nav-item" id="swhz">
    <h2 class="swhz-title wrap-title" >
        <img src="/images/mobile/tl_partner.jpg" alt="">
    </h2>
    <div class="swhz-content-wrap">
        {#each contactPerson as item}
            <div class="com-info swhz-info">
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
<div class="mtzy-wrap js-nav-item" id="mtzy">
    <h2 class="swhz-title wrap-title" >
        <img src="/images/mobile/tl_reporter.jpg" alt="">
    </h2>
    <div class="mtzy-content-wrap">
        <div class="wrap-inner">
            <div class="wrap-media">
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
            <div class="wrap-media">
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
            <div class="wrap-media">
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
<footer><img src="/images/mobile/bottom_sponsor.jpg" alt="底图"></footer>

<style lang="scss"></style>
