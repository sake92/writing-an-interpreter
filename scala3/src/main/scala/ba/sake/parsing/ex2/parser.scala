package ba.sake.parsing.ex2

/*
Transformed this left-recursive grammar:
expr -> expr '+' NUM | NUM

to be non-left-recursive:
expr    -> NUM exprOpt
exprOpt -> '+' NUM exprOpt | epsilon
*/

class Parser(allTokens: List[Token]):
  import Token.Type
  
  private var tokens = allTokens
  private var lookahead = tokens.head
  
  def parse(): Unit = 
    expr()
    if lookahead.tpe != Type.EOF then
      error(s"Unknown token '${lookahead.text}' at position ${lookahead.tokenStartPos}")

  private def expr(): Unit =
    eat(Type.Num)
    exprOpt()
  
  private def exprOpt(): Unit =
    if lookahead.tpe == Type.Plus then
      eat(Type.Plus)
      eat(Type.Num)
      exprOpt()
    // else: end recursion, epsilon
  
  private def eat(tpe: Type): Unit =
    if lookahead.tpe != tpe then
      error(s"Expected: $tpe, got: ${lookahead.tpe} at position ${lookahead.tokenStartPos}")
    tokens = tokens.tail
    lookahead = tokens.head
  
  private def error(msg: String): Unit =
    throw ParseException(msg)

class ParseException(msg: String) extends RuntimeException(msg)
