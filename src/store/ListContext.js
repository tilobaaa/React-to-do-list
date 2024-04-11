import React from 'react'

const ListContext = React.createContext({
    listItems: [],
    addListItems: ()=>{},
    removeListItem: ()=>{}
})

export default ListContext