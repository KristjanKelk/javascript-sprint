function isAuthorizedUser(authorizedIds) {
  return function(id) {
      return authorizedIds.includes(id);
  };
}