"use strict";

var app = new Vue({
    el: "#app",
    data: {
        tabId: 7,
        tabNames: [
            "Introduction",
            "Introduction to JS",
            "Seeing Output",
            "Operators",
            "Functions",
            "Functions Continued",
            "Function Exercise",
            "Sequences",
            "General Term",
            "Final Exam"
        ]
    },
    computed: {
        maxTabId() {
            return this.tabNames.length - 1;
        }
    },
    methods: {
        prevTab() {
            this.tabId --;
            if (this.tabId < 0) {
                this.tabId = this.maxTabId;
            }
        },
        nextTab() {
            this.tabId ++;
            if (this.tabId > this.maxTabId) {
                this.tabId = 0;
            }
        },
    }
})