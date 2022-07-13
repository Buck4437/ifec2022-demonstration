"use strict";

var app = new Vue({
    el: "#app",
    data: {
        tabId: 0,
        tabNames: [
            "Introduction",
            "Introduction to JavaScript",
            "Seeing Output",
            "Operators",
            "Functions",
            "Functions Continued",
            "Function Exercise",
            "Sequences",
            "General Term",
            "Final Exam",
            "Wrap-up"
        ]
    },
    computed: {
        maxTabId() {
            return this.tabNames.length - 1;
        }
    },
    methods: {
        prevTab() {
            if (this.tabId > 0) {
                this.tabId --;
            }
        },
        nextTab() {
            if (this.tabId < this.maxTabId) {
                this.tabId ++;
            }
        },
    }
})