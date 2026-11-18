# Singhi GharKhata

A household-records application for daily entries, recurring expenses and monthly summaries.

## Implementation

- `app.js` coordinates the navigation, active month and feature modules.
- `storage.js` persists JSON in browser localStorage with keys scoped to the active profile.
- `dashboard.js` presents monthly statistics and charts.
- The source organizes attendance, milk records, payments, settings and account screens into separate features.

Stack: JavaScript modules, HTML/CSS, Chart.js and Vite.

## Local development

```sh
npm install
npm run dev
npm run build
```

These commands are declared in the inspected package file. Confirm that all imported feature files are present in your checkout before running the app; an import of `helpers.js` needs checking against the repository contents.

## Data model and limits

Records live in the browser. Profile-prefixed keys organize local data; they do not establish server-side access control. Clearing browser storage can remove local records. Do not describe this implementation as cloud persistence without adding and verifying that feature.

## Demonstrate

Add a screenshot of the actual monthly dashboard with sample records. Verify a daily entry, month switching, refresh persistence and separation between two profiles. Record observed results before making performance or usage claims.

Draft prepared from source; no screenshots or test results are implied.
