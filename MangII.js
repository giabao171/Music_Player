// var friends = [
//     {
//         id: 1,
//         name: 'quoc',
//         hp: 1
//     },
//     {
//         id: 2,
//         name: 'dun',
//         hp: 2
//     },
//     {
//         id: 3,
//         name: 'dun',
//         hp: 3
//     },
//     {
//         id: 4,
//         name: 'lua',
//         hp: 4
//     },
//     {
//         id: 5,
//         name: 'quynh',
//         hp: 5
//     }
// ]
// //Array methods://////////////////////////////////////////////////////
// //forEach(): duyệt qua từng phần tử của mảng
// friends.forEach(function (course, index) {
//     if (course.id === 5) console.log(course);
// });
// //every(): kiểm tra các phần tử của mảng phải thỏa mãn một điều kiện gì đó
// //trả về bolean(thường dùng làm thế chứ ko phải là cách sử dụng)
// var reHp = friends.every(function (course, index) {
//     return course.hp === 1;
// });
// console.log(reHp);
// //some(): kiểm tra các phần tử của mảng phải thỏa mãn một điều kiện gì đó
// //chỉ cần một phần tử thỏa điều kiện thì thỏa trả về bolean
// //(thường dùng làm thế chứ ko phải là cách sử dụng) ngược lại với every
// var reHp1 = friends.some(function (course, index) {
//     return course.hp === 1;
// });
// console.log(reHp1);
// //find(): tìm kiếm (chỉ tìm được 1 phần tử)
// var ten = friends.find (function (course) {
//     return course.name === 'dun';
// })
// console.log(ten);
// //filter(): //find(): tìm kiếm (trả về tất cả  phần tử)
// var ten1 = friends.filter (function (course) {
//     return course.name === 'dun';
// })
// console.log(ten1);
// //map(): thay đổi hoặc chỉnh sửa các element của aray
//include(): chỉ dùng cho array và string để kiểm tra trong chuỗi hoặc mảng
//có phần tử tìm kiếm hay ko trả về boolean
// var array = [
//     {
//         topic: 'Front-end',
//         course: [
//             {
//                 id: 1,
//                 title: 'HTML, CSS'
//             },
//             {
//                 id: 2,
//                 title: 'Javascript'
//             }
//         ]
//     },
//     {
//         topic: 'Back-end',
//         course: [
//             {
//                 id: 1,
//                 title: 'PHP'
//             },
//             {
//                 id: 2,
//                 title: 'NodeJS'
//             }
//         ]
//     }
// ];
// var kq = array.reduce(function (heli, caim) {
//     return heli.concat(caim.course);
// }, []);
// console.log(kq);

// var result = kq.reduce(function (heli, caim) {
//     return heli.concat(caim.id).concat(caim.title);
// }, []);
// console.log(result);
//////////////////////////////////////////////////////////////////////////
/*
    Call-Back: là hàm, được truyền qua đối số
*/
//Thử viết hàm call back trả về tổng mảng các số dương
 let beos= [4,5,6,7,8,9];
 Array.prototype.functionBeor = function(callback) {
     //let length= this.length;
     let kq = 0;
     for (let i in this) {
        if (this.hasOwnProperty(i)) {
            // let cong= callback(this[i]);
            // kq= kq+cong;
            kq= kq+callback(this[i]);
        }
     }
     return kq;
 }

 var kk= beos.functionBeor(function (beo) {
     if (beo%2== 0) return beo;
     else return 0;
 })
 console.log(kk);
/////////////////////////////////////////////////////////////////////
//viết hàm forEach2();
//  let course = [
//      'Javascript',
//      'PHP',
//      'Ruby'
//  ];

//  Array.prototype.forEach2 = function(callback) {
//     for (let index in this) {
//         if (this.hasOwnProperty(index))
//            callback(this[index], index, this);
//     }
// }
 

//  course.forEach2(function(course, index, aray) {
//      if (course.length > 3) console.log(course);
//  });

 
///////////////////////////////////////////////////////////////////
//viết filter2();
// var course = [
//     {
//         name: 'Javascript',
//         coin: 680
//     },
//     {
//         name: 'PHP',
//         coin: 880
//     },
//     {
//         name: 'Ruby',
//         coin: 980
//     }
// ];

// Array.prototype.filter2 = function(callback) {
//     let array1 = [];
//     for (let index in this) {
//         if (this.hasOwnProperty(index)) {
//            var kq = callback(this[index], index, this);
//            if (kq) array1.push(this[index]);
//         }
//     }
//     return array1;
// }

// var myfilter = course.filter2(function (course, index, aray){
//     return course.coin > 700;
// });
// console.log(myfilter);
///////////////////////////////////////////////////////////////////////
//viết some2();

// var course = [
//     {
//         name: 'Javascript',
//         coin: 680,
//         isFinish: true
//     },
//     {
//         name: 'PHP',
//         coin: 880,
//         isFinish: false
//     },
//     {
//         name: 'Ruby',
//         coin: 980,
//         isFinish: false
//     }
// ];

// Array.prototype.some2 = function (callback) {
//     for (let index in this) {
//        if (this.hasOwnProperty(index)) {
//            let kq = callback(this[index], index, this)
//            if (kq) return true;
//        }
//        else return false;
//     }
// }

// let mySome = course.some2(function (course, index, array) {
//     return course.isFinish;
// })
// console.log(mySome);
/////////////////////////////////////////////////////////////////////
// viết every2();

// var course = [
//     {
//         name: 'Javascript',
//         coin: 680,
//         isFinish: true
//     },
//     {
//         name: 'PHP',
//         coin: 880,
//         isFinish: false
//     },
//     {
//         name: 'Ruby',
//         coin: 980,
//         isFinish: false
//     }
// ];

// Array.prototype.every2 = function(callback) {
//     for (let index in this) {
//         if (this.hasOwnProperty(index)) {
//            let result = callback (this[index], index, this);
//            if (!result) {
//                return result;
//                break;
//            }
//            else return true;
//         }
//     }
// }

// let kq = course.every2(function (course, index, array) {
//     return course.coin > 700;
// })
// console.log(kq);

