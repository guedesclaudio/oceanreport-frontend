import Post from '../Components/Post';
import styled from 'styled-components';
import { useState } from 'react';

const PostsList: React.FC = () => {
  const [posts, setPosts] = useState<any[]>();
  
  return (
    <Container>
      {posts?.map((value, index) => <Post key = {index} title = {value.title} content = {value.content} 
      username = {value.username} date = {value.date} hour = {value.hour}/>)}
    </Container>
  );
};
export default PostsList;

const Container = styled.div`
    width: 500px;
    margin: 180px auto;

    @media (max-width: 500px) {
        width: 96%;
    }
`;
