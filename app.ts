// const emp:any={
//     name:'Halah',
//     age:30

// }
// console.log(emp);
// emp.name="Ahmad";
// console.log(emp);
// emp.address='Irbid';


// var rect = { x: 0, y: 10, width: 15, height: 20 };

// // Destructuring assignment
// var {x, y, width, height} = rect;
// console.log(x, y, width, height); // 0,10,15,20

// rect.x = 10;
// ({x, y, width, height} = rect); // assign to existing variables using outer parentheses
// console.log(x, y, width, height); // 10,10,15,20
const sport: string[] = ['Basket ball', 
'Tennis', 'Football', 'soccer']
const [top1, top2, 
...otherSports] = sport;
console.log(top1, top2);
console.log(otherSports);
console.log("hala");
console.log("hadeel");
console.log("hello people!!"");
