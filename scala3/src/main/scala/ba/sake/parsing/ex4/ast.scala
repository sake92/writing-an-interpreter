package ba.sake.parsing.ex4

/*
expr    -> num exprOpt*
exprOpt -> [+-] num
*/

case class Expr(num: Int, exprOpts: Seq[ExprOpt])
case class ExprOpt(op: Token.Type, num: Int)
