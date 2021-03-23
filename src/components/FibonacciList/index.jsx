import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { INITIAL_STATE } from '../../store/fibonacci/reducer';
import {
  createFibonacci,
  deleteFibonacci,
  getFibonacci,
} from '../../store/fibonacci/action';

import Loading from '../Loading';

import {
  BtnAdd, BtnGroup, BtnRemove,
  ButtonNext,
  ButtonPrevious,
  Container, FibonacciListAll,
  Content, FibonacciItem, LeftIcon, Number, RightIcon, Total,
} from './style';

const FibonacciList = () => {
  const LENGTH_PAGE = 10;
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);

  const dispatch = useDispatch();

  const dispatchFibonacciCreate = () => {
    dispatch(createFibonacci());
    if (data.length === LENGTH_PAGE) setPage(page + LENGTH_PAGE);
  };

  const dispatchFibonacciDelete = () => {
    dispatch(deleteFibonacci());
    if (data.length === 1) setPage(page - LENGTH_PAGE);
  };

  useEffect(() => {
    const dispatchFibonacciGet = () => { dispatch(getFibonacci()); };
    dispatchFibonacciGet();
  }, [dispatch]);

  const {
    fibonacci,
    error,
    isFetching,
  } = useSelector(({ fibonacci }) => fibonacci || INITIAL_STATE);

  useEffect(() => {
    setData(fibonacci.slice(page, page + LENGTH_PAGE));
  }, [fibonacci, page]);

  if (isFetching) { return <Loading /> }

  return (
    <Container>
      { error && <div>{ error }</div> }
      <Content>
        <ButtonPrevious onClick={() => setPage(page <= 0 ? 0 : page - LENGTH_PAGE)}>
          <LeftIcon />
        </ButtonPrevious>
        <FibonacciListAll>
          {data.map(({ id, number }) => (
            <FibonacciItem key={id}>
              <Number>{ `${id}° = ${number}` }</Number>
            </FibonacciItem>
          ))}
          {page >= fibonacci.length - LENGTH_PAGE && (<BtnGroup>
            <BtnAdd onClick={ () => dispatchFibonacciCreate() }>
              Adicionar próximo
            </BtnAdd>
            <BtnRemove onClick={ () => dispatchFibonacciDelete() }>
              Remover último
            </BtnRemove>
          </BtnGroup>)}
        </FibonacciListAll>
        <ButtonNext
          onClick={
            () => setPage(
              (page >= fibonacci.length - LENGTH_PAGE) ? page : page + LENGTH_PAGE,
            )
          }
        >
          <RightIcon />
        </ButtonNext>
      </Content>
      <Total>{ `Quantidade de números criados: ${fibonacci.length}` }</Total>
    </Container>
  );
}

export default FibonacciList;