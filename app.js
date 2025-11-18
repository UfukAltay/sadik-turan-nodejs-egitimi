console.log("Hello, World! node.js");


// Bu derste basit bir HTTP sunucusu oluşturduk ve modülün ne olduğunu, http modülünün nasıl yüklendiğini ve kullanıldığını öğrendik.
var http = require("http"); // http modülünü yüklüyoruz

function requestListener(request, response) {
    response.end();
}

var server = http.createServer(requestListener);

server.listen(8080); // sunucuyu 8080 portunda dinlemeye başlatıyoruz
  
console.log("Sunucu çalışıyor: http://localhost:8080");
