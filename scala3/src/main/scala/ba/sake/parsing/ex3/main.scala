package ba.sake.parsing.ex3

@main def run(): Unit =
  parse("1 + 2 + 3")

def parse(input: String): Unit =
  println("-" * 30)
  println("Parsing input:")
  println(input)
  println()
  
  val tokens = Lexer(input).lex()
  val ast = Parser(tokens).parse()

  println("AST:")
  pprint.pprintln(ast, width = 6)