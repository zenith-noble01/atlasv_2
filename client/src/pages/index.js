import { lazy } from "react";


const fakeDelay = (promise) => {
    return new Promise((resolve,) => {
        setTimeout(resolve, 3000)
    }).then(() => promise)
}

const Landing = lazy(() => fakeDelay(import("./Landing")))
const Register = lazy(() => import("./Register"))
const Login = lazy(() => import("./Login"))


export { Landing, Register, Login }