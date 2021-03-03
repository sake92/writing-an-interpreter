// Generated from C:/projects/sake/writing-an-interpreter/antlr\KofoLang.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by KofoLangParser.
function KofoLangListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

KofoLangListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
KofoLangListener.prototype.constructor = KofoLangListener;

// Enter a parse tree produced by KofoLangParser#program.
KofoLangListener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by KofoLangParser#program.
KofoLangListener.prototype.exitProgram = function(ctx) {
};


// Enter a parse tree produced by KofoLangParser#statement.
KofoLangListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by KofoLangParser#statement.
KofoLangListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by KofoLangParser#printlnStatement.
KofoLangListener.prototype.enterPrintlnStatement = function(ctx) {
};

// Exit a parse tree produced by KofoLangParser#printlnStatement.
KofoLangListener.prototype.exitPrintlnStatement = function(ctx) {
};


// Enter a parse tree produced by KofoLangParser#printStatement.
KofoLangListener.prototype.enterPrintStatement = function(ctx) {
};

// Exit a parse tree produced by KofoLangParser#printStatement.
KofoLangListener.prototype.exitPrintStatement = function(ctx) {
};


// Enter a parse tree produced by KofoLangParser#declStatement.
KofoLangListener.prototype.enterDeclStatement = function(ctx) {
};

// Exit a parse tree produced by KofoLangParser#declStatement.
KofoLangListener.prototype.exitDeclStatement = function(ctx) {
};


// Enter a parse tree produced by KofoLangParser#assignStatement.
KofoLangListener.prototype.enterAssignStatement = function(ctx) {
};

// Exit a parse tree produced by KofoLangParser#assignStatement.
KofoLangListener.prototype.exitAssignStatement = function(ctx) {
};


// Enter a parse tree produced by KofoLangParser#IntType.
KofoLangListener.prototype.enterIntType = function(ctx) {
};

// Exit a parse tree produced by KofoLangParser#IntType.
KofoLangListener.prototype.exitIntType = function(ctx) {
};


// Enter a parse tree produced by KofoLangParser#StringType.
KofoLangListener.prototype.enterStringType = function(ctx) {
};

// Exit a parse tree produced by KofoLangParser#StringType.
KofoLangListener.prototype.exitStringType = function(ctx) {
};


// Enter a parse tree produced by KofoLangParser#StringExpr.
KofoLangListener.prototype.enterStringExpr = function(ctx) {
};

// Exit a parse tree produced by KofoLangParser#StringExpr.
KofoLangListener.prototype.exitStringExpr = function(ctx) {
};


// Enter a parse tree produced by KofoLangParser#MulDivExpr.
KofoLangListener.prototype.enterMulDivExpr = function(ctx) {
};

// Exit a parse tree produced by KofoLangParser#MulDivExpr.
KofoLangListener.prototype.exitMulDivExpr = function(ctx) {
};


// Enter a parse tree produced by KofoLangParser#IdExpr.
KofoLangListener.prototype.enterIdExpr = function(ctx) {
};

// Exit a parse tree produced by KofoLangParser#IdExpr.
KofoLangListener.prototype.exitIdExpr = function(ctx) {
};


// Enter a parse tree produced by KofoLangParser#ParensExpr.
KofoLangListener.prototype.enterParensExpr = function(ctx) {
};

// Exit a parse tree produced by KofoLangParser#ParensExpr.
KofoLangListener.prototype.exitParensExpr = function(ctx) {
};


// Enter a parse tree produced by KofoLangParser#IntExpr.
KofoLangListener.prototype.enterIntExpr = function(ctx) {
};

// Exit a parse tree produced by KofoLangParser#IntExpr.
KofoLangListener.prototype.exitIntExpr = function(ctx) {
};


// Enter a parse tree produced by KofoLangParser#AddSubExpr.
KofoLangListener.prototype.enterAddSubExpr = function(ctx) {
};

// Exit a parse tree produced by KofoLangParser#AddSubExpr.
KofoLangListener.prototype.exitAddSubExpr = function(ctx) {
};



exports.KofoLangListener = KofoLangListener;