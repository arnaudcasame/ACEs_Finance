// Définition et Assignation des variables globales
var mnt = document.getElementById("montant"),
tx = document.getElementById("taux"),
period = document.getElementById("duree"),
mensualite = document.getElementById("mensualite"),
monnaie = document.getElementById("monnaie"),
choix = document.getElementById('monnaie-choisie'),
total_dette = document.getElementById('total_dette');
total_int = document.getElementById('total_int');
var progress_int = document.getElementById('progress-int'),
progress_mnt = document.getElementById('progress-mnt'),
rate_mnt = document.getElementById('rate_mnt'),
rate_int = document.querySelectorAll('.rate_int');
ratio_end = document.querySelector('#ratio');
popUp = document.querySelector('.pop-up');
choix.innerHTML = monnaie.value;

//popUp.innerHTML = 'C\'est moi';

function conversion_nombre(numbre){
		var text = numbre+''+numbre;
		//console.log(text);
		text = text.substr(0, text.length/2);
		//console.log(text);	
		var new_nomb;
		var decim;
		var part1 = '';
		var nomb_pair_imp;
		var nomb_decim_pair;
		var tablo = new Array();
		if(text.indexOf('.') == -1){ // Si le nombre n'a pas de decimal
			new_nomb = text;
			var longueur_new_nomb = new_nomb.length;
			nomb_pair_imp = longueur_new_nomb % 2;
			if(nomb_pair_imp == 0){
				//alert('nombre entier pair');
				// Cette boucle transforme la chaine de caracteres en tableau
				for(var i = 0; i<longueur_new_nomb; i++){
					tablo.push(new_nomb[i]);
					//console.log(tablo);
				}
				// Cette boucle ajoute les virgules au tableau
				for(var i = 0; i<longueur_new_nomb; i+=3){
					if(longueur_new_nomb == 6){
						tablo[i+2] += ',';
					}else if(longueur_new_nomb == 8){
						tablo[i+1] += ',';
					}else if(longueur_new_nomb == 10 || longueur_new_nomb == 4){
						tablo[i] += ',';
					}else if(longueur_new_nomb == 12){
						tablo[i+2] += ',';
					}else{
						tablo[i] += '';
					}
				}
				// cette boucle transforme le tableau en chaine de caracteres 
				for(var i = 0; i<longueur_new_nomb; i++){
					part1 += tablo[i];
				}
				//console.log(part1);
				if(longueur_new_nomb>2){
					part1 = part1.substr(0, (part1.length-1));
				}
				part1 = part1.concat('.00');
				//console.log(part1);
			}else{
				//alert('nombre entier impair');
				// Cette boucle transforme la chaine de caracteres en tableau
				for(var i = 0; i<longueur_new_nomb; i++){
					tablo.push(new_nomb[i]);
					//console.log(tablo);
				}
				// Cette boucle ajoute les virgules au tableau
				for(var i = 1; i<longueur_new_nomb; i+=3){
					if(longueur_new_nomb == 7){
						tablo[i-1] += ',';
					}else if(longueur_new_nomb == 9){
						tablo[i+1] += ',';
					}else if(longueur_new_nomb == 11 || longueur_new_nomb == 5){
						tablo[i] += ',';
					}else if(longueur_new_nomb == 13){
						tablo[i-1] += ',';
					}else{
						tablo[i] += '';
					}
				}
				// cette boucle transforme le tableau en chaine de caracteres 
				for(var i = 0; i<longueur_new_nomb; i++){
					part1 += tablo[i];
				}
				//console.log(part1);
				if(longueur_new_nomb!=3 && longueur_new_nomb!=13 && longueur_new_nomb!=7){
					part1 = part1.substr(0, (part1.length-1));
				}
				part1 = part1.concat('.00');
				//console.log(part1);
			}
		}else{ // Si le nombre est decimal
			new_nomb = text.substring(0, text.indexOf('.'));
			decim = text.substring(text.indexOf('.'), text.length);
			var longueur_new_nomb = new_nomb.length;
			nomb_decim_pair = longueur_new_nomb % 2;

			if(nomb_decim_pair == 0){
				//alert('nombre decimal et pair');
				
				// Cette boucle transforme la chaine de caracteres en tableau
				for(var i = 0; i<longueur_new_nomb; i++){
					tablo.push(new_nomb[i]);
					//console.log(tablo);
				}
				// Cette boucle ajoute les virgules au tableau
				for(var i = 0; i<longueur_new_nomb; i+=3){
					if(longueur_new_nomb == 6){
						tablo[i+2] += ',';
					}else if(longueur_new_nomb == 8){
						tablo[i+1] += ',';
					}else if(longueur_new_nomb == 10 || longueur_new_nomb == 4){
						tablo[i] += ',';
					}else if(longueur_new_nomb == 12){
						tablo[i+2] += ',';
					}else{
						tablo[i] += '';
					}
				}
				// cette boucle transforme le tableau en chaine de caracteres 
				for(var i = 0; i<longueur_new_nomb; i++){
					part1 += tablo[i];
				}
				//console.log(part1);
				if(longueur_new_nomb>2){
					part1 = part1.substr(0, (part1.length-1));
				}
				part1 = part1.concat(decim);
				//console.log(part1);
			}else{
				//alert('nombre decimal et impair');
				// Cette boucle transforme la chaine de caracteres en tableau
				for(var i = 0; i<longueur_new_nomb; i++){
					tablo.push(new_nomb[i]);
					//console.log(tablo);
				}
				// Cette boucle ajoute les virgules au tableau
				for(var i = 1; i<longueur_new_nomb; i+=3){
					if(longueur_new_nomb == 7){
						tablo[i-1] += ',';
					}else if(longueur_new_nomb == 9){
						tablo[i+1] += ',';
					}else if(longueur_new_nomb == 11 || longueur_new_nomb == 5){
						tablo[i] += ',';
					}else if(longueur_new_nomb == 13){
						tablo[i-1] += ',';
					}else{
						tablo[i] += '';
					}
				}
				// cette boucle transforme le tableau en chaine de caracteres 
				for(var i = 0; i<longueur_new_nomb; i++){
					part1 += tablo[i];
				}
				//console.log(part1);
				if(longueur_new_nomb!=3 && longueur_new_nomb!=13 && longueur_new_nomb!=7){
					part1 = part1.substr(0, (part1.length-1));
				}
				part1 = part1.concat(decim);
				//console.log(part1);
			}
		}
	return part1;
}

