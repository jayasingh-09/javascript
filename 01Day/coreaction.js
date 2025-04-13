// true + false → 1
let a = true;
let b = false;
let c = a + b;
console.log(c); // 1

// 12 / '6' → 2
let d = 12;
let e = "6";
let f = d / e;
console.log(f); // 2

// 'true' == true → false
let g = "true";
let h = true;
let i = g == h;
console.log(i); // false

// null == undefined → true
let j = null;
let k = undefined;
let l = j == k;
console.log(l); // true

// [1] > null → true
let m = [1];
let n = null;
let o = m > n;
console.log(o); // true

// !!"false" == !!"true" → true
let p = !!"false";
let q = !!"true";
let r = p == q;
console.log(r); // true

// [] + null + 1 → 'null1'
let s = [] + null + 1;
console.log(s); // 'null1'

// [1,2,3] == [1,2,3] → false
let t = [1, 2, 3];
let u = [1, 2, 3];
let v = t == u;
console.log(v); // false  arrays are objects, and when you compare objects using == (or even ===), you're comparing their references, not their content.
