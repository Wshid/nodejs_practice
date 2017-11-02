var _=require('underscore'); // 단순히 underbar를 지정
var arr=[3, 6, 9, 1, 12];
//underscore가 배열의 허점을 채워준다?
console.log(arr[0]);
console.log(_.first(arr));
console.log(arr[arr.length-1]);
console.log(_.last(arr));
