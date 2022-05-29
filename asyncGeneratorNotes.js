function doWhenDataReceived(value) {
  returnNextElement.next(value);
}
function* createFlow() {
  const Data = yield fetch('../');
  //3. declaring data which is undefined because yield is super powerful statement
  // it's gonna kicks out createFlow execution context before we have to get store anything in data

  console.log(Data);
}
const returnNextElement = createFlow();
// 1. output is a Generator object with a next method on it {next:iterator}

const futurData = returnNextElement.next();
// 2. output of returnNextElement.next() which  enters createFlow execution context
// 4. fetch is a Façade function for a single major feature in the browser called xhr(XmlHttpRequest)
// fetch return  promiseObject thrown outside the  exec context  of createFlow
// which will be  stored in futurData
// this promiseObject is composed of {value:...,status:...,onFullfillement :...}
//onFullfillement is an empty array into which we gonna put any function which we want to  auto trigger when  value get updated
// 5. when data come's back from xhr(Web Browser Feature) value key will in he promiseObject will be updated

futurData.then(doWhenDataReceived);
// 6. .then passes the doWhenDataReceived into the onFullfilment array

/**
 * * Web Browser Features (fetch)
 * * Crazy New Generator Function => include persistance of state (closur) + iterators etc...
 * * Micro Task Queue
 * * Event Loop
 */
