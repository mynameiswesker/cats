import React,{useState, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faWindowClose} from '@fortawesome/free-solid-svg-icons'

export function Form({text,updateData,close_div}) {

  const [my_text,change_text] = useState(text)

    const change_input = (e)=>{
      change_text({...my_text,[e.target.name]:e.target.value})
    }

    //передали измененный текст
    useEffect(()=>{
      updateData(my_text)
    },[my_text,updateData])

    //передали false при закрытии окна редактирования
    const closeDiv = ()=>{
      close_div(false)
    }
    
  return (
    <div className='form'>
        <form>
          <label>Название1</label>
          <input type='text' defaultValue={my_text.name1} onChange={e=>change_input(e)} name='name1'/>
          
          <label>Название2</label>
          <input type='text' defaultValue={my_text.name2} onChange={e=>change_input(e)} name='name2'/>
          
          <label>С чем</label>
          <input type='text' defaultValue={my_text.with} onChange={e=>change_input(e)} name='with'/>
          
          <label>Кол-во порций</label>
          <input type='text' defaultValue={my_text.quantity} onChange={e=>change_input(e)} name='quantity'/>
          
          <label>Подарок</label>
          <input type='text' defaultValue={my_text.present} onChange={e=>change_input(e)} name='present'/>
          
          <label>Масса</label>
          <input type='text' defaultValue={my_text.weight} onChange={e=>change_input(e)} name='weight'/>
        </form>
        <div className='close'>
            <FontAwesomeIcon icon={faWindowClose} style={{fontSize:'25px',color:'white'}} onClick={closeDiv}/>
        </div>
    </div>
  );
}

export default Form;