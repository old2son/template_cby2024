<script>
	export let title;
	export let time;
	export let msg;
	export let remark;
</script>

<dl class="bd-noresult js-bd-noresult">
	<dt>
		<img src="/images/bg_search_none.jpg" alt="" />
	</dt>
	<dd>
		<b>{title}</b>
		<p>{time}</p>
		<p>{msg}</p>
		{@html remark || ''}
	</dd>
</dl>
