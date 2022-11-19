import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { authContext, updateContext } from "../../context/context";
import GetLists from "../../hooks/getLists";

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
        <input type="color" onClick={(e)=> console.log(e.target.value)}/>
      </>
    );
}
 
export default ListsComponent;