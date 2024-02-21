/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/MakeBranchName.js":
/*!*******************************!*\
  !*** ./src/MakeBranchName.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function makeBranchName() {
  var type = document.querySelector('#issuedetails #type-val');
  var issue = document.querySelector('.issue-link');
  var summary = document.querySelector('#summary-val');
  if (document.querySelector('.ghx-columns .ghx-issue.ghx-selected')) {
    type = document.querySelector('.ghx-issue.ghx-selected .ghx-type');
    issue = document.querySelector('.ghx-issue.ghx-selected .ghx-key');
    summary = document.querySelector('.ghx-issue.ghx-selected .ghx-summary');
  }
  if (!(type && issue && summary)) return;
  type = type.innerText || type.title;
  type = type.trim().toLowerCase();
  type = type.replace(/story/, 'feature');
  issue = issue.innerText.trim();
  summary = summary.innerText.toLowerCase().replace(/[^a-z ]/g, '-').replace(/ /g, '-').replace(/--+/g, '-');
  return "".concat(type, "/").concat(issue, "-").concat(summary).slice(0, 50).replace(/-$/, '');
}

// Add to window, as it's used in JiraMakeBRanchName.js.
window.makeBranchName = makeBranchName;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeBranchName);

/***/ }),

/***/ "./src/Pages/Jira/ShowCreateBranchLink.js":
/*!************************************************!*\
  !*** ./src/Pages/Jira/ShowCreateBranchLink.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showCreateBranchLink: () => (/* binding */ showCreateBranchLink)
/* harmony export */ });
/* harmony import */ var _MakeBranchName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../MakeBranchName */ "./src/MakeBranchName.js");

