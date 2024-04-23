import React, { useContext, useMemo, useState } from "react";
import { format } from "date-fns";
import { UserContext } from "../../context/userContext";

import * as S from "./styles";
import DashboardLayout from "../../components/layout/dashboard";
import ProductImage from "../../common/appImages";
import { Link } from "react-router-dom";
import Button from "../../common/button";

const titles = ["Order", "Quantity", "Price", "Order Date"];

const Orders = () => {
  const { userData } = useContext(UserContext);
  const [orders, setOrders] = useState([]);
  console.log(userData);

  useMemo(() => {
    const userOrders = [];
    userData?.orders?.map((order) =>
      order.items.map((item) => userOrders.push({ ...item, time: order.time }))
    );

    console.log(userOrders);
    setOrders(userOrders);
  }, [userData]);

  return (
    <DashboardLayout>
      <h2>Orders</h2>

      <S.Container>
        {orders.length > 0 ? (
          <S.Table>
            <thead>
              {titles.map((title, index) => (
                <th key={index}>{title}</th>
              ))}
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td>
                    <div className="item">
                      <ProductImage src={order?.image} />
                      <div>
                        <span className="title">{order?.title}</span>
                        <span className="category">{order?.category}</span>
                      </div>
                    </div>
                  </td>
                  <td className="quantity">{order?.quantity}</td>
                  <td>NGN{order?.price}</td>
                  <td>{format(new Date(order?.time), "LLL dd, yyyy")}</td>
                </tr>
              ))}
            </tbody>
          </S.Table>
        ) : (
          <S.Empty>
            You haven't placed any order yet
            <Link to="/">
              <Button>continue shopping</Button>
            </Link>
          </S.Empty>
        )}
      </S.Container>
    </DashboardLayout>
  );
};

export default Orders;
