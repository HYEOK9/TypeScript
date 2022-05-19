let a: unknown;

a = 'a is me';
if (typeof a === 'number') {
    a += 1;
}

if (typeof a === 'string') {
    a += 'is string';
}
console.log(a);
