let bankcatalog = [
    { "bankName": "Газпромбанк", "investName": "Ваш успех", "currency": "RUB", "incomeType": 6.22, "sumMin": 50000, "sumMax": null, "termMin": 12, "termMax": 12, "canDeposit": false },
    { "bankName": "Кредит Европа Банк", "investName": "Оптимальный на 2 года", "currency": "RUB", "incomeType": 6.45, "sumMin": 100000, "sumMax": null, "termMin": 24, "termMax": 24, "canDeposit": false },
    { "bankName": "Банк Зенит", "investName": "Праздничный 500+", "currency": "RUB", "incomeType": 6, "sumMin": 30000, "sumMax": null, "termMin": 17, "termMax": 17, "canDeposit": false },
    { "bankName": "Еврофинанс Моснарбанк", "investName": "Классический", "currency": "RUB", "incomeType": 6.95, "sumMin": 30000, "sumMax": null, "termMin": 12, "termMax": 24, "canDeposit": false },
    { "bankName": "Джей энд Ти Банк", "investName": "Магнус-Онлайн", "currency": "RUB", "incomeType": 6.8, "sumMin": 100000, "sumMax": null, "termMin": 6, "termMax": 6, "canDeposit": false },
    { "bankName": "МТС Банк", "investName": "В вашу пользу", "currency": "RUB", "incomeType": 6.75, "sumMin": 50000, "sumMax": null, "termMin": 12, "termMax": 12, "canDeposit": true },
    { "bankName": "Эс-Би-Ай Банк", "investName": "Свои правила Онлайн", "currency": "RUB", "incomeType": 6.7, "sumMin": 30000, "sumMax": 30000000, "termMin": 24, "termMax": 24, "canDeposit": false },
    { "bankName": "Банк Уралсиб", "investName": "Прогноз отличный", "currency": "RUB", "incomeType": 6.7, "sumMin": 100000, "sumMax": null, "termMin": 37, "termMax": 37, "canDeposit": false },
    { "bankName": "Инвестторгбанк", "investName": "ИТБ-Постоянный доход", "currency": "RUB", "incomeType": 6.6, "sumMin": 50000, "sumMax": null, "termMin": 37, "termMax": 37, "canDeposit": false },
    { "bankName": "Транскапиталбанк", "investName": "ТКБ.Постоянный доход", "currency": "RUB", "incomeType": 6.6, "sumMin": 50000, "sumMax": null, "termMin": 37, "termMax": 37, "canDeposit": false },
    { "bankName": "Совкомбанк", "investName": "Зимний праздник с Халвой", "currency": "RUB", "incomeType": 5.6, "sumMin": 50000, "sumMax": null, "termMin": 2, "termMax": 2, "canDeposit": true },
    { "bankName": "Агророс", "investName": "Медовый месяц", "currency": "RUB", "incomeType": 5.51, "sumMin": 20000, "sumMax": null, "termMin": 1, "termMax": 1, "canDeposit": true },
    { "bankName": "Росдорбанк", "investName": "Онлайн-1", "currency": "RUB", "incomeType": 5.1, "sumMin": 100000, "sumMax": 150000000, "termMin": 1, "termMax": 1, "canDeposit": true },
    { "bankName": "Национальный Стандарт", "investName": "Сберегательный стандарт", "currency": "RUB", "incomeType": 5.1, "sumMin": 100000, "sumMax": null, "termMin": 1, "termMax": 3, "canDeposit": true },
    { "bankName": "Россия", "investName": "Морозные узоры", "currency": "RUB", "incomeType": 5, "sumMin": 100000, "sumMax": null, "termMin": 1, "termMax": 1, "canDeposit": true },
    { "bankName": "Кузнецкий Мост", "investName": "Накопительный", "currency": "RUB", "incomeType": 4.85, "sumMin": 50000, "sumMax": null, "termMin": 1, "termMax": 3, "canDeposit": true },
    { "bankName": "Тексбанк", "investName": "Универсальный", "currency": "RUB", "incomeType": 4.6, "sumMin": 10000, "sumMax": null, "termMin": 1, "termMax": 1, "canDeposit": true },
    { "bankName": "Морской Банк", "investName": "Правильным курсом +", "currency": "RUB", "incomeType": 4.55, "sumMin": 100000, "sumMax": null, "termMin": 1, "termMax": 3, "canDeposit": true },
    { "bankName": "Норвик Банк", "investName": "Лаконичный", "currency": "RUB", "incomeType": 4.5, "sumMin": 500, "sumMax": 50000000, "termMin": 1, "termMax": 1, "canDeposit": true },
    { "bankName": "Промсельхозбанк", "investName": "Конструктор", "currency": "RUB", "incomeType": 4.5, "sumMin": 10000, "sumMax": null, "termMin": 1, "termMax": 3, "canDeposit": true },
    { "bankName": "Акибанк", "investName": "Онлайн", "currency": "RUB", "incomeType": 6.5, "sumMin": 1000, "sumMax": null, "termMin": 6, "termMax": 6, "canDeposit": true },
    { "bankName": "Банк БКФ", "investName": "Ключевой стандарт", "currency": "RUB", "incomeType": 6.5, "sumMin": 100000, "sumMax": null, "termMin": 6, "termMax": 13, "canDeposit": true },
    { "bankName": "Экспобанк", "investName": "Специальный (в конце срока)", "currency": "RUB", "incomeType": 6.35, "sumMin": 50000, "sumMax": 10000000, "termMin": 6, "termMax": 6, "canDeposit": true },
    { "bankName": "Инвестторгбанк", "investName": "ИТБ-Пополняемый", "currency": "RUB", "incomeType": 6.15, "sumMin": 50000, "sumMax": 30000000, "termMin": 6, "termMax": 6, "canDeposit": true },
    { "bankName": "Транскапиталбанк", "investName": "ТКБ.Пополняемый", "currency": "RUB", "incomeType": 6.15, "sumMin": 50000, "sumMax": 30000000, "termMin": 6, "termMax": 6, "canDeposit": true },
    { "bankName": "Евроазиатский Инвестиционный Банк", "investName": "Классика", "currency": "RUB", "incomeType": 6.1, "sumMin": 100000, "sumMax": null, "termMin": 6, "termMax": 12, "canDeposit": true },
    { "bankName": "Тимер Банк", "investName": "Надежный выбор", "currency": "RUB", "incomeType": 6, "sumMin": 10000, "sumMax": null, "termMin": 6, "termMax": 6, "canDeposit": true },
    { "bankName": "Евразийский Банк", "investName": "TURBO MAXIMUM", "currency": "RUB", "incomeType": 6, "sumMin": 30000, "sumMax": 299999, "termMin": 6, "termMax": 6, "canDeposit": true },
    { "bankName": "Таврический Банк", "investName": "Достижимый (онлайн)", "currency": "RUB", "incomeType": 6, "sumMin": 50000, "sumMax": null, "termMin": 6, "termMax": 6, "canDeposit": true },
    { "bankName": "Экспобанк", "investName": "Юбилейный 25 (в конце срока)", "currency": "RUB", "incomeType": 6.5, "sumMin": 100000, "sumMax": 20000000, "termMin": 12, "termMax": 12, "canDeposit": true },
    { "bankName": "Крокус-Банк", "investName": "Ежемесячный доход", "currency": "RUB", "incomeType": 6.35, "sumMin": 50000, "sumMax": null, "termMin": 12, "termMax": 12, "canDeposit": true },
    { "bankName": "Промсельхозбанк", "investName": "Ваш выбор", "currency": "RUB", "incomeType": 6.3, "sumMin": 10000, "sumMax": null, "termMin": 12, "termMax": 12, "canDeposit": true },
    { "bankName": "Нацинвестпромбанк", "investName": "Прибыльный", "currency": "RUB", "incomeType": 6.3, "sumMin": 50000, "sumMax": null, "termMin": 12, "termMax": 12, "canDeposit": true },
    { "bankName": "Ишбанк", "investName": "Накопительный", "currency": "RUB", "incomeType": 6.25, "sumMin": 100000, "sumMax": null, "termMin": 12, "termMax": 12, "canDeposit": true },
    { "bankName": "Примсоцбанк", "investName": "Новогодний чулок (333 дня)", "currency": "RUB", "incomeType": 6.2, "sumMin": 10000, "sumMax": null, "termMin": 11, "termMax": 11, "canDeposit": true },
    { "bankName": "Еврофинанс Моснарбанк", "investName": "Пополняемый", "currency": "RUB", "incomeType": 6.75, "sumMin": 1000000, "sumMax": null, "termMin": 12, "termMax": 24, "canDeposit": true },
    { "bankName": "Евроазиатский Инвестиционный Банк", "investName": "VIP", "currency": "RUB", "incomeType": 6.35, "sumMin": 1000000, "sumMax": null, "termMin": 9, "termMax": 12, "canDeposit": true },
    { "bankName": "Российская Финансовая Корпорация", "investName": "Универсальный", "currency": "RUB", "incomeType": 6, "sumMin": 5000, "sumMax": null, "termMin": 3, "termMax": 3, "canDeposit": true },
    { "bankName": "Московский Кредитный Банк", "investName": "МЕГА Онлайн", "currency": "RUB", "incomeType": 5.8, "sumMin": 1000, "sumMax": null, "termMin": 3, "termMax": 5, "canDeposit": true },
    { "bankName": "Александровский", "investName": "Черника 19/20", "currency": "RUB", "incomeType": 5.6, "sumMin": 20000, "sumMax": null, "termMin": 3, "termMax": 3, "canDeposit": true },
    { "bankName": "Финанс Бизнес Банк", "investName": "Мандариновый!", "currency": "RUB", "incomeType": 5.6, "sumMin": 50000, "sumMax": null, "termMin": 3, "termMax": 3, "canDeposit": true },
    { "bankName": "ЦентроКредит", "investName": "Доход Плюс", "currency": "USD", "incomeType": 1.15, "sumMin": 5000, "sumMax": null, "termMin": 3, "termMax": 3, "canDeposit": true },
    { "bankName": "Совкомбанк", "investName": "Удобный (в долларах)", "currency": "USD", "incomeType": 1, "sumMin": 500, "sumMax": null, "termMin": 3, "termMax": 6, "canDeposit": true },
    { "bankName": "Веста", "investName": "Веста - Копилка", "currency": "USD", "incomeType": 1, "sumMin": 10000, "sumMax": null, "termMin": 3, "termMax": 6, "canDeposit": true },
    { "bankName": "Славия", "investName": "Славный Капитал", "currency": "USD", "incomeType": 0.85, "sumMin": 5000, "sumMax": null, "termMin": 3, "termMax": 4, "canDeposit": true },
    { "bankName": "Роскосмосбанк", "investName": "Комфортный", "currency": "USD", "incomeType": 0.8, "sumMin": 500, "sumMax": null, "termMin": 3, "termMax": 6, "canDeposit": true },
    { "bankName": "ФорБанк", "investName": "Срочный накопительный", "currency": "USD", "incomeType": 0.8, "sumMin": 10000, "sumMax": 500000, "termMin": 3, "termMax": 3, "canDeposit": true },
    { "bankName": "Московский Областной Банк", "investName": "Гарантированный доллар", "currency": "USD", "incomeType": 0.75, "sumMin": 50, "sumMax": null, "termMin": 4, "termMax": 4, "canDeposit": true },
    { "bankName": "Объединенный Резервный Банк", "investName": "ОРБ-Накопительный (в конце срока)", "currency": "USD", "incomeType": 1.6, "sumMin": 1000, "sumMax": null, "termMin": 12, "termMax": 12, "canDeposit": true },
    { "bankName": "Банк Агора", "investName": "Срочный", "currency": "USD", "incomeType": 1.5, "sumMin": 1000, "sumMax": null, "termMin": 12, "termMax": 12, "canDeposit": true },
    { "bankName": "Тинькофф Банк", "investName": "СмартВклад (с повышенной ставкой)", "currency": "USD", "incomeType": 1.5, "sumMin": 1000, "sumMax": null, "termMin": 12, "termMax": 12, "canDeposit": true },
    { "bankName": "Первый Инвестиционный Банк", "investName": "Закон сохранения", "currency": "USD", "incomeType": 1.5, "sumMin": 1000, "sumMax": null, "termMin": 12, "termMax": 12, "canDeposit": true },
    { "bankName": "Новый Век", "investName": "Сберегательный", "currency": "USD", "incomeType": 1.5, "sumMin": 5000, "sumMax": 20000, "termMin": 12, "termMax": 12, "canDeposit": true }
]


