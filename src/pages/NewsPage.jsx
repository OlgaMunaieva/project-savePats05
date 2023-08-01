
import SearchInput  from 'components/searchInput/SearchInput';
import {Title}  from 'components/title/TitlePage.styled';
import axios from 'axios';
import { useEffect, useState } from 'react';
import NewsList from 'components/newsList/newsList';
import Container from 'components/mainContainer/MainContainer.styled';
import NewsPaginator from 'components/newsPaginator/newsPaginator';

const API_KEY = 'mc1GG2VGT2VGMPz3mpzlHGRmnyjAqbuI';

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState('dog');
  const [isSearch, setIsSearch] = useState(false);
  const [page,setPage] = useState(1);
  const [total,setTotal] = useState(0)
  const getPopularNews = async () => {
    try {
      const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${API_KEY}&page=${page}`;
      const response = await axios.get(url);
      setTotal(response.data.response.meta.hits)
      console.log(response.data.response.docs);
      return response.data.response.docs;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(()=>{
    const fetchNews = () =>{
        getPopularNews().then(items => (items.slice(0,-4))).then(articles=>setNews(articles));

    }
    setIsSearch(false);
    fetchNews();
    // eslint-disable-next-line
  },[isSearch,page])
  console.log(total);
  
  return (
    <Container.MainContainer>
      <Title>News</Title>
      <SearchInput
        setInput={setQuery}
        setSearch={setIsSearch}
        type="text"
        placeholder="Search"
      />
      <NewsList
      items={news}
      />
      <NewsPaginator click={setPage} limit={6} totalPages={total} news={news}/>
    </Container.MainContainer>
  );
};

export default NewsPage;
