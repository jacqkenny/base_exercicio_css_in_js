import styled from 'styled-components'

export const Formulario = styled.form`
  height: 600px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;

  ::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.corPrincipal};
    content: '';
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    height: 100%;
    padding: 24px 0;
  }
`
export const Container = styled.div`
    position: relative;
    color: #eee;
    font-family: Gloock, serif;
    display: inline-block;
    font-size: 28px;
    display: inline-block;
    max-width: 1024px;

    @media (max-width: 768px) {
    font-size: 32px;
    display: inline-block;
`

export const TituloH2 = styled.div`
  font-family: Gloock, serif;
  font-size: 48px;

  @media (max-width: 768px) {
    .form {
      height: auto;
      padding: 24px 0;
    }

    .heroTitle {
      font-size: 32px;
      display: inline-block;
    }
  }
`
