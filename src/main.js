import { createApp } from 'vue'
import App from './App.vue'
// import App from '/App.bak.vue' 
import store from './Store/indexs.js';  //new line (control de las mutaciones &estado)
import router from './router'

  // se uso(anadio) el store
createApp(App).use(store).use(router).mount('#app') 
 /* Habilite la linea [App.bak] unicamente para aislar el avance del proj. cuando
    para no afectar la est. base(principal) de Vue, no descomente si no lo tiene
    claro */