class Application {
    constructor() {
        let button = document.querySelector('#handle').addEventListener('click', this.hundleButtonClick.bind(this));
    }
    hundleButtonClick() {
        let error = document.getElementById("error");
        let table = document.getElementById("table");
        error.innerHTML = "";
        table.innerHTML = "";
        let initialAmount = +(document.getElementById('initialAmount').value);
        let replenishment = +(document.getElementById('replenishment').value);
        let term = +(document.getElementById('term').value);
        let currency = document.getElementById('currency').value;
        if (initialAmount > 0 && replenishment >= 0 && term > 0 && (currency.toUpperCase() == "RUB" || currency.toUpperCase() == "USD")) {
            let user = new Deposit(initialAmount, replenishment, term, currency);
            let bank = new BankProduct()
            let calculator = new Calculator(user, bank);
            this.show(calculator.result)
        } else { this.check(initialAmount, replenishment, term, currency) }
    }
    check(initialAmount, replenishment, term, currency) {
        if (initialAmount < 0 || initialAmount == "") {
            error.innerHTML += `Начальная сумма не может быть пустой или ниже нуля <br>`;
        }
        if (replenishment < 0) {
            error.innerHTML += `Сумма ежемесячного вклада не может быть пустой или ниже нуля <br>`;
        }
        if (term <= 0) {
            error.innerHTML += `Срок вклада не может быть 0 или меньше <br>`;
        }
        if ((currency.toUpperCase() !== "RUB" || currency.toUpperCase() !== "USD")) {
            error.innerHTML += `Введите валюту <br>`;
        }
    }
    show(calculator) {
        if (calculator == 0) {
            alert("Такого Банка нет")
        }
        else {
            console.log(calculator)
            table.innerHTML = '<tr><th>Название Банка</th><th>Вклад</th><th>Процент</th><th>Итоговая сумма</th></tr>';
            for (let i = 0; i < calculator.length; i++) {
                table.innerHTML += '<tr><td>' + calculator[i].bankName + '</td><td>' + calculator[i].investName + '</td><td>' + calculator[i].incomeType + '</td><td>' + calculator[i].total + '</td></tr>';
            }
        }
    }
}
class Deposit {
    constructor(initialAmount, replenishment, term, currency) {
        this.initialAmount = initialAmount;
        this.replenishment = replenishment;
        this.term = term;
        this.replenishmentcheck = this.checkTerm();
        this.currency = currency.toUpperCase();
    }
    checkTerm() {
        if (this.replenishment > 0 || this.replenishment == null){return true;}
        else {return false;}
    }
};

