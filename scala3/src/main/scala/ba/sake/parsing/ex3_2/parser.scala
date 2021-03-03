package ba.sake.parsing.ex3_2

import scala.collection.mutable

/*
expr  -> num exprOpt*
exprOpt -> + num
*/

class Parser(allTokens: List[Token]):
  import Token.Type
  
  private var tokens = allTokens
  private var lookahead = tokens.head
  
  def parse(): Expr = 
    val res = expr()
    if lookahead.tpe != Type.EOF then
      error(s"Unknown token '${lookahead.text}' at position ${lookahead.pos}")
    else
      res

  private def expr(): Expr =
    val num = eat(Type.Digits)
    Expr(num.text.toInt, exprOpts())
  
  private def exprOpts(): Seq[ExprOpt] =
    val opts = mutable.ArrayBuffer.empty[ExprOpt]
    while lookahead.tpe == Type.Plus do
      eat(Type.Plus)
      val num = eat(Type.Digits)
      opts += ExprOpt(num.text.toInt)
    opts.toSeq
  
  private def eat(tpe: Type): Token =
    val res = lookahead
    if lookahead.tpe != tpe then
      error(s"Expected: $tpe, got: ${lookahead.tpe} at position ${lookahead.pos}")
    tokens = tokens.tail
    lookahead = tokens.head
    res
  
  private def error(msg: String): Nothing =
    throw ParseException(msg)

class ParseException(msg: String) extends RuntimeException(msg)
