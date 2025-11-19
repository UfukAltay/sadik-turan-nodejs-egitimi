var http = require("http"); // http modülünü yüklüyoruz
var fs = require("fs"); // dosya sistemi modülünü yüklüyoruz

// ya da arrow function ile de tanımlayabiliriz
var server = http.createServer((request, response) => {
    
    if (request.url == '/') {
        fs.readFile("index.html", (err, data) => {
        response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        response.write(data);            
        response.end();
        });
    }
    else if (request.url == '/blogs') {
        fs.readFile("blogs.html", (err, data) => {
        response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        response.write(data);            
        response.end();
        });
    }
    else if (request.url == '/create' && request.method == 'POST') {
        fs.appendFile("created_blogs.txt", "Yeni blog oluşturuldu.\n", (err) => {
            if (err) {
                throw err;                
            }
            else {
                response.statusCode = 302;
                response.setHeader('Location', '/blogs');
                response.end();                
            }            
        });        
    }
    else if (request.url == '/create') {
        fs.readFile("create.html", (err, data) => {
        response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        response.write(data);            
        response.end();
        });
    }    
    else {
        fs.readFile("404.html", (err, data) => {
        response.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
        response.write(data);            
        response.end();
        });
    }
});


server.listen(3000);
console.log("Sunucu çalışıyor: http://localhost:3000");