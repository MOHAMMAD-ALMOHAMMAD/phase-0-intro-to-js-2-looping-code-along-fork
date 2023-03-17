// Code your solutions in this file

//first assignment with for loop

function writeCards(names,event)
{
    const messages=[];
    for (let i=0;i<names.length;i++)
    {
        messages[i]=`Thank you, ${names[i]}, for the wonderful surprise gift!`
    }
    return messages;
}

//second assignment with while loop
function countDown(number)
{
    while(number>=0)
    {
        console.log(number);
        number--;
    }
}