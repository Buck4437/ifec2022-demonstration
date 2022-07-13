Vue.component("introduction-tab", {
    template: 
    `<div>
        <div class="subhead">
            Sequence & JS crash course
        </div>
        This course serves as a basic introduction to number sequences and js.
        This course includes:
        <ul>
            <li>JavaScript Operators</li>
            <li>Basic usage of JavaScript Functions</li>
            <li>Arithmetic and geometric sequence</li>
            <li>Finding terms of AS and GS</li>
        </ul>
    </div>`
})

Vue.component("introduction-js-tab", {
    template: 
    `<div>
        <div class="subhead">
            What is JavaScript?
        </div>
        JavaScript is a programming language. It is primarily used in websites (alongside with HTML and CSS).<br><br>
        JavaScript programs consists of different data types that it can interact with. Here are three of the basic data types:
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
            input: "\"Hello World!\""
        }
    },
    computed: {
        fullCode() {
            return `console.log(${this.input})`;
        }
    },
    template: 
    `<div>
        Normally, you cannot see the output of a program. However, you can cause a program to display a result with the use of console.<br><br>
        Syntax: <code>console.log(&lt;your item here&gt;);</code><br><br>
        This will cause the item within the brackets to be displayed. (Remember to use quotation marks for strings!)<br><br>
        Try it here:<br><br>
        <code-runner :input="fullCode">console.log(<input v-model="input">);</code-runner>
    </div>`
})

Vue.component("js-operators-tab", {
    data() {
        return {
            tableData: `+ | Addition | 3+5
            - | Subtraction | 7-2
            * | Multiplication | 5*2
            / | Division | 8/2
            % | Modulo (For a % b, returns the remainder of a divided by b) | 7%4
            ** | Exponentiation (For a ** b, returns the result of a raised to the power of b) | 2**4`.split("\n").map(x => x.split(" | "))
        }
    },
    computed: {
        code() {
            return this.tableData.map(x => `console.log(${x[2]});`).join("\n");
        }
    },
    template: 
    `<div>
        JavaScript uses a set of operators to perform calculations and evaluate results.<br>
        These are the commonly used arithmetic operators:
        <table>
            <tr>
                <th>Operators</th>
                <th>Description</th>
                <th>Example</th>
            </tr>
            <tr v-for="row in tableData">
                <td v-for="cell in row">{{cell}}</td>
            </tr>
        </table>
        Try it yourself here:<br>
        <code-runner :default="code"/>
    </div>`
})

Vue.component("js-functions-tab", {
    data() {
        return {
            code1: 
            `function greet() {
    console.log("Hello!");
}
greet();
greet();`
        }
    },
    template: 
    `<div>
        Functions are codes that is defined by its users. They can be used to perform specific actions and evaluate results. They can also be reused in multiple places, which makes it very powerful as it reduces the number of codes.<br><br>
        Here is an example of functions in JavaScript:
        <code-runner :default="code1"/>
        Functions consist of multiple parts:
        <ul>
            <li>Declaration: 
                <div>
                    The keyword <code>function</code> indicates that the following code is a function.<br>
                    It is followed by <code>greet()</code>, which is the name of the function.<br>
                    The round brackets <code>()</code> indicate that it is a function, not a variable (to be explained later). 
                </div>
            </li>
            <li>Body:
                <div>
                    Curly Brackets <code>{}</code> are used to encapsulate the codes within the function to indicate that the codes belong to the function <code>greet</code>, not the main program.
                </div>
            </li>
            <li>Usage:
                <div>
                    We can execute the contents within the function by writing its name, <code>greet()</code>. The brackets are used to indicate that it is a variable.<br>
                    This action of executing a function is also referred to as "calling".<br>
                    Note that functions are reusable, so we can call a function multiple times.<br>
                </div>
            </li>
        </ul>
    </div>`
})

Vue.component("js-functions-2-tab", {
    data() {
        return {
            code1: 
            `function square(a) {
    return a ** 2;
}
console.log(square(2));
console.log(square(10));`,
            code2: 
            `function sum(a, b) {
    return a + b;
}
console.log(sum(9, 10));`
        }
    },
    template: 
    `<div>
        Functions can also be used to evaluate results:<br>
        <code-runner :default="code1"/>
        As you can see, the function <code>square()</code> has calculated the square of 2 and 10.
        To explain this, we need to introduce the concept of variables.
        <div class="subhead">
            Variables
        </div>
        Variables are used to store data temporarily. It acts like a container, allowing users to put data inside or read data from them.<br><br>
        If you compare the code of <code>square()</code> with <code>greet()</code> in the previous page, you will realize that there is an additional <code>a</code> in the header.
        This indicates the name of a variable <code>a</code>.        You may also realize that some values, 2 and 10 are inserted between the brackets of <code>square()</code>.
        This means that we have temporarily set the variable <code>a</code> with that value, being 2 and 10 respectively (This is also known as assignment).
        In the function, we can then use the variable <code>a</code> freely as a substitude of the assigned value.<br><br>
        
        Let's take a look at the line <code>console.log(square(2));</code>:<br><br>
        
        When <code>square(2)</code> is called, the variable<code>a</code> is assigned with a value of 2. We can then use the value by writing the name of the variable, <code>a</code> as the substitude for the value 2.<br><br>
        
        Then, the value of <code>a ** 2</code> is calculated. Since the value of <code>a</code> is 2, the answer is 4.<br><br>
        The <code>return</code> keyword returns the value by telling the main program that it has evaluated the result (which is 4), and this value is passed to the code <code>console.log(square(2))</code>.<br> This line then assign <code>square(2)</code> with the value of 4, which turns the line of code into this:<br><br>
        <code>console.log(4)</code><br><br>
        Therefore, 4 is outputted as the final result.<br>
        Note that the function <code>square()</code> has been called twice, and both of them give different results. Therefore, all calling of functions are independent of each other.<br><br>

        Functions can also accept multiple inputs:<br>
        <code-runner :default="code2"/>
        Inputs and variable names are separated by commas (<code>,</code>).
        In the case of multiple inputs, the first value is assigned to the first variable name, the second value is assigned to the second variable, and so on.
    </div>`
})

Vue.component("js-functions-exercise-tab", {
    data() {
        return {
            input: "",
            tester: `let failed = false;
for (let i = 1; i <= 50; i++) {
    let temp = 0;
    for (let j = 1; j <= 50; j++) {
        temp += i;
        if (temp !== product(i, j)) {
            failed = true;
            console.log(\`Failed! For product of \${i} and \${j}, expected \${temp} but got \${product(i, j)}\`);
            break;
        }
    }
    if (failed) {
        break;
    }
}
if (!failed) {
    console.log("You have completed this exercise!");
}`
        }
    },
    computed: {
        fullcode() {
            console.log(this.tester);
            return `${this.input};${this.tester}`;
        }
    },
    template: 
    `<div>
        Let's review what we have learnt with a programming exercise:<br>
        Create a function <code>product(a, b)</code> that calculates the product of two numbers. Some codes have been added at the end to verify your answers.
        <code-runner :input="fullcode">
            <textarea v-model="input" placeholder="// Enter code here..."></textarea>
            <pre>{{tester}}</pre>
        </code-runner>
    </div>`
})

Vue.component("sequences-tab", {
    template:
    `
    <div>
        Let's take a break from programming by introduct the two basic type of number sequences: Arithmetic and Geometric.<br>
        <div class="subhead">
            Arithmetic Sequence
        </div>
        It is a sequence of numbers where two consecutive term always differs by the same amount. The differences between two consecutive numbers is known as common difference (d).<br>
        Here are some examples of arithmetic sequence:
        <ul>
            <li>1, 2, 3, 4, 5, 6, ... (d = 1)</li>
            <li>15, 13, 11, 9, 7... (d = -2)</li>
            <li>4, -3, -10, -17, -24... (d = -7)</li>
            <li>-2, 1, 4, 7, 10... (d = 3)</li>
            <li>3, 3, 3, 3, 3... (d = 0)</li>
        </ul>
        <div class="subhead">
            Geometric Sequence
        </div>
        It is a sequence of numbers, where two consecutive terms always has the same ratio.<br>
        When the second number is divided by the first number, the result is always the same. The ratio between two numbers is known as common ratio (r).<br>
        Here are some examples of geometric sequence:
        <ul>
            <li>1, 2, 4, 8, 16, 32, ... (r = 2)</li>
            <li>12, 6, 3, 1.5, 0.75... (r = 0.5)</li>
            <li>3, -9, 27, -81, 243... (r = -3)</li>
            <li>-8, 4, -2, 1, -0.5... (r = -0.5)</li>
            <li>6, 6, 6, 6, 6, 6... (r = 1)</li>
            <li>-3, 3, -3, 3, -3... (r = -1)</li>
        </ul>
    </div>`
})

Vue.component("general-term-tab", {
    template:
    `
    <div>
        We can find the term for each type of sequence with some calculations!<br><br>
        <div class="subhead">
            Arithmetic Sequences
        </div>
        Let's use 3, 7, 11, 15, 19... as an example, and try to find the 100th term.<br>
        The first term is 3 and the common difference is 4.<br>
        To find the 100th term, we can calculate how many gaps of common differences there are between 1st and 100th term instead of listing all numbers:<br>
        There are 100 - 1 = 99 gaps between these two terms.<br>
        Therefore, the 100th term is 3 + 99 * 4 = 399.<br><br>
        We can also express this algebraically:<br>
        Let the first term of a sequence be <code>a</code> and the common difference be <code>d</code>.<br>
        Then, the n-th term is equal to <code>a + (n - 1) x d</code>.<br>
        This is known as the general term of the sequence.<br><br><br>

        <div class="subhead">
            Geometric Sequences
        </div>
        Let's use 1, 2, 4, 8, 16... as an example, and try to find the 20th term.<br>
        The first term is 1 and the common ratio is 2.<br>
        Similarly, to find the 20th term, we can calculate the number of gaps.<br>
        There are 19 gaps between 1st and 20th terms.<br>
        Therefore, the 20th term is 1 x 2<sup>19</sup> = 524288.<br><br>
        We can then express this algebraically:<br>
        Let the first term of a sequence be <code>a</code> and the common ratio be <code>r</code>.<br>
        Then, the n-th term (general term) is equal to <code>a x d<sup>(n - 1)</sup></code>.<br>
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
            tester: `let failed = false;
for (let i = 1; i <= 100; i++) {
    const expected = solution(i);
    const actual = A(i);
    if (expected !== actual) {
        console.log(\`Failed at term n = \${i}! Expected: \${expected}, result: \${actual}\`);
        failed = true;
        break;
    }
}
if (!failed) {
    console.log("Success, all tests passed!")
}`
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
        fullcode() {
            return `solution = window.database.sequenceSolution;${this.input};${this.tester}`
        }
    },
    methods: {
        generateBaseStat() {
            const seed = Math.floor(Math.random() * 2); // 0, 1
            if (seed == 0) {
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
            window.database = {
                sequenceSolution: this.calculate
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
        newq() {
            this.input = "";
            this.generateBaseStat();
        }
    },
    mounted() {
        this.generateBaseStat();
    },
    template: 
    `<div>
        Now that you know how to express the general terms of the two sequences, let's put your skill to the ultimate test!<br>
        Create a function A(n) that outputs the n-th term of this <b>randomly generated</b> sequence: <br>
        <code>{{currentSequenceDisplay}}</code><br>
        Some code has been added at the end to verify your answer.
        <code-runner :input="fullcode">
            <textarea v-model="input" placeholder="// Enter code here..."></textarea>
            <pre>{{tester}}</pre>
        </code-runner>
        <button @click="newq">New Question</button><br>
    </div>`
})

Vue.component("wrap-up-tab", {
    template: 
    `<div>
        Congratulations! Throughout this course, you have learnt:
        <ul>
            <li>How to perform calculations using JavaScript</li>
            <li>Using JavaScript Functions</li>
            <li>General terms of Arithmetic and geometric sequence</li>
            <li>Using JavaScript to solve complex math problems</li>
        </ul>
        Have fun experiment with JavaScript and sequences, and we will see you in the next course!
    </div>`
})