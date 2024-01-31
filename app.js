const app = Vue.createApp({
    data() {
        return {
            result: '',
            sum: 0,
        };
    },
    computed: {
        resultMessage() {
            if (this.result === 37) {
                return "True";
            }else if(this.result > 37){
                return "It's too much!";
            }else {
                return "Not yet there!";
            }
        },
    },
    methods: {
        addOne() {
            this.sum += 1;
            this.updateResult();
        },
        addFive() {
            this.sum += 5;
            this.updateResult();
        },
        updateResult() {
            this.result = this.sum;
        },
        reset() {
            this.sum = 0;
            // this.result = 0; //if we use button reset uncomment
        },
    },
    watch: {
        result(newValue, oldValue) {
            if (newValue !== oldValue) {
                setTimeout(() => {
                    this.sum = 0;
                    this.result = 0;
                }, 5000);
            }
        },
    },
});

app.mount("#assignment");
