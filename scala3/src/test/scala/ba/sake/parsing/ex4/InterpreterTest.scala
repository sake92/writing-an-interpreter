package ba.sake.parsing.ex4

import ExprOpt._

class InterpreterTest extends munit.FunSuite:
  test("1") {
    assertEquals(interpret("1"), 1)
  }
  test("1 + 1") {
    assertEquals(interpret("1+1"), 2)
  }
  test("associativity: 5 - 2 + 1") {
    assertEquals(interpret("5 - 2 + 1"), 4)
  }

  def interpret(input: String): Int =
    val tokens = Lexer(input).lex()
    val ast = Parser(tokens).parse()
    Interpreter(ast).interpret()

end InterpreterTest
