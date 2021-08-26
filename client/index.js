#!/usr/bin/env node
const axios = require("axios");
const yargs = require("yargs");
const Trie = require("./trie.js");
const options = yargs
    .usage("Usage: command <paramater> ")
    .command("show", "Display the Trie", async (args) => {
        console.log(await Trie.display());
    })

    .command("reset", "Reset the Trie to an empty one", async (args) => {
        console.log(await Trie.reset());
    })
    .command("add", "Add an item to the Trie", async (args) => {
        console.log(await Trie.add(args.argv._[1]));
    })
    .example("$0 add ham", "add 'ham' to the Trie")

    .command("includes", "check whether Trie includes item", async (args) => {
        console.log(await Trie.contains(args.argv._[1]));
    })
    .example(
        "$0 includes dog ",
        "Output either true or false depending on whether the keyword 'dog' exist in Trie",
    )

    .command("delete", "remove an item", async (args) => {
        console.log(await Trie.delete(args.argv._[1]));
    })
    .example("$0 delete log", "remove keyword  'log' from the Trie")

    .command(
        "complete",
        "autocomplete with a given starting value",
        async (args) => {
            console.log(await Trie.autocomplete(args.argv._[1]));
        },
    ).argv;

//  options
// const greeting = `Hello, ${JSON.stringify(options)}!`;

// console.log(greeting);
