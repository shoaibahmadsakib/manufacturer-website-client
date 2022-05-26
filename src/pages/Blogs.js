import React from "react";
import solve from "../assets/images/solve.png";
const Blogs = () => {
  return (
    <div className="flex flex-col align-items-center pl-10 leading-10 text-left mx-10">
      <h1 className="text-2xl py-8">
        {" "}
       1: How will you improve the performance of a React Application?
      </h1>
      <p>
        If I learn and practice every day for 2-3 hours. and I practice every
        module of Jonker vai. I definitely improve the react application
      </p>
      {/* second question */}
      <h1 className="text-2xl py-8">
       
       2: What are the different ways to manage a state in a React application?
      </h1>
      <p>
        there are many ways to manage state in react application. basically
        there are four types of
      </p>

      <table class="table w-full">
        <thead>
          <tr>
            <th>1</th>
            <th>Name</th>
          </tr>
          <tr>
            <th>1</th>
            <th>local</th>
          </tr>
          <tr>
            <th>1</th>
            <th>global</th>
          </tr>
          <tr>
            <th>1</th>
            <th>server</th>
          </tr>
          <tr>
            <th>1</th>
            <th>URL</th>
          </tr>
        </thead>
      </table>
      <p className="text-left">
        useState and useEffect is the first tool you should reach for to manage
        state in your components.
        <br />
        context API and redux are global state manager which comes after local
        state manage. and they are very helpful and powerful
        <br />
        SWR and React Query. which can manage server state in react which is
        more powerful
        <br />
        React Router, you can get all the information you need using use history
        or use location. which comes from react-router dom
      </p>

      {/*  */}
      <h1 className="text-2xl py-8">3: How does prototypical inheritance work?</h1>
      <p className="text-left">
        JavaScript is a prototype-based language, meaning that objects inherit
        directly from other objects
        <br />
        Everything in Javascript is an object. When we create a class its also
        objects. This is how Javascript does class-based programming there are
        other traditional Object-Oriented Programming languages where that use
        the keyword ‘class’ and ‘inheritance’.
        <br />
        Javascript’s version of class-based programming and other traditional
        class-based programming languages work with the same concept but do not
        work exactly similarly.
        <br />
        finally, the core idea of Prototypal Inheritance is that an object can
        point to another object and inherit all its properties. The main purpose
        is to allow multiple instances of an object to share common properties,
        hence, the Singleton Pattern.
      </p>
      {/*  */}

      <h1 className="text-2xl py-8">4: Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>
      <p className="text-left">
      useState is a Hook that allows us to set the state of variables in functional components. When we pass the initial state to the function by useState, it returns a variable with the current state value (not necessarily the initial state) and returns another function to update this value. But if we set the state of a variable as mentioned in the question it returns a variable with the initial state it does not return any other function to update the value of the variable.
      </p>
      {/* /////////// */}
      <h2 className="text-2xl py-8 text-left">
      5:  You have an array of products. Each product has a name, price,
        description, etc. How will you implement a search to find products by
        name?
      </h2>

      <div>
        <img src={solve} alt="" />
      </div>

      <h2 className="text-2xl">
       6: What is a unit test? Why should write unit tests?
      </h2>
      <p className="text-left">
        The main object of a unit test is for testing a written code and it can
        work effectively Unit testing is an important step in the development
        process because if done correctly, it can help detect early flaws in
        code which may be more difficult to find in later testing stages.
        <br />
        We can test 'unit tests for better and faster code Unit testing ensures
        that all code meets quality standards before it's deployed. , unit
        testing saves time and money and helps developers write better code,
        more efficiently.
      </p>
    </div>
  );
};

export default Blogs;
