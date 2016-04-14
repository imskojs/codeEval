### Learn TypeScript while solving toy problems
Solving toy problems is quite fun, but I was always annoyed by the fact that the code I have used in solving one problem couldn't be used in another unless I copy-pasted-it.
This project uses Typescript and gulp-replace-task to embed actual code into the .ts file allowing us to extend classes used to successfuly answer other problems.

### Note

* Since node 4/5 does not handle proper tail call, recursion should not be used as it will throw `maximum call stack size exeeded` error even if recursion is done with proper tail call. Hence, I have listed problems in TODO: Refactor with recursivea approach section, where it should have been a nicer answer to a problem if I have used recursive approach instead. Hope node.js or (more precisely V8 engine) properly handle tail call soon.  

* Currently embedding can only be done with classes that does not already extend another class. For example, if Class A extends Class B in solving one problem, Class A cannot be embedded for Class C in another problem. This will be fixed when needed, but currently(14/04/2016) while solving easy problems there were no need to even extend a single class, since they are simple problems.  

( Toy problems in this repo are from https://www.codeeval.com )

### TODO:
* Refactor with recursive approach
  * FibonacciSeries
  * BlackCard



### License
License in LICENSE.md