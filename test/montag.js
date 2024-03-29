'use strict';

const test = require('supertape');
const montag = require('..');

test('montag: remove indentation', (t) => {
    const result = montag`
        hello,
        world,
    `;
    
    const expected = [
        'hello,',
        'world,',
    ].join('\n');
    
    t.equal(result, expected);
    t.end();
});

test('montag: indentations', (t) => {
    const result = montag`
        if (a)
            console.log("hello");
    `;
    
    const expected = [
        'if (a)',
        '    console.log("hello");',
    ].join('\n');
    
    t.equal(result, expected);
    t.end();
});

test('montag: empty lines', (t) => {
    const result = montag`
        if (a) {
            const a = true;
            
            console.log("hello");
        }
    `;
    
    const expected = [
        'if (a) {',
        '    const a = true;',
        '    ',
        '    console.log("hello");',
        '}',
    ].join('\n');
    
    t.equal(result, expected);
    t.end();
});

test('montag: variable', (t) => {
    const b = 'hello';
    const result = montag`
        const a = "${b}";
    `;
    
    const expected = [
        'const a = "hello";',
    ].join('\n');
    
    t.equal(result, expected);
    t.end();
});

test('montag: multiline code', (t) => {
    const result = montag`
        const expected = [
        {
            hello: 'world',
        }
    ];
    `;
    
    const expected = [
        `const expected = [`,
        `{`,
        `    hello: 'world',`,
        `}`,
        `];`,
    ].join('\n');
    
    t.equal(result, expected);
    t.end();
});

test('montag: mone new line', (t) => {
    const result = montag`
    `;
    
    t.equal(result, '');
    t.end();
});

