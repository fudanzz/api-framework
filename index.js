
var logger = require("./server/util/logger");

var config = require("./server/config/config");

var app =  require("./server/server");

app.listen(config.port);

logger.log("listening on http://localhost:"+config.port);