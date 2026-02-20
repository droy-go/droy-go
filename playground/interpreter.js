// Droy Interpreter for Browser
class DroyInterpreter {
    constructor() {
        this.variables = {};
        this.links = {};
        this.output = [];
        this.commands = {
            employment: false,
            running: false,
            pressure: 0,
            lock: false
        };
    }
    
    tokenize(code) {
        const tokens = [];
        const lines = code.split('\n');
        
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            let col = 0;
            
            while (col < line.length) {
                while (col < line.length && /\s/.test(line[col])) col++;
                if (col >= line.length) break;
                
                if (line.substr(col, 2) === '//') break;
                
                if (line[col] === '"' || line[col] === "'") {
                    const quote = line[col];
                    let str = '';
                    col++;
                    while (col < line.length && line[col] !== quote) {
                        str += line[col];
                        col++;
                    }
                    col++;
                    tokens.push({ type: 'STRING', value: str, line: i + 1, col });
                    continue;
                }
                
                if (/\d/.test(line[col])) {
                    let num = '';
                    while (col < line.length && (/\d/.test(line[col]) || line[col] === '.')) {
                        num += line[col];
                        col++;
                    }
                    tokens.push({ type: 'NUMBER', value: parseFloat(num), line: i + 1, col });
                    continue;
                }
                
                if (line.substr(col, 2) === '*/') {
                    let cmd = '';
                    col += 2;
                    while (col < line.length && /[a-zA-Z]/.test(line[col])) {
                        cmd += line[col];
                        col++;
                    }
                    tokens.push({ type: 'COMMAND', value: '*/' + cmd, line: i + 1, col });
                    continue;
                }
                
                if (line[col] === '@') {
                    let varName = '@';
                    col++;
                    while (col < line.length && /[a-zA-Z0-9_]/.test(line[col])) {
                        varName += line[col];
                        col++;
                    }
                    tokens.push({ type: 'VAR', value: varName, line: i + 1, col });
                    continue;
                }
                
                if (line[col] === '~') {
                    const shorthand = line.substr(col, 2);
                    if (['~s', '~r', '~e'].includes(shorthand)) {
                        tokens.push({ type: 'KEYWORD', value: shorthand, line: i + 1, col });
                        col += 2;
                        continue;
                    }
                }
                
                if (/[a-zA-Z]/.test(line[col])) {
                    let word = '';
                    while (col < line.length && /[a-zA-Z0-9_-]/.test(line[col])) {
                        word += line[col];
                        col++;
                    }
                    
                    const keywords = ['set', 'ret', 'em', 'text', 'txt', 't', 'fe', 'f', 'for',
                                     'sty', 'pkg', 'media', 'link', 'a-link', 'yoex--links',
                                     'link-go', 'create-link', 'open-link', 'api', 'id', 'block', 'key'];
                    
                    tokens.push({ type: keywords.includes(word) ? 'KEYWORD' : 'IDENT', value: word, line: i + 1, col });
                    continue;
                }
                
                if (/[+\-=*/]/.test(line[col])) {
                    tokens.push({ type: 'OP', value: line[col], line: i + 1, col });
                    col++;
                    continue;
                }
                
                if (/[{}()\[\]:;,]/.test(line[col])) {
                    tokens.push({ type: 'DELIM', value: line[col], line: i + 1, col });
                    col++;
                    continue;
                }
                
                col++;
            }
        }
        
