const http = require("http"); // http modülünü yüklüyoruz
const routes = require("./routes"); // routes modülünü yüklüyoruz

// ya da arrow function ile de tanımlayabiliriz
var server = http.createServer(routes);
server.listen(3000);

console.log("Sunucu çalışıyor: http://localhost:3000");