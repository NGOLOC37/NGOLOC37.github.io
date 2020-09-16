// Viết 1 function kiểm tra 1 chuỗi có nằm trong chuỗi còn lại hay không. Nếu có trả về true, nếu không trả về false
function checkStringExsit(str, findStr) {
    var index = str.indexOf(findStr)
    if(index == -1){
        return false;
    }
    else {
        return true;
    }
    console.log(index); 
}
console.log(checkStringExsit("ngoloc", "loc"));

// Viết hàm rút ngắn chuỗi bằng cách cắt ra 8 ký tự đầu của 1 chuỗi và thêm dấu ba chấm ở cuối chuỗi.
function shortenString(str) {
    var str1 = "..."
    var str2 = str.substr(0, 8);
    var newStr = str2 + str1;
    return newStr;
}
console.log(shortenString("Xin chào các bạn"));

//  Viết hàm có tác dụng biến 1 chuỗi thành chỉ viết hoa từ đầu tiên. 
function capitalizeStr(str) {
    str = str.toLowerCase();
    arrayStr = str.split(" ");
    for (var i = 0; i < arrayStr.length; i++) {
        arrayStr[i] = arrayStr[i].charAt(0).toUpperCase() + arrayStr[i].substring(1);
    }
    return arrayStr.join(" ");
}

console.log(capitalizeStr("NGUYEN NGO LOC"));

// Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần.
function multiStr(str) {
    for(i=0; i<4; i++ ){
        str = str.concat(str);
    }
    str = str.substr(0,10);
    return str;
}
console.log(multiStr("a"));

// Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang. 
function repeatString(str) {
    str = str.concat("-");
    for(i=0; i<4; i++ ){
        str = str.concat(str);
    }
    str = str.substr(0,19);
    return str;
}
console.log(repeatString("a"));


//Cho 1 chuỗi và 1 số nguyên n > 1, hãy viết hàm có tác dụng sao chép đó chuỗi lên n lần, ngăn cách nhau bởi dấu gạch ngang. 
function repeatNString(str, n) {
    str = str.concat("-");
    for(i=0; i<n; i++ ){
        str = str.concat(str);
    }
    str = str.substr(0, 2*n-1);
    return str;    
}
console.log(repeatNString("a",3));

// Viết hàm đảo ngược chuỗi. Viết dunction với đầu vào là 1 chuỗi string. Trả về chuỗi đảo ngược của chuỗi đó
function reverseString(str) {
    str = str.split("");
    reverArr = str.reverse();
    str = reverArr.join("");
    return str;
}
console.log(reverseString("hello"));

// Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (đọc xuôi hay ngược đều như nhau, không tính khoảng trắng, không phân biệt hoa thường), kết quả trả về true hoặc false.
function isSymmetry(str) {
    str = str.toUpperCase();
    str = str.replace(/\s+/g, '');
    str1 = str.split("");
    reverArr = str1.reverse();
    str1 = reverArr.join("");
    if(str == str1){
        return true;   
    }
    else {
        return false;
    }   
}
console.log(isSymmetry("Race car"));

// Yêu cầu: viết một function đáp ứng những chuyện sau

// log ra các số từ 1 đến n, n là một parameter truyền vào
// log ra chữ fizz nếu là bội số của 3
// log ra buzz nếu là bội số của 5
// log ra fizzbuzz nếu là bội số của cả 3 và 5
function abc(n) {
    console.log(n);
    var ismulti3 = n % 3;
    var ismulti5 = n % 5;
    if(ismulti3 == 0){
        console.log("fizz");
    }
    if(ismulti5 == 0){
        console.log("buzz");
    }
    if(ismulti3 == 0 && ismulti5 == 0){
        console.log("fizzbuzz");
    }
}
abc(15);

// Viết một function nhận vào string, trả về số lượng nguyên âm có trong string
// function vowelnumber(str) {

// }

// Viết hàm tìm ra số nhỏ nhất trong mảng các số.
function minNumbers(array) {
    array = array.sort(function(a, b){return a - b});
    number = array[0];
    return number;
}
console.log(minNumbers([5,4,6,3,2]));

// Viết hàm tìm ra số lớn thứ nhì trong mảng các số.
function max2Number(array) {
    array = array.sort(function(a, b){return b -a});
    number = array[1];
    return number;
}
console.log(max2Number([5,4,6,3,2]));

// Viết hàm truyền vào 1 mảng tên học viên, sắp xếp lại mảng này theo chiều ngược của bảng chữ cái.
// function sortStudents(array) {
//     array.sort();    
//     return array;
// }
// console.log(sortStudents(['Nam', 'Hoa', 'Tuấn']));

// Tính tổng các số chia hết cho 5 từ 0 -> 100

function sumNumber() {
    var sum = 0;
    for(var i=0; i<=100; i++){ 
        if (i % 5 != 0){
            continue;    
        }
        sum = sum + i;    
    }
    return sum;
}
console.log(sumNumber());
