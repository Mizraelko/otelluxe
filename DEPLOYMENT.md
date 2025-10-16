# 🚀 Руководство по деплою на Ubuntu 22.04 с Docker

## 📋 Содержание
1. [Подготовка сервера](#подготовка-сервера)
2. [Установка Docker](#установка-docker)
3. [Настройка проекта](#настройка-проекта)
4. [Деплой с Docker](#деплой-с-docker)
5. [Настройка Nginx](#настройка-nginx)
6. [SSL сертификат](#ssl-сертификат)
7. [Автоматизация](#автоматизация)

---

## 1. Подготовка сервера

### 1.1. Обновление системы
```bash
sudo apt update && sudo apt upgrade -y
```

### 1.2. Установка необходимых пакетов
```bash
sudo apt install -y \
    curl \
    git \
    wget \
    ca-certificates \
    gnupg \
    lsb-release
```

### 1.3. Настройка firewall
```bash
sudo ufw allow OpenSSH
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
```

---

## 2. Установка Docker

### 2.1. Добавление официального репозитория Docker
```bash
# Добавить GPG ключ Docker
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | \
    sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

# Добавить репозиторий
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
  https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

### 2.2. Установка Docker
```bash
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
```

### 2.3. Добавление пользователя в группу docker
```bash
sudo usermod -aG docker $USER
newgrp docker
```

### 2.4. Проверка установки
```bash
docker --version
docker compose version
```

---

## 3. Настройка проекта

### 3.1. Клонирование репозитория
```bash
cd /opt
sudo git clone https://github.com/Mizraelko/otelluxe.git
cd otelluxe
```

### 3.2. Создание .env файла
```bash
sudo nano .env.production
```

Добавьте следующие переменные:
```env
# Режим
NODE_ENV=production

# URL сайта
NEXT_PUBLIC_SITE_URL=https://hotelluxbg.ru

# Яндекс.Карты API
NEXT_PUBLIC_YANDEX_MAPS_API_KEY=b2ff1b7a-7797-4395-96e5-3d415dfa9e76

# Контакты
NEXT_PUBLIC_PHONE=+7 (987) 757-83-23
NEXT_PUBLIC_EMAIL=luxgostevoidom@yandex.ru
NEXT_PUBLIC_VK_ID=id412614778

# Аналитика (опционально)
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
NEXT_PUBLIC_YANDEX_METRIKA_ID=XXXXXXXX

# Верификация (опционально)
NEXT_PUBLIC_GOOGLE_VERIFICATION=your_google_verification_code
NEXT_PUBLIC_YANDEX_VERIFICATION=your_yandex_verification_code
```

---

## 4. Деплой с Docker

### 4.1. Создание Dockerfile
Файл уже создан в проекте: `Dockerfile`

### 4.2. Создание docker-compose.yml
Файл уже создан в проекте: `docker-compose.yml`

### 4.3. Сборка и запуск
```bash
# Сборка образа
docker compose build

# Запуск контейнера
docker compose up -d

# Проверка статуса
docker compose ps

# Просмотр логов
docker compose logs -f
```

### 4.4. Остановка и перезапуск
```bash
# Остановка
docker compose down

# Перезапуск
docker compose restart

# Пересборка после изменений
docker compose up -d --build
```

---

## 5. Настройка Nginx

### 5.1. Установка Nginx
```bash
sudo apt install -y nginx
```

### 5.2. Создание конфигурации для сайта
```bash
sudo nano /etc/nginx/sites-available/hotelluxbg.ru
```

Добавьте конфигурацию:
```nginx
# Перенаправление HTTP на HTTPS
server {
    listen 80;
    listen [::]:80;
    server_name hotelluxbg.ru www.hotelluxbg.ru;
    
    # Для получения SSL сертификата
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }
    
    location / {
        return 301 https://$server_name$request_uri;
    }
}

# HTTPS конфигурация
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name hotelluxbg.ru www.hotelluxbg.ru;

    # SSL сертификаты (будут добавлены после получения)
    ssl_certificate /etc/letsencrypt/live/hotelluxbg.ru/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/hotelluxbg.ru/privkey.pem;
    
    # SSL настройки
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;

    # Заголовки безопасности
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;

    # Логи
    access_log /var/log/nginx/hotelluxbg.ru.access.log;
    error_log /var/log/nginx/hotelluxbg.ru.error.log;

    # Проксирование к Next.js
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
        
        # Таймауты
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    # Кэширование статических файлов
    location /_next/static {
        proxy_pass http://localhost:3000;
        proxy_cache_valid 60m;
        add_header Cache-Control "public, max-age=3600, immutable";
    }

    # Кэширование изображений
    location ~* \.(jpg|jpeg|png|gif|ico|svg|webp|avif)$ {
        proxy_pass http://localhost:3000;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Сжатие
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;
}
```

### 5.3. Активация конфигурации
```bash
# Создать символическую ссылку
sudo ln -s /etc/nginx/sites-available/hotelluxbg.ru /etc/nginx/sites-enabled/

# Проверить конфигурацию
sudo nginx -t

# Временно отключить SSL строки для первого запуска
sudo nano /etc/nginx/sites-available/hotelluxbg.ru
# Закомментируйте строки ssl_certificate и ssl_certificate_key

# Перезапустить Nginx
sudo systemctl restart nginx
```

---

## 6. SSL сертификат (Let's Encrypt)

### 6.1. Установка Certbot
```bash
sudo apt install -y certbot python3-certbot-nginx
```

### 6.2. Получение сертификата
```bash
sudo certbot --nginx -d hotelluxbg.ru -d www.hotelluxbg.ru
```

Следуйте инструкциям:
1. Введите email для уведомлений
2. Согласитесь с условиями
3. Выберите опцию перенаправления HTTP -> HTTPS

### 6.3. Автопродление сертификата
Certbot автоматически настраивает cron для продления. Проверьте:
```bash
sudo systemctl status certbot.timer
```

Тест продления:
```bash
sudo certbot renew --dry-run
```

### 6.4. Раскомментирование SSL в Nginx
```bash
sudo nano /etc/nginx/sites-available/hotelluxbg.ru
# Раскомментируйте строки ssl_certificate
sudo nginx -t
sudo systemctl reload nginx
```

---

## 7. Автоматизация

### 7.1. Скрипт автоматического деплоя
Создайте файл `/opt/otelluxe/deploy.sh`:

```bash
#!/bin/bash

echo "🚀 Начало деплоя..."

cd /opt/otelluxe

# Получение последних изменений
echo "📥 Получение изменений из Git..."
git pull origin main

# Пересборка и перезапуск
echo "🔨 Пересборка Docker образа..."
docker compose down
docker compose build --no-cache
docker compose up -d

# Очистка старых образов
echo "🧹 Очистка..."
docker image prune -f

echo "✅ Деплой завершен!"
echo "📊 Статус контейнеров:"
docker compose ps
```

Сделайте скрипт исполняемым:
```bash
chmod +x /opt/otelluxe/deploy.sh
```

### 7.2. Webhook для автодеплоя (опционально)

Установите webhook listener:
```bash
sudo apt install -y webhook
```

Создайте конфигурацию `/opt/webhook/hooks.json`:
```json
[
  {
    "id": "deploy-otelluxe",
    "execute-command": "/opt/otelluxe/deploy.sh",
    "command-working-directory": "/opt/otelluxe",
    "response-message": "Deploying...",
    "trigger-rule": {
      "match": {
        "type": "payload-hash-sha1",
        "secret": "YOUR_WEBHOOK_SECRET",
        "parameter": {
          "source": "header",
          "name": "X-Hub-Signature"
        }
      }
    }
  }
]
```

Создайте systemd service для webhook:
```bash
sudo nano /etc/systemd/system/webhook.service
```

```ini
[Unit]
Description=Webhook Service
After=network.target

[Service]
Type=simple
User=root
ExecStart=/usr/bin/webhook -hooks /opt/webhook/hooks.json -verbose -port 9000
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

Запустите webhook:
```bash
sudo systemctl daemon-reload
sudo systemctl enable webhook
sudo systemctl start webhook
```

Настройте GitHub webhook:
1. Зайдите в Settings репозитория
2. Webhooks -> Add webhook
3. URL: `http://your-server-ip:9000/hooks/deploy-otelluxe`
4. Secret: ваш секрет из hooks.json
5. Events: Push events

---

## 8. Мониторинг и обслуживание

### 8.1. Просмотр логов
```bash
# Логи Docker
docker compose logs -f --tail=100

# Логи Nginx
sudo tail -f /var/log/nginx/hotelluxbg.ru.access.log
sudo tail -f /var/log/nginx/hotelluxbg.ru.error.log
```

### 8.2. Статус сервисов
```bash
# Docker
docker compose ps

# Nginx
sudo systemctl status nginx

# Использование ресурсов
docker stats
```

### 8.3. Резервное копирование
```bash
# Создать резервную копию
sudo tar -czf /backup/otelluxe-$(date +%Y%m%d).tar.gz /opt/otelluxe

# Автоматическое резервное копирование (cron)
sudo crontab -e
```

Добавьте:
```cron
# Резервное копирование каждую ночь в 3:00
0 3 * * * tar -czf /backup/otelluxe-$(date +\%Y\%m\%d).tar.gz /opt/otelluxe
```

---

## 9. Проверка работоспособности

### 9.1. Проверка доступности
```bash
curl -I https://hotelluxbg.ru
```

### 9.2. Проверка SSL
```bash
openssl s_client -connect hotelluxbg.ru:443 -servername hotelluxbg.ru
```

### 9.3. Тест производительности
```bash
# Установить ab (Apache Bench)
sudo apt install -y apache2-utils

# Тест
ab -n 1000 -c 10 https://hotelluxbg.ru/
```

---

## 10. Troubleshooting

### 10.1. Контейнер не запускается
```bash
docker compose logs
docker compose ps
```

### 10.2. Nginx ошибки
```bash
sudo nginx -t
sudo tail -n 50 /var/log/nginx/error.log
```

### 10.3. Проблемы с SSL
```bash
sudo certbot certificates
sudo certbot renew --force-renewal
```

### 10.4. Проблемы с портами
```bash
sudo netstat -tulpn | grep :3000
sudo lsof -i :80
sudo lsof -i :443
```

---

## 📝 Быстрая шпаргалка

```bash
# Обновление кода и перезапуск
cd /opt/otelluxe && git pull && docker compose up -d --build

# Просмотр логов
docker compose logs -f

# Перезапуск
docker compose restart

# Остановка
docker compose down

# Проверка статуса
docker compose ps

# Очистка
docker system prune -a
```

---

## ✅ Чек-лист деплоя

- [ ] Сервер обновлен (Ubuntu 22.04)
- [ ] Docker установлен и работает
- [ ] Проект клонирован в `/opt/otelluxe`
- [ ] `.env.production` настроен
- [ ] Docker контейнер запущен
- [ ] Nginx установлен и настроен
- [ ] SSL сертификат получен
- [ ] Firewall настроен (порты 80, 443)
- [ ] Домен указывает на сервер
- [ ] Сайт доступен по HTTPS
- [ ] Мониторинг настроен
- [ ] Резервное копирование настроено

---

## 🔗 Полезные ссылки

- [Docker Documentation](https://docs.docker.com/)
- [Nginx Documentation](https://nginx.org/ru/docs/)
- [Let's Encrypt](https://letsencrypt.org/)
- [Next.js Deployment](https://nextjs.org/docs/deployment)

