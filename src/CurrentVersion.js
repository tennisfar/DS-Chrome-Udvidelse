const isVersionLower = (userVersion, newVersion) => {
  const userParts = userVersion.split('.').map(Number);
  const newParts = newVersion.split('.').map(Number);

  for (let i = 0; i < Math.max(userParts.length, newParts.length); i++) {
    const userPart = userParts[i] || 0;
    const newPart = newParts[i] || 0;

    if (userPart < newPart) return true;
    if (userPart > newPart) return false;
  }
  return false;
};

const getGithubLatestRelease = async () => {
  const gitHubApiUrl = 'https://api.github.com/repos/tennisfar/DS-Chrome-Udvidelse/releases';
  const gitHubResponse = await fetch(gitHubApiUrl);
  const releases = await gitHubResponse.json();
  return releases[0];
};

const getLocalVersion = async () => {
  const localDataUrl = '/manifest.json';
  const localDataResponse = await fetch(localDataUrl);
  const localData = await localDataResponse.json();
  return localData.version;
};

export async function updateVersionButton() {
  const updateDiv = document.querySelector('#updateStatus');

  try {
    const githubLatestRelease = await getGithubLatestRelease();
    const githubVersion = githubLatestRelease?.tag_name?.replace('v', '');
    const localVersion = await getLocalVersion();
    let url;
    let message;

    if (isVersionLower(localVersion, githubVersion)) {
      url = githubLatestRelease.html_url;
      message = `Opdater til v. ${githubVersion} (du har ${localVersion})`;
    } else {
      url = 'https://github.com/tennisfar/DS-Chrome-Udvidelse/releases';
      message = `Version ${localVersion}`;
    }
    updateDiv.innerText = message;
    updateDiv.addEventListener('click', () => window.open(url));
  } catch (e) {
    updateDiv.style.display = 'none';
  }
}
