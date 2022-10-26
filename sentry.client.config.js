// This file configures the initialization of Sentry on the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

Sentry.init({
  release: 'scalor-web-app@0.0.1',
  dsn: "https://85183ac72fd440c8a70164803d4d43c5@o4504049824038912.ingest.sentry.io/4504049826136065",
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1.0,
  environment: process?.env?.NEXT_PUBLIC_ENVIRONMENT
});