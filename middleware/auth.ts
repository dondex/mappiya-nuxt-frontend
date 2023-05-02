export default defineNuxtRouteMiddleware((to, from) => {
    const cookie = useCookie('bearer_token');
    if (to.fullPath != '/login') {
        if (!cookie.value) {
            return navigateTo('/login')
        }
    }
    
    if (cookie.value) {
        if (to.fullPath == '/login') {
            return navigateTo('/directory')
        }
    }
})