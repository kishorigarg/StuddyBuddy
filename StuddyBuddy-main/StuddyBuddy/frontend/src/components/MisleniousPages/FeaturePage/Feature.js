import Footer from "../../LandingPage/footer";
import Header from "../../LandingPage/header";



const Feature = () => {
  

    return (
    <>
    <Header />
    <div style={styles.container}>
  
        <h1>Feature Page</h1>      
        
    </div>
    <Footer />     
    </>
    );
  };

  const styles = {
    container: {
      fontFamily: "'Segoe UI', Arial, sans-serif",
      color: '#333',
      lineHeight: 1.6,
      backgroundColor: '#fff',
    },
    
  };
  export default Feature;
  