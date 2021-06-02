package ba.sake.parsing.ex4

import scala.collection.mutable

/*
expr    -> NUM exprOpt*
exprOpt -> [+-] NUM
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
    Expr(num.text.toInt, exprOpts())

  private def exprOpts(): Seq[ExprOpt] =
    val opts = mutable.ArrayBuffer.empty[ExprOpt]
    while lookahead.tpe == Type.Plus || lookahead.tpe == Type.Minus do
      val op = if lookahead.tpe == Type.Plus
        then eat(Type.Plus)
        else eat(Type.Minus)
      val num = eat(Type.Num)
      opts += ExprOpt(op.tpe, num.text.toInt)
    opts.toSeq
  
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
