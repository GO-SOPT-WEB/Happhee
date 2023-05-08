import { Outlet } from "react-router-dom";
import ImgCardList from "../components/ImgCardList";
import PageLayout from "../components/PageLayout";

const Gallery = () => {
  return (
    <PageLayout>
      <ImgCardList />
      <Outlet />
    </PageLayout>
  );
};

export default Gallery;
