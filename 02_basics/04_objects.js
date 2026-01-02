// const tinderUser=new Object();  singleton type

const tinderUser ={}  //non-singleton type
tinderUser.id="1234"
tinderUser.name="anil"
tinderUser.isLoggedIn=false

// console.log(tinderUser);
const regularUser={
    email:"new@gmail.com",
    fullName :{
        userName: {
            firstname:"anil kumar",
            lastname:"mullangi"
        }
    }
}
// console.log(regularUser.fullName.userName.firstname);
 

// console.log(tinderUser)
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"))


//*******lecutre-18 */
const course={
    coursename:"JS in hindi",
    price:999,
    teacher:"hitesh"
}
// course.coursename
const {teacher:teach}=course //destructure
//console.log(teacher)

console.log(teach);

// {
//     "name":"anil kumar",
//     "coursename":"js in hindi",           // json structure
//     "price":"free"
// }






