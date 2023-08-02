import { useEffect, useState } from "react";
import { fetchUsers } from "../../services/api";
import { CardsList } from "../../components/CardsList/CardsList";
import { LoadMoreBtn } from "../../components/LoadMoreButton/LoadMoreButton.styled";
import { Loader } from "../../components/Loader/Loader";

const PAGE_SIZE = 3;

const Tweets = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMoreData, setHasMoreData] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchUsers({ page: 1, limit: PAGE_SIZE }).then((userData) => {
      setData(userData);
      setIsLoading(false);
      setHasMoreData(userData.length >= PAGE_SIZE);
    });
  }, []);

  const handleLoadMore = () => {
    setIsLoading(true);
    const nextPage = page + 1;
    fetchUsers({ page: nextPage, limit: PAGE_SIZE }).then((userData) => {
      if (userData.length > 0) {
        setData((prevData) => [...prevData, ...userData]);
        setPage(nextPage);
        setHasMoreData(userData.length >= PAGE_SIZE);
      } else {
        setHasMoreData(false);
      }
      setIsLoading(false);
    });
  };

  return (
    <>
      <CardsList data={data} />
      {hasMoreData && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore}>Load more</LoadMoreBtn>
      )}
      {isLoading && <Loader />}
    </>
  );
};

export default Tweets;
