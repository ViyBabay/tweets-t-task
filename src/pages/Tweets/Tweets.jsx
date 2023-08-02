import { useEffect, useState } from "react";
import { fetchUsers } from "../../services/api";
import { CardsList } from "../../components/CardsList/CardsList";

const Tweets = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchUsers().then((data) => {
      console.log(data);
      setData(data);
    });
  }, []);

  return <CardsList data={data} />;
};

export default Tweets;
