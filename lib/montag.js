'use strict';

const trim = (n) => (str) => str.slice(n);

const START = 1;
const END = -1;

module.exports = (str) => {
    const lines = String(str)
        .split('\n')
        .slice(START, END);
    
    const [first] = lines;
    const count = getSpaceCount(first);
    
    return lines
        .map(trim(count))
        .join('\n');
};

function getSpaceCount(a) {
    let i = 0;
    const {length} = a;
    
    while (i < length && a[i] === ' ') {
        ++i;
    }
    
    return i;
}

