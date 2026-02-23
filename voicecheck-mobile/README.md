# VOICEcheck Mobile App

Мобильное приложение VOICEcheck на основе Capacitor (WebView)

## Структура проекта

```
voicecheck-mobile/
├── www/                    # Веб-файлы (скопированы из VOICEcheck-1/static/)
│   ├── index.html         # Главный экран
│   ├── auth.html          # Авторизация
│   ├── css/               # Стили
│   └── js/                # JavaScript код
├── capacitor.config.json  # Конфигурация Capacitor
├── package.json           # NPM зависимости
└── android/               # Android проект (создастся после npx cap add android)
```

## Установка требований

### 1. Установите Android Studio

Скачайте с https://developer.android.com/studio

При установке убедитесь, что выбраны:
- ✅ Android SDK
- ✅ Android SDK Platform-Tools
- ✅ Android Virtual Device (для эмулятора)

### 2. Установите переменные окружения

Добавьте в системные переменные среды:
```
ANDROID_HOME=C:\Users\ВашеИмя\AppData\Local\Android\Sdk
```

Добавьте в PATH:
```
%ANDROID_HOME%\platform-tools
%ANDROID_HOME%\tools
%ANDROID_HOME%\tools\bin
```

### 3. Создайте виртуальное устройство (AVD)

Откройте Android Studio → Tools → Device Manager → Create Device

## Запуск проекта

### Сборка Android проекта:

```bash
# 1. Добавить Android платформу
npm run sync

# 2. Открыть проект в Android Studio
npm run open:android

# 3. Или запустить на устройстве/эмуляторе
npm run run:android
```

## Настройка API сервера

В файле `capacitor.config.json` указан адрес сервера:
```json
{
  "server": {
    "url": "http://10.0.2.2:8001"
  }
}
```

`10.0.2.2` - это специальный IP для доступа к localhost с Android эмулятора.

Для реального устройства замените на IP вашего компьютера в локальной сети.

## Текущий статус

- ✅ Capacitor инициализирован
- ✅ Веб-интерфейс скопирован
- ⏳ Ожидает установки Android SDK
- ⏳ Ожидает добавления Android платформы

## Следующие шаги

1. Установить Android Studio
2. Создать AVD (эмулятор) или подключить реальное устройство
3. Выполнить `npm run sync` для добавления Android платформы
4. Выполнить `npm run open:android` для открытия в Android Studio
5. Собрать APK и протестировать
