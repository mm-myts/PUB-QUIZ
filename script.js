
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxG1U_tzlvakow28C-lOl758Sg3wrfHsmEknliAhguMHQo9ZaRhZDqZ20j42Z59J-1p/exec';

async function readValues() {
	
	const tm = document.getElementById('teamName').value.trim();

	const tm1 = document.getElementById('firstTeammate').value.trim();
	const tm2 = document.getElementById('secondTeammate').value.trim();
	const tm3 = document.getElementById('thirdTeammate').value.trim();

// Team name and first two members are required, the third is optional
	if (!tm || !tm1 || !tm2) {
		alert('Molimo unesite ime ekipe i barem dva člana.');
		return;
	}

	const data = { team: tm, member1: tm1, member2: tm2, member3: tm3 };

	try {
		await fetch(SCRIPT_URL, {
			method: 'POST',
			mode: 'no-cors',
			headers: { 'Content-Type': 'text/plain' },
			body: JSON.stringify(data)
		});
		alert('Prijava poslana!');
		document.getElementById('teamName').value = '';
		document.getElementById('firstTeammate').value = '';
		document.getElementById('secondTeammate').value = '';
		document.getElementById('thirdTeammate').value = '';
	} catch (err) {
		alert('Došlo je do greške, pokušajte ponovno.');
	}

}
