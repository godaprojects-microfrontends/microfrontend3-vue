import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

window.renderMicrofrontendVue = (containerId, data) => { 
  // alert(containerId)
  new Vue({
    render: h => h(App, {
      props: {data, example: 'Example of data initialized in main.js', jsonData: {item1:'Json data in main.js'}}
    }),
  }).$mount('#'+containerId)
}
