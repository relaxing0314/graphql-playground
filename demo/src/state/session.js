var reselect = require("reselect");

function getSelectedWorkspaceId(state) {
  return state.get('selectedWorkspace');
}

function getSelectedWorkspace(state) {
  return state.getIn(['workspaces', getSelectedWorkspaceId(state)]) || reselect.makeWorkspace('');
}

export const getSessionsState = reselect.createSelector([getSelectedWorkspace], (workspace) => {
  return workspace.get('sessions');
});

export const getSelectedSessionId = (state) => {
  return state.selectedSessionId && state.selectedSessionId !== '' ? state.selectedSessionId : state.sessions.first().id;
};

export const getSelectedSession = reselect.createSelector([getSessionsState], (state) => {
  var id = getSelectedSessionId(state);
  var session = state.getIn(['sessions', id]);
  return session;
});