import { Outlet } from "react-router-dom";
import PageLayout from "../components/PageLayout";

const DetailCard = () => {
  return (
    <PageLayout>
      <Outlet />
    </PageLayout>
  );
};

export default DetailCard;
