var http = require("http"); // http modülünü yüklüyoruz

// ya da arrow function ile de tanımlayabiliriz
var server = http.createServer((request, response) => {
    
        if (request.url == '/') {
            response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
            response.write(`
                <html>
                    <head>
                        <title>anasayfa</title>
                    </head>
                    <body>
                        <h1>Anasayfa</h1>
                    </body>
                </html>`);
            
                response.end();
        }
        else if (request.url == '/hakkimda') {
            response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
            response.write(`
                <html>
                    <head>
                        <title>hakkimda</title>
                    </head>
                    <body>
                        <h1>Hakkımda</h1>
                    </body>
                </html>`);
            
                response.end();
        }
        else {
            response.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
            response.write("<h1>404 - Sayfa Bulunamadı</h1>");
            response.end();    
}
});


server.listen(3000);
console.log("Sunucu çalışıyor: http://localhost:3000");