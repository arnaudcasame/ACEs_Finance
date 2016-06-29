var total_actifs = document.getElementById('total_actifs');
var champ_actifs = document.querySelectorAll('.groupe_actif');
var total_passifs = document.getElementById('total_passifs');
var valeur_nette = document.getElementById('valeur_nette');
var champ_passifs = document.querySelectorAll('.groupe_passif');

function conversion_total(champ_1, champ_2, champ_3, champ_4, champ_5, champ_6, champ_7, champ_8,champ_9){
	champ_1 = parseFloat(champ_1);
	champ_2 = parseFloat(champ_2);
	champ_3 = parseFloat(champ_3);
	champ_4 = parseFloat(champ_4);
	champ_5 = parseFloat(champ_5);
	champ_6 = parseFloat(champ_6);
	champ_7 = parseFloat(champ_7);
	champ_8 = parseFloat(champ_8); 
	champ_9 = parseFloat(champ_9);

	var total = champ_1 + champ_2 + champ_3 + champ_4 + champ_5 + champ_6 + champ_7 + champ_8 + champ_9;
	return total;
}

function valeur_fin_nette(){
	var result = ' ' + total_actifs.value - total_passifs.value;
	return result;
}


champ_actifs[0].onkeyup = function(){
	total = conversion_total(champ_actifs[0].value, champ_actifs[1].value, champ_actifs[2].value, champ_actifs[3].value, champ_actifs[4].value, champ_actifs[5].value, champ_actifs[6].value, champ_actifs[7].value, champ_actifs[8].value);
	if(total == NaN){
		total_actifs.placeholder = 'Calculating...';
	}else{
		total_actifs.value = total;
		valeur_nette.innerHTML = valeur_fin_nette();
	}
}

champ_actifs[0].onchange = function(){
	total = conversion_total(champ_actifs[0].value, champ_actifs[1].value, champ_actifs[2].value, champ_actifs[3].value, champ_actifs[4].value, champ_actifs[5].value, champ_actifs[6].value, champ_actifs[7].value, champ_actifs[8].value);
	if(total == NaN){
		total_actifs.placeholder = 'Calculating...';
	}else{
		total_actifs.value = total;
		valeur_nette.innerHTML = valeur_fin_nette();
	}
}

champ_actifs[1].onkeyup = function(){
	total = conversion_total(champ_actifs[0].value, champ_actifs[1].value, champ_actifs[2].value, champ_actifs[3].value, champ_actifs[4].value, champ_actifs[5].value, champ_actifs[6].value, champ_actifs[7].value, champ_actifs[8].value);
	if(total == NaN){
		total_actifs.placeholder = 'Calculating...';
	}else{
		total_actifs.value = total;
		valeur_nette.innerHTML = valeur_fin_nette();
	}
}

champ_actifs[2].onkeyup = function(){
	total = conversion_total(champ_actifs[0].value, champ_actifs[1].value, champ_actifs[2].value, champ_actifs[3].value, champ_actifs[4].value, champ_actifs[5].value, champ_actifs[6].value, champ_actifs[7].value, champ_actifs[8].value);
	if(total == NaN){
		total_actifs.placeholder = 'Calculating...';
	}else{
		total_actifs.value = total;
		valeur_nette.innerHTML = valeur_fin_nette();
	}
}

champ_actifs[3].onkeyup = function(){
	total = conversion_total(champ_actifs[0].value, champ_actifs[1].value, champ_actifs[2].value, champ_actifs[3].value, champ_actifs[4].value, champ_actifs[5].value, champ_actifs[6].value, champ_actifs[7].value, champ_actifs[8].value);
	if(total == NaN){
		total_actifs.placeholder = 'Calculating...';
	}else{
		total_actifs.value = total;
		valeur_nette.innerHTML = valeur_fin_nette();
	}
}

champ_actifs[4].onkeyup = function(){
	total = conversion_total(champ_actifs[0].value, champ_actifs[1].value, champ_actifs[2].value, champ_actifs[3].value, champ_actifs[4].value, champ_actifs[5].value, champ_actifs[6].value, champ_actifs[7].value, champ_actifs[8].value);
	if(total == NaN){
		total_actifs.placeholder = 'Calculating...';
	}else{
		total_actifs.value = total;
		valeur_nette.innerHTML = valeur_fin_nette();
	}
}

champ_actifs[5].onkeyup = function(){
	total = conversion_total(champ_actifs[0].value, champ_actifs[1].value, champ_actifs[2].value, champ_actifs[3].value, champ_actifs[4].value, champ_actifs[5].value, champ_actifs[6].value, champ_actifs[7].value, champ_actifs[8].value);
	if(total == NaN){
		total_actifs.placeholder = 'Calculating...';
	}else{
		total_actifs.value = total;
		valeur_nette.innerHTML = valeur_fin_nette();
	}
}

champ_actifs[6].onkeyup = function(){
	total = conversion_total(champ_actifs[0].value, champ_actifs[1].value, champ_actifs[2].value, champ_actifs[3].value, champ_actifs[4].value, champ_actifs[5].value, champ_actifs[6].value, champ_actifs[7].value, champ_actifs[8].value);
	if(total == NaN){
		total_actifs.placeholder = 'Calculating...';
	}else{
		total_actifs.value = total;
		valeur_nette.innerHTML = valeur_fin_nette();
	}
}

