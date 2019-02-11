# inquirer-prompt-briefly

[![version][version-badge]][package] [![MIT License][license-badge]][license]

Alternative for `inquirer`'s `editor` prompt that supports file extensions.

## Install

```
$ yarn add inquirer-prompt-briefly
```

## Usage

```js
const inquirer = require('inquirer');
inquirer.registerPrompt('briefly', require('inquirer-prompt-briefly'));

inquirer
  .prompt({
    type: 'briefly',
    name: 'bio',
    message: 'Please write a short bio of at least 3 lines.',
    extension: 'md',
    default: '# Well hello there!\n\n',
    validate: text => {
      if (typeof text !== 'string') {
        return true;
      }

      if (text.split('\n').length < 2) {
        return 'Must be at least 3 lines.';
      }
      return true;
    },
  })
  .then(answers => console.log(answers))
  .catch(err => console.log(err));
```

<!-- LINKS -->

[license]: https://github.com/sebald/inquirer-prompt-briefly/blob/master/LICENSE
[license-badge]: https://img.shields.io/npm/l/inquirer-prompt-briefly.svg?style=flat-square
[package]: https://www.npmjs.com/package/inquirer-prompt-briefly
[version-badge]: https://img.shields.io/npm/v/inquirer-prompt-briefly.svg?style=flat-square
