function getNewPath(urlString){
  let url;
  try{
    url = new URL(urlString);
  }
  catch(e){
    return false;
  }

  const obj = {};

  /*
    Parse the existing querystring, if it exists.
   */
  const qs = url.search.substr(1);
  if(qs){
    qs.split('&').forEach((ele)=>{
      const a = ele.split('=');
      obj[a[0]] = a[1];
    });
  }

  obj.cachebuster = +(new Date());

  const keys = Object.keys(obj);

  let newqs = keys.map((key)=>{
    const value = obj[key];
    /* Querystring params don't necessarily need values. */
    return value ? `${key}=${value}` : key;
  }).join('&');

  return url.pathname + '?' + newqs + url.hash;
}