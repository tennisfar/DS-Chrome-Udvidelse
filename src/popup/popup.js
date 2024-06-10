import './style.scss';
import { updateVersionButton } from '../CurrentVersion';
// import { jiraMakeBranch } from '../JiraMakeBranch';
// import { setupOpenSitecore } from '../OpenSitecore';
import { setupOpenPageInExperienceEditor } from '../OpenPageInExperienceEditor';
import { setupOpenPageInSitecore } from '../OpenPageInSitecore';
import { setupShowComponents } from '../ShowComponents';
// import { setupSettings } from '../Settings';

updateVersionButton();
// jiraMakeBranch();
// setupOpenSitecore();
setupOpenPageInExperienceEditor();
setupOpenPageInSitecore();
setupShowComponents();
// setupSettings();
