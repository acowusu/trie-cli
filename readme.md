# Trie 

For the docs on each of the modules see the `client` and `server` directories. 


* [CLI Docs](https://github.com/penguinprogramer/trie-cli/tree/main/client)
* [Server Docs](https://github.com/penguinprogramer/trie-cli/tree/main/server)

## How are the Requirements met?

* The trie must be hosted online (AWS, GCloud, Azure or similar) so that multiple concurrent clients from around the world can run the aforementioned operations on the trie.
    * The System is hosted on Deta.sh which is itself hosted on AWS
* The trie must have one global state. All client operations must reflect changes in that one global state.
    * This requirement is met. All CLI operations affect the global state of the trie hosted at [trie.deta.dev](http://trie.deta.dev)
* A client interacts with the trie through a CLI (Command-Line Interface). There should be clear instructions on how to download/install this CLI and run operations. You can make this CLI available through distributions such as `npm` (if using JS) or equivalent.
    * A standalone CLI executable for several platforms is provided as a  [Github release](https://github.com/penguinprogramer/trie-cli/releases)  and documentation on how to use it is included in the [Client Directory](https://github.com/penguinprogramer/trie-cli/tree/main/client)
* Your trie must maintain the integrity of the order of requested operations across multiple clients. If client A’s request is received before client B’s request, client A’s request must be processed first before B’s request is processed. Think about if/what data structure can help with this.
    * The obvious way to implement this would be to use a request queue. (And if I was using async Database operations this would be my approach.) 
    * Instead I chose to use an in memory approach to improve read write performance (at the cost of scaleability). This allowed me to forgo using a queue as the operations that mutate the data are synchonous and therefore will be executed in the order they were received.
* The operations must be as algorithmically efficient as you can think of. 
    * This is a difficult requirement to opimise as different architectured will perform better or worse in different senarios. It is unclear if this Trie is needs to be as efficient as possible when storing data or whether fast retrival of data is more important.
    * In this implimentation I have prioritied code readibiliy over other factors.
   
