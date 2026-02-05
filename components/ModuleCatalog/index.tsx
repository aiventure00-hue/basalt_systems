import React from 'react'
import ModuleCard from '../ModuleCard'
import styles from './index.module.css'

interface ModuleData {
    id: string
    price: string
    title: string
    description: string
    imageUrl: string
    imageAlt: string
}

interface ModuleCatalogProps {
    category: string
    unitsCount: string
    modules: ModuleData[]
}

const ModuleCatalog = ({ category, unitsCount, modules }: ModuleCatalogProps) => {
    return (
        <section>
            <div className={styles.catalogHeader}>
                <span className="mono">{category}</span>
                <span className="mono">{unitsCount}</span>
            </div>
            <div className={styles.catalogGrid}>
                {modules.map((module) => (
                    <ModuleCard 
                        key={module.id}
                        id={module.id}
                        price={module.price}
                        title={module.title}
                        description={module.description}
                        imageUrl={module.imageUrl}
                        imageAlt={module.imageAlt}
                    />
                ))}
            </div>
        </section>
    )
}

export default ModuleCatalog
