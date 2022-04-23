const http = require('http');
const port = 8080;

http
	.createServer((req, res) => {
		res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
		res.write('<h1>안녕하세요</h1>');
		res.end('<p>ㅎㅇ용</p>');
	})
	.listen(port, () => {
		console.log(`
        ################################################
        🛡️  Server listening on port: ${port} 🛡️
        ################################################
      `);
	});