// Cette fonction permet d'arrondir les resultats à afficher
function myRound(t, n){
	var dec = Math.pow(10,n);
	var result = Math.round(dec*t)/dec;
	
	return result;
}

// Fonction de calcul de la mensualité
function calcul_mensualite(x, y, z){
	if(isNaN(x)||isNaN(y)||isNaN(z)){
		popUp.style.display = 'inline';
	}else{
		popUp.style.display = 'none';
		var monthly = (x*(y/1200))/(1 - Math.pow(1 + (y/1200), -z));
		return monthly;
	}
}

// Fonction qui calcul le cout total de la dette
function cout_total_dette(paiement, period){
	var total = paiement * period;
	return total;
}

// Cette fonction calcul le total des intérêts
function cout_total_int(paiement, period, mnt){
	var total = (paiement * period) - mnt;
	return total;
}

// Cette fonction calcul le revenu considéré
function calcul_revenu_considere(paiement){
	var revenu = (paiement * 100) / 30;
	return revenu;
}

monnaie.onchange = function(){
	choix.innerHTML = monnaie.value;
	afficheDansDom();
};

function afficheDansDom(){
	// La variable paiement_calcul permet d'effectuer les calculs
	var paiement_calcul = calcul_mensualite(mnt.value, tx.value, period.value);

	// La variable paiement_affiche sert à arrondir et afficher les resultats 
	var paiement_affiche = myRound(paiement_calcul , 2);
	
	var recip_dette = cout_total_dette(paiement_calcul, period.value);
	var recip_int = cout_total_int(paiement_calcul, period.value, mnt.value);
	var revenu_considere = calcul_revenu_considere(paiement_calcul);
	choix.innerHTML = monnaie.value;
	if(paiement_affiche == 'Infinity' || isNaN(paiement_affiche)){
		/* Do nothing*/
		mensualite.innerHTML = 'Calculating...';
		total_dette.innerHTML = 'Calculating...';
		total_int.innerHTML = 'Calculating...';
		ratio_end.innerHTML = 'Calculating...';
		rate_int[1].innerHTML = '...';
	}else{
		var prog1 = (mnt.value * 100) / recip_dette;
			prog1 = myRound(prog1 , 0);
		var prog2 = (recip_int * 100) / recip_dette;
			prog2 = myRound(prog2 , 0);
		mensualite.innerHTML =  'Mensualité : '+conversion_nombre(paiement_affiche)+' '+monnaie.value;
		total_dette.innerHTML = conversion_nombre(myRound(recip_dette , 2))+' '+monnaie.value;
		total_int.innerHTML = conversion_nombre(myRound(recip_int , 2))+' '+monnaie.value;
		progress_mnt.style.width = prog1+'%';
		progress_int.style.width = prog2+'%';
		rate_mnt.innerHTML = 'Principal '+prog1  +'%';
		rate_int[0].innerHTML = 'Intérêt '+prog2 +'%';
		rate_int[1].innerHTML = prog2 +'%';
		ratio_end.innerHTML = conversion_nombre(myRound(revenu_considere, 2))+' '+monnaie.value;
	}	

}

