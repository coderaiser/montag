'use strict';

const trim = (n) => (str) => str.slice(n);

const START = 1;
const END = -1;

module.exports = (strs, ...args) => {
    const str = build(strs, args);
    const lines = str
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

function build(strs, args) {
    const result = [];
    const n = strs.length + args.length;
    
    let j = 0;
    for (let i = 0; i < n; i++) {
        const current = i % 2 ? args.shift() : strs[j++];
        result.push(current);
    }
    
    return result.join('');
}

