const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let symbols = [];

    for (let i = 0; i < expr.length; i += 10) {
        symbols.push(expr.slice(i, i + 10));
    }

    let decodedSymb = symbols.map(function (symbol) {
        return decodedSymbol(symbol);
    });

    return decodedSymb.join("");

    function decodedSymbol(symbol) {
        if (symbol === '**********') {
            
            return ' ';
        }

        
        symbol = symbol.replace(/^0+/, '');

        let decodedSymbol = '';
        
        for (let i = 0; i < symbol.length; i += 2) {
            const part = symbol.slice(i, i + 2);
            if (part === '10') {
                decodedSymbol += '.';
            } else if (part === '11') {
                decodedSymbol += '-';
            }
        }

     
        return MORSE_TABLE[decodedSymbol];
    }
}




module.exports = {
    decode
}