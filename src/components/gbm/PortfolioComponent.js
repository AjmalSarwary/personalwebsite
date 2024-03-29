//Portfolio.js
import React from 'react';
import { Link } from 'react-router-dom';
import GbmSimulation from './GbmSimulation';
import IntroductionComponent from './IntroductionComponent';
import styles from './PortfolioComponent.module.css';


function PortfolioComponent() {
  return (
    <div className={styles.container}>
      
      <header className={styles.headerFooter}>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
			<Link to="/" className={styles.navLink}>Home</Link>
              
            </li>
            <li className={styles.navItem}>
               <Link to="/portfolio" className={styles.navLink}>Portfolio</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/contact" className={styles.navLink}>Contact</Link> 
            </li>
          </ul>
        </nav>
      </header>
     
      <main className={styles.mainContent}>
	   <h2> Portfolio </h2>
	  
        <h3 className={styles.titleH1}> A curated display of my work</h3>
		
        <p>Welcome to a showcase of my recent work and a sneak peek into my ongoing projects.</p>
		
		
		<IntroductionComponent />
		
        <GbmSimulation /> 
		
      </main>

     
      <footer className={styles.headerFooter}>
	  
        <p>© 2023 A.S. </p>
		
      </footer>
	  
    </div>
  );
}

export default PortfolioComponent;