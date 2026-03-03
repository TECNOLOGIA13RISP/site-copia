import sql from 'mssql'

const sqlConfig = {
  user: process.env.MSSQL_USERNAME || '',
  password: process.env.MSSQL_PASSWORD || '',
  database: process.env.MSSQL_DATABASE || '',
  server: process.env.MSSQL_HOST || '',
  port: 1433,
  connectionTimeout: 5000,
  requestTimeout: 5000,
  pool: {
    max: 10,
    min: 1,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
}

let cachedPool: sql.ConnectionPool | null = null

async function getPool() {
  if (cachedPool) {
    return cachedPool
  }
  cachedPool = await sql.connect(sqlConfig)
  return cachedPool
}

export async function sql_query(query_string) {
  try {
    const pool = await getPool()
    const data = await pool.request().query(query_string)
    return data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    if (cachedPool) {
      cachedPool.close()
      cachedPool = null
    }
    throw Error(e?.message)
  }
}
