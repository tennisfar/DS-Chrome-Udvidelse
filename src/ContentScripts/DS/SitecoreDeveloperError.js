export function setupDsSitecoreDeveloperError() {
  if (location.host.endsWith('danskespil.dk') && !location.pathname.startsWith('/sitecore/')) {
    let style = document.getElementById("sitecoreDeveloperErrorStyle");

    if (!style) {
      style = document.createElement('style');
      style.id = 'sitecoreDeveloperErrorStyle';
      document.body.appendChild(style);
    }

    style.innerHTML = `
      .alert.alert-error:has(.developer-alert) {
        background: #9b59b6;
        color: white;
        font-size: 13px;
        line-height: 1.5;
        padding: 10px;
    }`
  }
}
