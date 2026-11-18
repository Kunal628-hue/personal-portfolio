// Project stories use existing portfolio facts, the owner's contribution confirmation,
// and the linked source files. No user counts or performance metrics are inferred.
export const projectStories = [
  {
    slug: 'global-notes', category: 'Software', contribution: 'End-to-end implementation',
    problem: 'Keep notes searchable and organized without losing work between sessions.',
    role: 'I built the whole Global Notes Workspace, including the interface, note workflows, persistence and search.',
    approach: 'The application separates note storage, search and interface rendering into JavaScript modules. The repository also documents guest use, Supabase sign-in and cloud-backed workflows.',
    decisions: [
      ['Separate storage from the interface', 'The storage module exposes note operations independently from rendering and search.'],
      ['Make retrieval part of the workflow', 'Search and tag filtering help users find notes after creating them.'],
    ],
    result: 'A notes workspace with persistent storage, search and tag-based organization, plus documented import/export and guest workflows.',
    flow: ['Write a note', 'Store & organize', 'Search & retrieve'],
    evidence: [
      ['Project README', 'https://github.com/Coder-s-OG-s/Global_Notes-workspace/blob/main/README.md'],
      ['Storage module', 'https://github.com/Coder-s-OG-s/Global_Notes-workspace/blob/main/client/JS/storage.js'],
      ['Search module', 'https://github.com/Coder-s-OG-s/Global_Notes-workspace/blob/main/client/JS/searchDropdown.js'],
    ],
  },
  {
    slug: 'portfolio', category: 'Software', contribution: 'Interface & interaction development',
    problem: 'Present software, hardware and learning in one portfolio that stays easy to navigate.',
    role: 'The portfolio brings together my projects, technical background, community work and contact details.',
    approach: 'React components share structured project data. A single scroll scheduler updates reveals and the horizontal Expertise → WORK transition; project tabs keep software and hardware distinct.',
    decisions: [
      ['Keep one continuous page', 'Category tabs and expandable credentials shorten the reading path without separating the portfolio into pages.'],
      ['Make interaction accessible', 'Keyboard tabs, native disclosures and project-story dialogs complement the visual effects.'],
    ],
    result: 'A responsive portfolio with categorized software projects, a separate hardware collection, direct contact links and a printable résumé.',
    flow: ['Structured content', 'React components', 'Accessible interactions'],
    evidence: [['Portfolio source', 'https://github.com/Kunal628-hue/personal-portfolio']],
  },
  {
    slug: 'ghar-khata', category: 'Software', contribution: 'Household expense application',
    problem: 'Bring recurring household records and monthly spending into a clearer view.',
    role: 'This project applies JavaScript interface development and data organization to household expense tracking.',
    approach: 'The source separates navigation, attendance, milk records, payments, dashboard and storage. Browser storage persists JSON data using profile-specific keys.',
    decisions: [
      ['Split features into modules', 'Feature-specific files keep the dashboard, payments and daily records separate.'],
      ['Scope stored records by profile', 'The storage helper prefixes keys with the active profile, keeping local records organized.'],
    ],
    result: 'A browser-based household tracker with monthly summaries and locally persisted records.',
    flow: ['Daily records', 'Profile-based storage', 'Monthly dashboard'],
    evidence: [
      ['Application modules', 'https://github.com/Kunal628-hue/Singhi-GharKhata/blob/main/app.js'],
      ['Storage helper', 'https://github.com/Kunal628-hue/Singhi-GharKhata/blob/main/storage.js'],
      ['Dashboard', 'https://github.com/Kunal628-hue/Singhi-GharKhata/blob/main/dashboard.js'],
    ],
  },
  {
    slug: 'finance-manager', category: 'Software', contribution: 'Personal finance interface',
    problem: 'Track income, expenses, budgets and savings through one interface.',
    role: 'This project combines transaction workflows, visual summaries and a browser-local account flow.',
    approach: 'JavaScript manages transactions, filters, budget limits and savings. The source uses user-specific localStorage keys and chart instances for visual summaries.',
    decisions: [
      ['Keep account data organized', 'User-specific storage keys separate transaction and savings records in the browser.'],
      ['Pair records with summaries', 'Transaction lists and charts provide different ways to review the same financial data.'],
    ],
    result: 'A finance-management prototype with transaction tracking, budget controls, savings and a login interface.',
    flow: ['Transactions', 'Browser-local records', 'Budgets & charts'],
    evidence: [
      ['Finance workflows', 'https://github.com/Kunal628-hue/Personal-finance-manager/blob/main/file.js'],
      ['Account flow', 'https://github.com/Kunal628-hue/Personal-finance-manager/blob/main/auth.js'],
    ],
  },
  {
    slug: 'plant-watering', category: 'Hardware', contribution: 'Arduino & sensor integration',
    problem: 'Respond to changes in soil moisture instead of relying only on manual watering.',
    role: 'An Arduino-based project connecting soil-moisture monitoring with an automatic watering response.',
    approach: 'The system reads soil moisture, evaluates the reading on the controller and triggers watering when needed.',
    decisions: [
      ['Use a sensing-to-action loop', 'The project connects a physical measurement to an automated response.'],
      ['Keep the controller logic focused', 'The core workflow is moisture monitoring followed by a watering decision.'],
    ],
    result: 'A sensor-driven automatic plant-watering system.',
    flow: ['Soil-moisture sensor', 'Arduino decision', 'Watering response'],
    evidence: [],
  },
  {
    slug: 'obstacle-robot', category: 'Hardware', contribution: 'Robotics & proximity sensing',
    problem: 'Allow a robot vehicle to respond to obstacles in its path.',
    role: 'An autonomous robot project using Arduino and ultrasonic sensing to guide movement.',
    approach: 'An ultrasonic sensor detects nearby obstacles. The controller uses this input to adjust the robot’s navigation.',
    decisions: [
      ['Connect sensing to navigation', 'Obstacle detection informs movement rather than remaining a separate display.'],
      ['Keep the feedback loop explicit', 'The system repeatedly observes its surroundings and responds to detected obstacles.'],
    ],
    result: 'A robot vehicle capable of detecting and navigating around obstacles.',
    flow: ['Ultrasonic sensor', 'Arduino decision', 'Movement response'],
    evidence: [],
  },
  {
    slug: 'fire-safety', category: 'Hardware', contribution: 'Sensor-based alarm system',
    problem: 'Detect signs of fire and communicate an early warning.',
    role: 'An Arduino-based detection and alarm project using flame and smoke sensors.',
    approach: 'Sensor readings feed the controller, which activates an alarm response when fire indicators are detected.',
    decisions: [
      ['Use flame and smoke inputs', 'The project considers both types of sensor input in its detection workflow.'],
      ['Make the response clear', 'Detection leads to an alarm rather than requiring a person to keep checking readings.'],
    ],
    result: 'An automated flame/smoke detection and alarm system.',
    flow: ['Flame & smoke sensors', 'Arduino decision', 'Alarm response'],
    evidence: [],
  },
];
export const featuredProjectIndices = [0, 2, 5];
