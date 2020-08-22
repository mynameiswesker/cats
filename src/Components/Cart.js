import React,{useState, useCallback} from 'react';
import {Form} from './Form'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPaintBrush} from '@fortawesome/free-solid-svg-icons'

export function Cart({text,getCart}) {

    const [isHover,changeHover] = useState(false)//toggle div
    const [isClick,changeClick] = useState(false)//click button
    const [text_cart,change_text_cart] = useState(text)//состояние текста в карте
    const [isActive,changeActive] = useState(false)//состояние активной карты
    
    let color_default = '#1698d9'
    let color_active = '#d91667'

    //показать редактирование при наведении
    const handler_hover = useCallback(()=>{
        changeHover(true)
    },[])

    //скрыть редактирование при уходе
    const handler_leave = useCallback(()=>{
        changeHover(false)
    },[changeHover])

    //при клике на кнопку редактировать/показать настройки текста
    const handle_click = useCallback(()=>{
        changeClick(!isClick)
    },[isClick])

    //достали из ребенка пропс с данными измененной формы и записали в состояние родителя
    const updateData = useCallback((data)=> {
        change_text_cart(data)
    },[change_text_cart])

    //закрыли див редактирования
    const closeChangeDiv = useCallback((data)=>{
        changeClick(data)
    },[changeClick])

    //передали выбранную карту родителю 
    const handler_add_cart = () => {
        getCart(text_cart)
    }

  return (
   <div>
       <div 
            className='cart' 
            onMouseEnter={handler_hover} 
            onMouseLeave={handler_leave} 
            style={isActive ? {borderColor:color_active} : {borderColor:color_default} && text_cart.disable ? {pointerEvents:'none'} : {pointerEvents:'all'}}
            onClick={()=>{
                changeActive(!isActive)
                handler_add_cart()
                }
            }
        >
        <div 
            className='disable' 
            style={text_cart.disable ? {pointerEvents:'none',display:'block'} : {pointerEvents:'all'}}
        ></div>
        <div className='words'>
                <h3 className='h_top' style={{margin:'20px 0 5px 0'}}>{text_cart.name1}</h3>
                <h1 style={{margin:'5px 0 5px 0',fontSize:'45px'}}>{text_cart.name2}</h1>
                <div className='content_left'>
                    <h2>{text_cart.with}</h2>
                    <p style={{marginBottom:'0px',color:'rgb(102, 102, 102)'}}>{text_cart.quantity}</p>
                    <p style={{color:'rgb(102, 102, 102)'}}>{text_cart.present}</p>
                </div>
        </div>
        <div className='kg'>
                <div className='round_kg'>
                    <p style={{fontSize:'40px'}}>{text_cart.weight}</p>
                    <p style={{fontSize:'20px'}}>кг</p>
                </div>
        </div>
        {isHover ? 
            <button className='change' onClick={handle_click}>
                <FontAwesomeIcon icon={faPaintBrush} style={{fontSize:'20px',color:'#1698d9',cursor:'pointer'}}/>
            </button>
            : ''
        }
        </div>
            <p style={{color:'white',fontSize:'12px'}}>{text_cart.ptext}</p>
            {
                isClick ? 
                <Form text={text_cart} updateData={updateData} close_div={closeChangeDiv}/>
                :''
            }
    </div>
  );
}

export default Cart;