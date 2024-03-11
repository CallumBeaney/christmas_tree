const seed = randNum(15, 21);
const present = '\u7530'; // chinese char for 'field'


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function bud(len, chr) {
  return chr.repeat(len);
}

function randNum(from, to) {
  return Math.floor(Math.random() * (to - from + 1)) + from;
}


// Recieve a string. Get number N of snowflakes to show in this string. Create an array of random numbers N long, each random number no longer than the length of the input string. Now you have N random indexes at which to insert a snowflake. 
function snow(branch) {
  var numFlakes = parseInt(randNum(3,5)); // between 3 and 6

  var indices = [];
  for (let i = 0; i < numFlakes; i++) {
    const randomIndex = Math.floor(Math.random() * branch.length);
    indices.push(randomIndex);
  }
  indices.sort((a, b) => a - b);

  for (let i = 0; i < indices.length; i++) {
    const ind = indices[i];
    if (branch[ind] == present || branch[ind] == '_') continue;
    else branch = branch.slice(0, ind) + '*' + branch.slice(ind + 1);
  }
  return branch;
}


function colourTree(tree){
  const leaves = tree.replace(/\#/g, '<span style="color: rgb(35, 105, 49)">#</span>');
  const trunk = leaves.replace(/\|/g, '<span style="color:rgb(119, 69, 19)"><b>|</b></span>');
  const prezzie = trunk.replace(present, '<span style="color:rgb(196, 21, 21)">' + '<a href="https://github.com/CallumBeaney" style="text-decoration: none;">' + present + '</a>' + '</span>');
  return prezzie;
}


!async function main(rows) {
  
  while(true) {
    var tree = '';

    for (let row = 0; row < rows; row++) {
      var twig = '';
      if (row >= rows-2) {
        var char = row == (rows - 2) ? ' ' : '_';
        twig = bud(rows, char);
        twig += '|';
      } else {
        twig = bud(rows-row, ' ') + bud(row, '#');
        var end = (row != 0) ? '|' : '#';
        twig += end;
      }
  
      var bough = '';
  
      if (row == rows-1) {
        let reversedTwig = twig.split('').reverse().join('');
        let result = reversedTwig.slice(0, 3) + present + reversedTwig.slice(5); // Slice and concatenate
        bough += twig + result;
      } else {
        bough = twig + twig.split('').reverse().join('');
      }
  
      tree += snow(bough) + '\n';
    }
  
    var treePre = document.getElementById("tree");
    treePre.innerHTML = colourTree(tree);
  
    await sleep(1000); 
  }
}(seed);

console.log("Hello!")
console.log("Visit me over at https://github.com/CallumBeaney")
console.log("...or click the present")
console.log("")
console.log("This tree is randomly sized btw, CTRL+R?")