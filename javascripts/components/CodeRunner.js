Vue.component("code-runner", {
    props: {
        input: String
    },
    data() {
        return {
            output: ""
        }
    },
    methods: {
        print(text) {
            this.output += `${text}\n`;
        },
        run() {
            this.output = "";
            console.oldLog = console.log;
            console.log = value => {
                console.oldLog(value);
                this.print(value);
            }
            try {
                eval(this.input);
            } catch (e) {
                this.print(e);
            } 
            // prevents mutation
            console.log = console.oldLog;
        }
    },
    template: `
    <div>
        <div class="code-container">
            <slot></slot>
        </div>
        <button @click="run">Run!</button>
        <div class="output-container">
            Output: <br>
            <textarea readonly v-model="output"></textarea>
        </div>
    </div>`
})