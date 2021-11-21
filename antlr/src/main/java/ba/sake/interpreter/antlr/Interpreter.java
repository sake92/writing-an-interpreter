package ba.sake.interpreter.antlr;

import ba.sake.interpreter.antlr.gen.KofoLangBaseVisitor;
import ba.sake.interpreter.antlr.gen.KofoLangParser;

public class Interpreter extends KofoLangBaseVisitor<Object> {

    private final SymbolTable symbolTable;

    public Interpreter() {
        symbolTable = new SymbolTable();
    }

    /* EXPRESSIONS */
    @Override
    public Object visitIntExpr(KofoLangParser.IntExprContext ctx) {
        return parseInt(ctx.INT().getText());
    }

    @Override
    public Object visitStringExpr(KofoLangParser.StringExprContext ctx) {
        String textQuoted = ctx.STRING().getText();
        return textQuoted.substring(1, textQuoted.length() - 1);
    }

    @Override
    public Object visitParensExpr(KofoLangParser.ParensExprContext ctx) {
        return visitExpr(ctx.expr());
    }

    @Override
    public Object visitIdExpr(KofoLangParser.IdExprContext ctx) {
        return symbolTable.get(ctx.getText());
    }

    @Override
    public Object visitMulDivExpr(KofoLangParser.MulDivExprContext ctx) {
        int left = asInt(ctx.left);
        int right = asInt(ctx.right);
        if ("*".equals(ctx.op.getText())) return left * right;
        else if ("/".equals(ctx.op.getText())) return left / right;
        else return error();
    }

    @Override
    public Object visitAddSubExpr(KofoLangParser.AddSubExprContext ctx) {
        int left = asInt(ctx.left);
        int right = asInt(ctx.right);
        if ("+".equals(ctx.op.getText())) return left + right;
        else if ("-".equals(ctx.op.getText())) return left - right;
        else return error();
    }

    /* STATEMENTS */
    @Override
    public Object visitDeclStatement(KofoLangParser.DeclStatementContext ctx) {
        symbolTable.define(ctx.id.getText(), visitExpr(ctx.expr()));
        return null;
    }

    @Override
    public Object visitAssignStatement(KofoLangParser.AssignStatementContext ctx) {
        symbolTable.set(ctx.id.getText(), visitExpr(ctx.expr()));
        return null;
    }

    @Override
    public Object visitPrintStatement(KofoLangParser.PrintStatementContext ctx) {
        Object exprValue = visitExpr(ctx.expr());
        System.out.print(exprValue);
        return null;
    }

    @Override
    public Object visitPrintlnStatement(KofoLangParser.PrintlnStatementContext ctx) {
        Object exprValue = visitExpr(ctx.expr());
        System.out.println(exprValue);
        return null;
    }

    /* HELPERS */
    private Integer asInt(KofoLangParser.ExprContext ctx) {
        return (Integer) visitExpr(ctx);
    }

    private Object visitExpr(KofoLangParser.ExprContext expr) {
        if (expr instanceof KofoLangParser.IntExprContext intExprContext)
            return visitIntExpr(intExprContext);
        else if (expr instanceof KofoLangParser.StringExprContext stringExprContext)
            return visitStringExpr(stringExprContext);
        else if (expr instanceof KofoLangParser.IdExprContext idExprContext)
            return visitIdExpr(idExprContext);
        else if (expr instanceof KofoLangParser.ParensExprContext parensExprContext)
            return visitParensExpr(parensExprContext);
        else if (expr instanceof KofoLangParser.MulDivExprContext mulDivExprContext)
            return visitMulDivExpr(mulDivExprContext);
        else if (expr instanceof KofoLangParser.AddSubExprContext addSubExprContext)
            return visitAddSubExpr(addSubExprContext);
        else return error();
    }

    private Integer parseInt(String str) {
        return Integer.valueOf(str);
    }

    private Object error() {
        throw new RuntimeException("Should not happen...");
    }
}
