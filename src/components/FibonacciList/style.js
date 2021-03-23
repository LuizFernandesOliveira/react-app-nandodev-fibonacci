import styled, { css } from 'styled-components';

import { ChevronLeftCircle, ChevronRightCircle } from 'styled-icons/boxicons-regular';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const FibonacciListAll = styled.div``;

export const FibonacciItem = styled.div``;

export const Number = styled.p`
  font-size: 1.6rem;
`;

export const Icon = css`
  height: 50px;
  width: 50px;
`;

export const LeftIcon = styled(ChevronLeftCircle)`${Icon}`;

export const RightIcon = styled(ChevronRightCircle)`${Icon}`;

export const ButtonPrevious = styled.button`
  background-color: whitesmoke;
  border: none;
  border-radius: 50%;
`;

export const ButtonNext = styled.button`
  background-color: whitesmoke;
  border: none;
  border-radius: 50%;
`;

export const BtnGroup = styled.div``;

export const BtnAdd = styled.button``;

export const BtnRemove = styled.button``;

export const Total = styled.p`
  font-size: 1.4rem;
  font-weight: bolder;
  margin-top: 50px;
`;
