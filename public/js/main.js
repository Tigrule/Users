const server = 'http://127.0.0.1:3000/'

const vueApp = new Vue({
  el: '#vue-app',
  data: {
    users: [],
    filteredUsers: [],
    showedUser: {},
    isCardShow:false,
    queryText:'',
  },
  methods: {
    getJson(url) {
      return fetch(url)
        .then((data) => data.json())
        .catch((err) => console.log(err))
    },
    showCard(user) {
      this.showedUser = user;
      this.isCardShow = true;
    },
    search() {
      let query = `${server}?term=${this.queryText}`
      this.getJson(query)
      .then((data)=>{this.users = data})
    }
  },
  mounted() {
    this.getJson(server)
      .then((data)=>{this.users = data})
  }
})