import React, { useState, useEffect } from 'react';

export default function App() {
  const [screen, setScreen] = useState('start');

  const startScreen = (
    <div className='main'>
      <h1>QUIZZICAL</h1>
      <p>Some description if needed</p>
      <button onClick={() => setScreen('quiz')}>Start quiz</button>
    </div>
  );

  const quizScreen = (
    <div className="quiz-screen">
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
    </div>
  )

  return (
    <main>
      {(screen === 'start') && startScreen}
      {(screen === 'quiz') && quizScreen}
    </main>
  )
}