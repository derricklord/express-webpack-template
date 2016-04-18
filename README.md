Mental Notes:

'Tie your hands to free your mind'
-Jessica Kerr

Highest ideal - Science
Workable solution - Engineering
Path - Algorithm
Progress - Development

- Progress is not found at the end of the path toward the highest ideal nor at the start of the path of the least workable solution.

- Progress is the journey along that path.


Architecture Notes:

Flux Architecture

Actions (DESCRIBE STATE CHANGE)
  | (Objects / Data )
  | actions/ServerActions.js
  |
Dispatcher (BROADCAST ACTION)
  | (Registry of callbacks, Singleton)
  | AppDispatcher.js
  |
Store (FILTER ACTIONS /PROCESS STATE CHANGE)
  | (Logic, Singleton, Manage state, Immutable, Emit Change)
  | stores/linkstore.js
  |
View (INVOKE ACTIONS) 
  | (Containers, Components Tree, UI)
  |  containers/
  |             components/
