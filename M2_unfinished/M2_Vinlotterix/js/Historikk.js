/*-----------------------------------View------------------------------------- */
function visHistorikk()
{
    const vinner = model.trekninger[0].vinnere;
    
    let html =`
        <h1>Historikk</h1>
        <div id="lastWinner">
            <p>Siste vinner var ${vinner}!</p>
        </div>
            <hr>
        <div id="allWinners">
          ${alleVinnere()}
        </div>
    `;
    
  document.getElementById('innhold').innerHTML = html;
};


function alleVinnere() 
{
  let html = '';
  for (let trekning of model.trekninger) 
  {
    const vinnere = trekning.vinnere;
    console.log(vinnere);
    html +=
      `<p>
          <b >${lagTekstListe(vinnere)}!</b>
      </p>`;
  }
  return html;
};


function lagTekstListe(liste) 
{
  if (liste.length === 0) return '';
  if (liste.length === 1) return liste[0];

  const tekstListe = liste.join(', ');
  const indexSisteKomma = tekstListe.lastIndexOf(',');
  return tekstListe.substr(0, indexSisteKomma)
    + ' og ' + tekstListe.substr(indexSisteKomma + 1);
};


    //function for å lage en liste over tidligere vinnere.
    //lage en forloop for når en person vinner får de en +1 poeng.
    //Lage en if setning eller loop som sier at de med flest poeng kommer øverst i en liste.
    //en function for playerPoint som vil tilegne en person et poeng når de vinner.
    //poeng = 0,    må ha et objekt for å holde poeng ? 


/*-----------------------------------Controller------------------------------- */