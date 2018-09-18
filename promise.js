let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(Promise.resolve(1))
    }, 1000);
}).then(res => {
    console.log(res)
    return Promise.resolve(1)
}).then(res => {}).catch();

Promise.resolve('foo')
// 等价于
new Promise(resolve => resolve('foo'))

//async await;
let res1 = await step1();
let res2 = await step2(res1);

p
    .then(res => {
        throw new Error();
        return Promise.resolve(1);
    })
    .then(res => {
        console.log(1)
    })
    .catch(err => {});


function foo(a, b, c) {
    console.log(this.x);
}
foo(a, b, c);

let a = {
    fn: foo,
    x: 1
}
a.fn();

fun.call({
    x: 2
}, 1, 2, 3);
fun.apply({
    x: 3
}, [1, 2, 3]);

let fn = fun.bind({
    x: 4
});
fn();

function foo() {
    setTimeout(() => {
        console.log('id:', this.id);
    }, 100);
}


function foo() {
    let that = this;
    setTimeout(function () {
        console.log('id:', that.id);
    }, 100);
}

for (var obj in obj) {}