var name = "Nguyen Ngo Loc"
var address = "Nghe An"
var mess = "Xin chao \"Nguyen Ngo Loc\""
console.log(name);
console.log(address);
console.log(typeof name);
console.log(mess);
var fullName = "Nguyen" + " Ngo Loc"
console.log(fullName);
var firstName = "Nguyen"
var lastName = " Ngo Loc"

// Thuoc tinh (length)
console.log(fullName.length);

// Phuong thúc (Method)
//index0f : Tìm vị trí của chuỗi trong chuổi
console.log(fullName.indexOf("Phan"));

//lastIndex0f: tìm vị trí cuối cùng nó tìm thấy
console.log(fullName.lastIndexOf("N"));

//concat(): Cộng chuỗi
var fullName1 =  firstName.concat(lastName)
console.log(fullName1);

//Cắt chuỗi:
//1. slice(vị trí bắt đầu, vị trí kết thúc):
console.log(fullName.slice(0, 6));
var sliceStr = fullName.slice(1);
console.log(sliceStr);

var sliceStr1 = fullName.slice(-7, -3);
console.log(sliceStr1);

//2. Substring(vị trí bắt đầu, vị trí kết thúc)
// Tương tự slice, nhưng không dc truyền tham số âm
//3. substr(vị trí bắt đầu, độ dài chuỗi cần cắt)
var name = fullName.substr(0, 6)
console.log(name);


// Chữ hoa chữ thường

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

// Chuyển từ chuỗi sang mảng
//split()
var arrStr = fullName.split(" ");
console.log(arrStr);


///////////Number////////////
var num1 = 10;
var num2 = 5;
console.log(num1);

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);
console.log(Math.pow(num1, num2));

// Làm tròn số
//1. Math.ceil - làm tròn lên
//2. Math.floor - Làm tròn xuống
//3. Math.round - Làm tròn bình thường

//Math.random() - random số trong khoảng 0-1

console.log(Math.max(1,2,3,564));
console.log(Math.min(1,2,3,564));

/////////Boolean/////////////
// Có 2 giá trị true và false

var isStatus = true
console.log(isStatus, typeof isStatus);



////////Array//////////////
 var number= [1,2,3,4,5,6, "Nghệ An", true];
 console.log(number);
 console.log(number[6]);
 number[0] = "Hải Phòng"
 console.log(number);
 var array1 = [1,2,3,4,5]
 var array2 = [5,6,7,9, 2]
 var array3 = array1 + array2
 console.log(array3);
 
///Thuộc tính Array//////////
console.log(array1.length);

////////method Array//////////
///////Thêm phần tử đầu mảng
array2.unshift(0);
console.log(array2);

///// Thêm phần tử cuối mảng
array2.push("acd")
console.log(array2);

////////Xóa phần tử đầu mảng
array2.shift()


////////Xóa phần tử cuối mảng

array2.pop();

//////Xóa/Thêm ở vị trí bất kì splice()

array2.splice(2, 0, 10,100);
console.log(array2);

/////// Cắt mảng/////////////
console.log(array2.slice(0,3));

//////// Đảo ngược mảng///////
var arr5 = [1,2,3,4,]
console.log(arr5.reverse());

//////// Sắp xếp mảng////////

var arr6 = [4,3,2,1]
console.log(arr6.sort());
