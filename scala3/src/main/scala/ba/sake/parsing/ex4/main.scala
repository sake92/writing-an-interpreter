package ba.sake.parsing.ex4

@main def run(): Unit =
  interpret("5 - 2 - 1") // 3 - 1 = 2 (OK, left associative) vs 5-1=4 (NOT OK)
  interpret("5 - 2 + 1") // 3 + 1 = 4
  
def interpret(input: String): Unit =
  println("-" * 30)
  println("Interpreting input:")
  println(input)
  println()
  
  val tokens = Lexer(input).lex()
  val ast = Parser(tokens).parse()
  val res = Interpreter(ast).interpret()

  println("AST:")
  pprint.pprintln(ast, width = 6)
  
  println("\nResult:")
  println(s"$input = $res")
