/**
 * Mobile App Configuration
 */

// API сервер URL
const API_BASE_URL = 'http://localhost:8001';

// Для Android приложения использовать реальный IP компьютера в локальной сети
if (window.Capacitor) {
    window.API_BASE = 'http://192.168.10.113:8001';
} else {
    window.API_BASE = API_BASE_URL;
}
