## Trie-server

### Install

To run this script you need to have Node.js version 12 or greater installed

Install the Dependancies using npm

```bash
npm install
```

### Run

To run the server use npm

```bash
npm run serve
```

### API

Requests can be made to the following endpoint https://trie.deta.dev/
|Method | path | description |
|--------|-----------------------|-----------------------------------|
| GET | / | Display the Trie |
| GET | /reset | Reset the Trie to an empty one |
| GET or POST | /add/`<item>` | Add an item to the Trie |
| GET | /contains/`<item>` | check whether Trie includes item |
| GET or DELETE | /delete/`<item>` | remove an item |
| GET | /autocomplete/`<item>` | autocomplete with a given starting value|

#### Examples

Display the Trie

```
curl https://trie.deta.dev/
```

Reset the Trie to an empty one

```
curl https://trie.deta.dev/reset
```

Add `ham` to the Trie

```
curl https://trie.deta.dev/add/ham
```

Delete `log` from the Trie

```
curl https://trie.deta.dev/delete/log
```

Output either true or false depending on whether the keyword `dog` exist in Trie

```
curl https://trie.deta.dev/contains/doc
```

### Test

To run the test suite execute the following command:

```bash
npm run test
```

### Hosting

The server is hosted on Deta.sh which makes use of AWS. No Deta specific functionality is used, so this project could be hosted in almost any node environment.
