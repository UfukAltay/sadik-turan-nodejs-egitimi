console.log("Hello, World! node.js");


// Bu derste basit bir HTTP sunucusu oluşturduk ve modülün ne olduğunu, http modülünün nasıl yüklendiğini ve kullanıldığını öğrendik.
var http = require("http"); // http modülünü yüklüyoruz

function requestListener(request, response) {
    response.end();
}

// server oluştururken burada tanımladığımız requestListener fonksiyonunu kullanıyoruz
var server = http.createServer(requestListener);

server.listen(8080); // sunucuyu 8080 portunda dinlemeye başlatıyoruz
console.log("Sunucu çalışıyor: http://localhost:8080");

// ama istersek doğrudan fonksiyonu da burada tanımlayabiliriz
var server = http.createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Merhaba Dünya!"); // istemciye "Merhaba Dünya!" mesajını gönderiyoruz
}
);

// ya da arrow function ile de tanımlayabiliriz
var server = http.createServer((request, response) => {
    console.log(request.url, request.method); // örneğin gelen isteğin url ve method bilgilerini konsola yazdırabiliriz
    console.log(response.statusCode); // örneğin response nesnesinin statusCode özelliğini konsola yazdırabiliriz
    //response.setHeader("Content-Type", "text/plain"); // response nesnesinin setHeader metodunu kullanarak Content-Type başlığını ayarlıyoruz
    response.setHeader("Content-Type", "text/html"); // response nesnesinin setHeader metodunu kullanarak bu satırdaki gibi html içeriği de gönderebiliriz
    //response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" }); // istersek writeHead metodunu da kullanabiliriz
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" }); // istersek writeHead metodunu da kullanabiliriz

    //response.write("Merhaba Dünya! Anasayfadasınız"); // istemciye "Merhaba Dünya!" mesajını gönderiyoruz
    response.write("<h1>Merhaba Dünya!</h1>"); // response nesnesinin write metodunu kullanarak istemciye mesaj gönderebiliriz
    response.write("<p>Anasayfadasınız</p>"); // istemciye birden fazla mesaj da gönderebiliriz

    response.statusCode = 200; // ya da statusCode özelliğini doğrudan atayabiliriz
    response.statusMessage = "OK"; // statusMessage özelliğini de atayabiliriz



    response.end(); // istemciye istersek bir mesaj gönderebiliyoruz ve yanıtı sonlandırıyoruz. Eğer sonlandırmazsak istemci beklemeye devam eder.
}
);

server.listen(8081); // sunucuyu 8081 portunda dinlemeye başlatıyoruz
console.log("Sunucu çalışıyor: http://localhost:8081");
