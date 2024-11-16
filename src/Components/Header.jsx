import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion'
import { FaInstagram, FaFacebookSquare, FaTiktok, FaWhatsapp } from 'react-icons/fa'

const navLinks = [
    { name: 'Home', link: '/' },
    { name: 'Academy', link: '/academy' },
    { name: 'Design', link: '/design' },
    { name: 'Gallery', link: '/gallery' },
    { name: 'Faqs', link: '/faqs' },
]

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isContact, setIsContact] = useState(false);
    const [isOpen, setIsOpen] = useState(false)
    const menuVariants = {
        initial: {
            scaleY: 0
        },
        animate: {
            scaleY: 1,
            transition: {
                duration: 0.4,
                ease: [0.112, 0, 0.39, 0]
            }
        },
        exit: {
            scaleY: 0,
            transition: {
                delay: 0.5,
                duration: 0.4,
                ease: [0.112, 0, 0.39, 1]
            }
        }
    }

    const containerVariants = {
        initial: {
            transition: {
                staggerChildren: 0.09,
                staggerDirection: -1
            }
        },
        open: {
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.09,
                staggerDirection: 1
            }
        },
    }

    const linkVariants = {
        initial: {
            y: "30vh",
            transition: {
                duration: 0.3,
                ease: [0.37, 0, 0.63, 1]
            }
        },
        open: {
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0, 0.55, 0.45, 1]
            }
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            // Check if scroll is greater than 100vh
            if (window.scrollY > window.innerHeight) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const phoneNumber = '+2348161711309'; // Replace with your number in international format
    const message = 'Hi, I’d like to ask about your services!'; // Message to prefill in WhatsApp chat
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    return (
        <nav className={` z-50 top-0 w-full transition-colors duration-300 bg-gray-50 text-black ${isScrolled || isOpen ? ' fixed' : 'relative'}`}>
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <Link to='/' className='font-normal md:text-lg font-Playwrite'>
                    Greysville Designs
                </Link>
                
                <div className='hidden lg:block'>
                    <ul className='flex gap-6 uppercase font-medium'>
                        <a href='/'>home</a>
                        <a href='/academy'>fashion academy</a>
                        <a href='/design'>fashion design</a>
                        <a href='/gallery'>gallery</a>
                        <a href='/faqs'>faqs</a>
                    </ul>
                </div>

                <div className='hidden lg:block'>
                    <button onClick={() => setIsContact(!isContact)} className='bg-black hover:bg-white hover:text-black border-2 border-black rounded-full px-4 py-[2px] text-white font-medium'>CONTACT</button>

                    {isContact &&
                        <div className='bg-white text-black pr-10 pl-4 py-2 absolute mt-2 uppercase'>
                            <ul className='space-y-[2px]'>
                                <li>instagram</li>
                                <li>facebook</li>
                                <li>tiktok</li>
                                <li>whatsapp</li>
                            </ul>
                        </div>
                    }
                </div>

                <div className="flex items-center lg:hidden">
                    <MotionConfig
                        transition={{
                            duration: 0.5,
                            ease: 'easeInOut'
                        }}
                    >
                        <motion.button
                            onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
                            initial={false}
                            animate={isOpen ? 'open' : 'closed'}
                            className="h-10 w-10 rounded-full bg-white/0 transition-colors hover:bg-white/20">
                            <motion.span
                                variants={{
                                    open: {
                                        rotate: ["0deg", "0deg", "45deg"],
                                        top: ["35%", "50%", "50%"],
                                    },
                                    closed: {
                                        rotate: ["45deg", "0deg", "0deg"],
                                        top: ["50%", "50%", "35%"]
                                    }
                                }}
                                style={{
                                    top: "35%",
                                    x: "-50%",
                                    y: "-50%"
                                }}
                                className="absolute h-1 w-8 bg-black"></motion.span>

                            <motion.span
                                variants={{
                                    open: {
                                        rotate: ["0deg", "0deg", "-45deg"],
                                    },
                                    closed: {
                                        rotate: ["-45deg", "0deg", "0deg"],
                                    }
                                }}
                                style={{
                                    top: "50%",
                                    x: "-50%",
                                    y: "-50%"
                                }}
                                className="absolute h-1 w-8 bg-black">
                            </motion.span>

                            <motion.span
                                variants={{
                                    open: {
                                        rotate: ["0deg", "0deg", "45deg"],
                                        bottom: ["35%", "50%", "50%"],
                                        x: ["0%", "-50%"]
                                    },
                                    closed: {
                                        rotate: ["45deg", "0deg", "0deg"],
                                        bottom: ["50%", "50%", "35%"],
                                        x: ["-50%", "0%"]
                                    }
                                }}

                                style={{
                                    bottom: "35%",
                                    x: "0%",
                                    y: "50%"
                                }}
                                className="absolute h-1 w-4 bg-black"></motion.span>
                        </motion.button>
                    </MotionConfig>
                </div>

                

                {/* <ul className="flex space-x-3">
                  <a href='' target="_blank" rel="noopener noreferrer"><FaInstagram className={`text-xl hover:text-purple-400 ${isScrolled ? 'text-black ' : 'text-white hover:text-white/80'}`} /></a>
                  <a href='' target="_blank" rel="noopener noreferrer"><FaFacebookSquare className={`text-xl hover:text-blue-400 ${isScrolled ? 'text-black ' : 'text-white'}`} /></a>
                  <a href='' target="_blank" rel="noopener noreferrer"><FaTiktok className={`text-xl hover:text-purple-300 ${isScrolled ? 'text-black ' : 'text-white'}`} /></a>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"><FaWhatsapp className={`text-xl hover:text-green-400 ${isScrolled ? 'text-black ' : 'text-white'}`} /></a>
                </ul> */}
            </div>
            <AnimatePresence >
                    {isOpen &&
                        <motion.div
                            variants={menuVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="fixed z-50 left-0 right-0 bg-gray-50 text-black h-full origin-top lg:hidden">
                            <div className="flex w-full justify-center h-full">
                                <motion.div
                                    variants={containerVariants}
                                    initial="initial"
                                    animate='open'
                                    exit="initial"
                                    className="flex flex-col gap-4 items-center justify-center h-full mobile-nav text-3xl ">
                                    {navLinks.map((link, index) => (
                                        <div
                                            onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
                                            key={index}
                                            className="overflow-hidden py-2"
                                        >
                                            <motion.div
                                                variants={linkVariants}
                                            >
                                                <Link to={link.link}>{link.name}</Link>
                                            </motion.div>
                                        </div>
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>
                    }
                </AnimatePresence>
        </nav>
    )
}

export default Header