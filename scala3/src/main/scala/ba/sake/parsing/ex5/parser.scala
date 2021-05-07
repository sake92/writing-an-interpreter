package ba.sake.parsing.ex5

import scala.collection.mutable

/*
expr      -> term exprOpt*
exprOpt   -> '+' term
term      -> NUM termOpt*
termOpt   -> '*' NUM
*/

class Parser(allTokens: List[Token]):
  import Token.Type
  
  private var tokens = allTokens
  private var lookahead = tokens.head
  
  def parse(): Expr = 
    val res = expr()
    if lookahead.tpe != Type.EOF then
      error(s"Unknown token '${lookahead.text}' at position ${lookahead.startPos}")
    else
      res

  private def expr(): Expr =
    Expr(term(), exprOpts())
  
  private def exprOpts(): Seq[ExprOpt] =
    val opts = mutable.ArrayBuffer.empty[ExprOpt]
    while lookahead.tpe == Type.Plus do
      eat(Type.Plus)
      opts += ExprOpt(term())
    opts.toSeq

  private def term(): Term =
    val num = eat(Type.Num)
    Term(num.text.toInt, termOpts())
    
  private def termOpts(): Seq[TermOpt] =
    val opts = mutable.ArrayBuffer.empty[TermOpt]
    while lookahead.tpe == Type.Times do
      eat(Type.Times)
      val num = eat(Type.Num)
      opts += TermOpt(num.text.toInt)
    opts.toSeq
  
  private def eat(tpe: Type): Token =
    val res = lookahead
    if lookahead.tpe != tpe then
      error(s"Expected: $tpe, got: ${lookahead.tpe} at position ${lookahead.startPos}")
    tokens = tokens.tail
    lookahead = tokens.head
    res
  
  private def error(msg: String): Nothing =
    throw ParseException(msg)

class ParseException(msg: String) extends RuntimeException(msg)
