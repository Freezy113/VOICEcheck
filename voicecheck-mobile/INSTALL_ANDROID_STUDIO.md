# 📥 Установка Android Studio

## Автоматическая установка

Скрипт загружает Android Studio. После завершения:

1. Найдите файл: `E:\VOICEcheck\android-studio-installer.exe`
2. Запустите его двойным кликом
3. Следуйте инструкциям установщика:
   - Нажмите "Next"
   - Выберите компоненты:
     - ✅ Android Studio
     - ✅ Android Virtual Device (AVD)
   - Выберите папку установки (можно оставить по умолчанию)
   - Нажмите "Install"
   - Дождитесь окончания установки
   - Нажмите "Finish"

## Ручная установка

Если автоустановка не сработала:

1. Откройте браузер
2. Перейдите на: https://developer.android.com/studio
3. Нажмите "Download Android Studio"
4. Сохраните файл и запустите его

## После установки

1. Запустите Android Studio
2. При первом запуске:
   - Выберите "Standard" установку
   - Нажмите "Next"
   - Дождитесь загрузки компонентов (SDK, Build Tools)
   - Это может занять 10-30 минут

## Настройка после установки

1. Откройте проект:
```bash
cd E:\VOICEcheck\voicecheck-mobile
npm run open:android
```

2. Android Studio откроется с проектом
3. Дождитесь Gradle синхронизации
4. Нажмите зелёную кнопку "Play" ▶️ для сборки APK

## Быстрая сборка через Gradle

После установки Android SDK:

```bash
cd E:\VOICEcheck\voicecheck-mobile\android
./gradlew assembleDebug
```

APK будет в: `android/app/build/outputs/apk/debug/app-debug.apk`

## 📞 Если что-то не работает

### Gradle не находит Android SDK:
Создайте файл `android/local.properties`:
```
sdk.dir=C:\\Users\\ВашеИмя\\AppData\\Local\\Android\\Sdk
```

### Ошибки при установке:
- Убедитесь, что достаточно места на диске (нужно ~3 GB)
- Отключите VPN на время установки
- Запустите установщик от имени администратора

---

**Установка Android Studio необходима для окончательной сборки APK!**
