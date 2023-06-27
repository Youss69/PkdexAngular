interface Square {
    width: number
}

interface Rectangle extends Square {
    height: number
}

type Shape = Square | Rectangle;

function getSurface(shape: Shape): number {
    if ('height' in shape) {
        return shape.width * shape.height;
    } else {
        return shape.width * shape.width
    }
}


function toNumber(value: number | string): number {
    return value as number;
}

// en js on obtient

function toNumberTS(value: number | string): number {
    return typeof(value) === 'string' ? Number(value) : value;
}


function multiply(a: number, b: number): void;
function multiply(a: string, b: string): void;

function multiply(a: any, b: any) {
    console.log('surcharge!' + a + ' ' + b)
}