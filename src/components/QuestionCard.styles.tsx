import styled from 'styled-components';

export const Wrapper = styled.div`
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
  background: #ebfeff;
  border: 2px solid #0085a3;
  border-radius: 10px;
  max-width: 1000px;
  padding: 20px;
  text-align: center;

  p {
    font-size: 1rem;
  }

`

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;

  button {
    background: ${({correct, userClicked}) =>
            correct
                    ? 'linear-gradient(90deg, #56FFA4, #59BC86)'
                    : !correct && userClicked
                    ? 'linear-gradient(90deg, #FF5656, #C16868)'
                    : 'linear-gradient(90deg, #56ccff, #6eafb4)'};
    border: 3px solid #ffffff;
    border-radius: 10px;
    box-shadow: 1px 2px 0 rgba(0, 0, 0, 0.1);
    color: #fff;
    cursor: pointer;
    font-size: 0.8rem;
    height: 40px;
    margin: 5px 0;
    user-select: none;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
    width: 100%;

    :hover {
      opacity: 0.8;
    }
  }
  
`
