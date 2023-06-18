import Login from "./page"

export default function Layout({
    children, 
  }: {
    children: React.ReactNode
  }) {


    return (
      <section>
   
       <Login/>
      </section>
    )
  }