package ba.sake.parsing.ex5

@main def run(): Unit =
  interpret("2 + 3*5")      // 2 + 15     = 17
  interpret("2*7 + 5")      // 14 + 5     = 19
  interpret("3 + 2*7 + 5")  // 3 + 14 + 5 = 17 + 5 = 22

def interpret(input: String): Unit =
  println("-" * 30)
  println("Interpreting input:")
  println(input)
  
  val tokens = Lexer(input).lex()
  val ast = Parser(tokens).parse()
  val res = Interpreter(ast).interpret()

  println("AST:")
  pprint.pprintln(ast, width = 6)
  println(s"$input = $res")
