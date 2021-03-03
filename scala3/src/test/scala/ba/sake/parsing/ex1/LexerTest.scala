package ba.sake.parsing.ex1

import Token.Type._

class LexerTest extends munit.FunSuite:
  test("1+1") {
    val input = "1+1"
    val lexer = Lexer(input)
    val tokens = lexer.lex()
    assertEquals(
      tokens,
      List(Token(Digits,"1",0), Token(Plus,"+",1), Token(Digits,"1",2), Token(EOF,"<EOF>",3))
    )
  }
  test("ignores whitespace") {
    val input = " 1 +  1 "
    val lexer = Lexer(input)
    val tokens = lexer.lex()
    assertEquals(
      tokens,
      List(Token(Digits,"1",1), Token(Plus,"+",3), Token(Digits,"1",6), Token(EOF,"<EOF>",8))
    )
  }
  test("lexes identifiers") {
    val input = "False * truely"
    val lexer = Lexer(input)
    val tokenTypes = lexer.lex().map(_.tpe)
    assertEquals(
      tokenTypes,
      List(Identifier, Times, Identifier, EOF)
    )
  }
  test("lexes true/false keywords") {
    val input = "false * true"
    val lexer = Lexer(input)
    val tokenTypes = lexer.lex().map(_.tpe)
    assertEquals(
      tokenTypes,
      List(False, Times, True, EOF)
    )
  }

