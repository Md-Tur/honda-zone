import React from 'react';
import './Answer.css';

const Answer = () => {
    return (
        <div className='answer'>
            <div className="answer-one">
                <h4>How React Works?</h4>
                <p>
                    Ans: <br />
                    It works in a declarative code. It creates a virtual DOM. To work it maintains a tree. It works on diff algorithm. Passes value from on component to another by using props.
                </p>
            </div>
            <div className="answer-one">
                <h4>Props vs State.</h4>
                <div>
                    Ans: <br />
                    <div className='difference'>
                        <div>
                            <h5>Props <hr /></h5>
                            <ol>
                                <li>Props is used to pass data from one component to another component.</li>
                                <li>It can be connected with multiple components.</li>
                                <li>It's immuatbel.</li>
                                <li>It's read only.</li>
                                <li>It can works with multiple component at a time.</li>
                            </ol>
                        </div>
                        <div>
                            <h5>State <hr /></h5>
                            <ol>
                                <li>It's used for sotring local data.</li>
                                <li>It can't be connected with other component.</li>
                                <li>It's mutable.</li>
                                <li>It can be changed in asynchronous way.</li>
                                <li>It only can work within it's own component.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Answer;