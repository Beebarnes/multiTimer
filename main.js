new Vue({
  el: "#app",
  data: {},
  methods: {}
});

Vue.component("button-counter", {
  data: function() {
    return {
      timer: null,
      currentSecond: 0,
      currentMinute: 0,
      reset: false
    };
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => this.addToCounter(), 1000);
    },
    stopTimer() {
      clearInterval(this.timer);
      this.timer = null;
    },
    resetTimer() {
      this.currentMinute = 0;
      this.currentSecond = 0;
    },
    addToCounter() {
      this.currentSecond++;
      if (this.currentSecond == 60) {
        this.currentMinute++;
        this.currentSecond = 0;
      }
    }
  },
  template: `
  <div>
    <input/>
    <p>{{ currentMinute}} : {{currentSecond}} </p>
    <button @click="startTimer" id="start">Start</button>
    <button @click="stopTimer" id="stop">Stop</button>
    <button @click="resetTimer" id="stop">Reset</button>
  </div>
  `
});
