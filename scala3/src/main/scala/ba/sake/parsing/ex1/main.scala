package ba.sake.parsing.ex1

@main def run(): Unit =
  lex("123 + 45 * 77 + true * x + false1 * false")

def lex(input: String): Unit =
  println("-" * 30)
  println("Lexing input:")
  println(input)
  println()
  
  val lexer = Lexer(input)
  val tokens = lexer.lex()
  
  println("Tokens:")
  pprint.pprintln(tokens)