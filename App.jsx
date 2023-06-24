import React, { useState, useEffect } from 'react';
import { Container, Typography, Button } from '@mui/material';

export default function App() {
  const [screen, setScreen] = useState('start');

  const startScreen = (
    <Container sx={{
      backgroundColor: '#E5E5E5',
      height: '100vh',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '8rem 0',
      color: '#293264'
    }}>
      <Typography variant='h1' component='h1'
        sx={{
          fontFamily: 'Karla, sans-serif',
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: '31.25px',
          lineHeight: '37px',
          marginBottom: '20px',
        }}>
        QUIZZICAL
      </Typography>
      <Typography component='p'
        sx={{
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '16px',
          lineHeight: '19px',
          marginBottom: '30px'
        }}>
        Some description if needed
      </Typography>
      <Button sx={{
        background: '#4D5B9E',
        borderRadius: '15px',
        width: '193px',
        height: '52px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '19px',
        color: '#F5F7FB'
      }} variant="contained" onClick={() => setScreen('quiz')}>
        Start quiz
      </Button>
    </Container>
  );

  const quizScreen = (
    <Container className="quiz-screen">
      <form>
        <legend className='question'>How would one say goodbye in Spanish?</legend>

        <input className='answer' type='radio' id='a1' />
        <label className='answer' htmlFor='a1'>Answer 1</label>

        <input className='answer' type='radio' id='a2' />
        <label className='answer' htmlFor='a2'>Answer 2</label>

        <input className='answer' type='radio' id='a3' />
        <label className='answer' htmlFor='a3'>Answer 3</label>

        <input className='answer' type='radio' id='a4' />
        <label className='answer' htmlFor='a4'>Answer 4</label>

        <hr />
      </form>
    </Container>
  );

  return (
    <Container>
      {(screen === 'start') && startScreen}
      {(screen === 'quiz') && quizScreen}
    </Container>
  );
}