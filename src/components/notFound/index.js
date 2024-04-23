import React from "react";
import * as S from "./styles";

import { Link } from "react-router-dom";
import Button from "../../common/button";

export default function NotFound() {
  return (
    <S.Container>
      <div>
        <S.Title>404</S.Title>
        <S.Desc>
          We currently can’t find the page you are looking for.
          <br />
          Please check back again
        </S.Desc>
      </div>
      <Link to="/">
        <Button>continue shopping</Button>
      </Link>
    </S.Container>
  );
}
