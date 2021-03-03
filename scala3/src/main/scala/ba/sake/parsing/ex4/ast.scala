package ba.sake.parsing.ex4

/*
expr    -> NUM exprOpt*
exprOpt -> [+-] NUM
*/

case class Expr(num: Int, exprOpts: Seq[ExprOpt])
case class ExprOpt(op: Token.Type, num: Int)
