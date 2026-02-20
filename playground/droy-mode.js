// Droy Language Mode for CodeMirror
CodeMirror.defineMode("droy", function() {
    
    const keywords = {
        "set": true, "~s": true,
        "ret": true, "~r": true,
        "em": true, "~e": true,
        "text": true, "txt": true, "t": true,
        "fe": true, "f": true, "for": true,
        "sty": true, "pkg": true, "media": true,
        "link": true, "a-link": true, "yoex--links": true,
        "link-go": true, "create-link": true, "open-link": true,
        "api": true, "id": true,
        "block": true, "key": true
    };
    
    const commands = {
        "*/employment": true,
        "*/Running": true,
        "*/pressure": true,
        "*/lock": true
    };
    
    const specialVars = {
        "@si": true, "@ui": true, "@yui": true, "@pop": true, "@abc": true
    };
    
    function tokenBase(stream, state) {
        if (stream.eatSpace()) return null;
        
        // Comments
        if (stream.match("//")) {
            stream.skipToEnd();
            return "comment";
        }
        
        if (stream.match("/*")) {
            state.inComment = true;
            return "comment";
        }
        
        if (state.inComment) {
            if (stream.match("*/")) state.inComment = false;
            else stream.next();
            return "comment";
        }
        
        // Strings
        if (stream.match('"') || stream.match("'")) {
            state.inString = true;
            return "string";
        }
        
        if (state.inString) {
            if (stream.match('"') || stream.match("'")) state.inString = false;
            else stream.next();
            return "string";
        }
        
        // Commands
        if (stream.match("*/")) {
            stream.eatWhile(/[a-zA-Z]/);
            return "atom";
        }
        
        // Special variables
        if (stream.match("@")) {
            stream.eatWhile(/[a-zA-Z0-9_]/);
            return "variable-2";
        }
        
        // Shorthand
        if (stream.match("~")) {
            const c = stream.next();
            if (c === 's' || c === 'r' || c === 'e') return "keyword";
            return "operator";
        }
        
        // Numbers
        if (stream.match(/^[0-9]+(\.[0-9]+)?/)) {
            return "number";
        }
        
        // Keywords and identifiers
        if (stream.match(/^[a-zA-Z][a-zA-Z0-9_-]*/)) {
            const word = stream.current();
            if (keywords[word]) return "keyword";
            return "variable";
        }
        
        // Operators
        if (stream.match(/[+\-=*/]/)) {
            return "operator";
        }
        
        // Delimiters
        if (stream.match(/[{}()\[\]:;,]/)) {
            return null;
        }
        
        stream.next();
        return null;
    }
    
    return {
        startState: function() {
            return { inComment: false, inString: false };
        },
        token: function(stream, state) {
            return tokenBase(stream, state);
        },
        lineComment: "//",
        blockCommentStart: "/*",
        blockCommentEnd: "*/"
    };
});

CodeMirror.defineMIME("text/x-droy", "droy");
