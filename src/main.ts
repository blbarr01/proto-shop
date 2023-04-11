import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter, faInstagram, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faAngleDoubleDown, faAngleDoubleUp, faMagnifyingGlass, faStar } from '@fortawesome/free-solid-svg-icons'
import './assets/main.css'

library.add(faTwitter,
    faInstagram,
    faFacebook,
    faGithub,
    faAngleDoubleDown,
    faAngleDoubleUp,
    faMagnifyingGlass,
    faStar);

    
const app = createApp(App)

app.use(router)
.use(createPinia())
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
