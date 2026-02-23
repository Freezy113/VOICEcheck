# VOICEcheck Android - Готово к сборке!

## ✅ Что сделано:

1. ✅ Capacitor инициализирован
2. ✅ Android проект создан
3. ✅ Веб-файлы скопированы в `android/app/src/main/assets/public`
4. ✅ Разрешения настроены (микрофон, интернет, файлы)
5. ✅ Cleartext traffic включён (для http://10.0.2.2:8001)

## 📁 Структура Android проекта:

```
android/
├── app/
│   └── src/
│       └── main/
│           ├── assets/
│           │   └── public/        # Веб-файлы приложения
│           ├── java/              # Java код (MainActivity)
│           └── res/               # Ресурсы (иконки, строки)
├── build.gradle                   # Gradle конфигурация
├── gradlew                        # Gradle wrapper (Linux/Mac)
└── gradlew.bat                    # Gradle wrapper (Windows)
```

## 🔧 Настроенные разрешения:

В `AndroidManifest.xml` добавлены:
- ✅ `INTERNET` - доступ к интернету
- ✅ `ACCESS_NETWORK_STATE` - проверка сети
- ✅ `RECORD_AUDIO` - запись аудио (микрофон)
- ✅ `MODIFY_AUDIO_SETTINGS` - настройка аудио
- ✅ `READ_EXTERNAL_STORAGE` - чтение файлов
- ✅ `WRITE_EXTERNAL_STORAGE` - сохранение файлов
- ✅ `READ_MEDIA_AUDIO` - доступ к аудио файлам (Android 13+)
- ✅ `usesCleartextTraffic="true"` - для HTTP запросов к API

## 📱 Сборка APK:

### Вариант 1: Через Gradle (из терминала)

```bash
cd android
./gradlew assembleDebug
```

APK будет в: `android/app/build/outputs/apk/debug/app-debug.apk`

### Вариант 2: Через Android Studio

```bash
cd ..
npm run open:android
```

Откроется Android Studio:
1. Дождитесь Gradle синхронизации
2. Build → Build Bundle(s) / APK(s) → Build APK(s)
3. APK будет в: `android/app/build/outputs/apk/debug/`

## 🚀 Установка на устройство:

### Через USB:
1. Подключите телефон
2. Включите "Отладка по USB"
3. Запустите:
```bash
cd android
./gradlew installDebug
```

### Через APK файл:
1. Скопируйте `app-debug.apk` на телефон
2. Откройте файл и установите

## ⚙️ Конфигурация API:

### Для эмулятора:
- URL: `http://10.0.2.2:8001`
- Уже настроен в `capacitor.config.json`

### Для реального устройства:
Измените в `capacitor.config.json`:
```json
{
  "server": {
    "url": "http://ВАШ_IP_В_СЕТИ:8001"
  }
}
```

## 🔑 Подпись release APK:

Для production нужно создать keystore:
```bash
keytool -genkey -v -keystore voicecheck-release.keystore -alias voicecheck -keyalg RSA -keysize 2048 -validity 10000
```

Добавить в `android/app/build.gradle`:
```gradle
signingConfigs {
    release {
        storeFile file("voicecheck-release.keystore")
        storePassword "пароль"
        keyAlias "voicecheck"
        keyPassword "пароль"
    }
}
```

Собрать release:
```bash
./gradlew assembleRelease
```

## 📝 Следующие шаги:

1. Дождаться окончания сборки debug APK
2. Установить APK на эмулятор/устройство
3. Протестировать:
   - Авторизацию
   - Загрузку аудио
   - Транскрибацию
   - Просмотр результатов

## 🆘 Возможные проблемы:

### Gradle не находит Android SDK:
- Установите Android Studio
- Создайте AVD (эмулятор)
- Или установите командную строку tools

### Ошибка "SDK location not found":
Создайте файл `android/local.properties`:
```
sdk.dir=C:\\Users\\ВашеИмя\\AppData\\Local\\Android\\Sdk
```

### Приложение не подключается к API:
- Убедитесь, что сервер VOICEcheck запущен
- Проверьте firewall
- Для эмулятора используется 10.0.2.2
- Для реального устройства - используйте IP в локальной сети
