# 🚀 Quick Start - Быстрый деплой

## За 5 минут до запуска

### 1️⃣ На сервере Ubuntu 22.04

```bash
# Установка Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER

# Клонирование проекта
cd /opt
sudo git clone https://github.com/Mizraelko/otelluxe.git
cd otelluxe

# Создание .env файла
sudo nano .env.production
```

Вставьте (минимальный набор):
```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://hotelluxbg.ru
NEXT_PUBLIC_YANDEX_MAPS_API_KEY=b2ff1b7a-7797-4395-96e5-3d415dfa9e76
```

Сохраните: `Ctrl+O`, `Enter`, `Ctrl+X`

```bash
# Запуск
sudo docker compose up -d --build

# Проверка
docker compose ps
docker compose logs -f
```

Сайт будет доступен на `http://localhost:3000`

---

### 2️⃣ Настройка Nginx + SSL

```bash
# Установка
sudo apt update
sudo apt install -y nginx certbot python3-certbot-nginx

# Конфигурация
sudo nano /etc/nginx/sites-available/hotelluxbg.ru
```

Минимальная конфигурация:
```nginx
server {
    listen 80;
    server_name hotelluxbg.ru www.hotelluxbg.ru;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Активация
sudo ln -s /etc/nginx/sites-available/hotelluxbg.ru /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx

# SSL сертификат
sudo certbot --nginx -d hotelluxbg.ru -d www.hotelluxbg.ru

# Firewall
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
sudo ufw enable
```

---

### 3️⃣ DNS настройки

У вашего регистратора домена (где купили hotelluxbg.ru):

```
Тип  Имя   Значение
A    @     IP_ВАШЕГО_СЕРВЕРА
A    www   IP_ВАШЕГО_СЕРВЕРА
```

Подождите 5-30 минут для распространения DNS.

---

## ✅ Проверка

```bash
# Локально
curl http://localhost:3000

# Публично (после DNS)
curl https://hotelluxbg.ru

# Статус
docker compose ps
sudo systemctl status nginx
```

Откройте в браузере: https://hotelluxbg.ru

---

## 🔄 Обновление после изменений

```bash
cd /opt/otelluxe
sudo git pull
sudo docker compose down
sudo docker compose up -d --build
```

Или используйте скрипт:
```bash
sudo nano /opt/otelluxe/deploy.sh
```

```bash
#!/bin/bash
cd /opt/otelluxe
git pull origin main
docker compose down
docker compose build --no-cache
docker compose up -d
docker image prune -f
echo "✅ Деплой завершен!"
```

```bash
sudo chmod +x /opt/otelluxe/deploy.sh
sudo /opt/otelluxe/deploy.sh
```

---

## 🆘 Troubleshooting

### Контейнер не запускается
```bash
docker compose logs
docker compose down
docker compose up -d
```

### Nginx ошибки
```bash
sudo nginx -t
sudo tail -f /var/log/nginx/error.log
```

### Порт занят
```bash
sudo netstat -tulpn | grep :3000
sudo lsof -i :3000
```

### SSL проблемы
```bash
sudo certbot certificates
sudo certbot renew --dry-run
```

---

## 📚 Полная документация

- **Детальная инструкция:** [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Чек-лист:** [PRODUCTION_CHECKLIST.md](./PRODUCTION_CHECKLIST.md)
- **README:** [README.md](./README.md)

---

## 📞 Контакты

**Телефон:** +7 (987) 757-83-23  
**Email:** luxgostevoidom@yandex.ru  
**VK:** https://vk.com/id412614778  
**Сайт:** https://hotelluxbg.ru

