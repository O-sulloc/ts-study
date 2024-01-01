// 매개변수와 리턴값에 타입을 명시해준다 = 타이핑해준다.
function add(x: number, y: number): number {
    return x + y
}

// 화살표 함수에서는 이렇게 인라인으로 타입을 명시해줄 수 있는데
const add2: (x: number, y: number) => number = (x, y) => x + y;

// type으로 타입을 선언하는 type alias 방식도 사용할 수 있음
type Add = (x: number, y: number) => number;
const add3: Add = (a, b) => a + b;

// interface로 타입을 지정해주는 방법도 있음. 흔한 방법은 아님
interface Multiply {
    (x: number, y: number): number;
}
const mul: Multiply = (a, b) => a * b;

interface Name {
    first: string;
    last: string;
}
let me: Name;
me = {
    first: 'JH',
    last: 'KIM'
};

// 객체
const obj: { lat: number, lon: number } = { lat: 37.5, lon: 127.5 };