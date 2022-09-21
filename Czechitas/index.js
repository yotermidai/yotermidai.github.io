  var rodneCislo = prompt('Jake je vase rodne cislo?');
  
  const delka = rodneCislo.length === 10;
  if (delka)       
  {console.log("Zadané rodné číslo má správně deset znaků.");} 
  else 
  {document.write("Uživatel zadal rodné číslo neplatné délky");}

 const cele = rodneCislo.typeOf = Number;
  if (Number.isInteger)
  {console.log("Rodné číslo je celé číslo.");}
  else 
  {console.log("Rodné číslo obsahuje nepovolené znaky.");}

  const modulo = rodneCislo % 11 === 0
  if (modulo)
  {console.log("Rodné číslo je dělitelné číslem 11.");} 
  else 
  {console.log("Rodné číslo neni dělitelné 11.");}
  
  var conditionsArray = 
  [delka,cele,modulo,]
  if(conditionsArray)
  {console.log("Zadané rodné číslo je platné.");}
  else
  {console.log("Uživatel zadal neplatné rodné číslo.");}