function makeBranchName() {
  let type = document.querySelector('#issuedetails #type-val');
  let issue = document.querySelector('.issue-link');
  let summary = document.querySelector('#summary-val');

  if (document.querySelector('.ghx-columns .ghx-issue.ghx-selected')) {
    type = document.querySelector('.ghx-issue.ghx-selected .ghx-type');
    issue = document.querySelector('.ghx-issue.ghx-selected .ghx-key');
    summary = document.querySelector('.ghx-issue.ghx-selected .ghx-summary');
  }

  if (!(type && issue && summary)) return;

  type = type.innerText || type.title;
  type = type.trim().toLowerCase();
  type = type.replace(/story/, 'feature');
  type = type.replace(/epic/, 'feature');

  if (type === 'bug') type = 'bugfix';

  issue = issue.innerText.trim();

  summary = summary.innerText
    .toLowerCase()
    .replace(/[^a-z ]/g, '-')
    .replace(/ /g, '-')
    .replace(/--+/g, '-');
  
  // replace leading dash
  summary = summary.replace(/^-/, '');

  return `${type}/${issue}-${summary}`.slice(0, 50).replace(/-$/, '');
}

// Add to window, as it's used in JiraMakeBRanchName.js.
window.makeBranchName = makeBranchName;

export default makeBranchName;
