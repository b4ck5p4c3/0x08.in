---
pageTitle: СКУД – функции и архитектура
pageDescription: Устройство системы контроля доступа и автоматизации хакспейса
---

## Функции системы
Пускать в спейс по RFID-карточкам, управлять освещением, вывесками и замками.

Двери открываются, если:
  - Нажата кнопка открытия дверей внутри хакспейса
  - Использована персональная RFID-карточка
  - Получен запрос от администратора внутреннего Telegram-чата
  - Выполнена команда управления через SSH

Освещение в аквариуме и портале управляется датчиками на дверях. Помимо этого освещение в аквариуме используется как индикация успешной авторизации в RFID-ридере.

Состояние "presence switch/переключателя присуствия" отображается на вывеске и в Telegram-боте.

## Архитектура
Система состоит из нескольких устройств, объединённых шиной Modbus на RS-485. Контроллером шины выступает Raspberry Pi.

### Обзорная схема аппаратной части
<iframe frameborder="0" style="width:100%;height:753px;" src="https://viewer.diagrams.net/?highlight=0000ff&edit=_blank&layers=1&nav=1&title=BKSP_ACS_HW.drawio#R7Vxtk6I4EP41fnQKwov40dedrdutnZqpu939dIUSNXdIPMQZ3V9%2FARLoQEDdEV9mZqZKoUlC6H7ypLsTbBmD5fZT6K4WX6mH%2FRbSvG3LGLYQQpqN2Fcs2aUS3enaqWQeEo%2FLcsET%2BYW5UOPSDfHwWioYUepHZCULpzQI8DSSZG4Y0he52Iz68l1X7hyXBE9T1y9LvxMvWqRSx9Jy%2BT0m84W4s67xK0tXFOaC9cL16AsQGaOWMQgpjdKj5XaA%2FVh7Qi9pvXHF1axjIQ6iQyp8C%2F58Hk1nnwaPoTXo%2Fb2ad9ta2%2BLWeHb9DX9i3ttoJ1QwD%2Blm1TL6MxpE3EDMOkaf18RhhLcqW7gT0YJW7queaYBhB9MljsIdK8Ibsh1eRcCmy89fchvootkF0L8o53Kzz7Omc82wA66cYxRlKhRl%2BxHXi6Qx%2B78NFRfa60RjPVZAR6ttfpEdzfl30spECAY09DENsLjAujspFQ6LElYq7Ycs9shzUXSa7hIheHTXqwkOE%2Bs9MKm2p5fkwJ4zsdT5AigZJgMPxxaLofiyIBF%2BWrnT%2BOoLoyImW0RLP4Zq%2FGTE9wfUp2FS1%2FAs7Hgmk6%2BjkP6LwRUHTQzbrsM2xHDNiCojex9y7caQa5WQ%2B%2FA58Fz28MT1E2IimLHiKTWMdabjjkrDXbtjuM1oeCcrcp%2FCjcYU3rlKTnVsmVPbSCtrytQUmjKdplSlV5JqRnmPeEkj%2FPnbcXSo4L2MeP54JkzB7LajwFtREkQPD3v46TaJqFMLB92U4WCiA8dNY0SFjEPHzWsGye%2FoCql046hGitbYSFENlVdBscA8BWjOrPhfBU07%2BeMtAHn69yrIpgionzvPq%2Fby3Nliyu0O4s%2B%2Blnwayecw%2BXRaTLcOEhJ23E%2BOu6yN5KADKqaNjJLPniiAQGtW0oIjS2BrJqiSFtZ4N04Fja4CGTNsT6cqZHid7kSrncV%2BGwFiIFoyZymGpaHER0PwUMz0TMG91Fh9YLKeAEZmoxHAQGo7C2ADwqkDyuiitfTqUdAagRaGoAAqST4AtpPDyYsBzCkBbOS3X0iIAV9kLIMqgKK9E2vpF%2BeDrnq6GJfGva3ihmyMvhuDXXx8iTRj0WKmINOMtTuAcwuUioAZNTEeM3lK4uPbmeA9FzszJUDsqYMnszMC5PIzvI7UANEAvyIAFg3Y3OBzcdFWTGmRbBBZ00Gc%2FZPNwkWuT%2BYBO50yJbMQ1ujHJiBT1%2B%2FxC0viefFtlAiQMQIDACTOeScFSMbukvixLe6x%2F4zjOzVp%2FE4h6atKT5RNjxqLR8%2FODbfioV0TQ1x8CkGKyDyGSa9ktLHsk31MIecAiHHxKcTollSNvTkWXEvDaEHnNHD9US4tcHVe5gulK26Cf3AU7bgN3E1EZQPhLYl%2BxNXvLH72kzcWHw%2B38GQnTgL2vD%2Fgyc%2B8hfg0r5ac5fW8XrzWmk9UTDImsZqyqUY5lRRQVJ1rSjUYq%2B04rIhc%2FJpuwimum%2BfTcpEbznFdg3pFkj3EvhuRZ7l7p4dSOR4sYevMKVLBw1Z5lKlSdYbVmKd2QPr45jOkKQCOz5A2qHbFwjiPeQuz2whkxUbAbyonSjMnCE5bp7PmuYPiKqNdaVJTr0h6QyfDlDxeyR%2BGWQxN%2BD2FyEgX8VHmQuugesHpeRdWv7gbqyt2AuXjGHqOFrB66qXC0QxxYIEyg6tHQ6NO63FouILEmHppo8GopipQyeKZd2H5K6B%2FhY%2FZbNoDugqQPjSJPt5RCuRIyFyeLKrXPWoN%2B5EYPczg15YYrWCIHhidw5K5lctccLVbE74%2FXCiDi98ZqTQ9uK%2FIL7z8mqZo%2BIbSV%2FpH%2Bqo2SXKp9JV1lvRV%2FTbYboFMDdV%2BYVUKRW%2Fs3QKk0EpxF%2Bz48%2FB0O2CfFmS9oCS6I%2FRN7nytZ1hDYfDz7shXGfxMWdwK1dRkIZRjobENl%2BYBurn5LG4KgOOzuA2qvRzux5TTlnM1WbAlwqxbDbCqDHClGVmzwuH%2B2IRyettfWaxlGSXLXcz7Flf2LR7nDvdPeO32vG8RZO7zvvkUtdf7Niugdx7v29avB0qH7kO4DJSKPoIzxep0wMSxTEs7DGL6gWCyugei6bVgSqoyfbk7UCB5IW4NWn6IBYAeC6%2BNGcW3zgvldc2urcAO0i7kuM6e5RWsqUhIFkOqZAbV5TVpmMgeg0kU5rHgqxnj08VkX7EbsFt%2FT5%2FufvjYZt5eG5l1AZryBeumQrZTvdN73Jv%2FyvD8rNGaXXZzb2wGztJhb5o2rQNp87UbuN4wbYpfawG0%2BZV6k8065kTErKXp6K9hOZaIDfjFnWBfxvDhgUKI1%2BQXz2bEuODqZI1b%2FZY1rAgUqjFZiCAA9EY9u1%2BfXvrt3EpqsUpma2t3OuoUsvvp2XHYK4EFWXeOIbUrXkQSbdDZbM0GRZEKayHDTvMfp0mL57%2FxY4z%2BBw%3D%3D"></iframe>

