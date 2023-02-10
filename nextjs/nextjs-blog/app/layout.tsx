import "../styles/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
 
  const header = (
    <div id="header" className="text-center">
      <h2 className="text-slate-800 p-4 m-6 rounded-md">Kumar Shantanu</h2>
      <ul className="navigation text-center">
        <li><a href="#" className="active">About</a></li>
        <li><a href="#">Meditations</a></li>
        <li><a href="#">Blog</a></li>
        <li> <a href="#">Playground</a> </li>

      </ul>  
     </div>         
  
  )


  return (
    <html>
      <head />
      <body>
        <div className="mx-auto max-w-2xl">
        {header}
        {children}
        </div>
        
        </body>
    </html>
  )
}
