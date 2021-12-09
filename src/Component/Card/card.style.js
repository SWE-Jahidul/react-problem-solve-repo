import styled from "styled-components";

export const Container = styled.div`
  width: 1000px;
  position: relative;
  display: flex;
  justify-content: space-between;

  .face {
    width: 300px;
    height: 200px;
    transition: 0.5s;
  }

  .face.face1 {
    position: relative;
    background: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    transform: translateY(100px);
  }

  &:hover .face.face1 {
    background: #ff0057;
    transform: translateY(0px);
  }

  .face.face2 {
    position: relative;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    transform: translateY(-100px);
  
  &:hover .face.face1.content {
    opacity: 1;
  }
/* sasfgsgfs */

export const Icon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f00;
  transition: 0.7s;
  z-index: 1;

  &i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 80px;
    transition: 0.7s;
    color: #fff;
  }

  .fa {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 80px;
    transition: 0.7s;
    color: #fff;
  }
`;

// export const Face = styled.div`
//   width: 300px;
//   height: 200px;
//   transition: 0.5s;

// `;

export const Content = styled.div`
  .p {
    margin: 0;
    padding: 0;
    text-align: center;
    color: #414141;
  }
  .h3 {
    margin: 0 0 10px 0;
    padding: 0;
    color: #fff;
    font-size: 24px;
    text-align: center;
    color: #414141;
  }
`;
