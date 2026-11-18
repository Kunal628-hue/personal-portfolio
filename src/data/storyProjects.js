import {largeScaleProjects, smallScaleProjects, roboticsProjects} from './portfolio';

// Preserve original story indices independently of the software catalog ordering.
export const allStoryProjects = [...largeScaleProjects, ...smallScaleProjects, ...roboticsProjects];
