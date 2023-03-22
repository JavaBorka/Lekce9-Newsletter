console.log('Všetko baví')

/******** CVIČENÍ 3 ***********/

// Pokračujte v příkladu Newsletter z lekce. V tomto cvičení zařidíme, aby uživatel při zadávání e-mailu dostal zpětnou vazbu, pokud zadává neplatný vstup.

// V CSS si vytvořte třídu, která dělá výrazný červený rámeček kolem textového políčka.

// Přidejte na textové políčko posluchač události input.

// Během toho, jak uživatel píše, kontrolujte, jestli náhodou políčko není prázdné. V takovém případě na políčko přidejte třídu s červeným rámečkem. Pokud je vstup v pořádku, rámeček odeberte.

// Zobrazte červený rámeček i v případě, že zadaný e-mail neobsahuje zavináč. K tomu můžete použít metodu indexOf nebo includes.

const formular = document.querySelector('form')
const textovePolicko = document.querySelector('input')

const odebirat = (event) => {
    event.preventDefault()
    const input = document.querySelector('input')
    const email = input.value
    formular.textContent = 'Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ' + email
}

formular.addEventListener('submit', odebirat)

const kontrolaPolicka = (event) => {
    if (textovePolicko.value === '' || !textovePolicko.value.includes('@')) {
        textovePolicko.classList.add('alertInput')
    } else textovePolicko.classList.remove('alertInput')   
    }

textovePolicko.addEventListener('input', kontrolaPolicka)
