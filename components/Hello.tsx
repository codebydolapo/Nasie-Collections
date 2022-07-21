import styles from '../styles/hello.module.css'
import UniversalLogo from './UniversalLogo'
import Link from 'next/link'


function Hello(){

    function openWhatsapp(){
        window.open("https://wa.me/2348164394476?text=Hello", "_blank");
    }

    function openDatabase(){
        window.open("nasiecollections.sanity.studio", "_blank");
    }

    return(
        <div className = 'hello-main'>
            <UniversalLogo />
            <div className = {styles.hello}>
                <h1>Hello Nneoma!</h1>
                <p>What would you like to do?</p>
                <div>
                    <button className = {styles.accessDatabase} onClick = {openDatabase}>Access Database</button>
                    <button className = {styles.contactDolapo} onClick = {openWhatsapp}>Contact Dolapo</button>
                    <Link href = '/home'>
                    <button className = {styles.marketplaceButton}>Visit Marketplace</button>
                    </Link>
                </div>
            </div>
        </div>
    )

}

export default Hello