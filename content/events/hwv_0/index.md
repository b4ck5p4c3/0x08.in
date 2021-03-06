---
pageTitle: HVW / Embedded Meetup 0
pageDescription: Что такое hardware hacking, и как им обмазаться. Loss, noise and two Friis equations. Особенности проектирования систем сбора данных при работе с биологическими объектами. Применение Rust для архитектуры RISC-V
pageKeywords: embedded, hardware hacking, СВЧ, RF, человеко-машинныq интерфейс, Rust, RISC-V, FPGA
startDate: 02.11.2019 15:30
---

### 1. Что такое hardware hacking, и как им обмазаться
_Aanper_
_Zaf0d_

Узнаем что это и зачем этим заниматься, посмотрим на минимальный набор, необходимый для того, чтобы начать исследовать железо.

Презентация: [pdf](/static/slides/hvw0/hvw0_hardwarehacking.pdf)

### 2.  Loss, noise and two Friis equations
_Юшков Иван, embedded engineer_

Доклад посвящён основам СВЧ. Рассмотрены темы расчёта RF-бюджета линии, коэффициента шума и согласования цепей.

Презентации: [odp](/static/slides/hvw0//hwv0_loss_and_noise.odp), [pdf](/static/slides/hvw0//hwv0_loss_and_noise.pdf)

### 3. Особенности проектирования систем сбора данных при работе с биологическими объектами.
_Арман, магистрант МГТУ имени Баумана._

Одна из ключевых задач в медицине и человеко-машинных интерфейсах — регистрация различных параметров, например, активности мышц. Узнаем, на что следует обратить внимание при работе с биологическими сигналами, и почему кроме познаний в электронике и антенной технике при проектировании важно понимать биофизику исследуемых процессов.

Презентация: [pdf](/static/slides/hvw0//hwv_0_medInstrumentationDesign.pdf)

### 4. Применение Rust для архитектуры RISC-V
_[Disasm](https://github.com/Disasm)_

Доклад посвящён применению языка Rust для embedded-разработки.
В качестве целевой архитектуры рассматривается RISC-V и её реализации как в чипах, так и на FPGA.

Презентация: [pdf](/static/slides/hvw0//hvw0_rust_and_riscv.pdf)
