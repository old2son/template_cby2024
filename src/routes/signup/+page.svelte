<script>
    
</script>

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
					value="请输入公司名称"
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
					value="请输入姓名"
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
					value="请输入联系方式"
					maxlength="11"
				/>
			</div>
			<div class="clear clearfix">
				<label for="mail">
					<i class="mail-icon">邮箱 *</i>
				</label>
				<input name="email" type="email" id="mail" placeholder="请输入邮箱" value="请输入邮箱" />
			</div>
			<div class="none-bottom">
				<label for="remark">
					<i class="remark-icon">备注</i>
				</label>
				<input name="remark" type="text" id="remark" placeholder="请输入备注" value="请输入备注" />
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
				<label for="ranklist">
					<em>请选择榜单类型<i></i></em>
					<input name="ranklist" class="js-input-ranklist" type="text" value="" readonly="" />
				</label>
				<ul class="js-picker-bd hide">
					<li data-id="68">家庭常备药上榜品牌</li>
					<li data-id="71">家庭常备保健食品上榜品牌</li>
					<li data-id="69">家庭常备医疗器械及消毒用品上榜品牌</li>
				</ul>
			</div>
			<div class="tl-bd"><i class="icon-clover"></i>药品/保健品/医疗器械及消毒用品分类</div>
			<div class="picker-wrap">
				<label for="stufflist">
					<em>请选择分类<i></i></em>
					<input name="stufflist" class="js-input-stuff" type="text" value="" readonly="" />
				</label>
				<ul class="js-picker-stuff hide"></ul>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
</style>
