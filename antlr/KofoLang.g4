grammar KofoLang;

/* PARSER */
program: NL* (statement NL*)+ ;

statement
    : printlnStatement
    | printStatement
    | declStatement
    | assignStatement
;

printlnStatement    : 'println' '(' expr ')' ;
printStatement      : 'print' '(' expr ')' ;
declStatement       : type id=ID '=' expr;
assignStatement     : id=ID '=' expr;

type
    : 'int'     # IntType
    | 'string'  # StringType
;

expr
    : left=expr op=('*'|'/') right=expr # MulDivExpr
    | left=expr op=('+'|'-') right=expr # AddSubExpr
    | INT                               # IntExpr
    | STRING                            # StringExpr
    | ID                                # IdExpr
    | '(' expr ')'                      # ParensExpr
;

/* LEXER */
WS      : [ \t]+ -> skip ;
NL      : '\r'? '\n' ;

ID      : [a-zA-Z]+ ;
INT     : [0-9]+;
STRING  : '"' .*? '"' ;
