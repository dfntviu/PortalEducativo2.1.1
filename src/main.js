import { createApp } from 'vue'
import App from './App.vue'
// import App from '/App.bak.vue' 
import router from './router'


createApp(App).use(router).mount('#app')
 /* Habilite la linea [App.bak] unicamente para aislar el avance del proj. cuando
    para no afectar la est. base(principal) de Vue, no descomente si no lo tiene
    claro */