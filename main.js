/*
//----------------------------------------------------------------

                         6 giá trị falsy
false
0 (số không)
'' or "" (chuỗi rỗng)
null
undefined
NaN
*/

// && và ||
// && sẽ lấy 6 giá trị falsy
// || sẽ lấy giá trị khác 6 giá trị falsy

//---------------------------------------------------------------
/*--------------------------------------------------------------
            test thử hàm

let arr = [];
let n = prompt('nhap so luong phan tu: ');
for (let i = 0; i <= n; i++) {
    arr[i] = prompt('nhap gia tri: ');
}
for (let i = 0; i <= n; i++) {
    console.log(arr[i]);
}

console.log(arr.length);
let vd = arr[arr.length - 1];
console.log('gia tri cua vd la: ' + vd);
*/


//-------------------------------------------------------------
// Các thuộc tính của ARRAY
/*
var language = [
    'bao',
    'beo',
    'baor'
]
/*
// Các thuộc tính của ARRAY

// 1. toString(): chuyển array thành chuỗi

console.log(language.toString);

// 2. Join(): ngăn cách các phần tử

console.log(language.join('-'));

// 3. pop(): xóa phàn tử cuối mảng và trả vê phần tử đã xóa
//              nếu mảng rỗng thì nó trả về undefined

console.log(language.pop());

// 4. push(): thêm 1 hoặc nhiều phần tử vào cuối mảng và trả
//               về độ dài mới của mảng

console.log(language.push('Dart'));
console.log(language);

// 5. shift(): xóa phần tử đầu mảng và trả về phần tử đó
//               nếu mảng rống sẽ trả vê fundefined

console.log(language.shift())

// 6. unshift(): thêm môt hoặc  nhiều phần tử vào đầu mảng và trả về
//               độ dài mưới của mảng

// 7. splicing(): xóa, cắt, chèn phần tử mới vào mảng
// xóa:     splice(vị trí bắt đầu, số lượng phần tử muốn xóa)
language.splice(1,1)

//chèn:     splice(vị trí muốn chèn, số lượng phần tử muốn xóa(0), 
//                  phần tử muốn chèn)
//  nếu số lượng phần tử bị xóa khác 0 thì sẽ xóa trước chèn sau
language.splice(1,0,'Dart');

// 8.concat(): nối 2 mảng
var language2 =[
    'Dart',
    'Java'
]
console.log(language.concat(language2));

// 9. slicing(): cắt phần tử của mảng
//          slice(phần tử bắt đầu cắt, phần tử cuối cùng cắt)
//               cắt đến phần tử trước phần tử cuối cùng

*/

//------------------------- OBJECT
// nếu một key trong object ko tồn tại thì nó sẽ trả về giá trị key đó là undifined
/*
var emailKey = 'email';
var myInfo = {
    name: 'Gia Bao',
    age: 18,
    address: 'Hue, VN',
    [emailKey]: 'giabaon171@gmail.com',
    getName: function() {
        return this.name;
    }
};
*/
//có 2 cách thêm một key vào object
//c1: myInfo.email = 'dsasd';
//c2: myInfo['name'] = 'asdas'

//myInfo.email = 'giabaon171@gmail.com';
//có 2 cách lấy giá trị key của object
//c1: myInfo.name;
//c2: myInfo['name'];

//xóa 1 key
//delete myInfo.name;
//console.log(myInfo.getName());


//object Constructoer
//Hàm tạo 1 object
function User (firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName  = function(){
        return `${this.lastName} ${this.firstName}`
    }
}
/*
var author= new User ('Bao','Nguyen','Avatar');

//trả về mô tả bản thiết kế object
console.log(author.constructor);

//thêm thuộc tính riêng lẻ cho object
author.tittle = 'chia se cua bao';
console.log(author);
*/
//-------------object prototype
//lưu ý: prototype thêm thuộc tính vào hàm tạo construction chứ ko thêm 
//vào đối tượng khi đã tạo
User.prototype.className= 'F8';
User.prototype.getclassName = function() {
    return this.className;
}

var author= new User('Bao','Nguyen','Avatar');
console.log(author.className);
console.log(author);
//sau khi tạo thuộc tính của hàm tạo thì thuộc tính đó của đối tượng sẽ
//được lưu vào vào _proto_ của console

//---------date
var date = new Date();
//trả về một đối tượng object, từ đây có thể truy suất các phương thức của date
var month= date.getMonth() + 1;
//lưu ý hàm getMonth() chỉ có thể in  ra tháng từ 0 - 11
var date = Date();
//trả về một chuỗi string ngày tháng năm múi giờ, ko thể truy suất các phương thức

var myKey= ['gg', 'hh', 'kk'];
for (let key in myKey) {
    console.log(key);
}
console.log(myKey.address)