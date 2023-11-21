(() => {
  document.querySelector('#openSitecoreProdDli').addEventListener('click', () => {
    window.open(
      'https://editdli.danskespil.dk/sitecore/shell/Applications/Content%20Editor.aspx?sc_bw=1&fo=/sitecore/content/DanskeSpil/home'
    );
  });

  document.querySelector('#openSitecoreProdDlo').addEventListener('click', () => {
    window.open(
      'https://editdlo.danskespil.dk/sitecore/shell/Applications/Content%20Editor.aspx?sc_bw=1&fo=/sitecore/content/DanskeSpil/home'
    );
  });

  document.querySelector('#openSitecoreTown21Dli').addEventListener('click', () => {
    window.open(
      'https://town21editdli.danskespil.dk/sitecore/shell/Applications/Content%20Editor.aspx?sc_bw=1&fo=/sitecore/content/DanskeSpil/home'
    );
  });

  document.querySelector('#openSitecoreTown21Dlo').addEventListener('click', () => {
    window.open(
      'https://town21editdlo.danskespil.dk/sitecore/shell/Applications/Content%20Editor.aspx?sc_bw=1&fo=/sitecore/content/DanskeSpil/home'
    );
  });

  document.querySelector('#openSitecoreDev').addEventListener('click', () => {
    window.open(
      'https://web.develop.danskespil.dk/sitecore/shell/Applications/Content%20Editor.aspx?sc_bw=1&fo=/sitecore/content/DanskeSpil/home'
    );
  });

  document.querySelector('#openSitecoreTrunk').addEventListener('click', () => {
    window.open(
      'https://web.trunk.danskespil.dk/sitecore/shell/Applications/Content%20Editor.aspx?sc_bw=1&fo=/sitecore/content/DanskeSpil/home'
    );
  });
})();
