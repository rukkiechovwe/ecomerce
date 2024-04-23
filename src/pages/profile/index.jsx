import React, { useContext } from "react";
import * as S from "./styles";
import { UserContext } from "../../context/userContext";
import DashboardLayout from "../../components/layout/dashboard";

const UserProfile = () => {
  const { userData } = useContext(UserContext);

  return (
    <DashboardLayout>
      <S.Profile></S.Profile>
    </DashboardLayout>
  );
};

export default UserProfile;
