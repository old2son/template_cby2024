<script>
	import Toast from '@src/lib/components/Toast.svelte';
	import { sinupRankType } from '$lib/data/sinupRankType.js';
	import { sinupMedList68, sinupMedList69, sinupMedList71 } from '$lib/data/sinupMedList.js';
	import { slide } from 'svelte/transition';
	import GoHome from '@src/routes/m/GoHome.svelte';

	let isShowRankType = false;
	let isShowStuff = false;
	let rankCont = '请选择榜单类型';
	let stuffCont = '请选择分类';
	let rankId = 0;
	let stuffId = 0;
	let name = '';
	let contactPerson = '';
	let phone = '';
	let email = '';
	let remark = '';

	const toastProps = {
		message: '',
		visible: false
	};

	const getStuffList = (rankId) => {
		if (rankId === 68) {
			return sinupMedList68;
		} else if (rankId === 69) {
			return sinupMedList69;
		} else if (rankId === 71) {
			return sinupMedList71;
		} else {
			return [];
		}
	};

	$: stuffList = getStuffList(rankId);
	$: submitData = {
		name,
		contactPerson,
		phone,
		email,
		remark,
		rankId,
		stuffId
	};

	function validate(data) {
		if (!data.name.trim()) {
			toastProps.message = '请输入公司名称';
		} else if (!data.contactPerson.trim()) {
			toastProps.message = '请输入联系人';
		} else if (!data.phone.trim()) {
			toastProps.message = '请输入联系电话';
		} else if (!data.email.trim()) {
			toastProps.message = '请输入邮箱';
		} else if (!data.remark.trim()) {
			toastProps.message = '请输入备注';
		} else if (!data.rankId) {
			toastProps.message = '请选择榜单类型';
		} else if (!data.stuffId) {
			toastProps.message = '请选择分类';
		} else {
			toastProps.message = '提交成功';
		}
	}
</script>

<svelte:head>
	<title>报名</title>
</svelte:head>

<div class="bg-signup">
	<div class="sign-up-content">
		<h2 class="wrap-title">
			<img src="/images/mobile/tl_signup.png" alt="" />
		</h2>

		<div class="form-info" id="js-form-info">
			<div class="bd-wrap">
				<div class="common-tl-sm">
					<h2>公司信息</h2>
				</div>
				<div class="info-top">
					<div class="info-item-wrap">
						<label for="company">
							<i class="company-icon"></i>
							<span>公司名称 *</span>
						</label>
						<input
							name="name"
							type="text"
							id="company"
							placeholder="请输入公司名称"
							bind:value={name}
						/>
					</div>

					<div class="info-item-wrap">
						<label for="person">
							<i class="person-icon"></i>
							<span>联系人 *</span>
						</label>
						<input
							name="contactPerson"
							type="text"
							id="person"
							placeholder="请输入姓名"
							bind:value={contactPerson}
						/>
					</div>

					<div class="info-item-wrap">
						<label for="contact">
							<i class="phone-icon"></i>
							<span>联系方式 *</span>
						</label>
						<input
							name="contactInfo"
							type="tel"
							id="contact"
							placeholder="请输入联系方式"
							maxlength="11"
							bind:value={phone}
						/>
					</div>

					<div class="info-item-wrap">
						<label for="mail">
							<i class="mail-icon"></i>
							<span>邮箱 *</span>
						</label>
						<input
							name="email"
							type="email"
							id="mail"
							placeholder="请输入邮箱"
							bind:value={email}
						/>
					</div>

					<div class="info-item-wrap">
						<label for="remark">
							<i class="remark-icon"></i>
							<span>备注</span>
						</label>
						<input
							name="remark"
							type="text"
							id="remark"
							placeholder="请输入备注"
							bind:value={remark}
						/>
					</div>
				</div>
				<p class="info-tips">注：* 为必填项</p>
			</div>

			<div class="bd-wrap">
				<div class="common-tl-sm">
					<h2>参选信息</h2>
				</div>

				<div class="info-bottom">
					<div class="info-bottom-item-wrap">
						<div class="tl-bd">榜单类型</div>
						<label for="ranklist">
							<i>请选择榜单类型</i>
							<input name="ranklist" class="js-input-ranklist" type="text" value="" readonly />
						</label>
					</div>

					<div class="info-bottom-item-wrap">
						<div class="tl-stuff">药品/保健品/医疗器械及消毒用品分类</div>
						<label for="stufflist">
							<i>请选择分类</i>
							<input name="stufflist" class="js-input-stuff" type="text" value="" readonly />
						</label>
					</div>
				</div>
			</div>

			<div class="su-bottom" id="su-bottom">
				<p>提交报名资料后，我们会在5个工作日内联系您。</p>
				<button id="btn-submit" class="js-signup">立即报名</button>
			</div>
		</div>
	</div>

	<div class="common-mask js-mask hide"></div>
	<div class="signup-picker-wrap js-picker-bd hide">
		<dl>
			<dt>请选择榜单类型</dt>
			<dd class="btn-confirm js-confirm">确认</dd>
			<dd class="js-cancel">取消</dd>
		</dl>
		<ul class="js-list">
			<li data-id="68">家庭常备药上榜品牌</li>
			<li data-id="71">家庭常备保健食品上榜品牌</li>
			<li data-id="69">家庭常备医疗器械及消毒用品上榜品牌</li>
		</ul>
	</div>

    {#if isShowStuff && stuffList.length > 0}
        <div class="signup-picker-wrap js-picker-stuff" transition:slide={{ duration: 250 }}>
            <dl>
                <dt>请选择榜单分类</dt>
                <dd class="btn-confirm js-confirm">确认</dd>
                <dd class="js-cancel">取消</dd>
            </dl>

            <ul class="js-picker-stuff" transition:slide={{ duration: 250 }}>
                {#each stuffList as item}
                    <li >
                        <button
                            data-id={item.id}
                            class:on={item.id === stuffId}
                            on:click={() => {
                                isShowStuff = !isShowStuff;
                                stuffId = item.id;
                                stuffCont = item.name
                            }}>{item.name}</button
                        >
                    </li>
                {/each}
            </ul>
        </div>
    {/if}
	

	<GoHome />
</div>
