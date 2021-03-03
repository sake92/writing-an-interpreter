// Generated from C:/projects/sake/writing-an-interpreter/antlr\KofoLang.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by KofoLangParser.

function KofoLangVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

KofoLangVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
KofoLangVisitor.prototype.constructor = KofoLangVisitor;

// Visit a parse tree produced by KofoLangParser#program.
KofoLangVisitor.prototype.visitProgram = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by KofoLangParser#statement.
KofoLangVisitor.prototype.visitStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by KofoLangParser#printlnStatement.
KofoLangVisitor.prototype.visitPrintlnStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by KofoLangParser#printStatement.
KofoLangVisitor.prototype.visitPrintStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by KofoLangParser#declStatement.
KofoLangVisitor.prototype.visitDeclStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by KofoLangParser#assignStatement.
KofoLangVisitor.prototype.visitAssignStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by KofoLangParser#IntType.
KofoLangVisitor.prototype.visitIntType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by KofoLangParser#StringType.
KofoLangVisitor.prototype.visitStringType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by KofoLangParser#StringExpr.
KofoLangVisitor.prototype.visitStringExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by KofoLangParser#MulDivExpr.
KofoLangVisitor.prototype.visitMulDivExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by KofoLangParser#IdExpr.
KofoLangVisitor.prototype.visitIdExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by KofoLangParser#ParensExpr.
KofoLangVisitor.prototype.visitParensExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by KofoLangParser#IntExpr.
KofoLangVisitor.prototype.visitIntExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by KofoLangParser#AddSubExpr.
KofoLangVisitor.prototype.visitAddSubExpr = function(ctx) {
  return this.visitChildren(ctx);
};



exports.KofoLangVisitor = KofoLangVisitor;