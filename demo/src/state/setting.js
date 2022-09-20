import { createSelector } from 'reselect';

export const defaultSettings = {
  'editor.cursorShape': 'line',
  'editor.fontFamily': `'Source Code Pro', 'Consolas', 'Inconsolata', 'Droid Sans Mono', 'Monaco', monospace`,
  'editor.fontSize': 14,
  'editor.reuseHeaders': true,
  'editor.theme': 'dark',
  'general.betaUpdates': false,
  'prettier.printWidth': 80,
  'prettier.tabWidth': 2,
  'prettier.useTabs': false,
  'request.credentials': 'omit',
  'request.globalHeaders': {},
  'schema.disableComments': true,
  'schema.polling.enable': true,
  'schema.polling.endpointFilter': '*localhost*',
  'schema.polling.interval': 2000,
  'tracing.hideTracingResponse': true,
  'tracing.tracingSupported': true,
  'subscriptions.protocol': 'subscription-transport-ws',
}

function normalizeSettings(settings) {
  const theme = settings['editor.theme']
  if (theme !== 'dark' && theme !== 'light') {
    settings['editor.theme'] = 'dark'
  }
  return {
    ...defaultSettings,
    ...settings,
  }
}

function parseSettingsString(settingsString) {
  try {
    return normalizeSettings(JSON.parse(settingsString))
  } catch (e) {
    return defaultSettings
  }
}

export const getSettingsString = state => state.settingsString;
export const getSettingsObj = state => parseSettingsString(state.settingsString);
export const getSettings = createSelector(
  [getSettingsString],
  parseSettingsString,
);