postMessage("Setting up web worker ... done");

onmessage = function (oEvent) {
  postMessage("Hi " + oEvent.data);
};