        return tokens;
    }
    
    execute(code) {
        this.output = [];
        this.variables = {};
        const tokens = this.tokenize(code);
        const ast = { type: 'PROGRAM', body: [] };
        
        let i = 0;
        while (i < tokens.length) {
            const token = tokens[i];
            
            if (token.type === 'KEYWORD' && (token.value === 'set' || token.value === '~s')) {
                i++;
                const varName = tokens[i]?.value;
                i += 2;
                const value = this.evaluateExpression(tokens, i);
                this.variables[varName] = value;
                this.output.push(`[SET] ${varName} = ${value}`);
                ast.body.push({ type: 'SET', var: varName, value });
                while (i < tokens.length && tokens[i].line === token.line) i++;
                continue;
            }
            
            if (token.type === 'KEYWORD' && (token.value === 'ret' || token.value === '~r')) {
                i++;
                const value = this.evaluateExpression(tokens, i);
                this.output.push(`[RET] ${value}`);
                ast.body.push({ type: 'RET', value });
                while (i < tokens.length && tokens[i].line === token.line) i++;
                continue;
            }
            
            if (token.type === 'KEYWORD' && (token.value === 'em' || token.value === '~e')) {
                i++;
                const value = this.evaluateExpression(tokens, i);
                this.output.push(`[EM] ${value}`);
                ast.body.push({ type: 'EM', value });
                while (i < tokens.length && tokens[i].line === token.line) i++;
                continue;
            }
            
            if (token.type === 'KEYWORD' && ['text', 'txt', 't'].includes(token.value)) {
                i++;
                const value = this.evaluateExpression(tokens, i);
                this.output.push(`[TEXT] ${value}`);
                ast.body.push({ type: 'TEXT', value });
                while (i < tokens.length && tokens[i].line === token.line) i++;
                continue;
            }
            
            if (token.type === 'COMMAND') {
                const cmd = token.value.substring(2);
                this.executeCommand(cmd);
                ast.body.push({ type: 'COMMAND', cmd });
                i++;
                continue;
            }
            
            if (token.type === 'KEYWORD' && token.value === 'link') {
                i++;
                const linkData = { type: 'LINK', id: '', api: '' };
                while (i < tokens.length && tokens[i].line === token.line) {
                    if (tokens[i].value === 'id') {
                        i += 2;
                        linkData.id = tokens[i]?.value || '';
                    } else if (tokens[i].value === 'api') {
                        i += 2;
                        linkData.api = tokens[i]?.value || '';
                    }
                    i++;
                }
                this.links[linkData.id] = linkData.api;
                this.output.push(`[LINK] تعريف: ${linkData.id} = ${linkData.api}`);
                ast.body.push(linkData);
                continue;
            }
            
            if (token.type === 'KEYWORD' && token.value === 'create-link') {
                i += 2;
                const id = tokens[i]?.value;
                if (this.links[id]) {
                    this.output.push(`[LINK] إنشاء: ${id}`);
                } else {
                    this.output.push(`[LINK] خطأ: ${id} غير موجود`);
                }
                ast.body.push({ type: 'CREATE_LINK', id });
                i++;
                continue;
            }
            
            if (token.type === 'KEYWORD' && token.value === 'open-link') {
                i += 2;
                const id = tokens[i]?.value;
                this.output.push(`[LINK] فتح: ${id}`);
                ast.body.push({ type: 'OPEN_LINK', id });
                i++;
                continue;
            }
            
            if (token.type === 'KEYWORD' && token.value === 'pkg') {
                i++;
                const name = tokens[i]?.value;
                this.output.push(`[PKG] الحزمة: ${name}`);
                ast.body.push({ type: 'PKG', name });
                i++;
                continue;
            }
            
            i++;
        }
        
        return { output: this.output, tokens, ast };
    }
    
    evaluateExpression(tokens, startIndex) {
        let result = '';
        let i = startIndex;
        let expectingValue = true;
        
        while (i < tokens.length) {
            const token = tokens[i];
            
            if (expectingValue) {
                if (token.type === 'STRING') {
                    result += token.value;
                    expectingValue = false;
                } else if (token.type === 'NUMBER') {
                    result += token.value;
                    expectingValue = false;
                } else if (token.type === 'VAR') {
                    result += this.variables[token.value] || token.value;
                    expectingValue = false;
                } else if (token.type === 'IDENT') {
                    result += this.variables[token.value] || token.value;
                    expectingValue = false;
                }
            } else {
                if (token.type === 'OP' && token.value === '+') {
                    // Concatenation
                } else if (token.type === 'OP') {
                    const left = parseFloat(result) || 0;
                    i++;
                    const rightToken = tokens[i];
                    let right = 0;
                    if (rightToken?.type === 'NUMBER') right = rightToken.value;
                    else if (rightToken?.type === 'VAR') right = parseFloat(this.variables[rightToken.value]) || 0;
                    
                    let calcResult = left;
                    if (token.value === '+') calcResult = left + right;
                    else if (token.value === '-') calcResult = left - right;
                    else if (token.value === '*') calcResult = left * right;
                    else if (token.value === '/') calcResult = right !== 0 ? left / right : 0;
                    
                    result = String(calcResult);
                    continue;
                } else {
                    break;
                }
            }
            
            i++;
        }
        
        return result || '';
    }
    
    executeCommand(cmd) {
        switch (cmd) {
            case 'employment':
                this.commands.employment = true;
                this.output.push('[CMD] تم تفعيل الوظيفة');
                break;
            case 'Running':
                this.commands.running = true;
                this.output.push('[CMD] النظام يعمل');
                break;
            case 'pressure':
                this.commands.pressure++;
                this.output.push(`[CMD] مستوى الضغط: ${this.commands.pressure}`);
                break;
            case 'lock':
                this.commands.lock = true;
                this.output.push('[CMD] تم قفل النظام');
                break;
        }
    }
}
