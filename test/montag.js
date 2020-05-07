'use strict';

const test = require('supertape');
const montag = require('..');

test('montag', (t) => {
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

