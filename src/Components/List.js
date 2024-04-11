import { useContext } from "react";
import ListContext from "../store/ListContext";
import ListItem from "./ListItem";
import classes from './List.module.css'

const List = ()=>{
    const listCtx = useContext(ListContext)
    console.log(listCtx);

    const onRemoveHandler =(id)=>{
        listCtx.removeListItem(id)
    }

    return (
        <ul className={classes.list}>
            {listCtx.listItems.map((itemOne)=> <ListItem text={itemOne.item} key={itemOne.id} onRemove={onRemoveHandler.bind(null, itemOne.id)}/>)}
        </ul>
    )
 }

 export default List