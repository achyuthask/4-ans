
function Comb(str){

    let combinations = [];
      for(let i = 0 ;i < str.length; i++)
    {
        for(let j = i + 1; j< str.length + 1; j++)
        {
            combinations.push(str.slice(i , j));
        }
    }
   return combinations;
}

const string = prompt('enter a string');
const result =Comb(string);
console.log(result);
