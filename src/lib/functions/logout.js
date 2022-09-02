import { setCookie } from "./setCookies"

export let logout = () =>{
    setCookie('token', '', {'max-age': -1})
    window.location.href = "/auth/login";
}
