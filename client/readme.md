## Trie CLI

### Installation

The Easiest way to use Trie CLI is to use one of the prebuilt binaries.

To do this head over to the releases section and download an executable for your platform.

### Usage

Usage: command `<paramater>`

| Command                 |                                          |
| ----------------------- | ---------------------------------------- |
| trie-cli-linux show     | Display the Trie                         |
| trie-cli-linux add      | Add an item to the Trie                  |
| trie-cli-linux includes | check whether Trie includes item         |
| trie-cli-linux delete   | remove an item                           |
| trie-cli-linux complete | autocomplete with a given starting value |

If you are using windows then you should run
`trie-cli-win.exe ` and on Mac `trie-cli-macos` instead of `trie-cli-linux`

Options:

--help Show help [boolean]

--version Show version number [boolean]

Examples:

add 'ham' to the Trie

```
trie-cli-linux add ham
```

Output either true or false depending on whether
the keyword 'dog' exist in Trie

```
trie-cli-linux includes dog
```

remove keyword 'log' from the Trie

```
trie-cli-linux delete log
```

### Developing

To contribute and develop the CLI further, you need to have Node js version 12 or greater installed.

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

After that you can modify any files and see the results without having to build for each platorm using the following usage

### Development usage

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

### Build

To build the cli you must have `pkg` installed.

If tyou don't have it installed already, you can do so with npm:

```
npm install -g pkg
```

Next enter the client directory and run pkg

```
pkg .
```

### Test

To run the test suite execute the following command:

```bash
npm run test
```
