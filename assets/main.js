var app = new Vue ({
    el : '#root',
    data : {
        profilo : {
            name : 'Francesco',
            avatar : 'images/tesla.png',
        },
        contactsIndex : 0,  // inizializzo a zero, il valore cambierà all'interno del ciclo v-for
        contacts : [
            {
                name : 'Gianni',
                avatar :'images/avatar-366-456318.png',
                lastAccess : '20:50',
                messages : [
                    {
                        date: '12/11/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'received',
                    },
                    {
                        date: '12/11/2020 15:35:55',
                        message: 'si',
                        status: 'sent',
                    },
                    {
                        date: '12/11/2020 15:45:55',
                        message: 'a posto!',
                        status: 'received',
                    },
                ],
            },
            {
                name : 'Samuele',
                avatar :'images/suarez.png',
                lastAccess : '20:20',
                messages : [
                    {
                        date: '12/11/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'received',
                    },
                    {
                        date: '12/11/2020 15:35:55',
                        message: 'no',
                        status: 'sent',
                    },
                    {
                        date: '12/11/2020 15:45:55',
                        message: 'a che ora lo porti?',
                        status: 'received',
                    },
                ],
            },
            {
                name : 'Andrea',
                avatar :'images/trump.png',
                lastAccess : '21:50',
                messages : [
                    {
                        date: '12/11/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'received',
                    },
                    {
                        date: '12/11/2020 15:35:55',
                        message: 'ancora no',
                        status: 'sent',
                    },
                    {
                        date: '12/11/2020 15:45:55',
                        message: 'fammi sapere quando vai così andiamo insieme',
                        status: 'received',
                    },
                ],
            },
            {
                name : 'Erika',
                avatar :'images/trinity.png',
                lastAccess : '10:50',
                messages : [
                    {
                        date: '12/11/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'received',
                    },
                    {
                        date: '12/11/2020 15:35:55',
                        message: 'sto andando adesso',
                        status: 'sent',
                    },
                    {
                        date: '12/11/2020 15:45:55',
                        message: 'arrivo',
                        status: 'received',
                    },
                ],
            },

        ],
        inpuText : '', // prende il testo digitato dall'utente
        research : '', // prende il testo digitato dall'utente nella casella della ricerca contatti
    },
    methods : {

        // funzione per cambiare scheda contatto nella parte superiore della sezione messaggi
        contactChange(index) {
            this.contactsIndex = index;
        },

        // funzione che prende il tasto enter
        enterKey() {
            // oggetto che viene aggiunto all'array esistente
            let inputMessage = {
                date: '16/11/2020 12:00:00',
                message: '',
                status: 'sent'
            };

            // il testo digitato viene assegnato al campo messaggi del nuovo oggetto creato
            inputMessage.message = this.inpuText;

            // il nuovo oggetto viene pushato nell'array, nella conversazione selezionata
            this.contacts[this.contactsIndex].messages.push(inputMessage);

            // pulizia del campo input
            this.inpuText = '';

            // risposta automatica al messaggio inserito

            // oggetto - risposta
            setTimeout( () => {
            let autoResponse = {
                date : '16/11/2020 12:10:00',
                message: 'prova',
                status: 'received'
            };

            // l'oggetto-risposta viene pushato nell'array
            this.contacts[this.contactsIndex].messages.push(autoResponse);

            }, 2000);

        },

    }

});
