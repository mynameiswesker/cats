import React, { useState, useEffect } from 'react';
import './App.css';
import {Cart} from './Components/Cart'

function App() {

  const [carts,change_carts] = useState([])
  const [disable] = useState(true)
  
  //показать состояние выбранных карт
  useEffect(()=>{
    console.log(carts)
  })

  //добавили карту в состояние корзины для выбранных карт
  const getCart = (data)=>{
      if(carts.length === 0){//если массив корзины пуст , то добавить продукт
        change_carts([...carts,data])
      }
      if(carts.length>0){//если в массиве что то есть , проверить
        change_carts(function(){

          if(carts.includes(data)){//если есть совпадения
              return carts.filter(cart=>cart.id !== data.id)//то удалить из массива (повторный клик)
          }
            return [...carts,data]//по дефолту добавлять продукт
        })
      }
  }

  return (
   <div className='wrapp'>
     <div>
       <h1 style={{color:'white'}}>Ты сегодня кормил кота?</h1>
     </div>
     <div className='wrapp_cart'>
      <Cart text={{
        name1: 'Сказочное заморское яство',
        name2: 'Нямушка',
        with: 'С фуа-гра',
        quantity: '10 порций',
        present: 'мышь в подарок',
        weight: '0,5',
        id:1,
        ptext:`Чего сидишь? Порадуй котэ, купи`,
        disable:!disable
      }}
      getCart={getCart}
      />
      <Cart text={{
        name1: 'Сказочное заморское яство',
        name2: 'Нямушка',
        with: 'с рыбой',
        quantity: '40 порций',
        present: '2 мыши в подарок',
        weight: '2',
        id:2,
        ptext:'Головы щучьи с чесноком да свежайшая сёмгушка',
        disable:!disable
      }}
      getCart={getCart}
      />
      <Cart text={{
        name1: 'Сказочное заморское яство',
        name2: 'Нямушка',
        with: 'С курой',
        quantity: '100 порций',
        present: '5 мышей в подарок',
        weight: '5',
        id:3,
        ptext:'Печалька, с курой закончился',
        disable:disable
      }}
      getCart={getCart}
      />
     </div>
   </div>
  );
}

export default App;
