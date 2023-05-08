import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

import ImgCard from "./ImgCard";
const ImgCardList = () => {
  const [imgCardList, setImgCardList] = useState([]);

  const getImgCardList = () => {
    fetch(`http://${import.meta.env.VITE_BASE_URL}/web-gallery`)
      .then((res) => res.json())
      .then((data) => {
        if (data.code === 200) setImgCardList(data.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getImgCardList();
  }, []);
  return (
    <St.CardListWrapper>
      {imgCardList &&
        imgCardList.map(({ imgSrc, id, name }) => (
          <ImgCard key={id} imgSrc={imgSrc} id={id} name={name} />
        ))}
    </St.CardListWrapper>
  );
};

export default ImgCardList;

const St = {
  CardListWrapper: styled.section`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;

    width: 100%;
    padding: 1rem;

    background-color: ${({ theme }) => theme.colors.Sopt_Blue};
  `,
};
