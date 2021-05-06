import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueMoment from 'vue-moment'
import moment from 'moment'


require('moment/locale/pt-br')




Vue.use(VueMoment, {
    moment
})

Vue.config.productionTip = false




new Vue({
  router,
  store,
  vuetify,
  moment,
  render: h => h(App)
}).$mount('#app')
