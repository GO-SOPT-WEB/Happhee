import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const DetailCardInfo = () => {
  const { cardId } = useParams();
  const navigate = useNavigate();

  const [selectCard, setSelectCard] = useState();

  const getDetailCardInfo = () => {
    fetch(`${import.meta.env.VITE_BASE_URL}/web-gallery/${cardId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.code === 200) {
          setSelectCard(data.data);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDetailCardInfo();
  }, []);
  console.log(selectCard);

  if (selectCard) {
    const { imgSrc, name, date, content } = selectCard;

    return (
      <St.DetailCardWrapper>
        <St.DetailCardContentWrapper>
          <St.Img src={new URL(imgSrc, import.meta.url).href} alt={name} />
          <St.Header>
            <h3>{name}</h3>
          </St.Header>
          <St.Content>{content}</St.Content>

          <St.DateWrapper>
            <p> {date}</p>
          </St.DateWrapper>
        </St.DetailCardContentWrapper>
        <St.BackSpan onClick={() => navigate(-1)}>
          <span className="material-symbols-outlined">arrow_back</span>
          <span>뒤로가기</span>
        </St.BackSpan>
      </St.DetailCardWrapper>
    );
  }
  return <p>정보가 없습니다</p>;
};

export default DetailCardInfo;

const St = {
  DetailCardWrapper: styled.div`
    display: flex;
    justify-content: center;

    position: relative;
    width: 100%;
    padding: 1rem;
  `,
  BackSpan: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    position: absolute;
    top: 1rem;
    /* bottom: 1rem; */
    left: 2rem;

    padding: 1rem 2rem;

    ${({ theme }) => theme.fonts.M_SubTitle_1};
    color: ${({ theme }) => theme.colors.Sopt_White};
    background-color: ${({ theme }) => theme.colors.Sopt_Coral};
    border-radius: 1rem;

    cursor: pointer;
    :hover {
      color: ${({ theme }) => theme.colors.Sopt_Purple};
      background-color: ${({ theme }) => theme.colors.Sopt_Blue};
    }
  `,

  DetailCardContentWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;

    width: fit-content;
    padding: 2rem;

    background-color: ${({ theme }) => theme.colors.Sopt_Pink};
    border-radius: 1rem;
    box-shadow: 0.3rem 0.3rem 0.3rem ${({ theme }) => theme.colors.Sopt_Coral};
  `,
  Img: styled.img`
    width: 50rem;
    max-height: 50rem;
    border-radius: 1rem;

    object-fit: contain;
  `,
  Header: styled.header`
    h3 {
      ${({ theme }) => theme.fonts.M_Title_1};
      color: ${({ theme }) => theme.colors.Sopt_Purple};
    }
  `,
  Content: styled.p`
    width: 100%;
    padding: 2rem;

    text-align: center;

    ${({ theme }) => theme.fonts.M_Content_2};
    background-color: ${({ theme }) => theme.colors.Sopt_White};
    border-radius: 1rem;
  `,
  DateWrapper: styled.div`
    display: flex;
    justify-content: flex-end;

    width: 100%;
    > p {
      ${({ theme }) => theme.fonts.R_Content_3};
    }
  `,
};
