const quotes =[
    {
        quote:"Write injuries in dust, benefits in marble.",
        author:"Benjamin Franklin"
    },
    {
        quote:"Develop interest in life as you see it; in people, things, literature, music - the world is so rich, simply throbbing with rich treasures, beautiful souls and interesting people. Forget yourself.",
        author:"Henry Miller"
    },
    {
        quote:"If the people cannot trust their government to do the job for which it exists - to protect them and to promote their common welfare - all else is lost.",
        author:"Barack Obama"
    },
    {
        quote:"To be proud of virtue is to poison oneself with the antidote.",
        author:"Benjamin Franklin"
    },
    {
        quote:"The central struggle of parenthood is to let our hopes for our children outweigh our fears.",
        author:"Ellen Goodman"
    },
    {
        quote:"It has yet to be proven that intelligence has any survival value.",
        author:"Arthur C. Clarke"
    },
    {
        quote:"Wanting to be someone else is a waste of the person you are.",
        author:"Kurt Cobain"
    },
    {
        quote:"I was always looking outside myself for strength and confidence, but it comes from within. It is there all the time.",
        author:"Anna Freud"
    },
    {
        quote:"The greatest friend of Truth is time, her greatest enemy is Prejudice, and her constant companion Humility.",
        author:"Charles Caleb Colton"
    },
    {
        quote:"We shall find peace. We shall hear the angels, we shall see the sky sparkling with diamonds.",
        author:"Anton Chekhov"
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
