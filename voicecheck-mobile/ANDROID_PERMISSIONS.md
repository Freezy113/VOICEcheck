# Android Permissions для VOICEcheck

## Необходимые разрешения

После выполнения `npm run sync` откройте файл:
`android/app/src/main/AndroidManifest.xml`

Добавьте следующие разрешения ПЕРЕД тегом `<application>`:

```xml
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
<uses-permission android:name="android.permission.RECORD_AUDIO" />
<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.READ_MEDIA_AUDIO" />
```

## Для Android 12+ (API 31+)

Также добавьте внутри тега `<application>`:

```xml
<application
    android:usesCleartextTraffic="true"
    ...>
```

Это нужно для подключения к `http://10.0.2.2:8001` (незашифрованное соединение).

## Запрос разрешений в runtime

Приложение должно запрашивать разрешения RECORD_AUDIO при первом использовании.

Добавьте в `www/js/app.js`:

```javascript
// Запрос разрешения на запись аудио
async function requestMicrophonePermission() {
    try {
        // Проверяем, запущены ли мы в Android
        if (window.Capacitor) {
            const { Permissions } = await import('@capacitor/permissions');

            const result = await Permissions.query({ name: 'microphone' });

            if (result.state !== 'granted') {
                const requestResult = await Permissions.request({ name: 'microphone' });
                return requestResult.state === 'granted';
            }
            return true;
        }
        return true; // В браузере разрешения не нужны
    } catch (error) {
        console.error('Error requesting microphone permission:', error);
        return false;
    }
}
```

## Установка плагина Permissions

```bash
npm install @capacitor/permissions
npm run sync
```
