import './style.scss';
import { updateVersionButton } from '../CurrentVersion';
import { setupOpenPageInExperienceEditor } from '../OpenPageInExperienceEditor';
import { setupOpenPageInSitecore } from '../OpenPageInSitecore';
import { setupShowComponents } from '../ShowComponents';
import { setupShowGrid } from '../ContentScripts/DS/LayoutGrid';
import { toggleDsFastLogin } from "../ContentScripts/DS/FastLogIn";

void updateVersionButton();
setupOpenPageInExperienceEditor();
setupOpenPageInSitecore();
setupShowComponents();
void setupShowGrid();
toggleDsFastLogin();
