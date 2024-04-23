import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { ToteSimple } from "phosphor-react";

import * as S from "./styles";

const Nav = () => {
  const user_id = localStorage.getItem("user_id");
  const { cartTotal } = useContext(CartContext);

  return (
    <S.Header>
      <S.Container>
        <S.Ul>
          <S.Logo to="/">Rk-Store</S.Logo>
          <S.NavContainer>
            {user_id ? (
              <S.NavLink to="/orders">Account</S.NavLink>
            ) : (
              <>
                <S.NavLink to="/sign-in">LOGIN</S.NavLink>
                <S.NavLink to="/sign-up">SIGNUP</S.NavLink>
              </>
            )}

            <S.NavLink to="/cart">
              <ToteSimple size={24} />
              {cartTotal > 0 && cartTotal}
            </S.NavLink>
          </S.NavContainer>
        </S.Ul>
      </S.Container>
    </S.Header>
  );
};

export default Nav;
