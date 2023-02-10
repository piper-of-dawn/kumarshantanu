import "../styles/globals.css"



export default function RootLayout({children}: {children: React.ReactNode}) {
  

  return (
    <html>
      <head />
      <body> 
      <div className="h-1 bg-gradient-to-r from-cyan-500 to to-cyan-900 xs:-top-1"></div>
        <div>
   
        {children}
        </div>
        
        </body>
    </html>
  )
}
