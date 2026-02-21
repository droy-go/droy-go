

<div align="center">

![Droy Logo](https://img.shields.io/badge/◈-Droy%20Language-FF6B6B?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xMiAyTDQuNSAyMC4yOUw1LjIxIDIxTDEyIDE4TDE4Ljc5IDIxTDE5LjUgMjAuMjlMMTIgMloiLz48L3N2Zz4=&logoColor=white)

# ◈ Droy Programming Language

**A Modern, Powerful & Elegant Programming Language**

[![License: MIT](https://img.shields.io/badge/License-MIT-4ECDC4?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/Version-1.0.0-FF6B6B?style=for-the-badge)]()
[![Made with Love](https://img.shields.io/badge/Made%20with-❤-FF6B6B?style=for-the-badge)]()
[![Stars](https://img.shields.io/badge/⭐-Star%20Us-FFD93D?style=for-the-badge)]()

> *Code with Power, Build with Style*

[🚀 Quick Start](#-quick-start) • [✨ Features](#-features) • [📚 Documentation](#-language-reference) • [🤝 Contributing](#-contributing)

</div>

---

## 🎯 What is Droy?

<div align="center">

| 🎓 Easy to Learn | ⚡ Powerful | 🔗 Flexible | 🌍 Modern |
|:---:|:---:|:---:|:---:|
| Simple & intuitive syntax | Variables & arithmetic operations | Advanced linking system | Professional IDE with RTL support |

</div>

### 👋 Hello World

```droy
~s @si = "Hello"
~s @ui = "World"
em @si + " " + @ui + "!"
```

---

## ✨ Features

<div align="center">

### 🚀 Complete Programming Language

| Feature | Status | Description |
|:--------|:------:|-------------|
| Lexer & Parser | ✅ | Built from scratch |
| AST | ✅ | Abstract Syntax Tree |
| Interpreter | ✅ | Code execution engine |
| LLVM Backend | ✅ | High-performance compilation |

### 🎨 Professional Editor

| Feature | Status | Description |
|:--------|:------:|-------------|
| Syntax Highlighting | ✅ | Custom language support |
| Auto-completion | ✅ | Intelligent code completion |
| Live Preview | ✅ | Real-time code preview |
| RTL Support | ✅ | Full Arabic/RTL support |

</div>

### 🔗 Advanced Linking System

```droy
link id: "home" api: "https://example.com"
create-link: "home"
link-go: "home"
```

### ⚡ Powerful Commands

```droy
*/employment    # Activate function
*/Running       # Run system
*/pressure      # Increase pressure
*/lock          # Lock system
```

---

## 📥 Installation

<div align="center">

### 🔧 Build from Source

```bash
# Clone the repository
git clone https://github.com/droy-go/droy.git
cd droy

# Build the compiler
make

# Run an example
./bin/droy examples/hello.droy
```

</div>

### 📱 Download Editor

<div align="center">

| Platform | Link | Size | Status |
|:--------:|:----:|:----:|:------:|
| 🤖 Android APK | [📥 Download](#) | 15 MB | ✅ Available |
| 🌐 Web Editor | [Open Editor](https://droy-go.github.io/droy-go/editor/) | - | ✅ Online |
| 🖥️ Desktop | [Coming Soon](#) | - | 🚧 In Development |

</div>

---

## 🚀 Quick Start

### 📦 Variables

<table>
<tr>
<td width="50%">

**Full Syntax:**
```droy
set name = "Droy"
```

</td>
<td width="50%">

**Short Syntax:**
```droy
~s version = "1.0.0"
```

</td>
</tr>
</table>

**Special Variables:**
```droy
@si = 100    # System Integer
@ui = 200    # User Integer
```

### ➕ Arithmetic Operations

<div align="center">

| Operation | Code | Result |
|:---------:|:----:|:------:|
| ➕ Addition | `set sum = a + b` | 15 |
| ➖ Subtraction | `set diff = a - b` | 5 |
| ✖️ Multiplication | `set prod = a * b` | 50 |
| ➗ Division | `set quot = a / b` | 2 |

</div>

### 🔗 Link System

```droy
// 1️⃣ Define link
link id: "google" api: "https://google.com"

// 2️⃣ Create link
create-link: "google"

// 3️⃣ Open link
open-link: "google"
link-go: "google"
```

### 🧱 Blocks & Styling

```droy
block: key("main") {
    set title = "Main Block"
    text title
    
    sty {
        set color = "blue"
        em "Styled!"
    }
}
```

---

## 📚 Language Reference

<div align="center">

### 🔑 Keywords

| Keyword | Short | Description | Usage |
|:-------:|:-----:|:-----------:|:-----:|
| `set` | `~s` | Define variable | `~s x = 10` |
| `ret` | `~r` | Return value | `~r x` |
| `em` | `~e` | Print expression | `~e "Hello"` |
| `text` | `txt`, `t` | Print text | `t "Hello"` |
| `for` | - | Loop statement | `for i in range` |
| `sty` | - | Style block | `sty { ... }` |
| `pkg` | - | Define package | `pkg mylib` |
| `link` | - | Define link | `link id: "api"` |

### 📊 Special Variables

| Variable | Type | Description | Example |
|:--------:|:----:|:-----------:|:-------:|
| `@si` | Integer | System Integer | `@si = 100` |
| `@ui` | Integer | User Integer | `@ui = 200` |
| `@yui` | Dynamic | Dynamic Variable | `@yui = "text"` |
| `@pop` | Variable | Pop Variable | `@pop = true` |
| `@abc` | String | Alphabet Variable | `@abc = "ABC"` |

### ⚡ Special Commands

| Command | Function | Usage |
|:-------:|:--------:|:-----:|
| `*/employment` | Activate function | `*/employment` |
| `*/Running` | Run system | `*/Running` |
| `*/pressure` | Increase pressure | `*/pressure` |
| `*/lock` | Lock system | `*/lock` |

</div>

---

## 🛠️ Build Commands

<div align="center">

| Command | Function | Description |
|:-------:|:--------:|:------------|
| `make all` | 🏗️ Full Build | Build entire project |
| `make clean` | 🧹 Clean | Remove temporary files |
| `make test` | 🧪 Test | Run test suite |
| `make install` | 📥 Install | System installation |
| `make llvm` | ⚙️ LLVM | Build LLVM backend |
| `make editor` | 🎨 Editor | Build code editor |

</div>

---

## 📁 Project Structure

```
◈ droy/
│
├── 📂 src/                    📝 Source Code (C)
│   ├── lexer.c               Lexical Analyzer
│   ├── parser.c              Syntax Parser
│   ├── interpreter.c         Interpreter
│   └── main.c                Entry Point
│
├── 📂 editor/                 🎨 Professional Editor
│   ├── index.html
│   ├── editor.css
│   ├── editor.js
│   └── droy-mode.js
│
├── 📂 playground/             🚀 Live Playground
│   └── index.html
│
├── 📂 llvm/                   ⚙️ LLVM Backend
│   └── droy_backend.cpp
│
├── 📂 examples/               📚 Examples
│   ├── hello.droy
│   ├── variables.droy
│   ├── math.droy
│   └── links.droy
│
├── 📂 docs/                   📖 Documentation
├── 📂 badges/                 🏷️ Badges
├── Makefile
└── README.md
```

---

## 🎨 Try It Now

<div align="center">

### 🚀 [Live Playground](https://droy-go.github.io/droy-go/playground/)

Try Droy directly in your browser without installation!

[![Try Now](https://img.shields.io/badge/🚀-Try%20Now-FF6B6B?style=for-the-badge)](https://droy-go.github.io/droy-go/playground/)

</div>

---

## 👨‍💻 Development Team

<div align="center">

### Lead Developer

**[@droy-go](https://github.com/droy-go)**

| 🎂 Age | 🌍 Country | 💻 Specialty |
|:------:|:----------:|:------------:|
| 19 | 🇸🇾 Syria | Programming Language Developer |

</div>

---

## 🤝 Contributing

<div align="center">

### How to Contribute?

</div>

1. 🍴 **Fork** the repository
2. 🌿 Create a **Branch**: `git checkout -b feature/amazing-feature`
3. 💾 **Commit** changes: `git commit -m 'Add amazing feature'`
4. 📤 **Push** to branch: `git push origin feature/amazing-feature`
5. 🔄 Open a **Pull Request**

<div align="center">

[![Contributors](https://img.shields.io/badge/👥-Contributors-4ECDC4?style=for-the-badge)](https://github.com/droy-go/droy-go/graphs/contributors)

</div>

---

## 📜 License

<div align="center">

This project is licensed under the **MIT License**

```
MIT License
Copyright (c) 2024 droy-go
```

[![License: MIT](https://img.shields.io/badge/License-MIT-4ECDC4?style=for-the-badge)](LICENSE)

</div>

---

## 🙏 Acknowledgments

<div align="center">

| Project | Usage |
|:-------:|:------|
| [LLVM](https://llvm.org/) | Compilation infrastructure |
| [CodeMirror](https://codemirror.net/) | Professional editor |
| [Contributors](https://github.com/droy-go/droy-go/graphs/contributors) | ❤️ Your amazing support |

</div>

---

<div align="center">

### ⭐ Don't forget to Star the project!

[![Star](https://img.shields.io/badge/⭐-Star-FFD93D?style=for-the-badge&logo=github)](https://github.com/droy-go/droy-go)

**◈ Droy Language** - *Code with Power, Build with Style*

</div>
