import "./App.css";
import Component from "./components/1-Components";
import Books from "./components/2-Props";
import BooksContainer from "./components/3-ComponentStyling";
import ConditionalRendering from "./components/4-ConditionalRendering";
import ProductContainer from "./components/ProductCard/ProductCard";
import List from "./components/5-RenderingList";
import UseState from "./components/6-UseState";
import LoginForm from "./components/7-LoginForm";
import UseEffect from "./components/8-UseEffect";

function App() {
  return (
    // <>
    //   <Component></Component>
    //   <ConditionalRendering
    //     isUserLoggedIn={true}
    //     username="Gerome Davao"
    //   ></ConditionalRendering>
    //   <BooksContainer></BooksContainer>
    //   <List></List>
    //   <ProductContainer></ProductContainer>
    //  <UseState></UseState>
    //  <LoginForm></LoginForm>
    // </>
    <>
      <UseEffect></UseEffect>
    </>
  );
}

export default App;
