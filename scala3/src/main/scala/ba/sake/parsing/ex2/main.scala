package ba.sake.parsing.ex2

@main def run(): Unit =
  parse("1 + 2 + 3")
  parse("1 + 2 * 3") // prints nice error message

def parse(input: String): Unit =
  println("-" * 30)
  println("Parsing input:")
  println(input)
  println()
  
  val tokens = Lexer(input).lex()
  val parser = Parser(tokens)
  parser.parse()

  println("Success!")