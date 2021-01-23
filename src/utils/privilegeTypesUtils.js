export function changePrivilegeType (privilege, newType) {
  return privilege.replace(/([a-zA-Z]+_)[0-9a-zA-Z]+/, `$1${newType}`)
}

export function getPrivilegeType (privilege) {
  return privilege.match(/[a-zA-Z]+_([0-9a-zA-Z]+)/)[1]
}
