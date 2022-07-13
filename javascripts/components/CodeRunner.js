Vue.component("code-runner", {
    props: {
        input: {
            type: String,
            default: ""
        },
        default: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            output: "",
            textarea: ""
        }
    },
    computed: {
        hasDefaultSlot () {
            return !!this.$slots.default
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
                eval(this.hasDefaultSlot ? this.input : this.textarea);
            } catch (e) {
                this.print(e);
            } 
            // prevents mutation
            console.log = console.oldLog;
        }
    },
    watch: {
        default() {
            this.textarea = this.default;
        }
    },
    mounted() {
        this.textarea = this.default;
    },
    template: `
    <div>
        <div class="code-container">
            <slot><textarea v-model="textarea"></textarea></slot>
        </div>
        <button @click="run">Run!</button>
        <div class="output-container">
            Output: <br>
            <textarea readonly v-model="output"></textarea>
        </div>
    </div>`
})