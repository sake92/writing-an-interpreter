package ba.sake.parsing.ex1

import scala.collection.mutable

class Lexer(input: String):
  import Token.Type

  def lex(): List[Token] =
    val tokens = mutable.ArrayBuffer.empty[Token]
    var currentPos = 0
    while currentPos < input.length do
      val tokenStartPos = currentPos
      val lookahead = input(currentPos)
      if lookahead.isWhitespace then
        currentPos += 1 // ignore whitespace
      else if lookahead == '+' then
        currentPos += 1
        tokens += Token(Type.Plus, lookahead.toString, tokenStartPos)
      else if lookahead == '*' then
        currentPos += 1
        tokens += Token(Type.Times, lookahead.toString, tokenStartPos)
      else if lookahead.isDigit then
        var text = ""
        while currentPos < input.length && input(currentPos).isDigit do
          text += input(currentPos)
          currentPos += 1
        tokens += Token(Type.Num, text, tokenStartPos)
      else if lookahead.isLetter then // first must be letter
        var text = ""
        while currentPos < input.length && input(currentPos).isLetterOrDigit do
          text += input(currentPos)
          currentPos += 1
        val tpe = text match
          case "true"  => Type.True // special casing literals
          case "false" => Type.False
          case _       => Type.Identifier
        tokens += Token(tpe, text, tokenStartPos)
      else
        error(s"Unknown character '$lookahead' at position $currentPos")

    tokens += Token(Type.EOF, "<EOF>", currentPos) // special end marker
    tokens.toList

  private def error(msg: String): Unit =
    throw LexException(msg)

end Lexer

case class Token(
  tpe: Token.Type,
  text: String,
  tokenStartPos: Int
)

object Token:
  enum Type:
    case Num
    case Plus
    case Times
    case Identifier
    case True
    case False
    case EOF

class LexException(msg: String) extends RuntimeException(msg)
