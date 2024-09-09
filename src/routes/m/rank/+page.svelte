<script>
    import { onMount } from 'svelte';
	// import { rankList } from '$lib/data/rankList.js';
	import GoHome from '@src/routes/m/GoHome.svelte';
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
		<img
			src="/images/mobile/tl_rank_list.jpg"
			alt=""
		/>
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
			<a
				class="rank-item"
				href="https://m.familydoctor.com.cn/cby/cby2023/cbyMedDetail/?objectId=440&amp;prizeId=785&amp;bangdanId=68"
				><div class="rank first">1</div>
				<div class="avatar">
					<img
						src="https://img.familydoctor.com.cn/uploadimg/cbyhys/2023/11/08/16/4ba2d1af8b0100001fab71a824530000.jpeg"
						alt=""
					/>
				</div>
				<div class="number">440</div>
				<div class="name">巨可生®赖氨葡锌颗粒（无糖）</div>
				<div class="nov">18037</div></a
			><a
				class="rank-item"
				href="https://m.familydoctor.com.cn/cby/cby2023/cbyMedDetail/?objectId=327&amp;prizeId=796&amp;bangdanId=68"
				><div class="rank second">2</div>
				<div class="avatar">
					<img
						src="https://img.familydoctor.com.cn/uploadimg/cbyhys/2023/05/11/10/d1606a0a880100001fab71382a440000.jpeg"
						alt=""
					/>
				</div>
				<div class="number">327</div>
				<div class="name">孚诺®复方多黏菌素B软膏</div>
				<div class="nov">18024</div></a
			><a
				class="rank-item"
				href="https://m.familydoctor.com.cn/cby/cby2023/cbyMedDetail/?objectId=419&amp;prizeId=789&amp;bangdanId=68"
				><div class="rank third">3</div>
				<div class="avatar">
					<img
						src="https://img.familydoctor.com.cn/uploadimg/cbyhys/2023/09/01/13/38eafc508a0100001fab71742f170000.jpeg"
						alt=""
					/>
				</div>
				<div class="number">419</div>
				<div class="name">瑞阳®葛根汤颗粒(片)</div>
				<div class="nov">12563</div></a
			><a
				class="rank-item"
				href="https://m.familydoctor.com.cn/cby/cby2023/cbyMedDetail/?objectId=352&amp;prizeId=805&amp;bangdanId=68"
				><div class="rank">4</div>
				<div class="avatar">
					<img
						src="https://img.familydoctor.com.cn/uploadimg/cbyhys/2023/05/12/11/5295a90f880100001fab71ec714f0000.jpeg"
						alt=""
					/>
				</div>
				<div class="number">352</div>
				<div class="name">新峰®复方南板蓝根颗粒</div>
				<div class="nov">10710</div></a
			><a
				class="rank-item"
				href="https://m.familydoctor.com.cn/cby/cby2023/cbyMedDetail/?objectId=351&amp;prizeId=789&amp;bangdanId=68"
				><div class="rank">5</div>
				<div class="avatar">
					<img
						src="https://img.familydoctor.com.cn/uploadimg/cbyhys/2023/05/12/11/4686a40f880100001fab71ec714c0000.jpeg"
						alt=""
					/>
				</div>
				<div class="number">351</div>
				<div class="name">新峰®感冒灵颗粒</div>
				<div class="nov">10118</div></a
			><a
				class="rank-item"
				href="https://m.familydoctor.com.cn/cby/cby2023/cbyMedDetail/?objectId=432&amp;prizeId=789&amp;bangdanId=68"
				><div class="rank">6</div>
				<div class="avatar">
					<img
						src="https://img.familydoctor.com.cn/uploadimg/cbyhys/2023/11/07/14/59ad16aa8b0100001fab71e83b070000.jpeg"
						alt=""
					/>
				</div>
				<div class="number">432</div>
				<div class="name">德众®维C银翘片</div>
				<div class="nov">7701</div></a
			><a
				class="rank-item"
				href="https://m.familydoctor.com.cn/cby/cby2023/cbyMedDetail/?objectId=348&amp;prizeId=801&amp;bangdanId=68"
				><div class="rank">7</div>
				<div class="avatar">
					<img
						src="https://img.familydoctor.com.cn/uploadimg/cbyhys/2023/05/11/18/73fcfa0b880100001fab71b08d340100.jpeg"
						alt=""
					/>
				</div>
				<div class="number">348</div>
				<div class="name">维和®血塞通胶囊</div>
				<div class="nov">7471</div></a
			><a
				class="rank-item"
				href="https://m.familydoctor.com.cn/cby/cby2023/cbyMedDetail/?objectId=431&amp;prizeId=801&amp;bangdanId=68"
				><div class="rank">8</div>
				<div class="avatar">
					<img
						src="https://img.familydoctor.com.cn/uploadimg/cbyhys/2023/11/08/11/0c0cc4ae8b0100001fab715432330000.jpeg"
						alt=""
					/>
				</div>
				<div class="number">431</div>
				<div class="name">新谊®芪参胶囊</div>
				<div class="nov">7237</div></a
			><a
				class="rank-item"
				href="https://m.familydoctor.com.cn/cby/cby2023/cbyMedDetail/?objectId=360&amp;prizeId=804&amp;bangdanId=68"
				><div class="rank">9</div>
				<div class="avatar">
					<img
						src="https://img.familydoctor.com.cn/uploadimg/cbyhys/2023/05/12/17/96c11511880100001fab719cc3bf0000.jpeg"
						alt=""
					/>
				</div>
				<div class="number">360</div>
				<div class="name">诺得胜®麻仁丸</div>
				<div class="nov">5638</div></a
			><a
				class="rank-item"
				href="https://m.familydoctor.com.cn/cby/cby2023/cbyMedDetail/?objectId=390&amp;prizeId=894&amp;bangdanId=68"
				><div class="rank">10</div>
				<div class="avatar">
					<img
						src="https://img.familydoctor.com.cn/uploadimg/cbyhys/2023/07/03/11/d071741b890100001fab71bcca420000.jpeg"
						alt=""
					/>
				</div>
				<div class="number">390</div>
				<div class="name">爱德尔贝®琥乙红霉素干混悬剂</div>
				<div class="nov">5378</div></a
			><a
				class="rank-item"
				href="https://m.familydoctor.com.cn/cby/cby2023/cbyMedDetail/?objectId=436&amp;prizeId=801&amp;bangdanId=68"
				><div class="rank">11</div>
				<div class="avatar">
					<img
						src="https://img.familydoctor.com.cn/uploadimg/cbyhys/2023/11/08/13/3f3737af8b0100001fab71a824150000.jpeg"
						alt=""
					/>
				</div>
				<div class="number">436</div>
				<div class="name">华神科技®三七通舒胶囊</div>
				<div class="nov">4224</div></a
			><a
				class="rank-item"
				href="https://m.familydoctor.com.cn/cby/cby2023/cbyMedDetail/?objectId=333&amp;prizeId=789&amp;bangdanId=68"
				><div class="rank">12</div>
				<div class="avatar">
					<img
						src="https://img.familydoctor.com.cn/uploadimg/cbyhys/2023/05/11/15/c4be5f0b880100001fab71b08d440000.jpeg"
						alt=""
					/>
				</div>
				<div class="number">333</div>
				<div class="name">双蚁®复方感冒灵颗粒</div>
				<div class="nov">4039</div></a
			><a
				class="rank-item"
				href="https://m.familydoctor.com.cn/cby/cby2023/cbyMedDetail/?objectId=435&amp;prizeId=789&amp;bangdanId=68"
				><div class="rank">13</div>
				<div class="avatar">
					<img
						src="https://img.familydoctor.com.cn/uploadimg/cbyhys/2023/11/08/11/2d66b9ae8b0100001fab715432300000.jpeg"
						alt=""
					/>
				</div>
				<div class="number">435</div>
				<div class="name">力比得®复方酚咖伪麻胶囊</div>
				<div class="nov">3240</div></a
			><a
				class="rank-item"
				href="https://m.familydoctor.com.cn/cby/cby2023/cbyMedDetail/?objectId=427&amp;prizeId=840&amp;bangdanId=69"
				><div class="rank">14</div>
				<div class="avatar">
					<img
						src="https://img.familydoctor.com.cn/uploadimg/cbyhys/2023/10/27/11/56feec708b0100001fab71281e050000.jpeg"
						alt=""
					/>
				</div>
				<div class="number">427</div>
				<div class="name">雅思汀娜®皮肤黏膜消毒剂</div>
				<div class="nov">3213</div></a
			><a
				class="rank-item"
				href="https://m.familydoctor.com.cn/cby/cby2023/cbyMedDetail/?objectId=443&amp;prizeId=801&amp;bangdanId=68"
				><div class="rank">15</div>
				<div class="avatar">
					<img
						src="https://img.familydoctor.com.cn/uploadimg/cbyhys/2023/11/14/13/ad5a18ce8b0100001fab71381c0d0000.jpeg"
						alt=""
					/>
				</div>
				<div class="number">443</div>
				<div class="name">悦康®活心丸（浓缩丸）</div>
				<div class="nov">2997</div></a
			><a
				class="rank-item"
				href="https://m.familydoctor.com.cn/cby/cby2023/cbyMedDetail/?objectId=404&amp;prizeId=801&amp;bangdanId=68"
				><div class="rank">16</div>
				<div class="avatar">
					<img
						src="https://img.familydoctor.com.cn/uploadimg/cbyhys/2023/08/03/09/c16bbbba890100001fab717c294a0000.jpeg"
						alt=""
					/>
				</div>
				<div class="number">404</div>
				<div class="name">上药牌®麝香保心丸</div>
				<div class="nov">2994</div></a
			><a
				class="rank-item"
				href="https://m.familydoctor.com.cn/cby/cby2023/cbyMedDetail/?objectId=338&amp;prizeId=806&amp;bangdanId=68"
				><div class="rank">17</div>
				<div class="avatar">
					<img
						src="https://img.familydoctor.com.cn/uploadimg/cbyhys/2023/11/30/11/8f1800208c0100001fab71844c730000.jpeg"
						alt=""
					/>
				</div>
				<div class="number">338</div>
				<div class="name">益肺止咳胶囊</div>
				<div class="nov">2957</div></a
			><a
				class="rank-item"
				href="https://m.familydoctor.com.cn/cby/cby2023/cbyMedDetail/?objectId=391&amp;prizeId=784&amp;bangdanId=68"
				><div class="rank">18</div>
				<div class="avatar">
					<img
						src="https://img.familydoctor.com.cn/uploadimg/cbyhys/2023/07/07/09/5125b32f890100001fab71d0100c0000.jpeg"
						alt=""
					/>
				</div>
				<div class="number">391</div>
				<div class="name">好医生®康复新液</div>
				<div class="nov">2942</div></a
			><a
				class="rank-item"
				href="https://m.familydoctor.com.cn/cby/cby2023/cbyMedDetail/?objectId=380&amp;prizeId=789&amp;bangdanId=68"
				><div class="rank">19</div>
				<div class="avatar">
					<img
						src="https://img.familydoctor.com.cn/uploadimg/cbyhys/2023/06/12/09/b740ecae880100001fab7190c40e0000.jpeg"
						alt=""
					/>
				</div>
				<div class="number">380</div>
				<div class="name">沙溪®沙溪凉茶颗粒</div>
				<div class="nov">2935</div></a
			><a
				class="rank-item"
				href="https://m.familydoctor.com.cn/cby/cby2023/cbyMedDetail/?objectId=407&amp;prizeId=892&amp;bangdanId=68"
				><div class="rank">20</div>
				<div class="avatar">
					<img
						src="https://img.familydoctor.com.cn/uploadimg/cbyhys/2023/08/16/11/83ef16fe890100001fab71d42f5d0000.jpeg"
						alt=""
					/>
				</div>
				<div class="number">407</div>
				<div class="name">乐普佑康|紫金山泉®参芪阿胶胶囊</div>
				<div class="nov">2715</div></a
			>
		</div>
	</div>
	<dl class="bd-noresult js-bd-noresult hide">
		<dt>
			<img
				src="https://img.familydoctor.com.cn/component/channels/cbyp2023/mobile/styles/images/bg_search_none.jpg"
				alt=""
			/>
		</dt>
		<dd>
			<p>该榜单产品正在来的路上</p>
			<p>敬请期待</p>
		</dd>
	</dl>

	<GoHome />
</div>
