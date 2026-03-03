export interface CertidaoProps {
  Protocolo?: number
  Apresentante?: string
  Email?: string
  CertidaoBaixada?: string
  Custos?: number
  Deposito?: number
  SaldoCertidao?: number
  Status?: string
}

export interface PrenotacaoProps {
  Protocolo?: number
  Apresentante?: string
  Email?: string
  SYS_Estado?: string
  Status?: number
  Data_Baixa?: string
  Data_Prazo?: Date
  DepositoApto?: string
  Complemento?: string
  NotaDevolutiva?: string
  Texto?: string
  Observacoes?: string
}

export interface FormContato {
  nome: string
  email: string
  telefone: string
  mensagem: string
}
