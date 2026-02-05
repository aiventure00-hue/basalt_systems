import React from 'react'
import styles from './index.module.css'

const ServiceTable = () => {
    return (
        <section className={styles.tableContainer}>
            <div className={styles.tableHeader}>
                <h2 className={styles.displayFont}>Service Tiers</h2>
                <div className={`mono ${styles.dataSource}`}>DATA_SOURCE: LIVE</div>
            </div>
            <table className={styles.phosphorTable}>
                <thead>
                    <tr>
                        <th style={{width: '40%'}}>CAPABILITY_MATRIX</th>
                        <th style={{width: '30%'}}>STANDARD</th>
                        <th style={{width: '30%'}}>ENTERPRISE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>API_THROUGHPUT</td>
                        <td>1,000 REQ/MIN</td>
                        <td>UNLIMITED</td>
                    </tr>
                    <tr>
                        <td>DEDICATED_MEMORY</td>
                        <td>SHARED_CLUSTER</td>
                        <td>ISOLATED_INSTANCE</td>
                    </tr>
                    <tr>
                        <td>RESPONSE_TIME</td>
                        <td>&lt; 400ms</td>
                        <td>&lt; 80ms</td>
                    </tr>
                    <tr>
                        <td>DATA_RETENTION</td>
                        <td>30 DAYS</td>
                        <td>PERMANENT_ARCHIVE</td>
                    </tr>
                    <tr>
                        <td>SUPPORT_LEVEL</td>
                        <td>TICKET_BASED</td>
                        <td>DEDICATED_ENGINEER</td>
                    </tr>
                    <tr>
                        <td>ENCRYPTION</td>
                        <td>AES-256</td>
                        <td>MIL-SPEC_HARDENED</td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}

export default ServiceTable
