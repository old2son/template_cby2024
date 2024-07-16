<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { med } from '$lib/data/med.js';
	import initMedNav from '$lib/scripts/initMedNav.js';
	import NoResult from '$lib/components/NoResult.svelte';

	let data = med.filter((item) => {
		return item.id === parseInt($page.params.id, 10);
	});
    console.log(data);

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
            <div class="meds-content">
                <div class="med-pic">
                    <i
                        ><img
                            src="/images/meds/{data[0].imgSrc}"
                            alt="{data[0].name}"
                        /></i
                    >
                    <div class="btn-vote js-btn-vote hide">为TA好评一票</div>
                    <div class="nov hide">目前票数840</div>
                    <div class="subscribe-box hide" style="display: none;"></div>
                    <div class="btn-detail-vote hide">
                        <p>扫码打开好评</p>
                        <img
                            src="https://apko.familydoctor.com.cn/wxapi/index.php/internal/genQrcode.html?url=https%3A%2F%2Fm.familydoctor.com.cn%2Fcby%2Fcby2023%2FcbyMedDetail%2F%3FobjectId%3D417%26prizeId%3D808%26bangdanId%3D68%26page%3D1"
                        />
                    </div>
                </div>
                <div class="med-detail">
                    <p class="detail-title">{data[0].name}
                    </p>
                    <div class="box-msg-basic">
                        <p class="productnum">
                            <em class="title">编号</em>
                            <span>417</span>
                        </p>
                        <p class="bzgg">
                            <em class="title">规格</em>
                            <span>每支装10毫升</span>
                        </p>
                        <p class="sccs">
                            <em class="title">生产厂商</em>
                            <span>石家庄以岭药业股份有限公司</span>
                        </p>
                        <p class="pzwh">
                            <em class="title">批准文号</em>
                            <span>国药准字B20020867</span>
                        </p>
                    </div>
                    <p class="cpjs-top">产品介绍</p>
                    <pre
                        class="cpjs lock">【成份】酸枣仁、桑椹、菊花、茯苓、山楂、百合、陈皮、荷叶、灵芝。辅料为苯甲酸钠。
            【性状】本品为棕红色的液体，久置可有少量沉淀；味微甜。
            【功能主治】养心，益肾，安神。用于神经衰弱症见失眠，多梦，头晕者。
            【规格】每支装10毫升
            【用法用量】口服。一次1-2支，一日3次。
            【不良反应】上市后监测数据显示本品可见皮疹、瘙痒的过敏反应。
            【禁忌】外感发热患者禁服。
            【注意事项】
            1．忌烟、酒及辛辣、油腻食物。
            2．服药期间要保持情绪乐观，切忌生气恼怒。
            3．有高血压、心脏病、糖尿病、肝病、肾病等慢性病严重者应在医师指导下服用。
            4．服药7天症状无缓解，应去医院就诊。
            5．儿童、孕妇应在医师指导下服用。
            6．对本品过敏者禁用，过敏体质者慎用。
            7．本品性状发生改变时禁止使用。
            8．儿童必须在成人监护下使用。
            9．请将本品放在儿童不能接触的地方。
            10．如正在使用其他药品，使用本品前请咨询医师或药师。
            【药物相互作用】如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。
            【贮藏】密封，置阴凉处（不超过20℃）。
            【包装】钠钙玻璃管制口服液体瓶-口服液瓶用铝塑组合盖。每盒10支。
            【有效期】24个月
            【执行标准】国家食品药品监督管理局国家药品标准WS-5846(B-0846)-2014Z
            【批准文号】国药准字B20020867
            【说明书修订日期】2020年06月15日
            【上市许可持有人】
            名称：石家庄以岭药业股份有限公司
            地址：石家庄市高新技术开发区天山大街238号
            【生产企业】
            企业名称：石家庄以岭药业股份有限公司
            生产地址：石家庄市高新技术开发区天山大街238号
            邮政编码：050035
            电话号码：400 78989
            传真号码：(0311) 85901719
            网 址： www.yilingshop.com
            </pre>
                    <a class="btn-show">点击展开<i class="down js-cpjs-down"></i></a>
                    <p class="sbly-top">
                        <em class="title">推荐理由</em>
                    </p>
                    <pre
                        class="sbly">枣椹安神口服液是在中医络病理论指导下研发的系统调理神经衰弱和失眠的专利中药。其源自医圣张仲景经典名方酸枣仁汤，由九味药食同源的中药科学配伍而成，具有养心、益肾、安神的功效。临床研究证实，枣椹安神口服液适用于神经衰弱症见失眠，多梦，头晕者。各种因素导致的压力大的学生、上班族、更年期、老年人群等。2021年入选OTC中国品牌宣传月宣传品牌。</pre>
                </div>
            </div>
        </div>
    </div>

<style lang="scss"></style>
