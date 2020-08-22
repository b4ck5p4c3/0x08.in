# Мероприятия

## Как добавить мероприятие

0. Определить EVENT_NAME – краткое латинское название
1. Создать в репозитории ветку

```shell
git checkout -b content/event/%EVENT_NAME%
```

2. Добавить файл `README.md` в директорию события

```shell
nano ./src/pages/events/%EVENT_NAME%
```

3. Добавить в `README.md` текст анонса, описания (см. [Оформление анонса события](../wiki/event-anouncment-style))
4. Закоммитить и загрузить изменения

```shell
git commit -am "Добавляет мероприятие" && git push
```

5. Создать Pull Request в ветку `dev`

_TODO: добавить автоматическую отправку анонса в каналы/соцсети по итогу принятия PR из ветки `content/event/*`._