// Generated from C:/projects/sake/writing-an-interpreter/antlr\KofoLang.g4 by ANTLR 4.7.2
package ba.sake.interpreter.antlr.gen;
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link KofoLangParser}.
 */
public interface KofoLangListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link KofoLangParser#program}.
	 * @param ctx the parse tree
	 */
	void enterProgram(KofoLangParser.ProgramContext ctx);
	/**
	 * Exit a parse tree produced by {@link KofoLangParser#program}.
	 * @param ctx the parse tree
	 */
	void exitProgram(KofoLangParser.ProgramContext ctx);
	/**
	 * Enter a parse tree produced by {@link KofoLangParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterStatement(KofoLangParser.StatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link KofoLangParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitStatement(KofoLangParser.StatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link KofoLangParser#declStatement}.
	 * @param ctx the parse tree
	 */
	void enterDeclStatement(KofoLangParser.DeclStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link KofoLangParser#declStatement}.
	 * @param ctx the parse tree
	 */
	void exitDeclStatement(KofoLangParser.DeclStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link KofoLangParser#assignStatement}.
	 * @param ctx the parse tree
	 */
	void enterAssignStatement(KofoLangParser.AssignStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link KofoLangParser#assignStatement}.
	 * @param ctx the parse tree
	 */
	void exitAssignStatement(KofoLangParser.AssignStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link KofoLangParser#printlnStatement}.
	 * @param ctx the parse tree
	 */
	void enterPrintlnStatement(KofoLangParser.PrintlnStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link KofoLangParser#printlnStatement}.
	 * @param ctx the parse tree
	 */
	void exitPrintlnStatement(KofoLangParser.PrintlnStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link KofoLangParser#printStatement}.
	 * @param ctx the parse tree
	 */
	void enterPrintStatement(KofoLangParser.PrintStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link KofoLangParser#printStatement}.
	 * @param ctx the parse tree
	 */
	void exitPrintStatement(KofoLangParser.PrintStatementContext ctx);
	/**
	 * Enter a parse tree produced by the {@code IntType}
	 * labeled alternative in {@link KofoLangParser#type}.
	 * @param ctx the parse tree
	 */
	void enterIntType(KofoLangParser.IntTypeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code IntType}
	 * labeled alternative in {@link KofoLangParser#type}.
	 * @param ctx the parse tree
	 */
	void exitIntType(KofoLangParser.IntTypeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code StringType}
	 * labeled alternative in {@link KofoLangParser#type}.
	 * @param ctx the parse tree
	 */
	void enterStringType(KofoLangParser.StringTypeContext ctx);
	/**
	 * Exit a parse tree produced by the {@code StringType}
	 * labeled alternative in {@link KofoLangParser#type}.
	 * @param ctx the parse tree
	 */
	void exitStringType(KofoLangParser.StringTypeContext ctx);
	/**
	 * Enter a parse tree produced by the {@code StringExpr}
	 * labeled alternative in {@link KofoLangParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterStringExpr(KofoLangParser.StringExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code StringExpr}
	 * labeled alternative in {@link KofoLangParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitStringExpr(KofoLangParser.StringExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code MulDivExpr}
	 * labeled alternative in {@link KofoLangParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterMulDivExpr(KofoLangParser.MulDivExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code MulDivExpr}
	 * labeled alternative in {@link KofoLangParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitMulDivExpr(KofoLangParser.MulDivExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code IdExpr}
	 * labeled alternative in {@link KofoLangParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterIdExpr(KofoLangParser.IdExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code IdExpr}
	 * labeled alternative in {@link KofoLangParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitIdExpr(KofoLangParser.IdExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code ParensExpr}
	 * labeled alternative in {@link KofoLangParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterParensExpr(KofoLangParser.ParensExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code ParensExpr}
	 * labeled alternative in {@link KofoLangParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitParensExpr(KofoLangParser.ParensExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code IntExpr}
	 * labeled alternative in {@link KofoLangParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterIntExpr(KofoLangParser.IntExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code IntExpr}
	 * labeled alternative in {@link KofoLangParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitIntExpr(KofoLangParser.IntExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code AddSubExpr}
	 * labeled alternative in {@link KofoLangParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterAddSubExpr(KofoLangParser.AddSubExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code AddSubExpr}
	 * labeled alternative in {@link KofoLangParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitAddSubExpr(KofoLangParser.AddSubExprContext ctx);
}