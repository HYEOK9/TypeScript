const push = (param) => {
    if (typeof param === 'string') {
        console.log(param);
    }
    else
        console.log(param.path, param.state);
};
push('/');
push({ path: '/home', state: 1 });
