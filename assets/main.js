var app = new Vue ({
    el : '#root',
    data : {
        contacts : [
            {
                name : 'Gianni',
                avatar :'',
                visible : true,
                messages : [
                    {
                        date: '12/11/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent',
                    }
                    {
                        date: '12/11/2020 15:35:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent',
                    }
                    {
                        date: '12/11/2020 15:45:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent',
                    }
                ],
            }

        ],
    },
    methods : {

    },



});
