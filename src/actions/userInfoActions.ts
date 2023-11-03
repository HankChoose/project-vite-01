export const updateName = (name: string) => ({
  type: "UPDATE_NAME",
  payload: name
});

export const updateEmail = (email: string) => ({
  type: "UPDATE_EMAIL",
  payload: email
});

export const updateApplytype = (applytype: string) => ({
  type: "UPDATE_APPLYTYPE",
  payload: applytype
});

export const updateRequirements = (requirements: string) => ({
  type: "UPDATE_REQUIREMENTS",
  payload: requirements
});