/* Partitioning relies entirely on the event loop, so we cant benefit from  multi core processers
    Event loop is for orchestrating client request and not fullfilling them 
    We move tasks to worker pool for complicated tasks

    1.N-API node-worker-threads gives a js way of accesing Worker pool
    2. Creating a own workers dedicated to computation rather than Node.js IO-themed worker pool
    Using Cluster or Child Process
    - Do not create a child process for every client, requests might be faster than your spawning

    Disadvantage of Offloading
    1. Only event loop is allowed to see the application state (namespace). Worker cannot manipulate js object, we have to serialize and deserialize them
    Then worker will then work on the copy of the object and return the patched copy
*/
