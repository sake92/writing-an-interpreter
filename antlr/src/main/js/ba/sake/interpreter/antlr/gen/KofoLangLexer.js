// Generated from C:/projects/sake/writing-an-interpreter/antlr\KofoLang.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0012i\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003",
    "\u000b\u0003\f\u0003\f\u0003\r\u0006\rL\n\r\r\r\u000e\rM\u0003\r\u0003",
    "\r\u0003\u000e\u0005\u000eS\n\u000e\u0003\u000e\u0003\u000e\u0003\u000f",
    "\u0006\u000fX\n\u000f\r\u000f\u000e\u000fY\u0003\u0010\u0006\u0010]",
    "\n\u0010\r\u0010\u000e\u0010^\u0003\u0011\u0003\u0011\u0007\u0011c\n",
    "\u0011\f\u0011\u000e\u0011f\u000b\u0011\u0003\u0011\u0003\u0011\u0003",
    "d\u0002\u0012\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007",
    "\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f",
    "\u001d\u0010\u001f\u0011!\u0012\u0003\u0002\u0005\u0004\u0002\u000b",
    "\u000b\"\"\u0004\u0002C\\c|\u0003\u00022;\u0002m\u0002\u0003\u0003\u0002",
    "\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002",
    "\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002",
    "\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002",
    "\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002",
    "\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002",
    "\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002",
    "\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003\u0002",
    "\u0002\u0002\u0002!\u0003\u0002\u0002\u0002\u0003#\u0003\u0002\u0002",
    "\u0002\u0005%\u0003\u0002\u0002\u0002\u0007-\u0003\u0002\u0002\u0002",
    "\t/\u0003\u0002\u0002\u0002\u000b1\u0003\u0002\u0002\u0002\r7\u0003",
    "\u0002\u0002\u0002\u000f;\u0003\u0002\u0002\u0002\u0011B\u0003\u0002",
    "\u0002\u0002\u0013D\u0003\u0002\u0002\u0002\u0015F\u0003\u0002\u0002",
    "\u0002\u0017H\u0003\u0002\u0002\u0002\u0019K\u0003\u0002\u0002\u0002",
    "\u001bR\u0003\u0002\u0002\u0002\u001dW\u0003\u0002\u0002\u0002\u001f",
    "\\\u0003\u0002\u0002\u0002!`\u0003\u0002\u0002\u0002#$\u0007?\u0002",
    "\u0002$\u0004\u0003\u0002\u0002\u0002%&\u0007r\u0002\u0002&\'\u0007",
    "t\u0002\u0002\'(\u0007k\u0002\u0002()\u0007p\u0002\u0002)*\u0007v\u0002",
    "\u0002*+\u0007n\u0002\u0002+,\u0007p\u0002\u0002,\u0006\u0003\u0002",
    "\u0002\u0002-.\u0007*\u0002\u0002.\b\u0003\u0002\u0002\u0002/0\u0007",
    "+\u0002\u00020\n\u0003\u0002\u0002\u000212\u0007r\u0002\u000223\u0007",
    "t\u0002\u000234\u0007k\u0002\u000245\u0007p\u0002\u000256\u0007v\u0002",
    "\u00026\f\u0003\u0002\u0002\u000278\u0007k\u0002\u000289\u0007p\u0002",
    "\u00029:\u0007v\u0002\u0002:\u000e\u0003\u0002\u0002\u0002;<\u0007u",
    "\u0002\u0002<=\u0007v\u0002\u0002=>\u0007t\u0002\u0002>?\u0007k\u0002",
    "\u0002?@\u0007p\u0002\u0002@A\u0007i\u0002\u0002A\u0010\u0003\u0002",
    "\u0002\u0002BC\u0007,\u0002\u0002C\u0012\u0003\u0002\u0002\u0002DE\u0007",
    "1\u0002\u0002E\u0014\u0003\u0002\u0002\u0002FG\u0007-\u0002\u0002G\u0016",
    "\u0003\u0002\u0002\u0002HI\u0007/\u0002\u0002I\u0018\u0003\u0002\u0002",
    "\u0002JL\t\u0002\u0002\u0002KJ\u0003\u0002\u0002\u0002LM\u0003\u0002",
    "\u0002\u0002MK\u0003\u0002\u0002\u0002MN\u0003\u0002\u0002\u0002NO\u0003",
    "\u0002\u0002\u0002OP\b\r\u0002\u0002P\u001a\u0003\u0002\u0002\u0002",
    "QS\u0007\u000f\u0002\u0002RQ\u0003\u0002\u0002\u0002RS\u0003\u0002\u0002",
    "\u0002ST\u0003\u0002\u0002\u0002TU\u0007\f\u0002\u0002U\u001c\u0003",
    "\u0002\u0002\u0002VX\t\u0003\u0002\u0002WV\u0003\u0002\u0002\u0002X",
    "Y\u0003\u0002\u0002\u0002YW\u0003\u0002\u0002\u0002YZ\u0003\u0002\u0002",
    "\u0002Z\u001e\u0003\u0002\u0002\u0002[]\t\u0004\u0002\u0002\\[\u0003",
    "\u0002\u0002\u0002]^\u0003\u0002\u0002\u0002^\\\u0003\u0002\u0002\u0002",
    "^_\u0003\u0002\u0002\u0002_ \u0003\u0002\u0002\u0002`d\u0007$\u0002",
    "\u0002ac\u000b\u0002\u0002\u0002ba\u0003\u0002\u0002\u0002cf\u0003\u0002",
    "\u0002\u0002de\u0003\u0002\u0002\u0002db\u0003\u0002\u0002\u0002eg\u0003",
    "\u0002\u0002\u0002fd\u0003\u0002\u0002\u0002gh\u0007$\u0002\u0002h\"",
    "\u0003\u0002\u0002\u0002\b\u0002MRY^d\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function KofoLangLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

KofoLangLexer.prototype = Object.create(antlr4.Lexer.prototype);
KofoLangLexer.prototype.constructor = KofoLangLexer;

Object.defineProperty(KofoLangLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

KofoLangLexer.EOF = antlr4.Token.EOF;
KofoLangLexer.T__0 = 1;
KofoLangLexer.T__1 = 2;
KofoLangLexer.T__2 = 3;
KofoLangLexer.T__3 = 4;
KofoLangLexer.T__4 = 5;
KofoLangLexer.T__5 = 6;
KofoLangLexer.T__6 = 7;
KofoLangLexer.T__7 = 8;
KofoLangLexer.T__8 = 9;
KofoLangLexer.T__9 = 10;
KofoLangLexer.T__10 = 11;
KofoLangLexer.WS = 12;
KofoLangLexer.NL = 13;
KofoLangLexer.ID = 14;
KofoLangLexer.INT = 15;
KofoLangLexer.STRING = 16;

KofoLangLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

KofoLangLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

KofoLangLexer.prototype.literalNames = [ null, "'='", "'println'", "'('", 
                                         "')'", "'print'", "'int'", "'string'", 
                                         "'*'", "'/'", "'+'", "'-'" ];

KofoLangLexer.prototype.symbolicNames = [ null, null, null, null, null, 
                                          null, null, null, null, null, 
                                          null, null, "WS", "NL", "ID", 
                                          "INT", "STRING" ];

KofoLangLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", 
                                      "T__5", "T__6", "T__7", "T__8", "T__9", 
                                      "T__10", "WS", "NL", "ID", "INT", 
                                      "STRING" ];

KofoLangLexer.prototype.grammarFileName = "KofoLang.g4";



exports.KofoLangLexer = KofoLangLexer;

