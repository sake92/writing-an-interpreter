package ba.sake.parsing.ex5

/*
expr      -> term exprOpt*
exprOpt   -> '+' term
term      -> NUM termOpt*
termOpt   -> '*' NUM
*/

class Interpreter(ast: Expr):

  def interpret(): Int = evalExpr(ast)

  private def evalExpr(expr: Expr): Int =
    var tmp = evalTerm(expr.term)
    expr.exprOpts.foreach { exprOpt =>
      tmp += evalTerm(exprOpt.term)
    }
    tmp

  private def evalTerm(term: Term): Int =
    var tmp = term.num
    term.termOpts.foreach { termOpt =>
      tmp *= termOpt.num
    }
    tmp
