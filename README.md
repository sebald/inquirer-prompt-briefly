# inquirer-prompt-briefly

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
