type config = {
    path: string;
    state: number;
};

type Push = {
    (path: string): void;
    (obj: config): void;
};

const push: Push = (param) => {
    if (typeof param === 'string') {
        console.log(param);
    } else console.log(param.path, param.state);
};

push('/');
push({ path: '/home', state: 1 });
