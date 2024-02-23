import { isPageAJiraTask, createCTAInToolbar, waitForElement } from './Jira';

const toggleElementsVisibility = () => {
  const planningPoker = document.querySelector('#planning-poker');
  const peopleModule = document.querySelector('#peoplemodule');
  const navComponents = document
    .querySelector('[data-link-id="com.atlassian.jira.jira-projects-plugin:components-page"]')
    ?.closest('li');
  const navXrayReports = document
    .querySelector('[data-link-id="com.xpandit.plugins.xray:raven.sidebar.reports"]')
    ?.closest('li');
  const navXrayTestRepo = document
    .querySelector('[data-link-id="com.xpandit.plugins.xray:raven.sidebar.test-repository"]')
    ?.closest('li');
  const navXrayTestPlan = document
    .querySelector('[data-link-id="com.xpandit.plugins.xray:raven.sidebar.testplan-repository"]')
    ?.closest('li');
  const navAutomatedSteps = document
    .querySelector('[data-link-id="com.xpandit.plugins.xray:raven.sidebar.automated-steps-library"]')
    ?.closest('li');
  const navObjects = document
    .querySelector('[data-link-id="com.riadalabs.jira.plugins.insight:rlabs-project-jira-section"]')
    ?.closest('li');
  const fixSerial = document.querySelector('[for="customfield_11504"]')?.closest('.wrap');
  const testCoverage = document.querySelector('#view-issue-requirement-test-coverage-section');
  const backboneSync = document.querySelector('#syncpanelinfo-backbone');
  const secondaryToolBar = document.querySelector('header .aui-toolbar2-secondary');
  const watchers = document.querySelector('#view-watcher-list')?.closest('.item-details');
  // const affectsVersions = document.querySelector('[for="versions-textarea"]')?.closest('.item');

  navComponents?.classList.toggle('hidden');
  navXrayReports?.classList.toggle('hidden');
  navXrayTestRepo?.classList.toggle('hidden');
  navXrayTestPlan?.classList.toggle('hidden');
  navAutomatedSteps?.classList.toggle('hidden');
  navObjects?.classList.toggle('hidden');
  fixSerial?.classList.toggle('hidden');
  planningPoker?.classList.toggle('hidden');
  testCoverage?.classList.toggle('hidden');
  backboneSync?.classList.toggle('hidden');
  secondaryToolBar?.classList.toggle('hidden');
  watchers?.classList.toggle('hidden');
  peopleModule?.querySelector('.item-details [title="Votes"]').closest('dl').classList.toggle('hidden');

  // Toggle "view more" buttons
  // const detailsModule = document.querySelector('#details-module');
  // detailsModule?.classList.toggle('expanded');
  // detailsModule?.classList.toggle('collapsed');
};

export default async function () {
  if (isPageAJiraTask()) {
    // We wait until we know the page is ready, which is when our toolbar has been added.
    await waitForElement('#dsChromeExtensionJiraToolbar');
    await waitForElement('[data-link-id="com.atlassian.jira.jira-projects-plugin:components-page"]');

    toggleElementsVisibility();

    createCTAInToolbar('Show All', () => {
      toggleElementsVisibility();
    });
  }
}
