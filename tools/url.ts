export const injectPathParams = (path: string, paramsObj: { [key: string]: any }) => {
  const units = path.split('/');
  for (let i = 0; i < units.length; i++) {
    if (units[i][0] === ':' && units[i].substring(1) in paramsObj) {
      units[i] = paramsObj[units[i].substring(1)];
    }
  }
  return units.join('/')
};
