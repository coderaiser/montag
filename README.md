# Montag [![License][LicenseIMGURL]][LicenseURL] [![NPM version][NPMIMGURL]][NPMURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL] [![Coverage][CoverageIMGURL]][CoverageURL]

> “If you don’t want a house built, hide the nails and wood.
> If you don’t want a man unhappy politically, don’t give him two sides to a question to worry him; give him one. Better yet, give him none.”
>
> (c) Ray Bradbury "Fahrenheit 451"

Format multiline strings using [tagged templates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates), instead of putting all lines into an array and joining to a string. Use [@putout/plugin-montag](https://github.com/coderaiser/putout/tree/master/packages/plugin-montag) to convert existing code to `montag`.

## Install

```
npm i montag
```

## How to use?

```js
const montag = require('montag');

const str1 = montag`
    if (a > b)
        console.log(c);
`;

const str2 = [
    'if (a > b)',
    '    console.log(c)',
].join('\n');

str1 === str2;
// returns
true;
```

## License

MIT

[NPMIMGURL]: https://img.shields.io/npm/v/montag.svg?style=flat&longCache=true
[BuildStatusIMGURL]: https://img.shields.io/travis/coderaiser/montag/master.svg?style=flat&longCache=true
[LicenseIMGURL]: https://img.shields.io/badge/license-MIT-317BF9.svg?style=flat&longCache=true
[NPMURL]: https://npmjs.org/package/montag "npm"
[BuildStatusURL]: https://travis-ci.org/coderaiser/montag "Build Status"
[LicenseURL]: https://tldrlegal.com/license/mit-license "MIT License"
[CoverageURL]: https://coveralls.io/github/coderaiser/montag?branch=master
[CoverageIMGURL]: https://coveralls.io/repos/coderaiser/montag/badge.svg?branch=master&service=github
