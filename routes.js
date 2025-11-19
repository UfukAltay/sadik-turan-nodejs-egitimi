var fs = require("fs"); // dosya sistemi modülünü yüklüyoruz

const routeHandler = (request, response) => {

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

        const data = [];

        request.on("data", (chunk) => {
            data.push(chunk);
            console.log("Gelen veri parçası: " + chunk);            
        })

        request.on("end", () => {
            const result = Buffer.concat(data).toString();
            const parsedData = result.split("=")[1].replace(/\+/g, ' ');
            console.log("Tam veri: " + parsedData);                 

            fs.appendFile("created_blogs.txt", result, (err) => {
                if (err) {
                    console.log("Dosyaya yazma hatası: " + err);                
                }
                else {
                    response.statusCode = 302;
                    response.setHeader('Location', '/blogs');
                    response.end();                
                }     
            })       
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
};

module.exports = routeHandler; //