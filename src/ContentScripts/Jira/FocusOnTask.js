import { isPageAJiraTask, createCTAInToolbar, waitForElement } from './Jira';

const hide = (selector) => {
  const el = document.querySelector(selector);
  if (el) el.style.display = 'none';
};

const asyncSelectorsToHide = [
  '#header',
  '#footer',
  '.aui-sidebar-wrapper',
  '.command-bar',
  '#details-module',
  '#viewissuesidebar',
  '#activitymodule .horizontal-tabs',
  '.aui-page-header-image',
  '#attachmentmodule',
];

const hasAllAsyncElements = async () => {
  await Promise.all(
    asyncSelectorsToHide.map(async (selector) => {
      await waitForElement(selector);
    })
  );
};

const toggleElementsVisibility = async () => {
  asyncSelectorsToHide.map((selector) => hide(selector));

  hide('#linkingmodule');
  hide('#jpo-child-issues-web-panel');

  (await waitForElement('.aui-page-panel')).style = 'padding-left: 0';
  (await waitForElement('.aui-page-header-main')).style = 'display: flex; flex-direction: column-reverse';
  (await waitForElement('.issue-view')).style = 'height: unset';

  (await waitForElement('.issue-main-column')).style =
    'display: grid; grid-column-gap: 40px; grid-template-columns: 1fr 1fr; grid-template-areas: "description activity" "description add-comments";';
  (await waitForElement('#descriptionmodule')).style = 'grid-area: description';
  (await waitForElement('#activitymodule')).style = 'grid-area: activity';
  (await waitForElement('#addcomment')).style = 'grid-area: add-comments';

  const description = await waitForElement('#descriptionmodule');
  const attachments = await waitForElement('#attachment_thumbnails');
  description.appendChild(attachments);
};

export default async function () {
  if (isPageAJiraTask()) {
    hasAllAsyncElements().then(() => {
      createCTAInToolbar('Focus', toggleElementsVisibility);
    });
  }
}
