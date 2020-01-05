// Generated from C:/projects/sake/writing-an-interpreter/antlr\KofoLang.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var KofoLangListener = require('./KofoLangListener').KofoLangListener;
var KofoLangVisitor = require('./KofoLangVisitor').KofoLangVisitor;

var grammarFileName = "KofoLang.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0012V\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0003\u0002\u0007\u0002\u0014\n\u0002\f\u0002\u000e",
    "\u0002\u0017\u000b\u0002\u0003\u0002\u0003\u0002\u0007\u0002\u001b\n",
    "\u0002\f\u0002\u000e\u0002\u001e\u000b\u0002\u0006\u0002 \n\u0002\r",
    "\u0002\u000e\u0002!\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0005\u0003(\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0005\b?\n\b\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\tI",
    "\n\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0007\tQ\n\t\f",
    "\t\u000e\tT\u000b\t\u0003\t\u0002\u0003\u0010\n\u0002\u0004\u0006\b",
    "\n\f\u000e\u0010\u0002\u0004\u0003\u0002\n\u000b\u0003\u0002\f\r\u0002",
    "Y\u0002\u0015\u0003\u0002\u0002\u0002\u0004\'\u0003\u0002\u0002\u0002",
    "\u0006)\u0003\u0002\u0002\u0002\b.\u0003\u0002\u0002\u0002\n2\u0003",
    "\u0002\u0002\u0002\f7\u0003\u0002\u0002\u0002\u000e>\u0003\u0002\u0002",
    "\u0002\u0010H\u0003\u0002\u0002\u0002\u0012\u0014\u0007\u000f\u0002",
    "\u0002\u0013\u0012\u0003\u0002\u0002\u0002\u0014\u0017\u0003\u0002\u0002",
    "\u0002\u0015\u0013\u0003\u0002\u0002\u0002\u0015\u0016\u0003\u0002\u0002",
    "\u0002\u0016\u001f\u0003\u0002\u0002\u0002\u0017\u0015\u0003\u0002\u0002",
    "\u0002\u0018\u001c\u0005\u0004\u0003\u0002\u0019\u001b\u0007\u000f\u0002",
    "\u0002\u001a\u0019\u0003\u0002\u0002\u0002\u001b\u001e\u0003\u0002\u0002",
    "\u0002\u001c\u001a\u0003\u0002\u0002\u0002\u001c\u001d\u0003\u0002\u0002",
    "\u0002\u001d \u0003\u0002\u0002\u0002\u001e\u001c\u0003\u0002\u0002",
    "\u0002\u001f\u0018\u0003\u0002\u0002\u0002 !\u0003\u0002\u0002\u0002",
    "!\u001f\u0003\u0002\u0002\u0002!\"\u0003\u0002\u0002\u0002\"\u0003\u0003",
    "\u0002\u0002\u0002#(\u0005\n\u0006\u0002$(\u0005\f\u0007\u0002%(\u0005",
    "\u0006\u0004\u0002&(\u0005\b\u0005\u0002\'#\u0003\u0002\u0002\u0002",
    "\'$\u0003\u0002\u0002\u0002\'%\u0003\u0002\u0002\u0002\'&\u0003\u0002",
    "\u0002\u0002(\u0005\u0003\u0002\u0002\u0002)*\u0005\u000e\b\u0002*+",
    "\u0007\u0010\u0002\u0002+,\u0007\u0003\u0002\u0002,-\u0005\u0010\t\u0002",
    "-\u0007\u0003\u0002\u0002\u0002./\u0007\u0010\u0002\u0002/0\u0007\u0003",
    "\u0002\u000201\u0005\u0010\t\u00021\t\u0003\u0002\u0002\u000223\u0007",
    "\u0004\u0002\u000234\u0007\u0005\u0002\u000245\u0005\u0010\t\u00025",
    "6\u0007\u0006\u0002\u00026\u000b\u0003\u0002\u0002\u000278\u0007\u0007",
    "\u0002\u000289\u0007\u0005\u0002\u00029:\u0005\u0010\t\u0002:;\u0007",
    "\u0006\u0002\u0002;\r\u0003\u0002\u0002\u0002<?\u0007\b\u0002\u0002",
    "=?\u0007\t\u0002\u0002><\u0003\u0002\u0002\u0002>=\u0003\u0002\u0002",
    "\u0002?\u000f\u0003\u0002\u0002\u0002@A\b\t\u0001\u0002AI\u0007\u0011",
    "\u0002\u0002BI\u0007\u0012\u0002\u0002CI\u0007\u0010\u0002\u0002DE\u0007",
    "\u0005\u0002\u0002EF\u0005\u0010\t\u0002FG\u0007\u0006\u0002\u0002G",
    "I\u0003\u0002\u0002\u0002H@\u0003\u0002\u0002\u0002HB\u0003\u0002\u0002",
    "\u0002HC\u0003\u0002\u0002\u0002HD\u0003\u0002\u0002\u0002IR\u0003\u0002",
    "\u0002\u0002JK\f\b\u0002\u0002KL\t\u0002\u0002\u0002LQ\u0005\u0010\t",
    "\tMN\f\u0007\u0002\u0002NO\t\u0003\u0002\u0002OQ\u0005\u0010\t\bPJ\u0003",
    "\u0002\u0002\u0002PM\u0003\u0002\u0002\u0002QT\u0003\u0002\u0002\u0002",
    "RP\u0003\u0002\u0002\u0002RS\u0003\u0002\u0002\u0002S\u0011\u0003\u0002",
    "\u0002\u0002TR\u0003\u0002\u0002\u0002\n\u0015\u001c!\'>HPR"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'='", "'println'", "'('", "')'", "'print'", 
                     "'int'", "'string'", "'*'", "'/'", "'+'", "'-'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, "WS", "NL", "ID", "INT", "STRING" ];

