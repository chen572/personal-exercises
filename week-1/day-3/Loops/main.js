// const names = ['Chen', 'Tal', 'Idan', 'Moshe'];
// const ages = [23, 35, 30, 29];

// for (let i = 0; i < names.length; i++) {
//     console.log(`${names[i]} is ${ages[i]}`);
// }

// const numbers = [1, 5, 6, 3, 7, 35, 45]
// let sum = 0;

// for (let i in numbers) {
//     sum += numbers[i];
// }
// console.log(sum)


// const avg = Math.floor(sum / numbers.length);

// console.log(avg)

// const nums = [];

// for (let i = 0; i < 100; i++)   {
//     nums.push(i + 1)
// }

// for (let num of nums) {
//     num % 2 === 1 && console.log(num) 
// }

// let nums = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]
// let index;
// for (let i in nums) {
//     if(nums[i] == 709) {
//         index = i;
//     }
// }
// console.log(index)

// const names = ["Ashley", "Donovan", "Lucas"]
// const ages = [23, 47, 18]
// const people = []

// for (let i in names)    {
//     people.push({name: names[i], age: ages[i]});
// }

// for (let i in people)   {
//     console.log(`${people[i].name} is ${people[i].age} years old`)
// }

// const posts = [
//     {id: 1, text: "Love this product"},
//     {id: 2, text: "This is the worst. DON'T BUY!"},
//     {id: 3, text: "So glad I found this. Bought four already!"}
// ]


// for (let i in posts)    {
//     if (posts[i].id == 2)   {
//         posts.splice(i, 1);
//     }
// }

// console.log(posts)

// const posts = [
//     {
//       id: 1, 
//       text: "Love this product",
//       comments: []
//     },
//     { 
//       id: 2, 
//       text: "This is the worst. DON'T BUY!", 
//       comments: [
//                   {id: 1, text: "Idiot has no idea"}, 
//                   {id: 2, text:"Fool!"}, 
//                   {id: 3, text: "I agree!"}
//                 ]
//      },
//      {
//       id: 3, 
//       text: "So glad I found this. Bought four already!",
//       comments: []
//      }
// ]

// for (let i in posts)    {
//     if (posts[i].id == 2) {
//         for (let a in posts[i].comments) {
//             if (posts[i].comments[a].id == 3) {
//                 posts[i].comments.splice(a, 1);
//             }
//         }
//     }
// }

// console.log(posts[1].comments)

// const dictionary = {
//     "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
//     "B": ["Banana", "Bonkers", "Brain", "Bump"],
//     "C": ["Callous", "Chain", "Coil", "Czech"]
// }

// for (let i in dictionary)  {
//     console.log(`Words that begin with ${i}:`)
//     for (let a in dictionary[i]) {
//         console.log(dictionary[i][a]);
//     }
// }
