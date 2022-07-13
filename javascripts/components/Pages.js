Vue.component("introduction-tab", {
    template: 
    `<div>
        Sequence & JS crash course<br>
        This course serves as a basic introduction to number sequences and js.
        This course includes:
        <ul>
            <li>JavaScript Operators</li>
            <li>Basic usage JavaScript Functions</li>
            <li>Arithmetic and geometric sequence</li>
            <li>Finding terms of AS and GS</li>
        </ul>
    </div>`
})

Vue.component("introduction-js-tab", {
    template: 
    `<div>
        What is javascript?<br>
        JavaScript is a programming language. It is primarily used in websites (alongside with HTML and CSS).<br><br>
        JavaScript programs consists of different data types that it can interact with. Here are three of the basic data types:<br>
        <table>
            <tr>
                <th>Numbers</th>
                <td>1, 0.5, -2450...</td>
            </tr>
            <tr>
                <th>Strings</th>
                <td>"A", "Hello world!", "02384"...</td>
            </tr>
            <tr>
                <th>Booleans</th>
                <td>true, false</td>
            </tr>
        </table>
        Note that strings have to be surrounded by quotation marks (' or ").
    </div>`
})

Vue.component("js-console-tab", {
    data() {
        return {
            input: ""
        }
    },
    computed: {
        fullCode() {
            return `console.log(${this.input})`;
        }
    },
    template: 
    `<div>
        Normally, you cannot see the output of a program.<br>
        However, you can cause a program to display a result with the use of console.<br>
        Syntax: <code>console.log(&lt;your item here&gt;);</code><br>
        This will cause the item within the brackets to be displayed. (Remember to use quotation marks for strings!)<br>
        Try it here:<br>
        <code-runner :input="fullCode">console.log(<input v-model="input"></input>);</code-runner>
    </div>`
})


Vue.component("sequence-exercise-tab", {
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
