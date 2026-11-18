// Scale assignments supplied by the owner. Summaries/stacks: linked README/source.
// Live URLs come from repository homepages or the existing portfolio; never guessed.
const repository = name => `https://github.com/Kunal628-hue/${name}`;
export const webProjects = [
  {id:'puchoo',scale:'large',title:'Puchoo.ai',description:'A multilingual analytics workspace that turns typed or spoken questions into guarded, read-only SQL results.',tags:['React','FastAPI','Python','SQL'],github:repository('Puchoo.ai'),kind:'Analytics'},
  {id:'eduadmin',scale:'large',title:'EduAdmin Pro',description:'School management with separate administrator and teacher dashboards, scheduling, batches and multi-school workflows.',tags:['React','TypeScript','NestJS','PostgreSQL'],github:repository('EduAdmin-Pro'),kind:'Management'},
  {id:'planora',scale:'large',title:'Planora — Smart Event OS',description:'An event-management workspace for planning, budget tracking, volunteer coordination and analytics.',tags:['React','Node.js','Express','Tailwind CSS'],github:repository('planora-smart-event-os-OJT2'),demo:'https://planora-smart-event-os-web.vercel.app/',kind:'Event platform'},
  {id:'global-notes',scale:'large',title:'Global Notes Workspace',description:'A persistent notes workspace featuring search functionality and a tagging system for efficient note organization.',tags:['HTML','CSS','JavaScript'],github:'https://github.com/Coder-s-OG-s/Global_Notes-workspace',demo:'https://global-notes-workspace.vercel.app/',kind:'Productivity',storyIndex:0,legacyAnchor:'project-0'},
  {id:'investment-advisor',scale:'mid',title:'AI Investment Advisor',description:'A portfolio-analysis platform combining allocation optimization, market sentiment and an AI advisory workspace.',tags:['React','Express','FastAPI','MongoDB'],github:repository('AI-Investment-Advisor'),kind:'Fintech'},
  {id:'id-card-generator',scale:'mid',title:'ID Card Generator',description:'A browser-based photo-frame and builder-badge generator with Canvas editing and downloadable event artwork.',tags:['React','TypeScript','Canvas','Tailwind CSS'],github:repository('id-card-generator'),demo:'https://id-card-generator-mauve.vercel.app',kind:'Creative tool'},
  {id:'savora',scale:'mid',title:'Savora Bot',description:'A Python Telegram bot integrating Gemini, language selection and text-to-speech tools.',tags:['Python','Telegram','Gemini','gTTS'],github:repository('savora_bot'),kind:'AI assistant'},
  {id:'jai-ramdev',scale:'mid',title:'Jai Ramdev Timber & Plywood',description:'A business website presenting timber, plywood, laminates and related products.',tags:['HTML','CSS'],github:repository('Jai-Ramdev-Timber-and-Plywood'),demo:'https://jai-ramdev-timber-and-plywood.vercel.app',kind:'Business website'},
  {id:'prepora',scale:'mid',title:'Prepora',description:'An interview-preparation application with practice, interview, progress and report workflows.',tags:['Next.js','TypeScript','FastAPI','Python'],github:repository('Prepora'),kind:'Interview preparation'},
  {id:'portfolio',scale:'mid',title:'Personal Portfolio',description:'A responsive software and robotics portfolio with scroll interactions, project stories and a printable résumé.',tags:['React','CSS','Framer Motion'],github:repository('personal-portfolio'),demo:'https://personal-portfolio-delta-ochre-13.vercel.app',kind:'Portfolio',storyIndex:1,legacyAnchor:'project-1'},
  {id:'finance-manager',scale:'small',title:'Personal Finance Manager',description:'A personal-finance prototype for income, expenses, savings and budgets, with browser-local records and an account interface.',tags:['HTML','CSS','JavaScript','Chart.js'],github:repository('personal-finance-manager'),demo:'https://personal-finance-manager-fbef.vercel.app',kind:'Finance tool',storyIndex:3,legacyAnchor:'project-3'},
  {id:'airtouch',scale:'small',title:'AirTouch',description:'A desktop software project translating webcam hand gestures into cursor, click and scroll actions.',tags:['Python','Computer vision','Gestures'],github:repository('AirTouch'),kind:'Desktop interaction'},
  {id:'flight-delay',scale:'small',title:'Flight Delay Prediction',description:'A flight-delay risk predictor and analytics dashboard with a Random Forest model and historical flight data.',tags:['React','FastAPI','scikit-learn','Python'],github:repository('flight_delay-prediction'),kind:'Machine learning'},
  {id:'assessment-creator',scale:'small',title:'AI Assessment Creator',description:'An assessment-generation platform with structured question papers, background jobs and real-time progress updates.',tags:['Next.js','Express','MongoDB','Redis'],github:repository('AI-Assessment-Creator'),kind:'Education tool'},
  {id:'reconflow',scale:'small',title:'ReconFlow — OpenEnv',description:'An API simulation environment for evaluating AI agents on invoice reconciliation and accounts-payable workflows.',tags:['Python','FastAPI','Pydantic','Docker'],github:repository('ReconFlow-OpenEnv'),kind:'Agent evaluation'},
  {id:'fitora',scale:'small',title:'Fitora',description:'A meal-planning and workout-tracking interface with nutrition targets, meal logging and shopping lists.',tags:['React','JavaScript','SVG'],github:repository('Fitora'),demo:'https://fitora-alpha.vercel.app',kind:'Wellness app'},
  {id:'ghar-khata',scale:'small',title:'Singhi Ghar Khata',description:'A comprehensive house expense management system designed to track daily household expenses and manage budget efficiently.',tags:['HTML','CSS','JavaScript','Chart.js'],github:repository('Singhi-GharKhata'),demo:'https://starlit-longma-c9ea99.netlify.app/',kind:'Household finance',storyIndex:2,legacyAnchor:'project-2'},
];
export const projectScales = [{id:'large',label:'Large scale'},{id:'mid',label:'Mid scale'},{id:'small',label:'Small scale'}];
export const WEB_PAGE_SIZE = 4;
export function selectWebProjects(scale='large',query='') {
 const search=query.trim().toLowerCase();
 return webProjects.filter(project=>project.scale===scale && (!search || [project.title,project.description,project.kind,...project.tags].join(' ').toLowerCase().includes(search)));
}
export function webProjectPage(projects,page=0) {
 const pageCount=Math.max(1,Math.ceil(projects.length/WEB_PAGE_SIZE));
 const current=Math.max(0,Math.min(page,pageCount-1));
 return {items:projects.slice(current*WEB_PAGE_SIZE,(current+1)*WEB_PAGE_SIZE),page:current,pageCount};
}
