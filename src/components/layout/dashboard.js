import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import { UserContext } from "../../context/userContext";
import DashboardNav from "../dashboardNav";
import Loader from "../../common/loader";
import { UserCircle } from "phosphor-react";

export default function DashboardLayout({ children }) {
  const navigate = useNavigate();
  const { userData, loading } = useContext(UserContext);

  if (!userData) navigate("/");

  useEffect(() => {
    console.log(loading);
  }, [loading]);

  // handle error
  return loading ? (
    <Loader />
  ) : (
    <>
      <DashboardNav />
      <S.Container>
        <S.TopHeader>
          <p>Hello, {userData.name}</p>
          <UserCircle color=" #5fc2a6" weight="light" size={40} />
        </S.TopHeader>
        {children}
      </S.Container>
    </>
  );
}
