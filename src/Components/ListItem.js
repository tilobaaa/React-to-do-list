import classes from './ListItem.module.css'

const ListItem = (props)=>{
    return (<li>
        <div className={classes["list-item"]}>
            <p>{props.text}</p>
            <button onClick={props.onRemove}>-</button>
        </div>
    </li>)
}

export default ListItem