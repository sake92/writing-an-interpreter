package ba.sake.parsing.ex3_2

/*
expr  -> NUM exprOpt*
exprOpt -> '+' NUM
*/

case class Expr(num: Int, exprOpts: Seq[ExprOpt])
case class ExprOpt(num: Int)

/*
The rule `+ NUM exprOpt | epsilon` can be encoded as Seq[ExprOpt].  
This AST is a lot simpler and easier to evaluate in the interpreter.

`t -> abc t | epsilon` basically says "abc, zero or multiple times..."
*/