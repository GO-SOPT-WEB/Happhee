import React from "react";

const SearchColorForm = (props) => {
  // const { handleColorFormSubmit, searchColor, handleOnChange } = props;

  return (
    <header>
      <h1>웹파트의 컬러를 골라주세요🎨</h1>
      <form>
        <input type="text" />
        <button type="submit">검색하기</button>
      </form>
    </header>
  );
};

export default SearchColorForm;
