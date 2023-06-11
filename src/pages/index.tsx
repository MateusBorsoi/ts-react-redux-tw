import { useSelector } from "react-redux";



const Home = () => {
  

  

  return (
    <div className="flex flex-col h-screen">
      <div className="h-1/5 border">
      Div 1
      </div>
     
      <div className="flex flex-1">
        <div className="w-1/4 flex items-center justify-center">
           <div className="border-2 h-3/4 w-3/4"></div>
        </div>
        <div className="flex-1 border-2">

        </div>
        <div className="w-1/4 border-2">
            div 4
            
        </div>
      </div>
      <div className="h-1/5 border-2">

      </div>
    </div>
  );
};
export default Home;
