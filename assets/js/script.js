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

window.onload = () => {
	let button = document.querySelector('#submit');
	button.addEventListener('click', calculateBMI);
};

function calculateBMI() {
	let name = document.querySelector('#name').value;
	let height = parseFloat(document.querySelector('#height').value);
	let weight = parseFloat(document.querySelector('#weight').value);
	let result = document.querySelector('#result');
	let greet = document.querySelector('#greet');

	if (height === '' || isNaN(height))
		alert('Masukan tinggi anda dengna benar!!');
	else if (weight === '' || isNaN(weight))
		alert('Masukan berat badan anda dengan benar !!');
	else {
		let bmi = (weight / Math.pow(height / 100, 2)).toFixed(2);
		if (bmi < 18.5)
			result.innerHTML = `Anda <strong>Sangat Kurus</strong> dengan nilai IMT sebesar <span><strong>${bmi}</strong></span>. <br> Makan yang banyak ya ${name} ^_^`;
		else if (bmi >= 18.5 && bmi <= 24.9)
			result.innerHTML = `Berat anda <strong>Normal</strong> dengan nilai IMT sebesar <span><strong>${bmi}</strong></span>. <br> Tetap dijaga ya ${name} ^_^`;
		else if (bmi > 24.9 && bmi <= 29.9)
			result.innerHTML = `Anda <strong>Kelebihan Berat Badan</strong> dengan nilai IMT sebesar <span><strong>${bmi}</strong></span>. <br> Diharapkan ${name} untuk mengatur pola makan yaa :)`;
		else if (bmi > 29.9) {
			result.innerHTML = `Anda <strong>Kegemukan (Obesitas)</strong> dengan nilai IMT sebesar <span><strong>${bmi}</strong></span>. <br> Diharapkan ${name} untuk mengatur pola makan yaa :)`;
		}
	}
	greet.innerHTML = `Hai <span class="pink">${name}<span>`;
}
