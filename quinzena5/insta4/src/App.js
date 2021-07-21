import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Joana'}
          fotoUsuario={'https://picsum.photos/49/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/45/50'}
          fotoPost={'https://picsum.photos/202/150'}
        />
        <Post
          nomeUsuario={'leoncio'}
          fotoUsuario={'https://picsum.photos/57/50'}
          fotoPost={'https://picsum.photos/207/150'}
        />
      </MainContainer>
    );
  }
}

export default App;


