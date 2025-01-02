describe('Покупка аватара', function () {                                
    it('e2e тест на покупку нового аватара для тренера', function () {   
         cy.visit('https://pokemonbattle.ru/');                          // перехожу на сайт https://pokemonbattle.ru/
         cy.get('input[type="email"]').type('USER_LOGIN');    // ввожу логин
         cy.get('input[type="password"]').type('USER_PASSWORD');          // ввожу пароль
         cy.get('button[type="submit"]').click();                        // нажимаю кнопку [Подтвердить]
         cy.wait(2000);
         cy.get('.header__container > .header__id').click({ force: true }); // Кликаю в шапке на аву тренера
         cy.get('[href="/shop"]').click();                               // нажимаю кнопку Магазин
         cy.get('.available > button').first().click({ force: true });   // кликаю [Купить] у первого доступного аватара
         cy.get('.credit').type('4620869113632996');                     // ввожу номер карты
         cy.get('.k_input_ccv').type('125');                             // ввожу CVV карты
         cy.get('.k_input_date').type('1225');                           // ввожу срок действия карты
         cy.get('.k_input_name').type('NAME');                           // ввожу имя владельца действия карты
         cy.wait(2000);
         cy.get('.pay-btn').click();                                     // нажимаю кнопку [Оплатить]
         cy.get('#cardnumber').type('56456');                            // ввожу код подтверждения СМС
         cy.get('.payment__submit-button').click();                      // нажимаю кнопку [Отправить]
         cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения о успешной покупке
     });
 });