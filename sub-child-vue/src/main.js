import singleSpaVue from "single-spa-vue";
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const vueOptions = {
    el: "#vue",
    router,
    store,
    render: h => h(App)
};

/**** 添加这里 ****/
if (!window.singleSpaNavigate) { // 如果不是single-spa模式
    delete vueOptions.el;
    new Vue(vueOptions).$mount('#vue');
}
/**** 结束 ****/

// singleSpaVue包装一个vue微前端服务对象
const vueLifecycles = singleSpaVue({
    Vue,
    appOptions: vueOptions
});

// 导出生命周期对象
export const bootstrap = vueLifecycles.bootstrap; // 启动时
export const mount = vueLifecycles.mount; // 挂载时
export const unmount = vueLifecycles.unmount; // 卸载时

export default vueLifecycles;