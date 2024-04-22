import * as S from "./styles";

import hero from "../../assets/images/happy-shopping.svg";

const AppIllustration = ({ type }) => {
  return (
    <S.Imgwrapper display={type === "hero" && "none"}>
      <img src={hero} alt="hero.png" width="100%" height="100%" />
    </S.Imgwrapper>
  );
};

export default AppIllustration;
