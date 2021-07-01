const linkClicked = document.getElementsByClassName('nav-link');
const numClass = linkClicked.length;

for (let i = 0; i < numClass; i++) {
	linkClicked[i].addEventListener(
		'click',
		function () {
			let onTheMoment = document.getElementsByClassName('active');
			onTheMoment[0].className = onTheMoment[0].className.replace(
				' active',
				'',
			);
			this.className += ' active';
		},
		false,
	);
}
