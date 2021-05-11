const app = new Vue(

    {
        el: '#vueapp',
        data: {
            mailList:[],
            printList:[],
            loading:false,
            },
            methods:{
                catchData()  {
                 this.loading = true;

                    for(let i =0; i < 10; i++) {                       //ciclo for per ottenere 10 indirizzi
                        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")          
                        .then((resp)=> {
                            setTimeout(()=> {                                    //set timeout per dilungare l'attesa (solo per mostrare messaggio)  

                                this.mailList.push(resp.data.response);        //primo push a for completo

                                    if(this.mailList.length === 10 ) {        
                                        this.loading = false                 //secondo push e cambio stato 'loading'
                                        this.printList = this.mailList       //la seconda lista sarà quella stampata
                                        }
                            }, 2000);
                        });
                    }
                
                },    
            },

        }

);


