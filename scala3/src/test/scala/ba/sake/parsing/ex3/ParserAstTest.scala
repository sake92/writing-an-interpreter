package ba.sake.parsing.ex3

import ExprOpt._

class ParserAstTest extends munit.FunSuite:
  test("1") {
    assertEquals(
      parse("1"),
      Expr(1, Epsilon)
    )
  }
  test("1+1") {
    assertEquals(
      parse("1+1"),
      Expr(
        1, 
        Opt(
          1,
          ExprOpt.Epsilon
        )
      )
    )
  }

  def parse(input: String): Expr = 
    val tokens = Lexer(input).lex()
    Parser(tokens).parse()

end ParserAstTest

