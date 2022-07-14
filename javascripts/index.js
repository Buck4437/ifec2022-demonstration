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
            "Functions - Continued",
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
        },
        canForward() {
            return this.tabId < this.maxTabId;
        },
        canBackward() {
            return this.tabId > 0;
        }
    },
    methods: {
        prevTab() {
            if (this.canBackward) {
                this.tabId --;
            }
        },
        nextTab() {
            if (this.canForward) {
                this.tabId ++;
            }
        },
    }
})