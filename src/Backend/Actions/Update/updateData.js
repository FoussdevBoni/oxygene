if (connectedAS===''||connectedAS==null) {
    return (
        <div>
        {
         !myVariable.hidden ?
            <header>
                <VisiteurHeader />
                 <NavMenu />
                 <MobileMenu />

            </header>:
            null
        }
         <MobileDrawer />
        <VisiteurRoutes />
        {
         !myVariable.hidden ?
        <Footer />:
       null

        }
       </div>

  ); 
 }else {

 
     return(

   


      
    )

 }