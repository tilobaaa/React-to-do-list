import {useContext, useState} from 'react'
import classes from './ToDoForm.module.css'
import ListContext from '../store/ListContext'

const ToDoForm = ()=>{

    const [isValid, setIsValid] = useState(false)
    const [eventValue, setValue ]= useState()
    const listCtx = useContext(ListContext)

    const onChangeHandler = (event)=>{


        if(event.target.value !== ''){
            setIsValid(true)
            setValue(event.target.value)
        }else{
            setIsValid(false)
        }
    }

    const submitHandler = (event)=>{
        event.preventDefault()
        
       
        listCtx.addListItems({id: Math.random(), item: eventValue})
        setValue('')
        setIsValid(false)
    }
    return (<>
    <form className={classes.form}  onSubmit={submitHandler}>
        <div>
            <input type="text" placeholder="Add new..." onChange={onChangeHandler} value={eventValue} />
            <button disabled={!isValid} type='submit' >add</button>
        </div>
    </form>
    </>)
}

export default ToDoForm

// <input type="text" placeholder="Add new..."><input type='date'/> <button> okay </button></input>