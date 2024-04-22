import * as S from "./styles";

const Loader = () => {
  return (
    <S.Wrapper>
      <S.Loader>
        <S.Spin1 />
        <S.Spin2 />
      </S.Loader>
      <S.Text>text</S.Text>
    </S.Wrapper>
  );
};

export default Loader;
