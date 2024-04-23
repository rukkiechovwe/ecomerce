import { Handbag, Power } from "phosphor-react";
import * as S from "./styles";
import useAuth from "../../hooks/useAuth";
import Button from "../../common/button";

const nav = [
  // { title: "Home", link: "/account", icon: <HouseSimple size={24} /> },
  { title: "Orders", link: "/orders", icon: <Handbag size={24} /> },
];

const DashboardNav = () => {
  const { signUserOut } = useAuth();
  return (
    <S.Header>
      <S.Container>
        <S.Ul>
          <S.Logo to="/">Rk-Store</S.Logo>
          {nav.map((item) => (
            <S.NavContainer>
              <S.Link to={item.link}>
                {item.icon}
                <span className="span">{item.title}</span>
              </S.Link>
            </S.NavContainer>
          ))}
        </S.Ul>
        <S.ButtonContainer>
          <Button
            width="100%"
            background="transparent"
            color="#F00303"
            onClick={() => signUserOut()}
          >
            <Power size={24} />
            <span className="span">Signout</span>
          </Button>
        </S.ButtonContainer>
      </S.Container>
    </S.Header>
  );
};

export default DashboardNav;
