package ba.sake.parsing.ex5

import ExprOpt._

class InterpreterTest extends munit.FunSuite:
  test("precedence: 2 + 3 * 5") {
    assertEquals(interpret("2 + 3*5"), 17)
  }
  test("precedence: 2 * 3 + 5") {
    assertEquals(interpret("2*3 + 5"), 11)
  }

  def interpret(input: String): Int =
    val tokens = Lexer(input).lex()
    val ast = Parser(tokens).parse()
    Interpreter(ast).interpret()

end InterpreterTest
