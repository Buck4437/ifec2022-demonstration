"use strict";

var app = new Vue({
    el: "#app",
    data: {
        tabId: 0,
        maxTabId: 2,
        tabNames: ["Sequences", "Simulation", "Plotter"]
    },
    computed: {
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