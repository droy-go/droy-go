# 📚 دليل لغة Droy

<div align="center">

**دليل شامل لتعلم لغة Droy من الصفر**

[المقدمة](#مقدمة) • [التثبيت](#التثبيت) • [الأساسيات](#الأساسيات) • [المتقدم](#المتقدم)

</div>

---

## 📖 مقدمة

**Droy** هي لغة برمجة وتعليماتية حديثة تجمع بين بساطة لغات التعليم وقوة لغات البرمجة. تم تصميمها لتكون:

- ✅ **سهلة التعلم** - تعلمها في دقائق
- ✅ **قوية** - دعم كامل للبرمجة
- ✅ **مرنة** - نظام روابط وكتل متقدم

---

## 🚀 التثبيت

### على Linux/Mac

```bash
git clone https://github.com/droy-go/droy.git
cd droy
make
sudo make install
```

### على Windows

```powershell
# باستخدام WSL
wsl git clone https://github.com/droy-go/droy.git
wsl make
```

### المحرر الاحترافي

```bash
# تشغيل المحرر الويب
cd editor
python -m http.server 8080
# افتح http://localhost:8080
```

---

## 📋 الأساسيات

### 1. أول برنامج

```droy
// hello.droy
~s message = "Hello, Droy!"
em message
```

**التشغيل:**
```bash
droy hello.droy
```

**الإخراج:**
```
[EM] Hello, Droy!
```

---

### 2. المتغيرات

#### الصيغة الكاملة
```droy
set name = "Droy"
set version = "1.0.0"
set year = 2024
```

#### الصيغة المختصرة
```droy
~s name = "Droy"      // set
~r result = 42        // ret  
~e "Hello"            // em
```

#### المتغيرات الخاصة
```droy
@si = 100        // System Integer
@ui = 200        // User Integer
@yui = "test"    // Dynamic
@pop = "value"   // Pop Variable
@abc = "abc"     // Alphabet
```

---

### 3. أنواع البيانات

| النوع | المثال | الوصف |
|-------|--------|-------|
| نص | `"Hello"` | سلسلة نصية |
| رقم | `42`, `3.14` | عدد صحيح أو عشري |
| متغير | `@si`, `name` | قيمة مخزنة |

---

### 4. العمليات الحسابية

```droy
set a = 10
set b = 5

// الجمع
set sum = a + b        // 15

// الطرح  
set diff = a - b       // 5

// الضرب
set prod = a * b       // 50

// القسمة
set quot = a / b       // 2

// التعبيرات المعقدة
set result = (a + b) * 2 - 5   // 25
```

---

### 5. إخراج البيانات

#### `em` - طباعة تعبير
```droy
em "Hello"                    // [EM] Hello
em @si + @ui                  // [EM] 300
em "Result: " + result        // [EM] Result: 25
```

#### `text` - طباعة نص
```droy
text "Welcome to Droy"        // [TEXT] Welcome to Droy
txt @si                       // [TEXT] 100
t "Done"                      // [TEXT] Done
```

#### `ret` - إرجاع قيمة
```droy
ret @si + @ui                 // [RET] 300
```

---

## 🔗 نظام الروابط

### تعريف رابط

```droy
link id: "google" api: "https://google.com"
```

### العمليات على الروابط

```droy
// إنشاء الرابط
create-link: "google"

// فتح الرابط
open-link: "google"

// الانتقال للرابط
link-go: "google"
```

### أنواع الروابط

```droy
// رابط عادي
link id: "home" api: "https://example.com"

// رابط مرساة
a-link id: "section1" api: "#about"

// روابط موسعة
yoex--links id: "external" api: "https://external.com"
```

---

## ⚡ الأوامر

### قائمة الأوامر

| الأمر | الوظيفة |
|-------|---------|
| `*/employment` | تفعيل الوظيفة |
| `*/Running` | تشغيل النظام |
| `*/pressure` | زيادة الضغط |
| `*/lock` | قفل النظام |

### مثال

```droy
*/employment        // [CMD] تم تفعيل الوظيفة
*/Running           // [CMD] النظام يعمل
*/pressure          // [CMD] مستوى الضغط: 1
*/pressure          // [CMD] مستوى الضغط: 2
*/lock              // [CMD] تم قفل النظام
```

---

## 📦 الكتل

### تعريف كتلة

```droy
block: key("main") {
    set title = "Main Block"
    text title
}
```

### كتلة مع معاملات

```droy
block: key("header", "title", "subtitle") {
    text title
    text subtitle
}
```

### التنسيق الداخلي (sty)

```droy
block: key("styled") {
    sty {
        set color = "blue"
        set fontSize = "16px"
        em "Color: " + color
    }
}
```

---

## 📱 الحزم والوسائط

### تعريف حزمة

```droy
pkg "my-package"
pkg "web-app"
```

### عناصر الوسائط

```droy
// صورة
media "https://example.com/image.png"

// مع معرف
media id: "hero" api: "https://cdn.com/hero.jpg"

// فيديو
media id: "intro" api: "https://cdn.com/intro.mp4"
```

---

## 🔄 التحكم بالتدفق

### حلقة for

```droy
for i in 5 {
    text "Iteration: " + i
}
```

**الإخراج:**
```
[TEXT] Iteration: 1
[TEXT] Iteration: 2
[TEXT] Iteration: 3
[TEXT] Iteration: 4
[TEXT] Iteration: 5
```

---

## 📝 التعليقات

```droy
// تعليق على سطر واحد

/*
تعليق
متعدد
الأسطر
*/
```

---

## 🛠️ المتقدم

### دمج النصوص والأرقام

```droy
set name = "Droy"
set version = 1.0

em name + " v" + version      // [EM] Droy v1
```

### استخدام المتغيرات الخاصة

```droy
// حساب باستخدام @si و @ui
@si = 100
@ui = 50

set result = @si + @ui * 2
em "Result: " + result         // [EM] Result: 200
```

### برنامج شامل

```droy
// ===================================
// برنامج Droy شامل
// ===================================

// إعداد المتغيرات
~s appName = "MyApp"
~s version = "1.0.0"
set author = "@droy-go"

// عرض المعلومات
text "=== " + appName + " ==="
text "Version: " + version
text "Author: " + author

// إنشاء روابط
link id: "github" api: "https://github.com/droy-go"
link id: "docs" api: "https://droy-docs.vercel.app"

create-link: "github"
create-link: "docs"

// تنفيذ الأوامر
*/employment
*/Running

// كتلة الترحيب
block: key("welcome") {
    sty {
        set color = "green"
        em "Welcome to " + appName + "!"
    }
}

// النتيجة النهائية
ret "Done!"
```

---

## 🎯 أمثلة عملية

### 1. آلة حاسبة

```droy
// آلة حاسبة بسيطة
set a = 20
set b = 10

em "=== آلة حاسبة ==="
em a + " + " + b + " = " + (a + b)
em a + " - " + b + " = " + (a - b)
em a + " × " + b + " = " + (a * b)
em a + " ÷ " + b + " = " + (a / b)
```

### 2. مدير الروابط

```droy
// مدير روابط
link id: "google" api: "https://google.com"
link id: "github" api: "https://github.com"
link id: "twitter" api: "https://twitter.com"

create-link: "google"
create-link: "github"
create-link: "twitter"

open-link: "google"
link-go: "google"

*/Running
*/lock
```

### 3. نظام تسجيل الدخول

```droy
// نظام تسجيل دخول بسيط
set username = "admin"
set password = "secret"

block: key("login", "user", "pass") {
    sty {
        set status = "checking"
        em "Checking credentials..."
        
        fe user == "admin" {
            em "Welcome, Admin!"
        }
    }
}

*/employment
*/lock
```

---

## 📊 مرجع سريع

### الكلمات المفتاحية

| الكلمة | الاختصار | الاستخدام |
|--------|----------|-----------|
| `set` | `~s` | تعريف متغير |
| `ret` | `~r` | إرجاع قيمة |
| `em` | `~e` | طباعة |
| `text` | `txt`, `t` | طباعة نص |
| `for` | - | حلقة |
| `sty` | - | تنسيق |
| `pkg` | - | حزمة |
| `link` | - | رابط |
| `block` | - | كتلة |

### العمليات

| العملية | الوصف |
|---------|-------|
| `+` | جمع/دمج |
| `-` | طرح |
| `*` | ضرب |
| `/` | قسمة |
| `=` | تخصيص |

---

## 🤝 المساهمة

نرحب بمساهماتكم! راجع [CONTRIBUTING.md](../CONTRIBUTING.md)

---

## 📜 الترخيص

[MIT License](../LICENSE) - © 2024 droy-go

---

<div align="center">

**[◈ Droy Language](https://github.com/droy-go/droy)**

*Code with Power, Build with Style*

</div>