class BankProduct {
    constructor() {
        this.currency = this.checkAllBank();
    }
    checkAllBank() {
        let bankarr = [];
        for (let i = 0; i < bankcatalog.length; i++) {
            bankarr.push(bankcatalog[i])
        }
        return bankarr
    }
};

class Calculator {
    constructor(deposit, bank) {
        this.deposit = deposit;
        this.bank = bank;
        this.result = this.checkBestOption();
    }
    checkBestOption() {
        let resultarr = [];
        let finalresult = "";
        let superresult = [];
        for (let i = 0; i < this.bank.currency.length; i++) {
            if (
                (this.deposit.initialAmount >= this.bank.currency[i].sumMin && (this.deposit.initialAmount <= this.bank.currency[i].sumMax || this.bank.currency[i].sumMax === null)) &&
                (this.deposit.term >= this.bank.currency[i].termMin && this.deposit.term <= this.bank.currency[i].termMax) &&
                (this.deposit.currency == this.bank.currency[i].currency) &&
                (this.deposit.replenishmentcheck == this.bank.currency[i].canDeposit)
            ) {
                this.bank.currency[i].total =
                    this.balance = (this.deposit.initialAmount * Math.pow(1 + (this.bank.currency[i].incomeType / 100) / 12, this.deposit.term)) + this.deposit.replenishment * this.findPower(this.deposit.term, this.bank.currency[i].incomeType);
                this.bank.currency[i].total = Math.floor(this.balance)
                resultarr.push(this.bank.currency[i])
            }
        }
        if (resultarr.length > 0) {
            finalresult = resultarr.reduce(function (prev, current) {
                return (prev.total >= current.total) ? prev : current
            });
            superresult.push(finalresult)
        } else { superresult.push(0) }
        console.log(superresult)
        for (let i = 0; i < resultarr.length; i++)
            if (finalresult.total == resultarr[i].total && finalresult.bankName !== resultarr[i].bankName) {
                superresult.push(resultarr[i])
            }
        return superresult;
    }
    findPower(time, rait) {
        let salPower = 0;
        for (let i = time; i > 0; i--) {
            salPower += Math.pow(1 + (rait / 100) / 12, i);
        }
        return salPower;
    }
};

