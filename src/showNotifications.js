(() => {
  chrome.storage.sync.get('showNotification', ({ showNotification }) => {
    const resetExtension = document.querySelector('#resetExtension');

    const hasFalseProperty = Object.values(showNotification).includes(false);

    resetExtension.style.display = hasFalseProperty ? 'block' : 'none';
    resetExtension.addEventListener('click', () => {
      Object.keys(showNotification).forEach((key) => (showNotification[key] = true));
      chrome.storage.sync.set({ showNotification });
      location.reload();
    });

    const notificationDanskeSpil = document.querySelector('#deleteNotificationDanskeSpil');
    notificationDanskeSpil.closest('.tile.is-parent').style.display = showNotification.danskeSpil ? 'block' : 'none';
    notificationDanskeSpil?.addEventListener('click', () => {
      notificationDanskeSpil.closest('.tile.is-parent').style.display = 'none';
      showNotification.danskeSpil = false;
      chrome.storage.sync.set({ showNotification });
      location.reload();
    });

    const notificationJiraDli = document.querySelector('#deleteNotificationJiraDli');
    notificationJiraDli.closest('.tile.is-parent').style.display = showNotification.jiraDli ? 'block' : 'none';
    notificationJiraDli?.addEventListener('click', () => {
      notificationJiraDli.closest('.tile.is-parent').style.display = 'none';
      showNotification.jiraDli = false;
      chrome.storage.sync.set({ showNotification });
      location.reload();
    });

    const notificationJiraDlo = document.querySelector('#deleteNotificationJiraDlo');
    notificationJiraDlo.closest('.tile.is-parent').style.display = showNotification.jiraDlo ? 'block' : 'none';
    notificationJiraDlo?.addEventListener('click', () => {
      notificationJiraDlo.closest('.tile.is-parent').style.display = 'none';
      showNotification.jiraDlo = false;
      chrome.storage.sync.set({ showNotification });
      location.reload();
    });

    const notificationSitecoreProd = document.querySelector('#deleteNotificationSitecoreProd');
    notificationSitecoreProd.closest('.tile.is-parent').style.display = showNotification.sitecoreProd
      ? 'block'
      : 'none';
    notificationSitecoreProd?.addEventListener('click', () => {
      notificationSitecoreProd.closest('.tile.is-parent').style.display = 'none';
      showNotification.sitecoreProd = false;
      chrome.storage.sync.set({ showNotification });
      location.reload();
    });

    const notificationSitecoreTown21 = document.querySelector('#deleteNotificationSitecoreTown21');
    notificationSitecoreTown21.closest('.tile.is-parent').style.display = showNotification.sitecoreTown21
      ? 'block'
      : 'none';
    notificationSitecoreTown21?.addEventListener('click', () => {
      notificationSitecoreTown21.closest('.tile.is-parent').style.display = 'none';
      showNotification.sitecoreTown21 = false;
      chrome.storage.sync.set({ showNotification });
      location.reload();
    });

    const notificationSitecoreDevelop = document.querySelector('#deleteNotificationSitecoreDevelop');
    notificationSitecoreDevelop.closest('.tile.is-parent').style.display = showNotification.sitecoreDevelop
      ? 'block'
      : 'none';
    notificationSitecoreDevelop?.addEventListener('click', () => {
      notificationSitecoreDevelop.closest('.tile.is-parent').style.display = 'none';
      showNotification.sitecoreDevelop = false;
      chrome.storage.sync.set({ showNotification });
      location.reload();
    });

    const notificationSitecoreTrunk = document.querySelector('#deleteNotificationSitecoreTrunk');
    notificationSitecoreTrunk.closest('.tile.is-parent').style.display = showNotification.sitecoreTrunk
      ? 'block'
      : 'none';
    notificationSitecoreTrunk?.addEventListener('click', () => {
      notificationSitecoreTrunk.closest('.tile.is-parent').style.display = 'none';
      showNotification.sitecoreTrunk = false;
      chrome.storage.sync.set({ showNotification });
      location.reload();
    });

    const notificationJira = document.querySelector('#deleteNotificationJira');
    notificationJira.closest('.tile.is-parent').style.display = showNotification.jira ? 'block' : 'none';
    notificationJira?.addEventListener('click', () => {
      notificationJira.closest('.tile.is-parent').style.display = 'none';
      showNotification.jira = false;
      chrome.storage.sync.set({ showNotification });
      location.reload();
    });

    // const debug = document.querySelector('#debug');
    // debug.innerHTML = JSON.stringify(showNotification, null, 2);
  });
})();
