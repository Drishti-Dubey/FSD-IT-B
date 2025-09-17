function hello(user='Guest')
{
    console.log(`Hello ${user}`);
}

hello('Drishti');
hello();

function sum(a,b)
{
    console.log('Before written');
    return(a+b);
}
console.log(sum(23,24));

const hello=()=>console.log('hello')
hello()

function hello(user,callback)
{
    console.log("hello");
    callback();
}

hello('Admin',function()
{
    console.log(add(5,5))
});
hello('Admin',()=>
{
    console.log(add(6,7))
});