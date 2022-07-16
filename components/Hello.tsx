import styles from '../styles/hello.module.css'


function Hello(){

    return(
        <div className = 'hello-main'>
            <UniversalLogo />
            <div className = {styles.greeting}>
                <h1>Hello Nneoma!</h1>
                <p>What would you like to do?</p>
                {/* <div className = 'admin-button-div'>
                    <Link to = '/addproducts'>
                    <button className = 'hello-button create-item'>Create Item</button>
                    </Link>
                    <Link to = '/home'>
                    <button className = 'hello-button admin-login-button'>Login As Customer</button>
                    </Link>
                </div> */}
            </div>
        </div>
    )

}

export default Hello