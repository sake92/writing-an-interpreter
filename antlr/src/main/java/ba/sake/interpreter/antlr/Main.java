package ba.sake.interpreter.antlr;

import ba.sake.interpreter.antlr.gen.KofoLangLexer;
import ba.sake.interpreter.antlr.gen.KofoLangParser;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.CharStreams;
import org.antlr.v4.runtime.CommonTokenStream;

import java.io.IOException;

public class Main {

    public static void main(String[] args) throws IOException {

        CharStream input;
        if (args.length > 0) {
            System.out.println("Running the file: " + args[0]);
            input = CharStreams.fromFileName(args[0]);
        } else { // DEMO INPUT
            System.out.println("Running an example..");
            input = CharStreams.fromString("int x = 5 \n print(x)");
        }

        // parse
        var lexer = new KofoLangLexer(input);
        var tokens = new CommonTokenStream(lexer);
        var parser = new KofoLangParser(tokens);
        var tree = parser.program();

        // interpret, evaluate
        var interpreter = new Interpreter();
        interpreter.visit(tree);
    }
}
