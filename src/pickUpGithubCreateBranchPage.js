(() => {
  const waitForElement = async (selector) => {
    while (!document.querySelector(selector)) {
      await new Promise((resolve) => requestAnimationFrame(resolve));
    }
    return document.querySelector(selector);
  };

  const pickUpGithubCreateBranchPage = async () => {
    if (location.host === 'github.com' && location.search.includes('?newBranch=')) {
      const params = new URLSearchParams(location.search);
      const newBranch = params.get('newBranch');

      const url = new URL(window.location);
      url.searchParams.delete('newBranch');
      history.pushState({}, '', url);

      const cta = await waitForElement('[partial-name="create-branch-button"] button');
      cta?.click();
      const input = await waitForElement('[role=dialog][data-focus-trap="active"] input');
      if (input) {
        setTimeout(() => {
          // Set the value attribute directly
          input.setAttribute('value', newBranch);

          // Dispatch events
          const eventsToDispatch = ['input', 'change', 'keyup'];
          eventsToDispatch.forEach((eventType) => {
            const event = new Event(eventType, { bubbles: true, cancelable: true });
            input.dispatchEvent(event);
          });
        }, 500);
      }
    }
  };

  pickUpGithubCreateBranchPage();
})();
