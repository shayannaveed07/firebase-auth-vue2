import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import auth from "@/components/firebase/firebase.js";
import "./components/firebase/firebase.js"
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue)

Vue.use(IconsPlugin)
Vue.config.productionTip = false
let app;
auth.onAuthStateChanged((user) => {
  if(!app){
    app = new Vue({
      router,
      store,
      render: function (h) { return h(App) }
    }).$mount('#app')
    if(user){
      store.dispatch("autoSignIn")
    }
    
  }
})




