package ba.sake.parsing.ex3

/*
expr    -> num exprOpt
exprOpt -> + num exprOpt | epsilon
*/

case class Expr(num: Int, exprOpt: ExprOpt)

enum ExprOpt:
  case Opt(num: Int, exprOpt: ExprOpt)
  case Epsilon
