# VOICEcheck Проект

## 📂 Структура проекта

```
E:\VOICEcheck\
│
├── VOICEcheck-1/              # 🌐 Бэкенд и веб-интерфейс (FastAPI)
│   ├── app/                   # Python приложение
│   ├── static/                # HTML/CSS/JS веб-интерфейс
│   ├── alembic/               # Миграции БД
│   ├── .env                   # Конфигурация
│   ├── docker-compose.yml     # Docker конфигурация
│   └── requirements.txt       # Python зависимости
│
└── voicecheck-mobile/         # 📱 Мобильное приложение (Capacitor)
    ├── www/                   # Веб-файлы для Android
    ├── node_modules/          # NPM зависимости
    ├── capacitor.config.json  # Capacitor конфигурация
    ├── package.json           # NPM скрипты
    ├── README.md              # Документация мобильного приложения
    ├── ANDROID_SETUP.md       # 📖 Установка Android Studio
    ├── ANDROID_PERMISSIONS.md # 🔐 Разрешения Android
    └── PROJECT_STATUS.md      # ✅ Статус разработки
```

## 🚀 Быстрый старт

### Запуск сервера VOICEcheck

```bash
cd VOICEcheck-1
python -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8001
```

Сервер запустится на http://localhost:8001

### Запуск мобильного приложения (после установки Android Studio)

```bash
cd voicecheck-mobile
npm run sync           # Создать Android проект
npm run open:android   # Открыть в Android Studio
```

## 📱 Мобильное приложение

### Стек технологий
- **Capacitor** - упаковка веба в нативное приложение
- **Android** - целевая платформа
- **HTML/CSS/JavaScript** - интерфейс (переиспользуется из веб-версии)

### Функционал
- ✅ Авторизация по email/паролю
- ✅ Загрузка аудиофайлов
- ✅ Транскрибация через API VOICEcheck
- ✅ Просмотр результатов и анализа

### Текущий статус
- ✅ Capacitor инициализирован
- ✅ Веб-интерфейс адаптирован
- ⏳ Ожидает установки Android Studio

См. `voicecheck-mobile/PROJECT_STATUS.md` для деталей

## 🌐 Веб-приложение

### Стек технологий
- **FastAPI** - Python веб-фреймворк
- **PostgreSQL** - база данных (опционально)
- **Whisper/Deepgram** - транскрибация аудио
- **GPT-4o** - анализ диалогов

### API endpoints
- `POST /api/auth/register` - Регистрация
- `POST /api/auth/login` - Вход
- `POST /upload` - Загрузка аудио
- `POST /transcribe/{file_id}` - Транскрибация
- `GET /dialogs` - Список диалогов

Документация: http://localhost:8001/docs

## 📦 Установка зависимостей

### Веб-приложение
```bash
cd VOICEcheck-1
pip install -r requirements.txt
```

### Мобильное приложение
```bash
cd voicecheck-mobile
npm install
```

## 🔧 Конфигурация

### Веб-приложение (.env)
```env
# База данных
POSTGRES_USER=voicecheck
POSTGRES_PASSWORD=voicecheck_password
POSTGRES_DB=voicecheck

# API ключи
ZAI_API_KEY=your_key_here
DEEPGRAM_API_KEY=your_key_here

# Настройки
APP_PORT=8001
FEATURE_FLAG_AUTH=true
```

### Мобильное приложение (capacitor.config.json)
```json
{
  "appId": "com.voicecheck.app",
  "appName": "VOICEcheck",
  "server": {
    "url": "http://10.0.2.2:8001"
  }
}
```

## 📚 Документация

### Мобильное приложение
- `voicecheck-mobile/README.md` - Основная документация
- `voicecheck-mobile/ANDROID_SETUP.md` - Установка Android Studio
- `voicecheck-mobile/ANDROID_PERMISSIONS.md` - Разрешения Android
- `voicecheck-mobile/PROJECT_STATUS.md` - Статус проекта

### Веб-приложение
- `VOICEcheck-1/README.md` - Документация API
- `VOICEcheck-1/ARCHITECTURE.md` - Архитектура
- http://localhost:8001/docs - Swagger документация

## 🐳 Docker

Для запуска в Docker (когда установите Docker Desktop):

```bash
cd VOICEcheck-1
docker compose up
```

## 🎯 Следующие шаги

1. ✅ Установить Android Studio (см. `voicecheck-mobile/ANDROID_SETUP.md`)
2. ⏳ Добавить Android платформу: `cd voicecheck-mobile && npm run sync`
3. ⏳ Настроить разрешения в AndroidManifest.xml
4. ⏳ Собрать и протестировать APK

## 📞 Контакты

По вопросам разработки обращаться к разработчику.
