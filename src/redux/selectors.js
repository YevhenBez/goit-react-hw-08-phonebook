export const selectContacts = state => state.contacts.arrayInitialContacts;

export const selectFilter = state => state.filter;

export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectIsLoggedIn = state => state.contacts.isLoading;;