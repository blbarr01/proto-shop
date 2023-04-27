import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter, faInstagram, faFacebook, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faAngleDoubleDown, faAngleDoubleUp, faMagnifyingGlass, faStar, faCircleUser } from '@fortawesome/free-solid-svg-icons'
import './assets/main.css'

library.add(faTwitter,
    faInstagram,
    faFacebook,
    faGithub,
    faGoogle,
    faAngleDoubleDown,
    faAngleDoubleUp,
    faMagnifyingGlass,
    faStar,
    faCircleUser);

    
const app = createApp(App)

app.use(router)
.use(createPinia())
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
