import jwt from 'jsonwebtoken'

export function verifyToken(jwtToken) {
  try {
    return jwt.verify(jwtToken, process.env.JWT_SECRET || '')
  } catch (e) {
    return null
  }
}

export function getAppCookies(req) {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(' ')[1]
    return token
  }
  return null
}

export function decodeToken(jwtToken) {
  try {
    return jwt.decode(jwtToken, { complete: true })
  } catch (e) {
    return null
  }
}
