<script>
	import Toast from '@src/lib/components/Toast.svelte';
	import { sinupRankType } from '$lib/data/sinupRankType.js';
	import { sinupMedList68, sinupMedList69, sinupMedList71 } from '$lib/data/sinupMedList.js';
	import { slide } from 'svelte/transition';

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
		} 
		else if (rankId === 69) {
			return sinupMedList69;
		} 
		else if (rankId === 71) {
			return sinupMedList71;
		} 
		else {
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
		console.log(data);
		if (!data.name.trim()) {
			toastProps.message = '请输入公司名称';
		}
		else if (!data.contactPerson.trim()) {
			toastProps.message = '请输入联系人';
		}
		else if (!data.phone.trim()) {
			toastProps.message = '请输入联系电话';
		}
		else if (!data.email.trim()) {
			toastProps.message = '请输入邮箱';
		}
		else if (!data.remark.trim()) {
			toastProps.message = '请输入备注';
		}
		else if (!data.rankId) {
			toastProps.message = '请选择榜单类型';
		}
		else if (!data.stuffId) {
			toastProps.message = '请选择分类';
		}
		else {
			toastProps.message = '提交成功';
		}
	}
</script>

<svelte:head>
	<title>报名</title>
</svelte:head>

<div class="sign-up-wrap">
	<div class="top-banner">
		<img src="/images/banner_secondary.jpg" alt="常备药头图" />
	</div>

	<div class="sign-up-inner">
		<div class="wrap-title">
			<img src="/images/tl_signup.jpg" alt="报名标题" />
		</div>
		<div class="sign-up-cont">
			<div class="msg-com">
				<div class="common-tl-sm">
					<h2>公司信息</h2>
				</div>
				<div class="info-wrap">
					<div class="clear clearfix">
						<label for="company">
							<i class="company-icon">公司名称 *</i>
						</label>
						<input
							name="name"
							type="text"
							id="company"
							placeholder="请输入公司名称"
							bind:value={name}
						/>
					</div>
					<div class="clear clearfix">
						<label for="person">
							<i class="person-icon">联系人 *</i>
						</label>
						<input
							name="contactPerson"
							type="text"
							id="person"
							placeholder="请输入姓名"
							bind:value={contactPerson}
						/>
					</div>
					<div class="clear clearfix">
						<label for="contact">
							<i class="phone-icon">联系方式 *</i>
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
					<div class="clear clearfix">
						<label for="mail">
							<i class="mail-icon">邮箱 *</i>
						</label>
						<input
							name="email"
							type="email"
							id="mail"
							placeholder="请输入邮箱"
							bind:value={email}
						/>
					</div>
					<div class="none-bottom">
						<label for="remark">
							<i class="remark-icon">备注</i>
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
				<em class="msg-com-tips">注：* 为必填项</em>
			</div>
			<div class="msg-mark">
				<div class="common-tl-sm">
					<h2>参选信息</h2>
				</div>
				<div class="info-wrap">
					<div class="tl-bd"><i class="icon-star"></i>榜单类型</div>
					<div class="picker-wrap picker-wrap-bd">
						<button
							class="btn-signuptype"
							on:click={() => {
								isShowRankType = !isShowRankType;
							}}
						>
							<label for="ranklist">
								<em>{rankCont}<i></i></em>
								<input
									name="ranklist"
									class="js-input-ranklist"
									data-id={rankId}
									type="hidden"
									readonly
								/>
							</label>
						</button>

						{#if isShowRankType}
							<ul class="js-picker-bd" transition:slide={{ duration: 250 }}>
								{#each sinupRankType as item}
									<li>
										<button
											data-id={item.id}
											class:on={item.id === rankId}
											on:click={() => {
												isShowRankType = !isShowRankType;
												rankId = item.id;
												rankCont = item.content;
											}}>{item.content}</button
										>
									</li>
								{/each}
							</ul>
						{/if}
					</div>

					<div class="tl-bd"><i class="icon-clover"></i>药品/保健品/医疗器械及消毒用品分类</div>
					<div class="picker-wrap">
						<button
							class="btn-stufflist"
							on:click={() => {
								if (!rankId) {
									return;
								}
								isShowStuff = !isShowStuff;
							}}
						>
							<label for="stufflist">
								<em>{stuffCont}<i></i></em>
								<input
									name="stufflist"
									class="js-input-stuff"
									data-id={stuffId}
									type="hidden"
									readonly
								/>
							</label>
						</button>
						{#if isShowStuff && stuffList.length > 0}
							<ul class="js-picker-stuff" transition:slide={{ duration: 250 }}>
								{#each stuffList as item}
									<li>
										<button
											data-id={item.id}
											class:on={item.id === stuffId}
											on:click={() => {
												isShowStuff = !isShowStuff;
												stuffId = item.id;
												stuffCont = item.name;
											}}>{item.name}</button
										>
									</li>
								{/each}
							</ul>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>

	<p class="tips">提交报名资料后，我们会在5个工作日内联系您。</p>
	<button
		class="common-btn-light"
		id="js-submit"
		on:click={() => {
			if (toastProps.visible) {
				return;
			}
			toastProps.visible = true;
			validate(submitData);
			setTimeout(() => {
				toastProps.visible = false;
			}, 2000);
		}}>提交报名</button
	>
	<Toast {...toastProps}/>
</div>

<style lang="scss">
</style>
