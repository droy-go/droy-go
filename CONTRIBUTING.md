# 🤝 المساهمة في Droy

شكراً لاهتمامك بالمساهمة في **Droy**! 🎉

---

## 🚀 كيفية المساهمة

### 1. الإبلاغ عن الأخطاء (Bug Reports)

إذا وجدت خطأ، يرجى فتح [Issue](https://github.com/droy-go/droy/issues) جديد:

```markdown
**الوصف:**
وصف مختصر للمشكلة

**الخطوات:**
1. اذهب إلى '...'
2. اضغط على '...'
3. انظر إلى الخطأ

**السلوك المتوقع:**
ما الذي توقعت حدوثه؟

**السلوك الفعلي:**
ما الذي حدث فعلاً؟

**البيئة:**
- OS: [Windows/Mac/Linux]
- Version: [e.g. 1.0.0]
```

### 2. اقتراح ميزات جديدة

```markdown
**الوصف:**
وصف الميزة المقترحة

**الفائدة:**
لماذا هذه الميزة مفيدة؟

**الاستخدام:**
كيف سيتم استخدامها؟
```

### 3. Pull Requests

#### خطوات المساهمة بالكود:

```bash
# 1. Fork المستودع
# اضغط زر Fork في GitHub

# 2. استنساخ المستودع
git clone https://github.com/YOUR_USERNAME/droy.git
cd droy

# 3. إنشاء فرع جديد
git checkout -b feature/amazing-feature

# 4. إجراء التغييرات
# ... عدل الملفات ...

# 5. Commit
git add .
git commit -m "✨ Add amazing feature"

# 6. Push
git push origin feature/amazing-feature

# 7. فتح Pull Request
# اذهب إلى GitHub وافتح PR
```

---

## 📋 معايير الكود

### C Code Style

```c
// ✅ Good
int calculate_sum(int a, int b) {
    return a + b;
}

// ❌ Bad
int calculateSum(int a,int b){return a+b;}
```

### JavaScript Code Style

```javascript
// ✅ Good
function calculateSum(a, b) {
    return a + b;
}

// ❌ Bad
function calculateSum(a,b){return a+b;}
```

### رسائل Commit

```
✨ Add new feature
🐛 Fix bug in parser
📚 Update documentation
🎨 Improve code style
⚡ Optimize performance
🔧 Fix configuration
🧪 Add tests
```

---

## 🏗️ هيكل المشروع

```
droy/
├── src/           # C source code
├── editor/        # Web editor
├── playground/    # Live playground
├── llvm/          # LLVM backend
├── examples/      # Example programs
├── docs/          # Documentation
└── tests/         # Test suite
```

---

## 🧪 الاختبارات

### تشغيل الاختبارات

```bash
make test
```

### إضافة اختبار جديد

```c
// tests/test_example.c
#include "test.h"

void test_example() {
    assert_equal(2 + 2, 4);
}

int main() {
    run_test(test_example);
    return 0;
}
```

---

## 📝 التوثيق

### تحديث README

- أضف أمثلة جديدة
- حدث قائمة المميزات
- أضف لقطات شاشة

### تحديث Docs

```markdown
<!-- docs/README.md -->

## عنوان جديد

شرح مفصل...

```droy
// مثال كود
set x = 42
```
```

---

## 🎯 أولويات المساهمة

### 🔥 عالية الأولوية
- [ ] إصلاح الأخطاء الحرجة
- [ ] تحسين الأداء
- [ ] إضافة اختبارات

### ⚡ متوسطة الأولوية
- [ ] ميزات جديدة
- [ ] تحسين UX
- [ ] توثيق إضافي

### 💡 منخفضة الأولوية
- [ ] تجميل الكود
- [ ] تحديث التعليقات
- [ ] إعادة التنظيم

---

## 👥 فريق المشروع

### المؤسس
- [@droy-go](https://github.com/droy-go) - المؤسس والمطور الرئيسي

### المساهمون
- [قائمة المساهمين](https://github.com/droy-go/droy/graphs/contributors)

---

## 📞 التواصل

- 💬 [GitHub Discussions](https://github.com/droy-go/droy/discussions)
- 🐛 [GitHub Issues](https://github.com/droy-go/droy/issues)
- 📧 البريد: droy-go@example.com

---

## 🙏 شكراً!

كل مساهمة - صغيرة كانت أو كبيرة - تساعد في تحسين Droy!

---

<div align="center">

**[◈ Droy Language](https://github.com/droy-go/droy)**

*Code with Power, Build with Style*

</div>
