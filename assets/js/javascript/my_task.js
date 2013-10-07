postMessage("Setting up web worker ... done");
postMessage("tell the web worker your name, ie: myWorker.postMessage('steve');");

onmessage = function (oEvent) {
  postMessage("Hi " + oEvent.data);
};