champ_actifs[7].onkeyup = function(){
	total = conversion_total(champ_actifs[0].value, champ_actifs[1].value, champ_actifs[2].value, champ_actifs[3].value, champ_actifs[4].value, champ_actifs[5].value, champ_actifs[6].value, champ_actifs[7].value, champ_actifs[8].value);
	if(total == NaN){
		total_actifs.placeholder = 'Calculating...';
	}else{
		total_actifs.value = total;
		valeur_nette.innerHTML = valeur_fin_nette();
	}
}

champ_actifs[8].onkeyup = function(){
	total = conversion_total(champ_actifs[0].value, champ_actifs[1].value, champ_actifs[2].value, champ_actifs[3].value, champ_actifs[4].value, champ_actifs[5].value, champ_actifs[6].value, champ_actifs[7].value, champ_actifs[8].value);
	if(total == NaN){
		total_actifs.placeholder = 'Calculating...';
	}else{
		total_actifs.value = total;
		valeur_nette.innerHTML = valeur_fin_nette();
	}
}

/*****************************************
******Les events des champs passifs ******
*****************************************/

champ_passifs[0].onkeyup = function(){
	total = conversion_total(champ_passifs[0].value, champ_passifs[1].value, champ_passifs[2].value, champ_passifs[3].value, champ_passifs[4].value, champ_passifs[5].value, champ_passifs[6].value, champ_passifs[7].value, champ_passifs[8].value);
	if(total == NaN){
		total_passifs.placeholder = 'Calculating...';
	}else{
		total_passifs.value = total;
		valeur_nette.innerHTML = valeur_fin_nette();
	}
}

champ_passifs[1].onkeyup = function(){
	total = conversion_total(champ_passifs[0].value, champ_passifs[1].value, champ_passifs[2].value, champ_passifs[3].value, champ_passifs[4].value, champ_passifs[5].value, champ_passifs[6].value, champ_passifs[7].value, champ_passifs[8].value);
	if(total == NaN){
		total_passifs.placeholder = 'Calculating...';
	}else{
		total_passifs.value = total;
		valeur_nette.innerHTML = valeur_fin_nette();
	}
}

champ_passifs[2].onkeyup = function(){
	total = conversion_total(champ_passifs[0].value, champ_passifs[1].value, champ_passifs[2].value, champ_passifs[3].value, champ_passifs[4].value, champ_passifs[5].value, champ_passifs[6].value, champ_passifs[7].value, champ_passifs[8].value);
	if(total == NaN){
		total_passifs.placeholder = 'Calculating...';
	}else{
		total_passifs.value = total;
		valeur_nette.innerHTML = valeur_fin_nette();
	}
}

champ_passifs[3].onkeyup = function(){
	total = conversion_total(champ_passifs[0].value, champ_passifs[1].value, champ_passifs[2].value, champ_passifs[3].value, champ_passifs[4].value, champ_passifs[5].value, champ_passifs[6].value, champ_passifs[7].value, champ_passifs[8].value);
	if(total == NaN){
		total_passifs.placeholder = 'Calculating...';
	}else{
		total_passifs.value = total;
		valeur_nette.innerHTML = valeur_fin_nette();
	}
}

champ_passifs[4].onkeyup = function(){
	total = conversion_total(champ_passifs[0].value, champ_passifs[1].value, champ_passifs[2].value, champ_passifs[3].value, champ_passifs[4].value, champ_passifs[5].value, champ_passifs[6].value, champ_passifs[7].value, champ_passifs[8].value);
	if(total == NaN){
		total_passifs.placeholder = 'Calculating...';
	}else{
		total_passifs.value = total;
		valeur_nette.innerHTML = valeur_fin_nette();
	}
}

champ_passifs[5].onkeyup = function(){
	total = conversion_total(champ_passifs[0].value, champ_passifs[1].value, champ_passifs[2].value, champ_passifs[3].value, champ_passifs[4].value, champ_passifs[5].value, champ_passifs[6].value, champ_passifs[7].value, champ_passifs[8].value);
	if(total == NaN){
		total_passifs.placeholder = 'Calculating...';
	}else{
		total_passifs.value = total;
		valeur_nette.innerHTML = valeur_fin_nette();
	}
}

champ_passifs[6].onkeyup = function(){
	total = conversion_total(champ_passifs[0].value, champ_passifs[1].value, champ_passifs[2].value, champ_passifs[3].value, champ_passifs[4].value, champ_passifs[5].value, champ_passifs[6].value, champ_passifs[7].value, champ_passifs[8].value);
	if(total == NaN){
		total_passifs.placeholder = 'Calculating...';
	}else{
		total_passifs.value = total;
		valeur_nette.innerHTML = valeur_fin_nette();
	}
}

champ_passifs[7].onkeyup = function(){
	total = conversion_total(champ_passifs[0].value, champ_passifs[1].value, champ_passifs[2].value, champ_passifs[3].value, champ_passifs[4].value, champ_passifs[5].value, champ_passifs[6].value, champ_passifs[7].value, champ_passifs[8].value);
	if(total == NaN){
		total_passifs.placeholder = 'Calculating...';
	}else{
		total_passifs.value = total;
		valeur_nette.innerHTML = valeur_fin_nette();
	}
}

champ_passifs[8].onkeyup = function(){
	total = conversion_total(champ_passifs[0].value, champ_passifs[1].value, champ_passifs[2].value, champ_passifs[3].value, champ_passifs[4].value, champ_passifs[5].value, champ_passifs[6].value, champ_passifs[7].value, champ_passifs[8].value);
	if(total == NaN){
		total_passifs.placeholder = 'Calculating...';
	}else{
		total_passifs.value = total;
		valeur_nette.innerHTML = valeur_fin_nette();
	}
}

