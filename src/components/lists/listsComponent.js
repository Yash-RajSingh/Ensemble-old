import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { updateContext } from "../../context/context";
import GetLists from "../../hooks/getLists";
import List from "./listsElements/list/list";
import ListsAdder from "./listsElements/listAdder/listAdder";

const ListsComponent = ({buid}) => {
    const {update, setUpdate} = useContext(updateContext)
    const [listData, setListData] = useState()
    useEffect(()=>{
      (async () => {
        const response = await GetLists(buid);
        response.status === 200 ? setListData(response) : setListData(false)
        console.log(response)
      })()
    },[update])
    return (
      <>
        <ListsAdder />
        {listData && listData.data.map((element)=> <List data={element} />)}
      </>
    );
}
 
export default ListsComponent;