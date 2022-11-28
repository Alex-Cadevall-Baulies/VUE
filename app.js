// To inform the system vue will be used in this file
const app1 = Vue.createApp({
    
    data() {
        return {
            props: "Vue JS 3 tutorial from the net ninja for full tutorial",
            title: 'Check VUE',
            moreCode : 'What is this thing',
            number : 7,
            functionTest : () => {console.log(`hello world`)}, //does not allow to send function
            isTrue : false,
            trueMessage : "Yes it is!",
            x: 0,
            y: 0,
            books : [
                {title: 'lost land', genre: 'sci-fi, fantasy'},
                {title: 'bag of bones', genre: 'thriller, horror'},
                {title: 'IQ84', genre: 'magical realism'},
            ],
            url: 'https://www.youtube.com/watch?v=Bg59q4puhmg',
            url2: 'https://www.youtube.com/watch?v=5NPBIwQyPWE'
        }
    },

    // we use methods to send functions
    methods: {
        whereAmI() {
            console.log(`you are here`)

            // Each time you click it adds the "you are here" message
            const div = document.createElement("div")
            div.textContent = "you are here"
            
            document.getElementById("where").append(div)
            window.scrollTo(0, document.body.scrollHeight)
        },

        updateFunction() {
            // When you click changes functionTest parameter
            this.functionTest = "use methods for functions"

            // Also turns answer in bold
            const element = document.getElementById("functionTest");
            element.style.fontWeight = "bold";
        },

        toggle() {
            this.isTrue = !this.isTrue
        },

        handleEvent(event, param) {
            console.log('event')
            // Each time an event is produced we send it as a parameter to the function
            console.log(event, event.type)
            
            //we can also send a second param if needed
            if (param) {
                console.log(param)
            }
        },

        handleMouseMove(event){

            //using event we are updating x and y values based on the offset postion of our mouse in the box
            this.x = event.offsetX,
            this.y = event.offsetY
        }
    }

})

//Using app we can now inform the system where do we want to mount the application
app1.mount('#app1') // https://vuejs.org/guide/essentials/application.html#mounting-the-app

console.log('testing vue')