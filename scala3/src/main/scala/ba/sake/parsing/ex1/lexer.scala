package ba.sake.parsing.ex1

import scala.collection.mutable

class Lexer(input: String):
  import Token.Type

  def lex(): List[Token] =
    val tokens = mutable.ArrayBuffer.empty[Token]
    var i = 0
    while i < input.length do
      val startPos = i
      val lookahead = input(i)
      if lookahead.isWhitespace then
        i += 1 // ignore whitespace
      else if lookahead == '+' then
        i += 1
        tokens += Token(Type.Plus, lookahead.toString, startPos)
      else if lookahead == '*' then
        i += 1
        tokens += Token(Type.Times, lookahead.toString, startPos)
      else if lookahead.isDigit then
        var text = ""
        while i < input.length && input(i).isDigit do
          text += input(i)
          i += 1
        tokens += Token(Type.Num, text, startPos)
      else if lookahead.isLetter then // first must be letter
        var text = ""
        while i < input.length && input(i).isLetterOrDigit do
          text += input(i)
          i += 1
        val tpe = text match
          case "true"  => Type.True // special casing literals
          case "false" => Type.False
          case _       => Type.Identifier
        tokens += Token(tpe, text, startPos)
      else
        error(s"Unknown character '$lookahead' at position $i")

    tokens += Token(Type.EOF, "<EOF>", i) // special end marker
    tokens.toList

  private def error(msg: String): Unit =
    throw LexException(msg)

end Lexer

case class Token(
  tpe: Token.Type,
  text: String,
  startPos: Int
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
