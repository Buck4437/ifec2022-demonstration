"use strict";

var app = new Vue({
    el: "#app",
    data: {
        tabId: 0,
        tabNames: [
            "Introduction",
            "Introduction to JS",
            "Seeing Output",
            "Operators",
            "Functions",
            "Functions 2",
            "Arithmetic Sequence",
            "Geometric Sequence",
            "Sequences Exercises"]
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