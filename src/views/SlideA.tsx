import React, { useEffect } from 'react';
// import styled from 'styled-components';
// import { Flex } from 'rebass';
// import Form from '../components/Form';
import styled from 'styled-components';
import { Flex } from 'rebass';

interface SlideAProps {
  setName: Function;
  setAge: Function;
  setSlide: Function;
  slide: number;
  age: number;
  name: string;
}

const SlideA: React.FC<SlideAProps> = (props: SlideAProps) => {
  const { setName, setAge, setSlide, slide, name, age } = props;

  const handleNameInput = (e: { target: { value: string } }) => {
    setName(e.target.value);
  };

  const handleAgeInput = (e: { target: { value: number } }) => {
    setAge(e.target.value);
  };

  useEffect(() => {
    // console.log(slide, name, age);
  }, []);

  return (
    <>
      <FormContainer>
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
        <button
          onClick={() => setSlide(slide + 1)}
          disabled={name === '' && age === 0}
        >
          Next
        </button>
      </FormContainer>
    </>
  );
};

export default SlideA;

const FormContainer = styled(Flex)`
  display: flex;
  max-width: 800px;
  max-height: 600px;
  //width: 100%;
  padding: 1rem;
  border: 1px solid black;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-direction: column;
`;

// const InputContainer = styled(Flex)`
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
// `;