var isJiraTaskIU = function isJiraTaskIU() {
  return location.host.includes('jira.danskespil.dk') && location.pathname.startsWith('/browse/IU-');
};
var createCTA = function createCTA() {
  var branchName = (0,_MakeBranchName__WEBPACK_IMPORTED_MODULE_0__["default"])();
  if (!branchName) return;
  var toolBar = document.querySelector('.aui-toolbar2-primary');
  var newCtaContainer = document.createElement('div');
  newCtaContainer.classList.add('aui-buttons');
  var cta = document.createElement('a');
  cta.classList.add('aui-button');
  cta.innerText = 'Create Branch';
  cta.addEventListener('click', function () {
    window.open('https://github.com/ds-itu-frontend-service/danskespil-website/branches?newBranch=' + branchName);
  });
  newCtaContainer.appendChild(cta);
  toolBar.appendChild(newCtaContainer);
};
function showCreateBranchLink() {
  if (isJiraTaskIU()) {
    createCTA();
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/Pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Jira_ShowCreateBranchLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Jira/ShowCreateBranchLink */ "./src/Pages/Jira/ShowCreateBranchLink.js");

(0,_Jira_ShowCreateBranchLink__WEBPACK_IMPORTED_MODULE_0__.showCreateBranchLink)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7RUFDL0csQ0FBQyxDQUFDO0VBQ0ZFLGVBQWUsQ0FBQ08sV0FBVyxDQUFDSCxHQUFHLENBQUM7RUFDaENMLE9BQU8sQ0FBQ1EsV0FBVyxDQUFDUCxlQUFlLENBQUM7QUFDdEMsQ0FBQztBQUVNLFNBQVNRLG9CQUFvQkEsQ0FBQSxFQUFHO0VBQ3JDLElBQUlqQixZQUFZLENBQUMsQ0FBQyxFQUFFO0lBQ2xCTSxTQUFTLENBQUMsQ0FBQztFQUNiO0FBQ0Y7Ozs7OztVQ3pCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTm1FO0FBRW5FVyxnRkFBb0IsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcy1jaHJvbWUtZXh0ZW5zaW9uLy4vc3JjL01ha2VCcmFuY2hOYW1lLmpzIiwid2VicGFjazovL2RzLWNocm9tZS1leHRlbnNpb24vLi9zcmMvUGFnZXMvSmlyYS9TaG93Q3JlYXRlQnJhbmNoTGluay5qcyIsIndlYnBhY2s6Ly9kcy1jaHJvbWUtZXh0ZW5zaW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RzLWNocm9tZS1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2RzLWNocm9tZS1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kcy1jaHJvbWUtZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZHMtY2hyb21lLWV4dGVuc2lvbi8uL3NyYy9QYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBtYWtlQnJhbmNoTmFtZSgpIHtcclxuICBsZXQgdHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpc3N1ZWRldGFpbHMgI3R5cGUtdmFsJyk7XHJcbiAgbGV0IGlzc3VlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlzc3VlLWxpbmsnKTtcclxuICBsZXQgc3VtbWFyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdW1tYXJ5LXZhbCcpO1xyXG5cclxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdoeC1jb2x1bW5zIC5naHgtaXNzdWUuZ2h4LXNlbGVjdGVkJykpIHtcclxuICAgIHR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2h4LWlzc3VlLmdoeC1zZWxlY3RlZCAuZ2h4LXR5cGUnKTtcclxuICAgIGlzc3VlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdoeC1pc3N1ZS5naHgtc2VsZWN0ZWQgLmdoeC1rZXknKTtcclxuICAgIHN1bW1hcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2h4LWlzc3VlLmdoeC1zZWxlY3RlZCAuZ2h4LXN1bW1hcnknKTtcclxuICB9XHJcblxyXG4gIGlmICghKHR5cGUgJiYgaXNzdWUgJiYgc3VtbWFyeSkpIHJldHVybjtcclxuXHJcbiAgdHlwZSA9IHR5cGUuaW5uZXJUZXh0IHx8IHR5cGUudGl0bGU7XHJcbiAgdHlwZSA9IHR5cGUudHJpbSgpLnRvTG93ZXJDYXNlKCk7XHJcbiAgdHlwZSA9IHR5cGUucmVwbGFjZSgvc3RvcnkvLCAnZmVhdHVyZScpO1xyXG5cclxuICBpc3N1ZSA9IGlzc3VlLmlubmVyVGV4dC50cmltKCk7XHJcblxyXG4gIHN1bW1hcnkgPSBzdW1tYXJ5LmlubmVyVGV4dFxyXG4gICAgLnRvTG93ZXJDYXNlKClcclxuICAgIC5yZXBsYWNlKC9bXmEteiBdL2csICctJylcclxuICAgIC5yZXBsYWNlKC8gL2csICctJylcclxuICAgIC5yZXBsYWNlKC8tLSsvZywgJy0nKTtcclxuXHJcbiAgcmV0dXJuIGAke3R5cGV9LyR7aXNzdWV9LSR7c3VtbWFyeX1gLnNsaWNlKDAsIDUwKS5yZXBsYWNlKC8tJC8sICcnKTtcclxufVxyXG5cclxuLy8gQWRkIHRvIHdpbmRvdywgYXMgaXQncyB1c2VkIGluIEppcmFNYWtlQlJhbmNoTmFtZS5qcy5cclxud2luZG93Lm1ha2VCcmFuY2hOYW1lID0gbWFrZUJyYW5jaE5hbWU7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYWtlQnJhbmNoTmFtZTsiLCJpbXBvcnQgbWFrZUJyYW5jaE5hbWUgZnJvbSAnLi4vLi4vTWFrZUJyYW5jaE5hbWUnO1xyXG5cclxuY29uc3QgaXNKaXJhVGFza0lVID0gKCkgPT4gbG9jYXRpb24uaG9zdC5pbmNsdWRlcygnamlyYS5kYW5za2VzcGlsLmRrJykgJiYgbG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aCgnL2Jyb3dzZS9JVS0nKTtcclxuXHJcbmNvbnN0IGNyZWF0ZUNUQSA9ICgpID0+IHtcclxuICBjb25zdCBicmFuY2hOYW1lID0gbWFrZUJyYW5jaE5hbWUoKTtcclxuICBpZiAoIWJyYW5jaE5hbWUpIHJldHVybjtcclxuXHJcbiAgY29uc3QgdG9vbEJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdWktdG9vbGJhcjItcHJpbWFyeScpO1xyXG4gIGNvbnN0IG5ld0N0YUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG5ld0N0YUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhdWktYnV0dG9ucycpO1xyXG4gIGNvbnN0IGN0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICBjdGEuY2xhc3NMaXN0LmFkZCgnYXVpLWJ1dHRvbicpO1xyXG4gIGN0YS5pbm5lclRleHQgPSAnQ3JlYXRlIEJyYW5jaCc7XHJcbiAgY3RhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgd2luZG93Lm9wZW4oJ2h0dHBzOi8vZ2l0aHViLmNvbS9kcy1pdHUtZnJvbnRlbmQtc2VydmljZS9kYW5za2VzcGlsLXdlYnNpdGUvYnJhbmNoZXM/bmV3QnJhbmNoPScgKyBicmFuY2hOYW1lKTtcclxuICB9KTtcclxuICBuZXdDdGFDb250YWluZXIuYXBwZW5kQ2hpbGQoY3RhKTtcclxuICB0b29sQmFyLmFwcGVuZENoaWxkKG5ld0N0YUNvbnRhaW5lcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93Q3JlYXRlQnJhbmNoTGluaygpIHtcclxuICBpZiAoaXNKaXJhVGFza0lVKCkpIHtcclxuICAgIGNyZWF0ZUNUQSgpO1xyXG4gIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgc2hvd0NyZWF0ZUJyYW5jaExpbmsgfSBmcm9tICcuL0ppcmEvU2hvd0NyZWF0ZUJyYW5jaExpbmsnO1xyXG5cclxuc2hvd0NyZWF0ZUJyYW5jaExpbmsoKTsiXSwibmFtZXMiOlsibWFrZUJyYW5jaE5hbWUiLCJ0eXBlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaXNzdWUiLCJzdW1tYXJ5IiwiaW5uZXJUZXh0IiwidGl0bGUiLCJ0cmltIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwiY29uY2F0Iiwic2xpY2UiLCJ3aW5kb3ciLCJpc0ppcmFUYXNrSVUiLCJsb2NhdGlvbiIsImhvc3QiLCJpbmNsdWRlcyIsInBhdGhuYW1lIiwic3RhcnRzV2l0aCIsImNyZWF0ZUNUQSIsImJyYW5jaE5hbWUiLCJ0b29sQmFyIiwibmV3Q3RhQ29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImN0YSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvcGVuIiwiYXBwZW5kQ2hpbGQiLCJzaG93Q3JlYXRlQnJhbmNoTGluayJdLCJzb3VyY2VSb290IjoiIn0=