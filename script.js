
const {createApp} = Vue;

createApp({

  data(){
    return{

      contacts: [


        {
            name: 'Michele',
            avatar: './img/avatar_1.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                }
            ],
        },

        {
            name: 'Fabio',
            avatar: './img/avatar_2.jpg',
            visible: false,
            messages: [
                {
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                }
            ],
        },

        {
            name: 'Samuele',
            avatar: './img/avatar_3.jpg',
            visible: false,
            messages: [
                {
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received'
                }
            ],
        },

        {
            name: 'Alessandro B.',
            avatar: './img/avatar_4.jpg',
            visible: false,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
            ],
        },

        {
            name: 'Alessandro L.',
            avatar: './img/avatar_5.jpg',
            visible: false,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Ricordati di chiamare la nonna',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Va bene, stasera la sento',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Claudia',
            avatar: './img/avatar_6.jpg',
            visible: false,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao Claudia, hai novità?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Non ancora',
                    status: 'received'
                },
                {
                    date: '10/01/2020 15:51:00',
                    message: 'Nessuna nuova, buona nuova',
                    status: 'sent'
                }
            ],
        },
        {
            name: 'Federico',
            avatar: './img/avatar_7.jpg',
            visible: false,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Fai gli auguri a Martina che è il suo compleanno!',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Grazie per avermelo ricordato, le scrivo subito!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Davide',
            avatar: './img/avatar_8.jpg',
            visible: false,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao, andiamo a mangiare la pizza stasera?',
                    status: 'received'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:51:00',
                    message: 'OK!!',
                    status: 'received'
                }
            ],
        }
    ],

    last: 0,
    indexSel: 0,
    newMessage: '',

    searchText: '',

    isLoading: false,

    loadingList: [],

    answerList: [
        'AHAHAHAHAHAHAHAH',
        'Sorry non mi interessa',
        'ok ok capito, ma sabato che fai?',
        'Ooooook! ',
        'Interessante',
        'Ciao, che piacere sentirti!',
        'No vabbeh non ci credo!',
        'mmm boh...',
        'pardon ma ora mi becchi in un momentaccio.'
    ]
    
     
    }
    
  },

  methods: {
    
      getLastMessage(index){

        const contacts = this.contacts

        const lastIndex = contacts[index].messages.length

        if(lastIndex === 0){
            return 'Nessun messaggio...'
        }else{

            if(contacts[index].messages[lastIndex - 1].status === 'sent'){
    
              return 'Tu: ' + contacts[index].messages[lastIndex - 1].message
            }else{
    
              return contacts[index].name + ': ' + contacts[index].messages[lastIndex - 1].message
            }


        }
      },

      selectUser(contact){

        this.contacts.forEach((element)=>
        element.visible = false)
        console.log(contact.visible);
        
        contact.visible = true
        console.log(contact.visible);
        
      },

      pushNewMessage(index){

        
        this.contacts[index].messages.push( {
          date: this.getDate(),
          message: this.newMessage,
          status: 'sent'
        })

        this.newMessage = ''
        

        setTimeout(()=>{
            this.loadingList.unshift();
            this.isLoading = true;
            this.loadingList.unshift(index) //QUIIIIIII
        },2000);

        

        setTimeout(()=>{
          this.contacts[index].messages.push( {
            date: this.getDate(),
            message: this.answerList[this.random(this.answerList.length)],
            status: 'received',
          })
          this.loadingList.pop() ///QUIIIIIII
          this.isLoading = false
          
        },5500)
      },

      getDate(){
        var currentdate = new Date();
        var datetime = (currentdate.getDay() + 1).toString() + '/' + (currentdate.getMonth() + 1).toString() + '/'+ (currentdate.getFullYear()).toString() + ' ' + currentdate.getHours().toString().padStart(2,'0') + ":" 
        + currentdate.getMinutes().toString().padStart(2,'0') + ':' + currentdate.getSeconds().toString().padStart(2,'0');

        return datetime;
     
      },

      getTimeFromDate(date){
        const fullHour = date.split(' ')[1]
        const hourMin = fullHour.substr(0,5)
        return hourMin
      },
      
      getLastDate(index){
        //MODIFICA QUIIIIIIIIIIIIIIIIIIII
        last = this.contacts[index].messages.length
        if(last === 0){
            return ''
        }else{

            return this.getTimeFromDate(this.contacts[index].messages[last - 1].date)
        }

      },

      removeMessage(index){
        console.log(this.contacts[this.indexSel].messages.splice(index,1));
        console.log('last value' + this.last)
      },

      random(max){
            return Math.floor(Math.random() * max);
        
      }

      
    },


  mounted(){

    console.log(this.random(4));
    console.log(this.random(4));
    console.log(this.random(4));
    console.log(this.random(4));
    console.log(this.random(4));
  }
}).mount('#app')