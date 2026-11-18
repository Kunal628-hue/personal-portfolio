# Personal Finance Manager

A browser-based personal-finance prototype with transactions, budgets, savings and visual summaries.

## Implementation

- `file.js` manages transaction entry, search/filtering, budgets, a savings wallet and monthly/category charts.
- `auth.js` implements a browser-local login/signup interface.
- User-specific localStorage keys organize records in the same browser.

Stack: HTML, CSS, JavaScript and Chart.js.

## Run and review

Serve the repository with a local static web server and open its login page. Use sample data to verify transaction creation, filtering, budgets, savings and refresh persistence. Check the repository's dependency and asset setup before publishing setup commands.

## Scope

This is a local-storage prototype. Its login interface is not secure server authentication, and localStorage is not a cloud database. Use sample financial records for demonstrations. Clearing browser storage can remove the saved data.

## Evidence to add

Add an actual interface screenshot and a short sample-data walkthrough. Document the test environment and observed results before making usage, security or performance claims.

Draft prepared from the inspected `file.js` and `auth.js`; no verified live-demo status or test results are implied.
