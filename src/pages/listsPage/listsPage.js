import Layout from "../../components/layout/layout";
import ListsComponent from "../../components/lists/listsComponent";
import { useParams } from "react-router-dom";
const ListPage = () => {
  const {buid} = useParams();
  return (
    <>
      <Layout>
        <ListsComponent buid={buid}/>
      </Layout>
    </>
  );
};

export default ListPage;
