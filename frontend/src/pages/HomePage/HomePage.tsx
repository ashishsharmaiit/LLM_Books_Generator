// HomePage.tsx
// code for the landing page where user enters the input for what are the user's interests.

import React, { useState }  from 'react';
import Logo from '../../components/Logo/Logo';
import TextBox from './components/TextBox/TextBox';
import Text from '../../components/Text/Text';
import Button from '../../components/Button/Button';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import useTextBox from './hooks/useTextBox';
import useFetchBookList from '../../hooks/useFetchBookList';
import './HomePage.css'; // Importing the CSS file
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const { textBoxValue, showError, handleTextChange, validateTextBox } = useTextBox();
  const fetchBookList = useFetchBookList();
  const navigate = useNavigate();
  const [isFetchingBooks, setIsFetchingBooks] = useState(false); // New loading state



  const handleClick = async () => {
    if (validateTextBox()) {
      try {
        setIsFetchingBooks(true); // Start loading
        const data = await fetchBookList(textBoxValue);
        setIsFetchingBooks(false); // Stop loading on success
        navigate('/results', { state: { data, textBoxValue} }); // Navigate with the fetched data
      } catch (error) {
        console.error('Failed to fetch books:', error);
        setIsFetchingBooks(false); // Stop loading on success
      }
    }
  };


  return (
    <React.StrictMode>
      <Logo />
      <Text tag="h1" text="Create Books That You Want to Read" textAlign="center" paddingLeft="5vw" paddingRight="5vw"/>
      <div className="componentStyle"><Text tag="p" text="Enter any topic(s) that you would like to read books on" textAlign="center" paddingLeft="5vw" paddingRight="5vw" /></div>
      {showError && <ErrorMessage />}
      <TextBox height="100px" placeholder="e.g., Artificial Intelligence, Astronomy, Biology, Genetics" onChange={handleTextChange} paddingLeft="3vw" paddingRight="3vw"/>
      {isFetchingBooks ? <p>Loading books...</p> : <div className="componentStyle"><Button text="Browse Books" onClick={handleClick} /></div>}
    </React.StrictMode>
  );
};

export default HomePage;
