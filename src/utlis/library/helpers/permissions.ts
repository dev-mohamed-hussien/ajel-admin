const localeProfile = JSON.parse(localStorage.getItem("profile"));

export function permissionsTransform(perm) {
  let permissions = {};
  perm.forEach((data) => {
    if (typeof permissions[data.name.split(".")[1]] != "object") {
      permissions[data.name.split(".")[1]] = {};
    }
    Object.defineProperty(
      permissions[data.name.split(".")[1]],
      data.name.split(".")[0],
      {
        enumerable: true,
        configurable: true,
        writable: true,
        value: 1,
      }
    );
  });
  return permissions;
}

export function getRole(profile = localeProfile) {
  return profile.role;
}

export const getPermissions = (route, type, profile = localeProfile) => {
  return profile?.permissions?.[route]?.[type] ? true : false;
};
