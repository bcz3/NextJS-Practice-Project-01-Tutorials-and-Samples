import Image from 'next/image'
import {useRef} from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import styles from '../../styles/header.module.scss'
import {useRouter} from 'next/router'
import Link from 'next/link'
const Header = () => {

    const router = useRouter();
    
    const hamburgerDiv = useRef(null);
    function showNavMenu(){
        const currDisp = hamburgerDiv.current.children[1].style.display;
        if(currDisp === "block"){
            hamburgerDiv.current.children[1].style.display = "none";
        }else{
            hamburgerDiv.current.children[1].style.display = "block";
        }
    }

    return (
        <div className={styles.headerStyle}>
            <div>
                <Link href={'/'} className='flex justify-center'>
                    <Image
                        priority 
                        src="/images/vercel.svg" 
                        width={80} 
                        height={40} 
                        alt='app-logo'
                    />
                    <Image
                        priority 
                        src="/images/next.svg" 
                        width={56} 
                        height={56} 
                        alt='app-logo'
                    />
                    <Image
                        priority 
                        src="/images/thirteen.svg" 
                        width={20} 
                        height={20} 
                        alt='app-logo'
                    />
                </Link>
            </div>
            <div>
                <ul className={styles.navRoutes}>
                    <li onClick={
                            (e)=>{
                                router.push('/');
                            }
                        }
                    >Beranda</li>
                    <li onClick={
                            (e)=>{
                                router.push('/countries')
                            }
                        }
                    >Countries</li>
                    <li onClick={
                            (e)=>{
                                router.push('/users')
                            }
                        }
                    >Users</li>
                    <li onClick={
                            (e)=>{
                                router.push('/dashboard')
                            }
                        }
                    >Dashboard</li>
                </ul>
            </div>
            <div className={styles.hamburgerMenu}
                ref={hamburgerDiv}
            >
                <GiHamburgerMenu 
                    className={styles.giHamburgerMenu} 
                    onClick={showNavMenu}
                    size={32}
                />
                <div>
                    <ul>
                        <li onClick={
                                (e)=>{
                                    router.push('/');
                                    showNavMenu();
                                }
                            }
                        >Home</li>
                        <li onClick={
                                (e)=>{
                                    router.push('/countries')
                                    showNavMenu();
                                }
                            }
                        >Countries</li>
                        <li onClick={
                                (e)=>{
                                    router.push('/users')
                                    showNavMenu();
                                }
                            }
                        >Users</li>
                        <li onClick={
                                (e)=>{
                                    router.push('/dashboard')
                                    showNavMenu();
                                }
                            }
                        >Dashboard</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;