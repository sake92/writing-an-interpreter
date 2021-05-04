package ba.sake.parsing.ex5

/*
Original left-recursive, WITHOUT PRECEDENCE RULES grammar:
expr -> expr '+' expr | expr '*' expr | NUM

becomes left-recursive, WITH PRECEDENCE RULES grammar:
expr    -> expr '+' term | term
term    -> term '*' NUM | NUM

becomes NON-left-recursive, WITH PRECEDENCE RULES grammar:
expr      -> term exprOpt*
exprOpt   -> '+' term
term      -> NUM termOpt*
termOpt   -> '*' NUM
*/

case class Expr(term: Term, exprOpts: Seq[ExprOpt])
case class ExprOpt(term: Term)

case class Term(num: Int, termOpts: Seq[TermOpt])
case class TermOpt(num: Int)
