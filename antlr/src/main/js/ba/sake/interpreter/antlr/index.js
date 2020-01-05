const antlr4 = require('antlr4');

const KofoLangLexer = require('./gen/KofoLangLexer').KofoLangLexer;
const KofoLangParser = require('./gen/KofoLangParser').KofoLangParser;

const input = `
  int x = 5
  print("x = "
  println(x)
`
const chars = new antlr4.CharStreams.fromString(input);
const lexer = new KofoLangLexer(chars);
const tokens  = new antlr4.CommonTokenStream(lexer);
const parser = new KofoLangParser(tokens);
parser.buildParseTrees = true;

//parser.removeErrorListeners();
//parser.addErrorListener(new antlr4.error.BailErrorStrategy()); // TODO TypeError: d.syntaxError is not a function

try {
  const tree = parser.program();
  console.log(tree.toStringTree(parser.ruleNames).replace(/\\n/g, '\n'));

} catch (e) {
  
  console.error("Exc " + e) // 
}

