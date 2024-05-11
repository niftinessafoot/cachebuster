const setQueryParam = (location, key = 'cachebuster') => {
  const value = +new Date();
  let url;

  try {
    url = new URL(location);
  } catch (err) {
    console.error(`Invalid URL: ${location}`);
    return false;
  }

  url.searchParams.set(key, value);

  return url.toString();
};

const replaceState = (url) => history.replaceState(null, '', url);

chrome.action.onClicked.addListener((tab) => {
  const { id: tabId, url: oldUrl } = tab;
  const url = setQueryParam(oldUrl);

  chrome.scripting
    .executeScript({
      target: { tabId },
      func: replaceState,
      args: [url],
    })
    .then(() => chrome.tabs.reload(tabId, { bypassCache: true }));
});
