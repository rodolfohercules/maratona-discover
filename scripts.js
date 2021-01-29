const Modal = {
    open(){
      //abrir modal
      // adicionar a class active ao modal
      document
      .querySelector('.modal-overlay')
      .classList
      .add('active')
     },
    close(){
      // fechar o modal
      // preciso remover a class active do modal
      document
      .querySelector('.modal-overlay')
      .classList
      .remove('active')
    }
  }

  const transactions = [
        {
            id: 1,
            description: 'Luz',
            amount: -50000,
            date: '23/01/2021',
        },
        {
            id: 2,
            description: 'Website',
            amount: 500000,
            date: '23/01/2021',
        },
        {
            id: 3,
            description: 'Internet',
            amount: -20000,
            date: '23/01/2021',
        },
        {
          id: 4,
          description: 'App',
          amount: 200000,
          date: '23/01/2021',
      },
    ]

    // eu preciso somar as entradas
    // depois eu preciso somar as saídas e
    // remover das entradas o valor das saídas
    // assim, eu terei o total

  const Transaction = {
      incomes() {
          //somas as entradas
      },
      expenses() {
          //somar as saídas
      },
      total() {
        //Entradas - saídas.
      }
  }

  // eu substituir os dados do HTML com os dados do JS

  const DOM = {
      transactionsContainer: document.querySelector('#data-table tbody'),

      addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        DOM.transactionsContainer.appendChild(tr)        
      },
      innerHTMLTransaction(transaction) {
        const CSSclass = transaction.amount > 0 ? "income" : "expense"

        const amount = Utils.formatCurrency(transaction.amount)

        const html = `
        
            <td class="description">${transaction.description}</td>
            <td class="${CSSclass}">${transaction.amount}</td>
             <td class=${transaction.date}>23/01/2021</td>
            <td>
                <img src="./assets/minus.svg" alt="Remover Transação" />
            </td>
        
        `
        return html
      }
  }

  const Utils = {
    formatCurrency(value) {
      const signal = Number(value) < 0 ? "-" : ""
      
      
      value = String(value).replace(/\D/g, "")

      value = Number(value) / 100

      value = value.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL"
      })


      console.log(value)
    }
  }

  transactions.forEach(function(transaction) {
    DOM.addTransaction(transaction)
  })
