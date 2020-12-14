import React, { useState } from "react";
import styled from "styled-components";

const Square = ({ board, handleClickSquare }) => {
  return (
    <BoardWrapper>
      {board.map((row, y) => {
        <BoardRow key={y}>
          {row.map((col, x) => {
            <Squeare key={x} onClick={handleClickSquare(y, x)}>
              {board[y][x]}
            </Squeare>;
          })}
        </BoardRow>;
      })}
    </BoardWrapper>
  );
};

export default Square;
