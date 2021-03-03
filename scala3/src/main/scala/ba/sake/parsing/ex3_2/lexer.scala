package ba.sake.parsing.ex3_2

import scala.collection.mutable

class Lexer(input: String):
  import Token.Type

  def lex(): List[Token] =
    val tokens = mutable.ArrayBuffer.empty[Token]
    var i = 0
    while i < input.length do
      val pos = i
      val lookahead = input(i)
      if lookahead.isWhitespace then
        i += 1 // ignore whitespace
      else if lookahead == '+' then
        i += 1
        tokens += Token(Type.Plus, lookahead.toString, pos)
      else if lookahead == '*' then
        i += 1
        tokens += Token(Type.Times, lookahead.toString, pos)
      else if lookahead.isDigit then
        var text = ""
        while i < input.length && input(i).isDigit do
          text += input(i)
          i += 1
        tokens += Token(Type.Digits, text, pos)
      else
        error(s"Unknown character '$lookahead' at position $i")

    tokens += Token(Type.EOF, "<EOF>", i) // special end marker
    tokens.toList
  end lex

  private def error(msg: String): Unit =
    throw LexException(msg)

end Lexer

case class Token(
  tpe: Token.Type,
  text: String,
  pos: Int
)

object Token:
  enum Type:
    case Digits
    case Plus
    case Times
    case EOF

class LexException(msg: String) extends RuntimeException(msg)