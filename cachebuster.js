function hard_refresh(tab){
const file = document.location.pathname;
const qs = document.location.search.substr(1);
const arr = qs.split('&');
const obj = {};

arr.forEach((ele)=>{
  const a = ele.split('=');
  obj[a[0]] = a[1];
});

obj.cacheBuster = +(new Date());

const keys = Object.keys(obj);

let newqs = keys.map((a)=>{
  return `${a}=${obj[a]}`;
});

newqs = newqs.join('&');
console.log('14:54','Did this work?', tab, newqs);
chrome.tabs.update(tab.id, {url:'http://marvel.com/'});

//  history.replaceState(null, null, file+'?'+newqs);
}

// chrome.browserAction.getTitle(1, function(){console.log('getTItle',arguments);})

chrome.browserAction.onClicked.addListener(hard_refresh);


chrome.runtime.onStartup.addListener(function(){
  console.log('Hello', arguments);
});