Подробная схема соединений в формате KiCAD (папка electrical-schematic): [b4ck5sp4c3/acs](https://github.com/b4ck5p4c3/asc).

### Обзорная схема программной части на контроллере шины.
<iframe frameborder="0" style="width:100%;height:304px;" src="https://viewer.diagrams.net/?highlight=0000ff&edit=_blank&layers=1&nav=1&title=BKSP_ACS_SW.drawio#R7VnbctowEP0aZtoHMr4DjwmQtNOkkzZJGx6FLdtqbC%2BRZS79%2Bsq2fMMEaAdizJTkQXu0Wgvt7jkCOurQX95QNHPvwMJeR5GsZUcddRRF1hSlE%2F9L1ipFdG2QAg4llnAqgAfyGwtQEmhELBxWHBmAx8isCpoQBNhkFQxRCouqmw1e9akz5OAa8GAir47%2BJBZzU7SvSwX%2BCRPHFU%2FWJDHho8xXAKGLLFiUIHXcUYcUgKUjfznEXnx22bGk667fmM33RXHA9llwYzLPdRbqCIE7cT9%2FCZ5%2BjLuG2BtbZe8XW%2FztCxMoc8GBAHnjAr2iEAUWjqNK3Cp8bgFmHJQ5%2BAszthK5RBEDDrnM98QsXhL2XBpP4lAXurBGSxE5MVaZETC6ei4bpVWxWSxLrGydDQETG5HTWesyrgpuBxDgFLkmnif80%2FOID%2BHNYxZQCBE18ZazzaoVUQezLX5qXgy8iTD4mO%2Bfr6PYQ4zMq%2FtAopqd3K%2FIOB%2BIpP9FAfTTuHPkReJJTVREC7LUazJL8oYsGR7f7tWUD5x4wJl3GoXK3bfHx3yOZpMZwh8%2BXcdir1K6jdcoZqQkJd0wyckld5Cl2bKYzGJMNfNFn2kmL%2BFrZIZdP92E%2F8pYrYyqRbJwCcMPM5TkZsGlY3tB2Dz3Q%2FCAJrFUC%2BG%2BbXI8ZBRecGnGMPt4auclMseU4eX2IqknVSzQND1dIqQr16RFIQRyRu9uSQQM6Uh1oP2n66MRgdIGulZ2E8E9hTkJCQQkcJpjglm2i3PkgUHTPKDWyuDp8jvnfelDKgMft5y6%2FA%2BnHtsillzPgq3HfxuzkLxEhBKevg6THWM9O8ae2dGOlZ3e7iYdmx7%2FAIO51x2ErxFhnHQ3duYRm8fum9jc2DzTvq7p0mHS09%2Btoeq79o4s1071HUW0EM5JWTd3iOhFLxfOSRZwi4ruUs31wjigig7acJ0e7G7QpKumXOIaUdAwf3rrxVMxTk08ZbWFBKC0hQDkfe%2FRzX6g3uMifQvmC9g297qPvBDRxi7TMSGAzRY8G2dACLJ0coSgnw4hyPsSQvVGIJ0wIWitIARtNyF8BQt3v49HZ3pTX1dqWW28MXstbMzW9KWxZ1%2BmrdFYYxpvNqZF5jXVze%2FvJg4QJRBu02iObYpxwK%2FB4ury%2BSmdxfdg6wShH48fuFn8MprMlX5eVsd%2FAA%3D%3D"></iframe>

Организация на Github с репозиториями сервисов автоматизации: [github.com/b4ck5p4c3](https://github.com/b4ck5p4c3):

* Базовая инфраструктура и подробное описание: [acs software](https://github.com/b4ck5p4c3/acs/tree/master/software)
	* Сервис инициализации контроллеров на шине: [acs-provision](https://github.com/b4ck5p4c3/acs-provision)
	* Сценарии управления на базе node-red [acs-automation](https://github.com/b4ck5p4c3/acs-automation), а также [инструкции по работе с системой автоматизации](https://github.com/b4ck5p4c3/acs-automation/blob/development/guides/B4CKSP4CE.md)
	* Приватный репозиторий с бэкапом конфига: [acs-secrets](https://github.com/b4ck5p4c3/acs-secrets)
	* Утилиты для управления системой: [acs-misc](https://github.com/b4ck5p4c3/acs-misc)
	* Транслятор [modbus2mqtt](https://github.com/b4ck5p4c3/acs-modbus2mqtt)

## Устройства Modbus

### RemoteIO: плата Kviver Endpointpp
**Схема:** [rev.1](/assets/endpointpp_rev_1.pdf)

**Прошивка:** [b4ck5p4c3/asc_endpointpp](https://github.com/b4ck5p4c3/asc_endpointpp)

Контроллер с IO и релейными выходами. Расположен под щитком в портале, откуда управляет дверьми, освещением, замками и вывесками. Контроллер полностью stateless, конфигурация заливается после перезагрузки СКУД по Modbus, через сервис acs-provisioning.

### RFID-считыватель
**Прошивка:** [b4ck5p4c3/asc_rfid](https://github.com/b4ck5p4c3/asc_rfid)

Контроллер с PN532, подключенным через SPI.
