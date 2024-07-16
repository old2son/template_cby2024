const ensureMedImageExists = (imgSrc) => {
	return new Promise((resolve) => {
		const img = new Image();
		img.src = `/images/meds/${imgSrc}`;
		img.onload = () => {
			resolve(imgSrc);
		};
		img.onerror = () => {
			resolve('img_miss.jpg');
		};
	});
};

export default ensureMedImageExists;
