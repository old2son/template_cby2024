function textEllipsis(eleClassName, num) {
    const data = [];
	const eles = document.querySelectorAll(eleClassName);
	const formatStr = (ele) => {
		const text = ele.innerHTML;
		const totalTextLen = text.length;   
		const lineNum = num || 3;
		const baseWidth = window.getComputedStyle(ele).width;
		const baseFontSize = window.getComputedStyle(ele).fontSize;
		const lineWidth = +baseWidth.slice(0, -2); // 去除单位
        const height = ele.offsetHeight; // 返回原始高度

		// 一行可容纳的字数
		const strNum = Math.floor(lineWidth / +baseFontSize.slice(0, -2));

		let sliceCont = '';

		// 可容纳的总字数
		const totalStrNum = Math.floor(strNum * lineNum);

		const lastIndex = totalStrNum - totalTextLen;

		if (totalTextLen > totalStrNum) {
			sliceCont = text.slice(0, lastIndex - 3).concat('...');
		} 
        else {
			sliceCont = text;
		}

        data.push({
            text,
            sliceCont,
            height
        });
	};

	eles.forEach(function (element) {
		formatStr(element);
	});

	return new Promise((resolve) => {
		resolve(data);	
	});
}

export default textEllipsis;
