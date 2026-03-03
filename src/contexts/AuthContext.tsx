import Router from 'next/router'
import { destroyCookie, setCookie } from 'nookies'
import { createContext, useState } from 'react'
import { api } from 'services/api'

type User = {
  name: string
  email: string
}

type SignInData = {
  email: string
  password: string
}

type NewType = {
  // isAuthenticated: boolean
  // user: User
  register: (data) => Promise<unknown>
  signIn: (data: SignInData) => Promise<void>
  logout: () => Promise<void>
}

type AuthContextType = NewType

type MaxAgeType = {
  maxAge: number
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }) {
  const [user, setUser] = useState<User | null>(null)

  async function signIn({ email, password }: SignInData) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const loginResponse: any = await api
      .post(`/auth/login`, { email, password })
      .then((r) => r.data)
      .catch((err) => {
        return { success: false, msg: err.msg }
      })

    const maxAge: MaxAgeType = {
      maxAge: 60 * 60 * 1 // 1 hour
    }

    if (loginResponse.success === false) {
      return loginResponse
    }

    setCookie(undefined, '13risp.token', loginResponse.token, maxAge)

    setCookie(
      undefined,
      '13risp.user.AutorizaEnvio',
      loginResponse.user.AutorizaEnvio,
      maxAge
    )

    setCookie(undefined, '13risp.user.Email', loginResponse.user.Email, maxAge)
    setCookie(
      undefined,
      '13risp.user.IdCadastro',
      loginResponse.user.IdCadastro,
      maxAge
    )
    setCookie(undefined, '13risp.user.Nome', loginResponse.user.Nome, maxAge)

    setCookie(
      undefined,
      '13risp.user.IdCadastro',
      loginResponse.user.IdCadastro,
      maxAge
    )

    api.defaults.headers['Authorization'] = `Bearer ${loginResponse.token}`

    setUser(user)

    Router.push('/')

    return { success: true, msg: 'Sucesso!' }
  }

  async function logout() {
    destroyCookie(null, '13risp.token')
    destroyCookie(null, '13risp.user.AutorizaEnvio')
    destroyCookie(null, '13risp.user.Nome')
    destroyCookie(null, '13risp.user.Email')
    destroyCookie(null, '13risp.user.IdCadastro')
    api.defaults.headers['Authorization'] = ``
    location.reload()
    // Router.push('/', { slashes: false })
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function register(data: any) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const registerResponse: any = await api
      .post(`/auth/register`, data)
      .then((r) => r.data)
      .catch((err) => {
        return { success: false, msg: err.msg }
      })

    return {
      success: registerResponse.success,
      msg: registerResponse.msg
    }
  }

  return (
    <AuthContext.Provider value={{ register, signIn, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
