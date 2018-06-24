var liveServer = require("live-server");

var params = {
    port: 8080,
    root: "../website",
    open: true,
    loglevel: 2
};
liveServer.start(params);