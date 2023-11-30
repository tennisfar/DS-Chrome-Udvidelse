(async () => {
  const updateDiv = document.querySelector('#updateStatus');
  const localDataUrl = '../manifest.json';
  const gitHubApiUrl = 'https://api.github.com/repos/tennisfar/ds-chrome-extension/releases';

  function isVersionLower(userVersion, newVersion) {
    const userParts = userVersion.split('.').map(Number);
    const newParts = newVersion.split('.').map(Number);

    for (let i = 0; i < Math.max(userParts.length, newParts.length); i++) {
      const userPart = userParts[i] || 0;
      const newPart = newParts[i] || 0;

      if (userPart < newPart) return true;
      if (userPart > newPart) return false;
    }
    return false;
  }

  try {
    const [localDataResponse, gitHubResponse] = await Promise.all([fetch(localDataUrl), fetch(gitHubApiUrl)]);
    const localData = await localDataResponse.json();
    const releases = await gitHubResponse.json();
    const latestRelease = releases[0]; // The first item in the array is the latest release
    const latestVersion = latestRelease?.tag_name?.replace('v', '');
    let url, message;

    if (latestRelease?.html_url && isVersionLower(localData.version, latestVersion)) {
      url = latestRelease.html_url;
      message = `Opdater til v. ${latestVersion} (du har ${localData.version})`;
    } else {
      url = 'https://github.com/tennisfar/ds-chrome-extension/releases';
      message = `Version ${localData.version}`;
    }

    updateDiv.textContent = message;
    updateDiv.addEventListener('click', () => window.open(url));
  } catch (error) {
    updateDiv.style.display = 'none';
  }
})();
