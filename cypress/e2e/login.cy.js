describe('Проверка авторизации', function () {

    it('1) Авторизация - верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // зашел на сайт
         cy.get('#form > .header').contains('Форма логина'); // проверяю что вижу текст
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка цвета кнопки [Забыли пароль]

         cy.get('#mail').type('german@dolnikov.ru'); // ввел верный логин
         cy.get('#pass').type('iLoveqastudio1'); // ввел верный пароль
         cy.get('#loginButton').click(); // нажал [Войти]

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // кнопка-крестик виден пользователю
     })

     it('2) Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/'); // зашел на сайт
        cy.get('#form > .header').contains('Форма логина'); // проверяю что вижу текст
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка цвета кнопки [Забыли пароль]
        cy.get('#forgotEmailButton').click(); // нажал [Забыли пароль]

        cy.get('#forgotForm > .header').contains('Восстановите пароль'); // проверяю что вижу текст
        cy.get('#mailForgot').type('german@dolnikov.ru'); // ввел верный логин
        cy.get('#restoreEmailButton').click(); // нажал [Отправить код]

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверяю что вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // кнопка-крестик виден пользователю
    })


    it('3) Авторизация - верный логин и НЕверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашел на сайт
        cy.get('#form > .header').contains('Форма логина'); // проверяю что вижу текст
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка цвета кнопки [Забыли пароль]

        cy.get('#mail').type('german@dolnikov.ru'); // ввел верный логин
        cy.get('#pass').type('incorrectPassword'); // ввел НЕверный пароль
        cy.get('#loginButton').click(); // нажал [Войти]

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // кнопка-крестик виден пользователю
    })

    it('4) Авторизация - НЕверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашел на сайт
        cy.get('#form > .header').contains('Форма логина'); // проверяю что вижу текст
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка цвета кнопки [Забыли пароль]

        cy.get('#mail').type('noname@dolnikov.ru'); // ввел НЕверный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввел верный пароль
        cy.get('#loginButton').click(); // нажал [Войти]

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // кнопка-крестик виден пользователю
    })

    it('5) Валидация - логин без @', function () {
        cy.visit('https://login.qa.studio/'); // зашел на сайт
        cy.get('#form > .header').contains('Форма логина'); // проверяю что вижу текст
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка цвета кнопки [Забыли пароль]

        cy.get('#mail').type('germandolnikov.ru'); // ввел НЕверный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввел верный пароль
        cy.get('#loginButton').click(); // нажал [Войти]

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
    })

    it('6) Авторизация - приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); // зашел на сайт
        cy.get('#form > .header').contains('Форма логина'); // проверяю что вижу текст
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка цвета кнопки [Забыли пароль]

        cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввел НЕверный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввел верный пароль
        cy.get('#loginButton').click(); // нажал [Войти]

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // кнопка-крестик виден пользователю
    })
   
 })