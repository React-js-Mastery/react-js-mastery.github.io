import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import CounterFunction from './CounterFunction'
import CounterClass from './CounterClass'

function Interview() {
    return (
        <div>
            <section className='interview section' >
                <h2>My Web Features</h2>
                <div className="content">
                    <ul className='items-container'>
                        <li className='items'><Link to={'/Translate'}>Language Translater</Link></li>
                        <li className='items'><Link to={'/Profile'}>Profile</Link></li>
                        <li className='items'><Link to={'/Gallery'}>Gallery</Link></li>
                        <li className='items'><Link to={'/Interview'}>Interview</Link></li>
                    </ul>
                </div>
                <br />
                <h1 className='interview-title'>React Interview</h1>
                <br />
                <div className="interview-content">
                    <h3 className='que'>1. What is React and Feature of React?</h3>
                    <details>
                        <summary>Answer:</summary>
                        <div className="data">
                            <p>React is a JavaScript library for building user interfaces, primarily for web applications. It was developed by Facebook and is widely used in modern web development. React allows developers to create reusable UI components and manage the state of those components efficiently. It follows a component-based architecture, which makes it easier to build and maintain complex user interfaces.
                            </p>
                            <br />
                            <b>Key features of React include:</b>

                            <ol className='list-1'>
                                <li><b>Virtual DOM:</b> React uses a Virtual DOM (Document Object Model) to optimize the process of updating the actual DOM. When the state of a component changes, React creates a virtual representation of the updated DOM and then efficiently updates the actual DOM based on the differences, minimizing the need for direct manipulation of the DOM and improving performance.
                                </li>
                                <li><b>Component-Based:</b>React encourages the development of applications using reusable components. These components are self-contained and can be combined to build complex UIs. This approach promotes modularity, reusability, and easier maintenance.
                                </li>
                                <li><b>Unidirectional Data Flow:</b>React follows a unidirectional data flow, which means that the data flows in a single direction, from parent components to child components. This helps in managing and debugging the state of components more effectively.
                                </li>
                                <li><b>JSX (JavaScript XML):</b>JSX is a syntax extension for JavaScript that allows developers to write HTML-like code within their JavaScript code. This makes it easier to define the structure of user interfaces directly in the code, enhancing readability and ease of development.
                                </li>
                                <li><b>Reconciliation:</b>React efficiently updates only the parts of the DOM that have changed, thanks to its reconciliation algorithm. This minimizes the performance impact of updates and ensures a smooth user experience.
                                </li>
                                <li><b>Declarative Syntax:</b>React uses a declarative syntax, where developers describe what the UI should look like based on the current state, and React takes care of updating the UI to match that state. This approach simplifies the development process and reduces the chances of bugs.
                                </li>
                                <li><b>Community and Ecosystem:</b>React has a vast and active community, which has led to the creation of numerous libraries, tools, and extensions that complement React development. This ecosystem offers solutions for routing, state management, styling, testing, and more.
                                </li>
                                <li><b>React Native:</b>While primarily used for web development, React can also be used to build mobile applications through React Native. React Native enables developers to create native mobile apps using React components, sharing a significant portion of code between web and mobile platforms.
                                </li>
                                <li><b>Hooks:</b>React introduced hooks as a way to manage state and side effects in functional components, allowing developers to write more reusable and concise code. Hooks like `useState`, `useEffect`, and others simplify the management of component state and lifecycle.
                                </li>
                            </ol>
                        </div>
                    </details>
                </div>

                <br />
                <div className="interview-content">
                    <h3 className='que'>2. What is Virtual DOM</h3>
                    <details>
                        <summary>Answer:</summary>
                        <div className="data"></div>
                    </details>
                </div>

                <br />
                <div className="interview-content">
                    <h3 className='que'>2. What is Virtual DOM</h3>
                    <details>
                        <summary>Answer:</summary>
                        <div className="data"></div>
                    </details>
                </div>

                <br />
                <div className="interview-content">
                    <h3 className='que'>3. </h3>
                    <details>
                        <summary>Answer:</summary>
                        <div className="data"></div>
                    </details>
                </div>

                <br />
                <div className="interview-content">
                    <h3 className='que'>4. </h3>
                    <details>
                        <summary>Answer:</summary>
                        <div className="data"></div>
                    </details>
                </div>

                <br />
                <div className="interview-content">
                    <h3 className='que'>5. </h3>
                    <details>
                        <summary>Answer:</summary>
                        <div className="data"></div>
                    </details>
                </div>

                <br />
                <div className="interview-content">
                    <h3 className='que'>6. </h3>
                    <details>
                        <summary>Answer:</summary>
                        <div className="data"></div>
                    </details>
                </div>

                <br />
                <div className="interview-content">
                    <h3 className='que'>7. </h3>
                    <details>
                        <summary>Answer:</summary>
                        <div className="data"></div>
                    </details>
                </div>

                <br />
                <div className="interview-content">
                    <h3 className='que'>8. </h3>
                    <details>
                        <summary>Answer:</summary>
                        <div className="data"></div>
                    </details>
                </div>

                <br />
                <div className="interview-content">
                    <h3 className='que'>9. </h3>
                    <details>
                        <summary>Answer:</summary>
                        <div className="data"></div>
                    </details>
                </div>

                <br />
                <div className="interview-content">
                    <h3 className='que'>10. counter App using function component</h3>
                    <details>
                        <summary>Answer:</summary>
                        <div className="data">
                            <CounterFunction />
                        </div>

                    </details>
                </div>

                <br />
                <div className="interview-content">
                    <h3 className='que'>10. counter App using Class component</h3>
                    <details>
                        <summary>Answer:</summary>
                        <div className="data">
                            <CounterClass />
                        </div>

                    </details>
                </div>

            </section>
        </div>
    )
}

export default Interview
