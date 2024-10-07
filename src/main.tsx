// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
// import './index.css'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


// --------work with objects-----------
// interface Global {
//   name: string,
//   age: number
// }
// interface Admin extends Global{
//   salary: string
// }
// interface User extends Global {
//   mark: number
// }
// const admin:Admin = {name: 'Admin', age: 20, salary: '1200'}
// const user:User = {name: 'User', age: 14, mark: 4}
// console.log(admin, user)

// ------------- work with arrays -------------

// interface Users {
//   id: number,
//   name: string,
//   age: number,
//   phone: string
// }
// const users:Users[] = [
//   {id: 1, name: 'User', age: 34, phone: '3444'}
// ] 
// const user2: Array<Users> = [
//   {id: 1, name: 'user', age: 44, phone: '3245'}
// ]
// console.log(users)
// console.log(user2)

// interface Admins {
//   id: number,
//   name: string,
//   age: number,
//   phone: string
// }
// const admins:Admins[] = [
//   {
//     id: 1,
//     name: 'Admin',
//     age: 11,
//     phone: '111'
//   }
// ]
// const admin2: Array<Admins> = [
//     {id: 2, name: 'aa', age: 44, phone: '3245'}
//   ]
//   console.log(admins)
//   console.log(admin2)


// const pupils = [
//   { name: "Elbek", protcent: 95, },
//   { name: "Zafar", protcent: 78, },
//   { name: "Aziz", protcent: 83, },
//   { name: "Jasur", protcent: 88, },
//   { name: "Bobur", protcent: 66, },
//   { name: "Kamron", protcent: 75, },
// ];
// const success = pupils.filter(pupil => pupil.protcent > 80)
// console.log(success)

// const question:object = {a:2, b:5, c:7} 
// const res = Object.entries(question).map(item => item.join(""))
// console.log(res)
// output ['a2', 'b5', 'c7'] 

// const animals:string[] = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit']
// function fn(){
//   let obj:{[key:string]: number} = {}
//   for(let i of animals){
//     if(obj[i]){
//       obj[i]++;
//     } else {
//       obj[i] = 1
//     }
//   }
//   console.log(obj)
// }
// fn()

// UYGA VAZIFA TYPESCRIPT 1

// 35 TASK

// const obj = { a: 2, b: 3, c: 4 };
// const n = 3;
// const res : { [key: string]:number } = {};
// Object.keys(obj).forEach(key => {
//     res[key] = obj[key] * n
// })
// console.log(res); 

// 37 TASK 

// const arrowFunction = (...numbers: number[]):number[] => {
//     const sum = numbers.reduce((acc, cur)=> acc + cur, 0)
//     return sum.toString().split('').map(Number)
// }
// console.log(arrowFunction(1,22,1))

// 38 TASK

// function checkA (word: string):number {
//     let count = 0
//     for(let total of word){
//         if(total === 'a' || total ==='A'){
//             count++
//         }
//     }
//     return count
// }    
// console.log(checkA('Abdulloh'))

// 41 TASK

// const books = [
//     {
//         title: "Halqa",
//     author: "Akrom Malik",
//     read: false
//     },
// {
//     title: "Dunyoning ishlari",
//     author: "O’tkir Hoshimov",
//     read: true
// },
// {
//     title: "Iymon",
//     author: "Shayx Muhammad Sodiq Muhammad Yusuf",
//     read: true
// },
//     ]
// books.forEach(book => {
//     if('read' in book){
//         if(book.read){
//             console.log(`${book.author}ning ${book.title} o'qilgan`)
//         } else {
//             console.log(`${book.author}ning ${book.title} o'qilmagan`)
//         }
//     }
// })

// 42 TASK

// const createObjectFromArray = (arr: string[]): { [key: string]: number } => {
//     const result: { [key: string]: number } = {}; 
//     arr.forEach(item => {
//         result[item] = item.length; 
//     });
//     return result; 
// };
// const inputArray = ["text", "world", "laptop"];
// const outputObject = createObjectFromArray(inputArray);
// console.log(outputObject); 

// 43 TASK

// const obj:any = {a: 2, b: 3, c: 4}
// let n = 3
// for(let key in obj){
//     if (obj.hasOwnProperty(key)) { 
//         obj[key] *= n;
//     }
// }
// console.log(obj)

// 44 TASK 

// Bu task oddiyroq usulda qilingan

// const getLevel = (n:number) => {
//     const res = n ** 2
//     return res
// }
// console.log(getLevel(4))

// 45 TASK

// const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
// const countWords = (arr:string[]): {[key: string]: number} => {
//     const res: {[key: string]: number} = {}
//     for(const animal of arr) {
//         if(res[animal]){
//             res[animal]++
//         }  else {
//             res[animal] = 1; 
//         }
//     }
//     return res
// }
// const output = countWords(animals);
// console.log(output);

// 46 TASK 

// const arr = [1, 2, 3, 4, 5]
// const res:number[] = []
// arr.forEach(item => res.push(item ** 2)) 
// console.log(res)

// 47 TASK

// const arr:number[] =  [ 1, -4, 12, 0, -3, 29, -150]
// const res:number[] = []
// arr.filter(item => {
//     if(item >=0 ){
//         res.push(item)
//     }
// })
// const total = res.reduce((acc, cur) => acc + cur, 0)
// console.log(total)

// 48 TASK 

// let str:string =  'George Raymond Richard Martin'
// const res = str.split(' ').map(word => word.charAt(0)).join('')
// console.log(res)

// 49 TASK 

// const arr = [
//     { name: 'John', age: 13 },
//     { name: 'Mark', age: 56 },
//     { name: 'Rachel', age: 45 },
//     { name: 'Nate', age: 67 },
//     { name: 'Jeniffer', age: 65 }
// ];
// const sortedPersons = arr.sort((a,b)=> a.age - b.age)
// const youngest = sortedPersons[0].age
// const oldest = sortedPersons[arr.length - 1].age
// const ageDifference = oldest - youngest;
// console.log(ageDifference)

// 50 TASK

// function uniqueArr (nums:any) {
//     const uniqueNumbers = nums.filter(num => nums.indexOf(num) === nums.lastIndexOf(num));
//     console.log(uniqueNumbers)
// }
// console.log(uniqueArr([4,1,2,1,2,9]))