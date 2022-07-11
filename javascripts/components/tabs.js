Vue.component("sequence-tab", {
    data() {
        return {
            currentSequenceStat: {
                type: 0,
                a: 0,
                d: 0
            },
            input: "",
            score: 0,
            resultText: "",
            success: false
        }
    },
    computed: {
        currentSequenceDisplay() {
            const list = [];
            for (let i = 1; i <= 5; i++) {
                list.push(this.calculate(i));
            }
            return `${list.join(", ")}, ...`
        },
    },
    methods: {
        generateBaseStat() {
            const seed = Math.floor(Math.random() * 3); // 0, 1, 2
            if (seed <= 1) {
                const a = Math.floor(Math.random() * 50);
                const d = Math.floor(Math.random() * 20 + 1);
                this.currentSequenceStat = {
                    type: 0,
                    a: a,
                    d: d
                }
            } else {
                const a = Math.floor(Math.random() * 20 + 1);
                const r = Math.floor(Math.random() * 4 + 2);
                this.currentSequenceStat = {
                    type: 1,
                    a: a,
                    r: r
                }
            }
        },
        calculate(term) {
            const stats = this.currentSequenceStat;
            if (stats.type === 0) {
                return stats.a + stats.d * (term - 1);
            } else {
                return stats.a * (stats.r ** (term - 1));
            }
        },
        verify() {
            const tester = 
            `
            for (let i = 1; i <= 100; i++) {
                const expected = this.calculate(i);
                const actual = testee(i);
                if (expected !== actual) {
                    this.resultText = \`Failed at term n = \${i}! Expected: \${expected}, result: \${actual}\`;
                    failed = true;
                    break;
                }
            }
            if (!failed) {
                this.resultText = "Success, all tests passed!"
                this.success = true;
            }
            `;
            try {
                let failed = false;
                eval(`'use strict';const testee = n => {return ${this.input}};${tester}`);
            } catch (e) {
                this.resultText = e;
            }
        },
        next() {
            this.input = "";
            this.resultText = "";
            this.score ++;
            this.success = false;
            this.generateBaseStat();
        }
    },
    mounted() {
        this.generateBaseStat();
    },
    template: 
    `<div>
        Score: {{score}}<br>
        Create a function A that outputs the n-term of this sequence: <br>
        {{currentSequenceDisplay}}<br>
        function A(n) {<br>
        &nbsp&nbsp&nbsp&nbspreturn <input v-model="input" placeholder="// Enter js code here..."><br>
        }<br>
        <button @click="verify">Verify</button><button v-if="success" @click="next">Next Question</button><br>
        {{resultText}}<br>
    </div>`
})

Vue.component("simulation-tab", {
    template: 
    `<div>
        Tab 2
    </div>`
})

Vue.component("plotting-tab", {
    template: 
    `<div>
        Tab 3
    </div>`
})

