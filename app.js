let quotes = document.querySelectorAll('input[name="quote"]');
let button = document.querySelector('button');
let span   = document.querySelector('.result-question-message #span')
let p   = document.querySelector('.result-question-message #type')

const quotes_text = [
    {  
        type: "quote",
        quote: "I'm happy to",
        author: "John Doe",
    },
    {
        type: "quote",
        quote: "I'm happy to 1",
        author: "John Lee",
    },
    {
        type: "proverbe",
        quote: "I'm happy to 110",
        author: "John Vivi",
    },
    {
        type: "quote",
        quote: "I'm happy to 100",
        author: "John Deep",
    },
    {
        type: "proverbe",
        quote: "I'm happy to 1100",
        author: "John Sam",
    },
];

button.addEventListener('click', function () {
    let random_quote = Math.floor( Math.random() * quotes_text.length );
    let isChecked;
    for ( const check of quotes ) {
        if ( check.checked ){
            isChecked = check.value;
            break;
        }
    }

    if (isChecked === quotes_text[random_quote].type) {
        p.innerHTML = quotes_text[random_quote].type;
        span.innerHTML = quotes_text[random_quote].quote;
        console.log(quotes_text[random_quote].quote);
    }
    
} )

