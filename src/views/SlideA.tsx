import React, { useEffect } from 'react';
import styled from 'styled-components';
// import { useTransition, animated as a } from 'react-spring';
// import { Flex } from 'rebass';
import Button from '../components/Button';
import { useSpring, animated as a } from 'react-spring';
// import { useTransition, animated as a } from 'react-spring';

interface SlideAProps {
  setName: Function;
  setAge: Function;
  setSlide: Function;
  slide: number;
  age: number;
  name: string;
  // transition: Function;
}

const SlideA: React.FC<SlideAProps> = (props: SlideAProps) => {
  const { setName, setAge, setSlide, slide, name, age } = props;

  const handleNameInput = (e: { target: { value: string } }) => {
    setName(e.target.value);
  };

  const handleAgeInput = (e: { target: { value: number } }) => {
    setAge(e.target.value);
  };

  const handleNextSlide = () => {
    setSlide(slide + 1);
  };

  useEffect(() => {
    // console.log(slide, name, age);
  }, []);

  const SpringAProps = useSpring({
    from: {
      opacity: 0,
      transform: 'translate3d(100%, 0, 0)',
    },
    to: {
      opacity: 1,
      transform: 'translate3d(0%, 0, 0)',
    },
    leave: {
      opacity: 0,
      transform: 'translate3d(-50%, 0, 0)',
    },
  });

  return (
    <FormContainer
      // @ts-ignore
      style={SpringAProps}
    >
      <div className="row">
        <div className="column" style={{ marginRight: '1rem' }}>
          <label>Name:</label>
          <input
            name="name"
            type="text"
            placeholder="Name"
            onChange={handleNameInput}
          />
        </div>
        <div className="column">
          <label>Age:</label>
          <input
            name="age"
            type="number"
            placeholder="Age"
            // @ts-ignore
            onChange={handleAgeInput}
          />
        </div>
      </div>
      <Button
        disabled={name === '' && age === 0}
        slide={slide}
        setSlide={setSlide}
        text="Next"
        color="primary"
        size={1}
        type="button"
        handleNextSlide={handleNextSlide}
      />
    </FormContainer>
  );
};

export default SlideA;

const FormContainer = styled(a.div)`
  display: flex;
  background-color: #fed7d9;
  flex-direction: column;
  padding: 2rem 1rem;
  //border: 1px solid black;
  box-shadow: 0 2px 10px 2px rgba(0, 0, 0, 0.3);
  //height: 100%;
  //width: 100%;
  max-width: 600px;
  max-height: 600px;

  //width: 100%;

  align-items: flex-start;
  justify-content: space-evenly;

  input {
    margin-top: 0.4rem;
    border: none;
  }
`;

// const InputContainer = styled(Flex)`
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
// `;
