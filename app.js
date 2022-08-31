const app = Vue.createApp({
  data() {
    return {
      clicked: false,
      totalClick: 0,
    };
  },
  computed: {
    clickClasses() {
      if (this.totalClick === 1) {
        return { active: this.clicked };
      } else if (this.totalClick === 2) {
        return { active2: this.clicked };
      }
       else if (this.totalClick === 3) {
        return { active3: this.clicked };
      }
       else if (this.totalClick === 4) {
        return { active4: this.clicked };
      }else{
        this.clicked=false;
        this.totalClick =0;

      }
    },
  },
  methods: {
    setClick() {
      console.log(1)
    //   this.clicked=! this.clicked
      this.clicked=true;
      this.totalClick += 1;
      console.log(this.totalClick)
    },
  },
});
app.mount("#style");
