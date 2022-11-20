import hotkeys from 'hotkeys-js';

const observerMap = {};
export function addKeyObserver(key, callback) {
  if (!observerMap[key]) {
    observerMap[key] = [];
    hotkeys(key, () => executeCallbacks(key));
  }
  observerMap[key].push(callback);
}

export function removeKeyObserver(key, callback) {
  observerMap[key] = observerMap[key].filter((item) => item !== callback);
}

function executeCallbacks(key) {
  observerMap[key].forEach((ob) => ob());
}
