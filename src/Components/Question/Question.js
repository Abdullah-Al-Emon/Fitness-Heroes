import React from "react";
import "./Question.css";

const Question = () => {
  return (
    <div className="question bg-blue-50">
      <div>
        <h2 className="text-[20px] font-semibold text-center">How does react work ?</h2>
        <p>React is a declarative, efficient, and flexible JavaScript library
          for building user interfaces, developed by Facebook, which allows
          developers to easily create fast user interfaces for websites and
          applications alike. The main concept of React.js is virtual DOM
          through which React allows to re-construct DOM in JavaScript and
          push only those changes to the DOM which have actually occurred.</p>
      </div>
      <div>
        <h2 className="text-[20px] font-semibold text-center">Difference between props and state.</h2>
        <p>Props are used to pass data from one component to another. The state
          is a local data storage that is local to the component only and
          cannot be passed to other components. Props are immutable but state
          is mutable. Props can be used with state and functional components.
          State can be used only with the state components. Props are
          read-only but State is both read and write.</p>
      </div>
      <div>
        <h2 className="text-[20px] font-semibold text-center">What are the uses of 'useEffect hook' except data load ?</h2>
        <p>The useEffect Hook allows to perform side effects in the components.
          Except fetching data there are some other examples of side effects
          like directly updating the DOM, and timers. UseEffect accepts two
          arguments. The second argument is optional. The useEffect hook
          allows components to react to lifecycle events such as mounting to
          the DOM, re-rendering, and unmounting.</p>
      </div>
    </div>
  );
};

export default Question;
