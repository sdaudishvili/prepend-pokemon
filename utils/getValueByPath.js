const recursivelyGet = (curLevelObjRef, path, level) => {
  if (!curLevelObjRef) return '';
  if (level === path.length - 1) return curLevelObjRef[path[level]];
  return recursivelyGet(curLevelObjRef[path[level]], path, level + 1);
};

export const getValueByPath = (obj, path) => {
  return recursivelyGet(obj, path.split('.'), 0);
};
