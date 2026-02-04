import React from 'react'
import Button from '@/components/shared/Button'
import Image from 'next/image'
import styles from './index.module.css'

const Hero = () => {
    return (
        <section className={styles.heroSection}>
            <div className={styles.grid12}>
                <div className={styles.leftColumn}>
                    <span className={styles.tag}>Automated Enterprise Infrastructure</span>
                    <h1 className={styles.heroTitle}>
                    Architecting<br />
                    <span className={styles.mutedText}>Autonomy</span>
                    </h1>
                    <p className={styles.heroSub}>
                    // DEPLOY SCALABLE INTELLIGENCE
                    <br />Eliminate operational drag with industrial-grade AI agents.
                    </p>
                        <div className={styles.buttonContainer}>
                            <Button variant="primary">
                                [ INITIALIZE SCAN ]
                            </Button>
                            <Button variant="secondary">
                                VIEW DOCUMENTATION
                            </Button>
                        </div>
                </div>
                <div className={styles.rightColumn}>

                    <div className={styles.backgroundImage}>
                        <Image 
                            src="https://storage.googleapis.com/banani-generated-images/generated-images/a7a3679e-e372-4f4a-91f9-6febd3d56b3d.jpg"
                            alt="Abstract basalt texture"
                            fill
                            className={styles.backgroundImageImg}
                        />
                    </div>

                    <div className={styles.terminalWindow}>
                        <div className={styles.terminalHeader}>
                            <div className={styles.termDot}></div>
                            <div className={styles.termDot}></div>
                            <div className={styles.termDot}></div>
                        </div>
                        <div className={styles.terminalLine}>
                            &gt; connection established to node_04
                        </div>
                        <div className={styles.terminalLine}>
                            &gt; importing neural weights...
                        </div>
                        <div className={styles.terminalLine}>
                            &gt; analyzing workflow inefficiencies...
                        </div>
                        <div className={styles.terminalLine}>
                            &gt; 14 bottlenecks detected.
                        </div>
                        <div className={styles.terminalStatus}>
                            <span>STATUS</span>
                            <span>AWAITING INPUT_</span>
                        </div>
                    </div>
                </div>
                </div>
        </section>
    )
}

export default Hero