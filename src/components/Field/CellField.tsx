import React, { FC } from "react";
import { Cell } from "./Cell"

export interface Props {
  xCount: number
  yCount: number
  clickMe: (x: number, y: number) => void
}

const tt = (y:number, xCount: number, clickMe: (x: number, y: number) => void) => {
  let x: number = 0;
  const row = [];
  while (x < xCount) { 
    row.push(<Cell key={`${x}_${y}`} x={x} y={y} clickMe={clickMe}>{`${x}_${y}`}</Cell>);
    x++; 
  }
  return row;
}

export const CellField: FC<Props> = ({ xCount, yCount, clickMe }) => {
  const filed = []
  let y: number = 0;
  while(y < yCount) {
    filed.push(tt(y,xCount,clickMe));
    filed.push(<br key={`${y}`}/>);
    y++;
  }
  return (
  <> 
    {filed}
  </>
  )
};