function eraseNodes(){
	var container = document.querySelectorAll('.rows');
	var terme = document.querySelectorAll('.termeTd');
	var balanceD = document.querySelectorAll('.BalanceDTd');
	var interet = document.querySelectorAll('.interetTd');
	var principal = document.querySelectorAll('.principalTd');
	var balanceF = document.querySelectorAll('.balanceFtd');
	var interetC = document.querySelectorAll('.interetCtd');
	
	for(var i=0; i<container.length; i++){
		terme[i].parentNode.removeChild(terme[i]);
		balanceD[i].parentNode.removeChild(balanceD[i]);
		interet[i].parentNode.removeChild(interet[i]);
		principal[i].parentNode.removeChild(principal[i]);
		balanceF[i].parentNode.removeChild(balanceF[i]);
		interetC[i].parentNode.removeChild(interetC[i]);
		container[i].parentNode.removeChild(container[i]);
	}
}

// Définition d'un EVENT sur chaque champ
// cet EVENT permet d'appeller la fonction calcul
this.addEventListener('keyup', function(){
	afficheDansDom();
}, false);


this.addEventListener('change', function(){
	afficheDansDom();
}, false);


// Définition d'un EVENT sur le bouton echeancier
// qui permet de calculer et d'afficher l'echeancier

echeancier.addEventListener('click', function(){
	//if(mnt != '' && tx != '' && period != ''){
		var caption = document.createElement('caption');
		if(document.getElementsByTagName('thead')[0].hasChildNodes()){
	
		}else{
			var container0 = document.createElement('tr');
			var terme0 = document.createElement('th');
			var balanceD0 = document.createElement('th');
			var interet0 = document.createElement('th');
			var principal0 = document.createElement('th');
			var balanceF0 = document.createElement('th');
			var interetC0 = document.createElement('th');

			caption.innerHTML = 'Echéancier';
			terme0.innerHTML = 'No';
			balanceD0.innerHTML = 'Balance Départ';
			interet0.innerHTML = 'Intérêt Payé';
			principal0.innerHTML = 'Principal Payé';
			balanceF0.innerHTML = 'Balance Fin';
			interetC0.innerHTML = 'Intérêt Cumulé';

			document.getElementsByTagName('table')[0].appendChild(caption);
			container0.appendChild(terme0);
			container0.appendChild(balanceD0);
			container0.appendChild(interet0);
			container0.appendChild(principal0);
			container0.appendChild(balanceF0);
			container0.appendChild(interetC0);

			document.getElementsByTagName('thead')[0].appendChild(container0);
		}

		var monthly = calcul_mensualite(mnt.value, tx.value, period.value);
		var i = period.value, 
		No = i - (i-1),
		balanceDepart = mnt.value,
		interetPaye = balanceDepart * (tx.value/1200),
		principalPaye = monthly - interetPaye,
		balanceFin = balanceDepart - principalPaye;
		var interetCumule = interetPaye;

		if(document.getElementsByTagName('tbody')[0].hasChildNodes()){
			eraseNodes();

			var container = document.createElement('tr');
			var terme = document.createElement('td');
			var balanceD = document.createElement('td');
			var interet = document.createElement('td');
			var principal = document.createElement('td');
			var balanceF = document.createElement('td');
			var interetC = document.createElement('td');

			container.className = 'rows';
			terme.className = 'termeTd';
			balanceD.className = 'BalanceDTd';
			interet.className = 'interetTd';
			principal.className = 'principalTd';
			balanceF.className = 'balanceFtd';
			interetC.className = 'interetCtd';

			terme.innerHTML = No,
			balanceD.innerHTML = conversion_nombre(myRound(balanceDepart, 2)),
			interet.innerHTML = conversion_nombre(myRound(interetPaye, 2)),
			principal.innerHTML = conversion_nombre(myRound(principalPaye, 2)),
			balanceF.innerHTML = conversion_nombre(myRound(balanceFin, 2)),
			interetC.innerHTML = conversion_nombre(myRound(interetCumule, 2));

			container.appendChild(terme)
			container.appendChild(balanceD)
			container.appendChild(interet)
			container.appendChild(principal)
			container.appendChild(balanceF)
			container.appendChild(interetC);
			
			document.getElementsByTagName('tbody')[0].appendChild(container);

			for(i; i>=2; i--){
				No += 1,
				balanceDepart = balanceFin,
				interetPaye = balanceDepart * (tx.value/1200),
				principalPaye = monthly - interetPaye,
				balanceFin = balanceDepart - principalPaye,
				interetCumule = interetCumule + interetPaye;
				
				var container = document.createElement('tr');
				var terme = document.createElement('td');
				var balanceD = document.createElement('td');
				var interet = document.createElement('td');
				var principal = document.createElement('td');
				var balanceF = document.createElement('td');
				var interetC = document.createElement('td');
				
				container.className = 'rows';
				terme.className = 'termeTd';
				balanceD.className = 'BalanceDTd';
				interet.className = 'interetTd';
				principal.className = 'principalTd';
				balanceF.className = 'balanceFtd';
				interetC.className = 'interetCtd';

				terme.innerHTML = No,
				balanceD.innerHTML = conversion_nombre(myRound(balanceDepart, 2)),
				interet.innerHTML = conversion_nombre(myRound(interetPaye, 2)),
				principal.innerHTML = conversion_nombre(myRound(principalPaye, 2)),
				balanceF.innerHTML = conversion_nombre(myRound(balanceFin, 2)),
				interetC.innerHTML = conversion_nombre(myRound(interetCumule, 2));
				
				container.appendChild(terme)
				container.appendChild(balanceD)
				container.appendChild(interet)
				container.appendChild(principal)
				container.appendChild(balanceF)
				container.appendChild(interetC);
				document.getElementsByTagName('tbody')[0].appendChild(container);
			}
		}else{
			var container = document.createElement('tr');
			var terme = document.createElement('td');
			var balanceD = document.createElement('td');
			var interet = document.createElement('td');
			var principal = document.createElement('td');
			var balanceF = document.createElement('td');
			var interetC = document.createElement('td');

			container.className = 'rows';
			terme.className = 'termeTd';
			balanceD.className = 'BalanceDTd';
			interet.className = 'interetTd';
			principal.className = 'principalTd';
			balanceF.className = 'balanceFtd';
			interetC.className = 'interetCtd';

			terme.innerHTML = No,
			balanceD.innerHTML = conversion_nombre(myRound(balanceDepart, 2)),
			interet.innerHTML = conversion_nombre(myRound(interetPaye, 2)),
			principal.innerHTML = conversion_nombre(myRound(principalPaye, 2)),
			balanceF.innerHTML = conversion_nombre(myRound(balanceFin, 2)),
			interetC.innerHTML = conversion_nombre(myRound(interetCumule, 2));

			container.appendChild(terme)
			container.appendChild(balanceD)
			container.appendChild(interet)
			container.appendChild(principal)
			container.appendChild(balanceF)
			container.appendChild(interetC);
			
			document.getElementsByTagName('tbody')[0].appendChild(container);

			for(i; i>=2; i--){
				No += 1,
				balanceDepart = balanceFin,
				interetPaye = balanceDepart * (tx.value/1200),
				principalPaye = monthly - interetPaye,
				balanceFin = balanceDepart - principalPaye,
				interetCumule = interetCumule + interetPaye;
				
				var container = document.createElement('tr');
				var terme = document.createElement('td');
				var balanceD = document.createElement('td');
				var interet = document.createElement('td');
				var principal = document.createElement('td');
				var balanceF = document.createElement('td');
				var interetC = document.createElement('td');
				
				container.className = 'rows';
				terme.className = 'termeTd';
				balanceD.className = 'BalanceDTd';
				interet.className = 'interetTd';
				principal.className = 'principalTd';
				balanceF.className = 'balanceFtd';
				interetC.className = 'interetCtd';

				terme.innerHTML = No,
				balanceD.innerHTML = conversion_nombre(myRound(balanceDepart, 2)),
				interet.innerHTML = conversion_nombre(myRound(interetPaye, 2)),
				principal.innerHTML = conversion_nombre(myRound(principalPaye, 2)),
				balanceF.innerHTML = conversion_nombre(myRound(balanceFin, 2)),
				interetC.innerHTML = conversion_nombre(myRound(interetCumule, 2));
				
				container.appendChild(terme)
				container.appendChild(balanceD)
				container.appendChild(interet)
				container.appendChild(principal)
				container.appendChild(balanceF)
				container.appendChild(interetC);
				document.getElementsByTagName('tbody')[0].appendChild(container);
			}
		}
	//}

}, false);
