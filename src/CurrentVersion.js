(async () => {
  const updateDiv = document.querySelector('#updateStatus');
  const localDataUrl = '../manifest.json';
  const gitHubApiUrl = 'https://api.github.com/repos/tennisfar/ds-chrome-extension/releases';

  try {
    const [localDataResponse, gitHubResponse] = await Promise.all([fetch(localDataUrl), fetch(gitHubApiUrl)]);

    const localData = await localDataResponse.json();
    const releases = await gitHubResponse.json();
    const latestRelease = releases[0]; // The first item in the array is the latest release
    const latestVersion = latestRelease?.tag_name?.replace('v', '');
    const localVersion = `v${localData.version}`;

    let url, message;
    if (latestRelease?.html_url && Number(latestVersion) > Number(localData.version)) {
      url = latestRelease.html_url;
      message = `Du kan opdatere fra version ${localData.version} til ${latestVersion}`;
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
