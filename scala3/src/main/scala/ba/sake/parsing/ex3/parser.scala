package ba.sake.parsing.ex3

/*
expr    -> NUM exprOpt
exprOpt -> '+' NUM exprOpt | epsilon
*/

class Parser(allTokens: List[Token]):
  import Token.Type
  
  private var tokens = allTokens
  private var lookahead = tokens.head
  
  def parse(): Expr =
    val res = expr()
    if lookahead.tpe != Type.EOF then
      error(s"Unknown token '${lookahead.text}' at position ${lookahead.tokenStartPos}")
    else
      res

  private def expr(): Expr =
    val num = eat(Type.Num)
    Expr(num.text.toInt, exprOpt())
  
  private def exprOpt(): ExprOpt =
    if lookahead.tpe == Type.Plus then
      eat(Type.Plus)
      val num = eat(Type.Num)
      ExprOpt.Opt(num.text.toInt, exprOpt())
    else
      ExprOpt.Epsilon
  
  private def eat(tpe: Type): Token =
    val res = lookahead
    if lookahead.tpe != tpe then
      error(s"Expected: $tpe, got: ${lookahead.tpe} at position ${lookahead.tokenStartPos}")
    tokens = tokens.tail
    lookahead = tokens.head
    res
  
  private def error(msg: String): Nothing =
    throw ParseException(msg)

class ParseException(msg: String) extends RuntimeException(msg)
