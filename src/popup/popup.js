import './style.scss';
import { updateVersionButton } from '../CurrentVersion';
import { setupOpenPageInExperienceEditor } from '../OpenPageInExperienceEditor';
import { setupOpenPageInSitecore } from '../OpenPageInSitecore';
import { setupShowComponents } from '../ShowComponents';
import { setupShowGrid } from '../ContentScripts/DS/LayoutGrid';

void updateVersionButton();
setupOpenPageInExperienceEditor();
setupOpenPageInSitecore();
setupShowComponents();
setupShowGrid();
