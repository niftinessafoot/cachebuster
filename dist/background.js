chrome.browserAction.onClicked.addListener((tab)=>{
  const newPath = getNewPath(tab.url);
  const c = chrome.tabs;

  if(newPath){
    const code = `history.replaceState(null,null,"${newPath}")`;
    c.executeScript(tab.id, {code:code}, ()=>c.reload(tab.id,{bypassCache: true}));
  }
  else {
    c.reload(tab.id, {bypassCache: true});
  }
});