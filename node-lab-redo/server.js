const http = require('http');
const port = 3000;
const randomQuotes = require('./random-quotes');

http.createServer((req, res) => {
    const quote = randomQuotes.getQuote();
    res.write(quote);
    res.end();
}).listen(port, () => console.log(`server is listening on port: ${port}`));