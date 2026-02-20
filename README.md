<div align="center">

<img src="badges/droy-logo.svg" width="150" alt="Droy Logo">

# ◈ Droy Programming Language

**لغة برمجة وتعليماتية قوية وسهلة الاستخدام**

[![Version](badges/version-badge.svg)](https://github.com/droy-go/droy/releases)
[![License](badges/license-badge.svg)](LICENSE)
[![Made in Syria](badges/syria-badge.svg)](#)
[![Author](badges/author-badge.svg)](#)

[🌐 المعاينة الحية](https://droy-playground.vercel.app) • [📥 تحميل المحرر](https://github.com/droy-go/droy/releases) • [📖 الوثائق](docs/README.md)

</div>

---

## 🎯 ما هي Droy؟

**Droy** هي لغة برمجة وتعليماتية (Markup & Programming Language) تم تصميمها لتكون:
- **سهلة التعلم** - صيغة بسيطة ومفهومة
- **قوية** - دعم المتغيرات، العمليات الحسابية، والتحكم بالتدفق
- **مرنة** - نظام روابط متقدم وكتل قابلة لإعادة الاستخدام
- **عصرية** - محرر أكواد احترافي مع دعم اللغة العربية

```droy
// 👋 Hello World في Droy
~s @si = "مرحباً"
~s @ui = "بالعالم"
em @si + " " + @ui + "!"
```

---

## ✨ المميزات

<table>
<tr>
<td width="50%">

### 🚀 لغة برمجة كاملة
- ✅ **Lexer & Parser** مبنيان من الصفر
- ✅ **AST** (Abstract Syntax Tree)
- ✅ **Interpreter** لتنفيذ الكود
- ✅ **LLVM Backend** للترجمة

</td>
<td width="50%">

### 🎨 محرر احترافي
- ✅ **Syntax Highlighting** مخصص
- ✅ **Auto-completion** ذكي
- ✅ **معاينة حية** للكود
- ✅ **دعم RTL** للعربية

</td>
</tr>
<tr>
<td width="50%">

### 🔗 نظام روابط متقدم
```droy
link id: "home" api: "https://example.com"
create-link: "home"
link-go: "home"
```

</td>
<td width="50%">

### ⚡ أوامر قوية
```droy
*/employment
*/Running
*/pressure
*/lock
```

</td>
</tr>
</table>

---

## 📥 التثبيت

### 🔧 بناء من المصدر

```bash
# استنساخ المستودع
git clone https://github.com/droy-go/droy.git
cd droy

# بناء المترجم
make

# تشغيل مثال
./bin/droy examples/hello.droy
```

### 📱 تحميل المحرر (APK)

| النسخة | الرابط | الحجم |
|--------|--------|-------|
| Android APK | [📥 تحميل](https://github.com/droy-go/droy/releases/download/v1.0.0/droy-editor.apk) | 15 MB |
| Web Editor | [🌐 فتح](https://droy-playground.vercel.app) | - |

---

## 🚀 البدء السريع

### المتغيرات

```droy
// الصيغة الكاملة
set name = "Droy"

// الصيغة المختصرة
~s version = "1.0.0"

// المتغيرات الخاصة
@si = 100
@ui = 200
```

### العمليات الحسابية

```droy
set a = 10
set b = 5

set sum = a + b      // 15
set diff = a - b     // 5
set prod = a * b     // 50
set quot = a / b     // 2
```

### نظام الروابط

```droy
// تعريف الرابط
link id: "google" api: "https://google.com"

// إنشاء الرابط
create-link: "google"

// فتح الرابط
open-link: "google"
link-go: "google"
```

### الكتل والتنسيق

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

## 📚 مرجع اللغة

### الكلمات المفتاحية

| الكلمة | الاختصار | الوصف |
|--------|----------|-------|
| `set` | `~s` | تعريف متغير |
| `ret` | `~r` | إرجاع قيمة |
| `em` | `~e` | طباعة تعبير |
| `text` | `txt`, `t` | طباعة نص |
| `for` | - | حلقة تكرار |
| `sty` | - | كتلة تنسيق |
| `pkg` | - | تعريف حزمة |
| `link` | - | تعريف رابط |

### المتغيرات الخاصة

| المتغير | الوصف |
|---------|-------|
| `@si` | System Integer |
| `@ui` | User Integer |
| `@yui` | Dynamic Variable |
| `@pop` | Pop Variable |
| `@abc` | Alphabet Variable |

### الأوامر

| الأمر | الوظيفة |
|-------|---------|
| `*/employment` | تفعيل الوظيفة |
| `*/Running` | تشغيل النظام |
| `*/pressure` | زيادة الضغط |
| `*/lock` | قفل النظام |

---

## 🛠️ بناء المشروع

```bash
# جميع الأوامر
make all          # بناء المشروع
make clean        # تنظيف
make test         # تشغيل الاختبارات
make install      # تثبيت النظامي
make llvm         # بناء LLVM backend
make editor       # بناء المحرر
```

---

## 📁 هيكل المشروع

```
droy/
├── 📂 src/              # شفرة المصدر (C)
│   ├── lexer.c         # محلل المفردات
│   ├── parser.c        # محلل النحوي
│   ├── interpreter.c   # المفسر
│   └── main.c          # نقطة الدخول
├── 📂 editor/           # المحرر الاحترافي
│   ├── index.html
│   ├── editor.css
│   ├── editor.js
│   └── droy-mode.js
├── 📂 playground/       # المعاينة الحية
│   └── index.html
├── 📂 llvm/             # LLVM Backend
│   └── droy_backend.cpp
├── 📂 examples/         # الأمثلة
│   ├── hello.droy
│   ├── variables.droy
│   ├── math.droy
│   └── links.droy
├── 📂 docs/             # الوثائق
├── 📂 badges/           # الأوسمة
├── Makefile
└── README.md
```

---

## 🎨 المعاينة الحية

<div align="center">

### [🌐 جرب Droy الآن!](https://droy-playground.vercel.app)

<img src="badges/playground-preview.png" width="80%" alt="Playground Preview">

</div>

---

## 👨‍💻 المطور

<div align="center">

<table>
<tr>
<td align="center">

**[@droy-go](https://github.com/droy-go)**

<img src="badges/developer-avatar.svg" width="100" alt="Developer">

🎂 **العمر:** 19 سنة  
🌍 **البلد:** 🇸🇾 سوريا  
💻 **التخصص:** مطور لغات برمجة

[![GitHub](badges/github-badge.svg)](https://github.com/droy-go)
[![Twitter](badges/twitter-badge.svg)](https://twitter.com/droy_go)

</td>
</tr>
</table>

</div>

---

## 🤝 المساهمة

نرحب بمساهماتكم! يمكنكم المساهمة من خلال:

1. 🍴 **Fork** المستودع
2. 🌿 إنشاء **Branch** جديد (`git checkout -b feature/amazing`)
3. 💾 **Commit** التغييرات (`git commit -m 'Add amazing feature'`)
4. 📤 **Push** إلى الفرع (`git push origin feature/amazing`)
5. 🔄 فتح **Pull Request**

---

## 📜 الترخيص

هذا المشروع مرخص بموجب [MIT License](LICENSE)

```
MIT License
Copyright (c) 2024 droy-go
```

---

## 🙏 شكر خاص

- [LLVM](https://llvm.org/) - لبنية الترجمة
- [CodeMirror](https://codemirror.net/) - للمحرر الاحترافي
- [All Contributors](https://github.com/droy-go/droy/graphs/contributors) - للمساهمين

---

<div align="center">

**⭐ لا تنسَ عمل Star للمشروع!**

<img src="badges/droy-icon.svg" width="50" alt="Droy Icon">

**[◈ Droy Language](https://github.com/droy-go/droy)**  
*Code with Power, Build with Style*

</div>
