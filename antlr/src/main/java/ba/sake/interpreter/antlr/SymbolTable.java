package ba.sake.interpreter.antlr;

import java.util.HashMap;
import java.util.Map;

public class SymbolTable {

    private Map<String, Object> bindings = new HashMap<>();

    public void define(String key, Object value) {
        if (bindings.containsKey(key))
            throw new RuntimeException("Symbol already defined: " + key);
        else bindings.put(key, value);
    }

    public void set(String key, Object value) {
        bindings.put(key, value);
    }

    public Object get(String key) {
        return bindings.get(key);
    }
}
