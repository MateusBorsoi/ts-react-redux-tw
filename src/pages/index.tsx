const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="h-1/5 bg-red-500">
      Div 1
      </div>
     
      <div className="flex flex-1">
        <div className="w-1/4 flex items-center justify-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
           <div className="border-2 h-3/4 w-3/4"></div>
        </div>
        <div className="flex-1 bg-gray-500">
            div 3
        </div>
        <div className="w-1/4 bg-blue-500">
            div 4
        </div>
      </div>
      <div className="h-1/5 bg-green-500">

      </div>
    </div>
  );
};
export default Home;
