package ba.sake.parsing.ex4

/*
expr    -> num exprOpt*
exprOpt -> [+-] num
*/

class Interpreter(ast: Expr):

  def interpret(): Int = evalExpr(ast)

  private def evalExpr(expr: Expr): Int =
    var tmp = expr.num // start from this, then add/subtract to right, one by one.. left associative
    expr.exprOpts.foreach { exprOpt =>
      if exprOpt.op == Token.Type.Plus
      then tmp += exprOpt.num
      else tmp -= exprOpt.num
    }
    tmp
