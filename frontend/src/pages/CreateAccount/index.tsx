import * as S from './styles'

const CreateAccount = () => {
  return (
    <S.Container>
      <S.Title>Criar sua conta</S.Title>
      <S.InputGroup>
        <S.Label>Nome</S.Label>
        <S.Input />
      </S.InputGroup>
      <S.InputGroup>
        <S.Label>Email</S.Label>
        <S.Input />
      </S.InputGroup>
      <S.Section>
        <S.SectionTitle>Data de nascimento</S.SectionTitle>
        <S.DateRow>
          <S.Select>
            <option>Mês</option>
          </S.Select>
          <S.Select>
            <option>Dia</option>
          </S.Select>
          <S.Select>
            <option>Ano</option>
          </S.Select>
        </S.DateRow>
      </S.Section>
      <S.InputGroup>
        <S.Label>Senha</S.Label>
        <S.Input />
      </S.InputGroup>
      <S.InputGroup>
        <S.Label>Confirmar senha</S.Label>
        <S.Input />
      </S.InputGroup>
      <S.Button>Avançar</S.Button>
    </S.Container>
  )
}

export default CreateAccount
