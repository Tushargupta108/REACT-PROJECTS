import { useState } from 'react'
import Cards from "./components/Cards.jsx";
import './App.css'

function App() {
  const companies = [
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrvRrptj5-RAEnRYS61QO9P6oJiwYnp5IOMYhBfWigxw&s",
      companyName: "Meta",
      datePosted: "5 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$65/hour",
      location: "Menlo Park, USA",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2LSiLLifRYwnJp8j9wJvcxAtVKmPuEmhUX0eCxAFZDA&s",
      companyName: "Google",
      datePosted: "2 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Entry Level",
      pay: "$60/hour",
      location: "Mountain View, USA",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB9Q6UJD8MB-XB7djjBlr9QjBWZNB3WDagK1yQzIfHEFgx9JJpVjoJIm7b&s=10",
      companyName: "Microsoft",
      datePosted: "1 day ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$55/hour",
      location: "Redmond, USA",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMZKPlCCc9qrsWdDaKQDrzQ1rV4fzMZAHbhjB7AlPp8w&s",
      companyName: "Amazon",
      datePosted: "3 days ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Entry Level",
      pay: "$50/hour",
      location: "Seattle, USA",
    },
    {
      brandLogo: "https://i.ytimg.com/vi/GV3HUDMQ-F8/sddefault.jpg",
      companyName: "Netflix",
      datePosted: "4 days ago",
      post: "UI Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "Los Gatos, USA",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTHlBrQ2OYZkeZjawi5gz1KZoiOyHNWktTmdXeUn2_8w&s",
      companyName: "Apple",
      datePosted: "2 days ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$58/hour",
      location: "Cupertino, USA",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9YVZC8aC7RpJqC9ThFC8wlrIXgMj7tKHkjZGash96-uVIZgUv9jaaQws&s=10",
      companyName: "Adobe",
      datePosted: "6 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Entry Level",
      pay: "$52/hour",
      location: "San Jose, USA",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbakv3Gouh5Lk56GCfRbFtMzckVOlmN3bMy-kwy8cEkA&s",
      companyName: "Spotify",
      datePosted: "3 days ago",
      post: "Web Developer",
      tag1: "Contract",
      tag2: "Junior Level",
      pay: "$48/hour",
      location: "New York, USA",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaBPK32oncc_vbFu927CbHvgke1Z0wssZ4kkE92a5lr9OpkyLXtkOYE_nj&s=10",
      companyName: "Uber",
      datePosted: "1 day ago",
      post: "Software Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$62/hour",
      location: "San Francisco, USA",
    },
    {
      brandLogo: "https://www.salesforce.com/news/wp-content/uploads/sites/3/2021/05/Salesforce-logo.jpg",
      companyName: "Salesforce",
      datePosted: "5 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Entry Level",
      pay: "$57/hour",
      location: "San Francisco, USA",
    },
  ];

  return (
    <div className='parent'>
      {companies.map(function(elem, idx) {
       return  <Cards  company={elem} key={idx} >  </Cards>
      })}
    </div>
    // why there is onluy one segemt =>JavaScript—it breaks the syntax because a function cannot return multiple separate things.
    //Why use <> (React Fragments)?
    // If you wrap your elements in an extra <div>, it adds an unnecessary, empty HTML node to your actual browser DOM, which can mess up your CSS layouts.
    // A Fragment (<> ... </>) acts as an invisible wrapper. It groups your elements together so JavaScript is happy (satisfying the "one return value" rule), but it doesn't add any extra HTML tags to your final website page.
  )
}

export default App
//2. Why must component files/names always start with a Capital Letter?
// Lowercase (<div>, <button>, <cards>): React assumes these are built-in HTML tags that the browser already knows. If you write <cards></cards>, 
// React will look for a native HTML <cards> element (which doesn't exist) and ignore it or throw an error.

// Uppercase (<Cards/>, <App/>, <Navbar/>): React knows that any tag starting with a capital letter is a 
// custom user-defined component that you created. It will look for your imported file and run your function code.


//3. Why do we use index (like key={idx}) in React?
//When you render a list of items using .map(), React needs a way to track every individual item in that list behind the scenes (in the Virtual DOM).
// The Virtual DOM Tracking: If an item in your list changes, updates, is deleted, or gets reordered,
//  React uses the key prop to instantly figure out which specific item changed without having to re-render the entire page.
// Why use the index (idx)? The index (0, 1, 2, 3...) provides a quick, unique identifier for each item in that specific render cycle.