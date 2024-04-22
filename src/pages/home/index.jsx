import * as S from "./styles";
import Products from "../../components/products";
import Nav from "../../components/nav";
import Button from "../../common/button";
import AppIllustration from "../../common/appIllustration";

const Home = () => {
  const scrollTo = (id) => {
    if (id !== null) {
      const element = document.getElementById(id);
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <Nav />
      <S.Wrapper>
        <div className="container">
          <S.Hero>
            <S.HeroText>
              <S.Heading>Best deals just for you!</S.Heading>
              <S.Para>
                Shop to get amazing offers and discounts. Enjoy your shopping
                with us!
              </S.Para>

              <Button
                name="submit"
                type="submit"
                onClick={() => scrollTo("product")}
                width="170px"
              >
                Shop Now
              </Button>
            </S.HeroText>

            <AppIllustration type="hero" />
          </S.Hero>
        </div>
        <S.ProductWrapper>
          <S.ProductsHeading>Our Products</S.ProductsHeading>

          <S.Products id="product">
            <Products />
          </S.Products>
        </S.ProductWrapper>
      </S.Wrapper>
    </>
  );
};

export default Home;