var ruleNames =  [ "program", "statement", "declStatement", "assignStatement", 
                   "printlnStatement", "printStatement", "type", "expr" ];

function KofoLangParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

KofoLangParser.prototype = Object.create(antlr4.Parser.prototype);
KofoLangParser.prototype.constructor = KofoLangParser;

Object.defineProperty(KofoLangParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

KofoLangParser.EOF = antlr4.Token.EOF;
KofoLangParser.T__0 = 1;
KofoLangParser.T__1 = 2;
KofoLangParser.T__2 = 3;
KofoLangParser.T__3 = 4;
KofoLangParser.T__4 = 5;
KofoLangParser.T__5 = 6;
KofoLangParser.T__6 = 7;
KofoLangParser.T__7 = 8;
KofoLangParser.T__8 = 9;
KofoLangParser.T__9 = 10;
KofoLangParser.T__10 = 11;
KofoLangParser.WS = 12;
KofoLangParser.NL = 13;
KofoLangParser.ID = 14;
KofoLangParser.INT = 15;
KofoLangParser.STRING = 16;

KofoLangParser.RULE_program = 0;
KofoLangParser.RULE_statement = 1;
KofoLangParser.RULE_declStatement = 2;
KofoLangParser.RULE_assignStatement = 3;
KofoLangParser.RULE_printlnStatement = 4;
KofoLangParser.RULE_printStatement = 5;
KofoLangParser.RULE_type = 6;
KofoLangParser.RULE_expr = 7;


function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KofoLangParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.NL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(KofoLangParser.NL);
    } else {
        return this.getToken(KofoLangParser.NL, i);
    }
};


ProgramContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof KofoLangListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof KofoLangListener ) {
        listener.exitProgram(this);
	}
};

ProgramContext.prototype.accept = function(visitor) {
    if ( visitor instanceof KofoLangVisitor ) {
        return visitor.visitProgram(this);
    } else {
        return visitor.visitChildren(this);
    }
};




KofoLangParser.ProgramContext = ProgramContext;

KofoLangParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, KofoLangParser.RULE_program);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 19;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===KofoLangParser.NL) {
            this.state = 16;
            this.match(KofoLangParser.NL);
            this.state = 21;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 29; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 22;
            this.statement();
            this.state = 26;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===KofoLangParser.NL) {
                this.state = 23;
                this.match(KofoLangParser.NL);
                this.state = 28;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 31; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << KofoLangParser.T__1) | (1 << KofoLangParser.T__4) | (1 << KofoLangParser.T__5) | (1 << KofoLangParser.T__6) | (1 << KofoLangParser.ID))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KofoLangParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.printlnStatement = function() {
    return this.getTypedRuleContext(PrintlnStatementContext,0);
};

StatementContext.prototype.printStatement = function() {
    return this.getTypedRuleContext(PrintStatementContext,0);
};

StatementContext.prototype.declStatement = function() {
    return this.getTypedRuleContext(DeclStatementContext,0);
};

StatementContext.prototype.assignStatement = function() {
    return this.getTypedRuleContext(AssignStatementContext,0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof KofoLangListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof KofoLangListener ) {
        listener.exitStatement(this);
	}
};

StatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof KofoLangVisitor ) {
        return visitor.visitStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




KofoLangParser.StatementContext = StatementContext;

KofoLangParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, KofoLangParser.RULE_statement);
    try {
        this.state = 37;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case KofoLangParser.T__1:
            this.enterOuterAlt(localctx, 1);
            this.state = 33;
            this.printlnStatement();
            break;
        case KofoLangParser.T__4:
            this.enterOuterAlt(localctx, 2);
            this.state = 34;
            this.printStatement();
            break;
        case KofoLangParser.T__5:
        case KofoLangParser.T__6:
            this.enterOuterAlt(localctx, 3);
            this.state = 35;
            this.declStatement();
            break;
        case KofoLangParser.ID:
            this.enterOuterAlt(localctx, 4);
            this.state = 36;
            this.assignStatement();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DeclStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KofoLangParser.RULE_declStatement;
    this.id = null; // Token
    return this;
}

DeclStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclStatementContext.prototype.constructor = DeclStatementContext;

DeclStatementContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

DeclStatementContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

DeclStatementContext.prototype.ID = function() {
    return this.getToken(KofoLangParser.ID, 0);
};

DeclStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof KofoLangListener ) {
        listener.enterDeclStatement(this);
	}
};

DeclStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof KofoLangListener ) {
        listener.exitDeclStatement(this);
	}
};

DeclStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof KofoLangVisitor ) {
        return visitor.visitDeclStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




KofoLangParser.DeclStatementContext = DeclStatementContext;

KofoLangParser.prototype.declStatement = function() {

    var localctx = new DeclStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, KofoLangParser.RULE_declStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 39;
        this.type();
        this.state = 40;
        localctx.id = this.match(KofoLangParser.ID);
        this.state = 41;
        this.match(KofoLangParser.T__0);
        this.state = 42;
        this.expr(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AssignStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KofoLangParser.RULE_assignStatement;
    this.id = null; // Token
    return this;
}

AssignStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignStatementContext.prototype.constructor = AssignStatementContext;

AssignStatementContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

AssignStatementContext.prototype.ID = function() {
    return this.getToken(KofoLangParser.ID, 0);
};

AssignStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof KofoLangListener ) {
        listener.enterAssignStatement(this);
	}
};

AssignStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof KofoLangListener ) {
        listener.exitAssignStatement(this);
	}
};

AssignStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof KofoLangVisitor ) {
        return visitor.visitAssignStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




KofoLangParser.AssignStatementContext = AssignStatementContext;

KofoLangParser.prototype.assignStatement = function() {

    var localctx = new AssignStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, KofoLangParser.RULE_assignStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 44;
        localctx.id = this.match(KofoLangParser.ID);
        this.state = 45;
        this.match(KofoLangParser.T__0);
        this.state = 46;
        this.expr(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PrintlnStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KofoLangParser.RULE_printlnStatement;
    return this;
}

PrintlnStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrintlnStatementContext.prototype.constructor = PrintlnStatementContext;

PrintlnStatementContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

PrintlnStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof KofoLangListener ) {
        listener.enterPrintlnStatement(this);
	}
};

PrintlnStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof KofoLangListener ) {
        listener.exitPrintlnStatement(this);
	}
};

PrintlnStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof KofoLangVisitor ) {
        return visitor.visitPrintlnStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




KofoLangParser.PrintlnStatementContext = PrintlnStatementContext;

KofoLangParser.prototype.printlnStatement = function() {

    var localctx = new PrintlnStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, KofoLangParser.RULE_printlnStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 48;
        this.match(KofoLangParser.T__1);
        this.state = 49;
        this.match(KofoLangParser.T__2);
        this.state = 50;
        this.expr(0);
        this.state = 51;
        this.match(KofoLangParser.T__3);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PrintStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KofoLangParser.RULE_printStatement;
    return this;
}

PrintStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrintStatementContext.prototype.constructor = PrintStatementContext;

PrintStatementContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

PrintStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof KofoLangListener ) {
        listener.enterPrintStatement(this);
	}
};

PrintStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof KofoLangListener ) {
        listener.exitPrintStatement(this);
	}
};

PrintStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof KofoLangVisitor ) {
        return visitor.visitPrintStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




KofoLangParser.PrintStatementContext = PrintStatementContext;

KofoLangParser.prototype.printStatement = function() {

    var localctx = new PrintStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, KofoLangParser.RULE_printStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 53;
        this.match(KofoLangParser.T__4);
        this.state = 54;
        this.match(KofoLangParser.T__2);
        this.state = 55;
        this.expr(0);
        this.state = 56;
        this.match(KofoLangParser.T__3);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KofoLangParser.RULE_type;
    return this;
}

TypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeContext.prototype.constructor = TypeContext;


 
TypeContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function StringTypeContext(parser, ctx) {
	TypeContext.call(this, parser);
    TypeContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StringTypeContext.prototype = Object.create(TypeContext.prototype);
StringTypeContext.prototype.constructor = StringTypeContext;

KofoLangParser.StringTypeContext = StringTypeContext;

StringTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof KofoLangListener ) {
        listener.enterStringType(this);
	}
};

StringTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof KofoLangListener ) {
        listener.exitStringType(this);
	}
};

StringTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof KofoLangVisitor ) {
        return visitor.visitStringType(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IntTypeContext(parser, ctx) {
	TypeContext.call(this, parser);
    TypeContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IntTypeContext.prototype = Object.create(TypeContext.prototype);
IntTypeContext.prototype.constructor = IntTypeContext;

KofoLangParser.IntTypeContext = IntTypeContext;

IntTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof KofoLangListener ) {
        listener.enterIntType(this);
	}
};

IntTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof KofoLangListener ) {
        listener.exitIntType(this);
	}
};

IntTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof KofoLangVisitor ) {
        return visitor.visitIntType(this);
    } else {
        return visitor.visitChildren(this);
    }
};



KofoLangParser.TypeContext = TypeContext;

KofoLangParser.prototype.type = function() {

    var localctx = new TypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, KofoLangParser.RULE_type);
    try {
        this.state = 60;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case KofoLangParser.T__5:
            localctx = new IntTypeContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 58;
            this.match(KofoLangParser.T__5);
            break;
        case KofoLangParser.T__6:
            localctx = new StringTypeContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 59;
            this.match(KofoLangParser.T__6);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KofoLangParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;


 
ExprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function StringExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StringExprContext.prototype = Object.create(ExprContext.prototype);
StringExprContext.prototype.constructor = StringExprContext;

KofoLangParser.StringExprContext = StringExprContext;

StringExprContext.prototype.STRING = function() {
    return this.getToken(KofoLangParser.STRING, 0);
};
StringExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof KofoLangListener ) {
        listener.enterStringExpr(this);
	}
};

StringExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof KofoLangListener ) {
        listener.exitStringExpr(this);
	}
};

StringExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof KofoLangVisitor ) {
        return visitor.visitStringExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MulDivExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.left = null; // ExprContext;
    this.op = null; // Token;
    this.right = null; // ExprContext;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MulDivExprContext.prototype = Object.create(ExprContext.prototype);
MulDivExprContext.prototype.constructor = MulDivExprContext;

KofoLangParser.MulDivExprContext = MulDivExprContext;

MulDivExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
MulDivExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof KofoLangListener ) {
        listener.enterMulDivExpr(this);
	}
};

MulDivExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof KofoLangListener ) {
        listener.exitMulDivExpr(this);
	}
};

MulDivExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof KofoLangVisitor ) {
        return visitor.visitMulDivExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IdExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdExprContext.prototype = Object.create(ExprContext.prototype);
IdExprContext.prototype.constructor = IdExprContext;

KofoLangParser.IdExprContext = IdExprContext;

IdExprContext.prototype.ID = function() {
    return this.getToken(KofoLangParser.ID, 0);
};
IdExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof KofoLangListener ) {
        listener.enterIdExpr(this);
	}
};

IdExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof KofoLangListener ) {
        listener.exitIdExpr(this);
	}
};

IdExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof KofoLangVisitor ) {
        return visitor.visitIdExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ParensExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParensExprContext.prototype = Object.create(ExprContext.prototype);
ParensExprContext.prototype.constructor = ParensExprContext;

KofoLangParser.ParensExprContext = ParensExprContext;

ParensExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
ParensExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof KofoLangListener ) {
        listener.enterParensExpr(this);
	}
};

ParensExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof KofoLangListener ) {
        listener.exitParensExpr(this);
	}
};

ParensExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof KofoLangVisitor ) {
        return visitor.visitParensExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IntExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IntExprContext.prototype = Object.create(ExprContext.prototype);
IntExprContext.prototype.constructor = IntExprContext;

KofoLangParser.IntExprContext = IntExprContext;

IntExprContext.prototype.INT = function() {
    return this.getToken(KofoLangParser.INT, 0);
};
IntExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof KofoLangListener ) {
        listener.enterIntExpr(this);
	}
};

IntExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof KofoLangListener ) {
        listener.exitIntExpr(this);
	}
};

IntExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof KofoLangVisitor ) {
        return visitor.visitIntExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AddSubExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.left = null; // ExprContext;
    this.op = null; // Token;
    this.right = null; // ExprContext;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AddSubExprContext.prototype = Object.create(ExprContext.prototype);
AddSubExprContext.prototype.constructor = AddSubExprContext;

KofoLangParser.AddSubExprContext = AddSubExprContext;

AddSubExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
AddSubExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof KofoLangListener ) {
        listener.enterAddSubExpr(this);
	}
};

AddSubExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof KofoLangListener ) {
        listener.exitAddSubExpr(this);
	}
};

AddSubExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof KofoLangVisitor ) {
        return visitor.visitAddSubExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



KofoLangParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 14;
    this.enterRecursionRule(localctx, 14, KofoLangParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 70;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case KofoLangParser.INT:
            localctx = new IntExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 63;
            this.match(KofoLangParser.INT);
            break;
        case KofoLangParser.STRING:
            localctx = new StringExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 64;
            this.match(KofoLangParser.STRING);
            break;
        case KofoLangParser.ID:
            localctx = new IdExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 65;
            this.match(KofoLangParser.ID);
            break;
        case KofoLangParser.T__2:
            localctx = new ParensExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 66;
            this.match(KofoLangParser.T__2);
            this.state = 67;
            this.expr(0);
            this.state = 68;
            this.match(KofoLangParser.T__3);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 80;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 78;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new MulDivExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, KofoLangParser.RULE_expr);
                    this.state = 72;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 73;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===KofoLangParser.T__7 || _la===KofoLangParser.T__8)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 74;
                    localctx.right = this.expr(7);
                    break;

                case 2:
                    localctx = new AddSubExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, KofoLangParser.RULE_expr);
                    this.state = 75;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 76;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===KofoLangParser.T__9 || _la===KofoLangParser.T__10)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 77;
                    localctx.right = this.expr(6);
                    break;

                } 
            }
            this.state = 82;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


KofoLangParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 7:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

KofoLangParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 6);
		case 1:
			return this.precpred(this._ctx, 5);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.KofoLangParser = KofoLangParser;
