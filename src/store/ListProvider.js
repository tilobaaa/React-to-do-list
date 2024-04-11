// import { useReducer } from "react";
// import ListContext from "./ListContext";

// const defaultStateValue = {
//   listItems: []
// };

// const reducerFxn = (state, action) => {
//   if (action.type === "ADD") {
//     const updatedItems = state.listItems.concat({item: action.item, id: action.id})

//     return {
//       listItems: updatedItems
//     }
//   }
//   if (action.type === "REMOVE") {

//   }
// };

// const ListProvider = (props) => {
//   const [listState, dispatchList] = useReducer(reducerFxn, defaultStateValue);

//   const addItemsHandler = (listItem)=>{
//     dispatchList({type:'ADD', item: listItem, id: Date.now()})
//   }

//   const removeItemsHandler = (id)=>{
//     dispatchList({type:'REMOVE', id: id})
//   }

//   const listContext = {
//     listItems: listState.listItems,
//     addListItems: addItemsHandler,
//     removeListItem: removeItemsHandler,
//   };

//   return (
//     <ListContext.Provider value={listContext}>
//       {props.children}
//     </ListContext.Provider>
//   );
// };

// export default ListProvider;

import { useReducer } from "react";
import ListContext from "./ListContext";

const defaultStateValue = {
  listItems: []
};

const reducerFxn = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.listItems.concat(action.item );
    

    return {
      listItems: updatedItems
    };
  }
  if (action.type === "REMOVE") {
    const updatedItems = state.listItems.filter(item => item.id !== action.id);

    return {
      listItems: updatedItems
    };
  }

  // If the action type is unknown, return the current state

};

const ListProvider = (props) => {
  const [listState, dispatchList] = useReducer(reducerFxn, defaultStateValue);

  const addItemsHandler = (listItem) => {
    dispatchList({ type: 'ADD', item: listItem });
  };

  const removeItemsHandler = (id) => {
    dispatchList({ type: 'REMOVE', id: id });
  };

  const listContext = {
    listItems: listState.listItems,
    addListItems: addItemsHandler,
    removeListItem: removeItemsHandler,
  };

  return (
    <ListContext.Provider value={listContext}>
      {props.children}
    </ListContext.Provider>
  );
};

export default ListProvider;

