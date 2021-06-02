package ba.sake.parsing.ex2

import Token.Type._

class ParserTest extends munit.FunSuite:
  test("1+1") {
    parse("1+1")
  }
  test("1+1+".fail) {
    parse("1+1+")
  }
  test("+".fail) {
    parse("+")
  }

  def parse(input: String): Unit =
    val tokens = Lexer(input).lex()
    Parser(tokens).parse()

end ParserTest

