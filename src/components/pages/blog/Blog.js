/** @format */

import React from "react";

const Blog = () => {
  return (
    <div className="w-[1000px] mx-auto">
      <div>
        <h4 className="text-2xl font-bold">
          What are the different ways to manage a state in a React application?
        </h4>
        <h5 className="text-xl">
          Every React component has a built-in state. This state is an object
          which stores the property values that belong to a component. State is
          able to keep data from different components in-sync because each state
          update re-renders all relevant components.
        </h5>
      </div>
      <div>
  <h4 className="text-2xl font-bold">
  How does prototypical inheritance work?
  </h4>
  <h5 className="text-xl">
  The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
  </h5>
</div>
<div>
  <h4 className="text-2xl font-bold">
  What is a unit test? Why should we write unit tests?
  </h4>
  <h5 className="text-xl">
  The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
  </h5>
</div>
<div>
  <h4 className="text-2xl font-bold">
  React vs. Angular vs. Vue?
  </h4>
  <h5 className="text-xl">
  Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option
  </h5>
</div>
    </div>
  );
};

export default Blog;
