
const quotes = [
    { text: "Be yourself; everyone else is already taken.",                                                                 author: "Oscar Wilde (1)" },
    { text: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.", 
                                                                                                                            author: "Albert Einstein (2)" },
    { text: "So many books, so little time.",                                                                               author: "Frank Zappa (3)" },
    { text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",              author: "Albert Einstein (4)" },
    { text: "A room without books is like a body without a soul.",                                                          author: "Marcus Tullius Cicero (5)" },
    { text: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",  author: "Bernard M. Baruch (6)" },
    { text: "You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.” ",                                                    
                                                                                                                            author: "Oscar Wilde (7)" },
    { text: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",       author: "Dr. Seuss (8)" },
    { text: "You only live once, but if you do it right, once is enough.",                                                  author: "Mae West (9)" },
    { text: "Be the change that you wish to see in the world.",                                                             author: "Mahatma Gandhi (10)" },
    { text: "In three words I can sum up everything I've learned about life: it goes on.",                                  author: "Robert Frost (11)" },
    { text: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",      author: "J.K. Rowling, Harry Potter and the Goblet of Fire (12)" },
    { text: "If you tell the truth, you don't have to remember anything.",                                                  author: "Mark Twain (13)" },
    { text: "To live is the rarest thing in the world. Most people exist, that is all.",                                    author: "Oscar Wilde (14)" },
];

//Fisher-Yates Algorithm : https://www.youtube.com/watch?v=tLxBwSL3lPQ
function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// shallow copy to not affecting the original
var shuffledQuotes = [...quotes];
shuffle(shuffledQuotes);
var currentIndex = 0;

function showNewQuote() {
    if (currentIndex >= shuffledQuotes.length) {
        alert("All quotes have been shown!");
        return;
    }

    const current = shuffledQuotes[currentIndex];
    document.getElementById("quote_p").textContent = `"${current.text}"`;
    document.getElementById("quote_author").textContent = `— ${current.author}`;
    currentIndex++;
}
