// numeral.js language configuration
// language : Russian for the Ukraine (ru-UA)
// author : Anatoli Papirovski : https://github.com/apapirovski
(function () {
    var language = {
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'тыс.',
            million: 'млн',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function () {
            // not ideal, but since in Russian it can taken on 
            // different forms (masculine, feminine, neuter)
            // this is all we can do
            return '.'; 
        },
        currency: {
            symbol: '\u20B4',
            position: 'postfix'
        },
        defaults: {
            currencyFormat: ',0000 a'
        },
        formats: {
            fourDigits: '0000 a',
            fullWithTwoDecimals: ',0.00 $',
            fullWithTwoDecimalsNoCurrency: ',0.00',
			fullWithNoDecimals: ',0 $'
        }
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    if (typeof window !== 'undefined' && this.numeral && this.numeral.language) {
        this.numeral.language('ru-UA', language);
    }
}());
