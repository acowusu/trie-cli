## Trie CLI

### Installation

To install the CLI, you need to have Node js version 12 or greater installed.

Next clone the repository

```bash
git clone https://github.com/penguinprogramer/trie-cli.git
```

Next enter the `client` directory

```bash
cd trie-cli/client/
```

After that modify the permissions of the program using `chod` to make it executable

```bash
chmod +x index.js
```

### usage

```
Usage: command <paramater>

Commands:
  ./index.js show      Display the Trie
  ./index.js reset     Reset the Trie to an empty one
  ./index.js add       Add an item to the Trie
  ./index.js includes  check whether Trie includes item
  ./index.js delete    remove an item
  ./index.js complete  autocomplete with a given starting value

Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]

Examples:
  ./index.js add ham        add 'ham' to the Trie
  ./index.js includes dog   Output either true or false depending on whether the
                          keyword 'dog' exist in Trie
  ./index.js delete log     remove keyword  'log' from the Trie
```

### Test

To run the test suite execute the following command:

```bash
npm run test
```
