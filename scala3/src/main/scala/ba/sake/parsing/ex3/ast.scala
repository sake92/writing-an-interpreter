package ba.sake.parsing.ex3

/*
expr    -> NUM exprOpt
exprOpt -> '+' NUM exprOpt | epsilon
*/

case class Expr(num: Int, exprOpt: ExprOpt)

enum ExprOpt:
  case Opt(num: Int, exprOpt: ExprOpt)
  case Epsilon
