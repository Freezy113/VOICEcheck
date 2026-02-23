# VOICEcheck Mobile - Статус проекта

## ✅ Что сделано

- [x] Создана отдельная папка `voicecheck-mobile/`
- [x] Инициализирован Capacitor проект
- [x] Установлены зависимости (@capacitor/core, @capacitor/cli, @capacitor/android)
- [x] Скопирован веб-интерфейс из VOICEcheck-1/static/
- [x] Исправлены пути к статическим файлам (убран префикс /static/)
- [x] Создана конфигурация Capacitor
- [x] Настроен package.json с нужными скриптами
- [x] Создана документация по установке

## 📁 Структура проекта

```
E:\VOICEcheck\
├── VOICEcheck-1/              # Бэкенд и веб-интерфейс
│   ├── app/                   # FastAPI приложение
│   ├── static/                # Статика (исходник)
│   └── .env                   # Конфигурация сервера
│
└── voicecheck-mobile/         # 📱 Мобильное приложение
    ├── www/                   # Веб-файлы для мобильного
    │   ├── index.html         # Главный экран
    │   ├── auth.html          # Авторизация
    │   ├── css/               # Стили
    │   └── js/                # JavaScript
    ├── capacitor.config.json  # Конфигурация Capacitor
    ├── package.json           # NPM скрипты
    ├── README.md              # Основная документация
    ├── ANDROID_SETUP.md       # Инструкция по установке Android Studio
    └── ANDROID_PERMISSIONS.md # Разрешения Android
```

## 🚀 Следующие шаги

### 1. Установка Android Studio

См. `ANDROID_SETUP.md` - подробная инструкция по установке

**Кратко:**
- Скачать: https://developer.android.com/studio
- Установить Android SDK
- Создать AVD (эмулятор)

### 2. Добавление Android платформы

```bash
cd E:\VOICEcheck\voicecheck-mobile
npm run sync
```

Это создаст папку `android/` с готовым Android проектом.

### 3. Настройка разрешений

Открыть `android/app/src/main/AndroidManifest.xml` и добавить разрешения из `ANDROID_PERMISSIONS.md`

### 4. Сборка и запуск

```bash
# Открыть в Android Studio
npm run open:android

# Или запустить из консоли
npm run run:android
```

## 🔧 Конфигурация

### API сервер

В `capacitor.config.json`:
```json
{
  "server": {
    "url": "http://10.0.2.2:8001",
    "cleartext": true
  }
}
```

- `10.0.2.2` - для эмулятора (это localhost с точки зрения Android)
- Для реального устройства - замените на IP вашего компьютера в сети

###appId

```json
{
  "appId": "com.voicecheck.app",
  "appName": "VOICEcheck"
}
```

Это ID приложения в Google Play

## 📝 Скрипты package.json

```bash
npm run sync      # Копирует www/ в android/ и синхронизирует
npm run open:android # Открывает проект в Android Studio
npm run run:android  # Запускает на устройстве/эмуляторе
```

## 🎯 Функционал приложения

### Авторизация
- Email/пароль → JWT токен
- Токен сохраняется в localStorage
- Автоматическое обновление токена

### Запись диалогов
- Выбор аудиофайла (используется существующая загрузка)
- Отправка на сервер VOICEcheck
- Отслеживание статуса транскрибации
- Просмотр результатов

### Управление диалогами
- Список всех диалогов
- Детали диалога с транскрипцией
- Анализ диалога (оценки, рекомендации)

## 🔐 Безопасность

Для production:
- Изменить `JWT_SECRET_KEY` в .env
- Использовать HTTPS вместо cleartext
- Настроить proguard для обфускации кода
- Подписывать APK своим keystore

## 📱 Подготовка к публикации в Google Play

1. Создать keystore для подписи
2. Собрать release APK или App Bundle (aab)
3. Создать аккаунт разработчика Google Play ($25 разово)
4. Заполнить карточку приложения
5. Загрузить APK/AAB
6. Пройти модерацию

## 🆘 Возможные проблемы

### Не запускается эмулятор
- Проверьте виртуализацию в BIOS
- Попробуйте другой образ системы
- Уменьшите RAM эмулятора

### Не работает API
- Проверьте, запущен ли сервер VOICEcheck
- Проверьте firewall
- Для реального устройства используйте IP из локальной сети

### Gradle ошибки
- File → Invalidate Caches
- Удалите папку .gradle и перезапустите
