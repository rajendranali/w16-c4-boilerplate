import Home from "./Home";
import About from "./About";
import {Products} from "./Products";
import {ProductCard }from "./ProductCard";
export const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#8000ff", padding: 20 }}>
      {/* 
                all the links in navbar,
      IMPORTANT: Link should match as mentioned in problem statement 
      */}
      <Home/>
      <About/>
      <Products/>
    
    </nav>
  );
};
