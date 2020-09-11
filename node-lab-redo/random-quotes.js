function getQuote() {
    const quotes = [
        'You have heavy favor!',
        'You are covered with the blood of Jesus',
        "Eagles don't fool with no chickens"
    ];
    const randomlySelectedQuote = Math.floor(Math.random() * quotes.length);
    return quotes[randomlySelectedQuote];
}

module.exports = {
    getQuote
};