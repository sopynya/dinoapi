import {dinoImages} from '@/data/dinoImage';
import styles from './selecteddino.module.css'
export default function SelectedDino({dino, onClose}) {
    const dinokey = dino.genus.toLowerCase();
    return(
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <button className={styles.close} onClick={onClose}>x</button>
                <div className={styles.introbg}>
                    <p className={styles.author}>{dino.discovery.authority}, {dino.discovery.year_named}</p>
                    <p className={styles.ethymology}>" {dino.ethymology} "</p>
                    <div className={styles.intro}>
                        <h1>{dino.genus}</h1>
                        <img src={dinoImages[dinokey]?.image || '/questionmark.png'} />
                    </div>
                </div>
                {dinoImages[dinokey]?.credit && (
                    <p className={styles.credits}>Image by: <a href={dinoImages[dinokey].source}>{dinoImages[dinokey].credit}</a>, <a href={dinoImages[dinokey].license}>{dinoImages[dinokey].type}</a></p>
                )}

                <p className={styles.period}>{dino.period.map((d, i) => (
                    <span key={d}>{d}{i < dino.period.length - 1 && " - "}</span>
                ))}</p>
                <p className={styles.age}>{dino.age.map((d, i) => (
                    <span key={d}>{d}{i < dino.age.length - 1 && ", "}</span>
                ))} {dino.age_range_ma} ma</p>

                <h2 className={styles.heading}>Stats</h2>
                <div className={styles.stats}>
                    {dino.morphology.min_length_m && (
                        <div className={styles.chip}>
                            <p className={styles.number}>{dino.morphology.min_length_m}</p>
                            <p className={styles.stat}>Min Length M</p>
                        </div>
                    )}

                    {dino.morphology.max_length_m && (
                        <div className={styles.chip}>
                            <p className={styles.number}>{dino.morphology.max_length_m}</p>
                            <p className={styles.stat}>Max Length M</p>
                        </div>
                    )}

                    {dino.morphology.min_mass_kg && (
                        <div className={styles.chip}>
                            <p className={styles.number}>{dino.morphology.min_mass_kg}</p>
                            <p className={styles.stat}>Min Mass Kg</p>
                        </div>
                    )}

                    {dino.morphology.max_mass_kg && (
                        <div className={styles.chip}>
                            <p className={styles.number}>{dino.morphology.max_mass_kg}</p>
                            <p className={styles.stat}>Max Mass Kg</p>
                        </div>
                    )}

                    {dino.morphology.mass_kg && (
                        <div className={styles.chip}>
                            <p className={styles.number}>{dino.morphology.mass_kg}</p>
                            <p className={styles.stat}>Mass Kg</p>
                        </div>
                    )}

                    {dino.morphology.length_m && (
                        <div className={styles.chip}>
                            <p className={styles.number}>{dino.morphology.length_m}</p>
                            <p className={styles.stat}>Length M</p>
                        </div>
                    )}

                    {dino.morphology.height_m && (
                        <div className={styles.chip}>
                            <p className={styles.number}>{dino.morphology.height_m}</p>
                            <p className={styles.stat}>Height M</p>
                        </div>
                    )}
                </div>
                <div className={styles.dietbox}><h2>Diet: </h2><p>{dino.diet}</p></div>

                <h2 className={styles.heading} style={{marginBottom: '5px'}}>Species</h2>
                <p className={styles.species}>{dino.species.map((d) => (
                    <span className={styles.specie} key={d}>{d}</span>
                ))}</p>


                <h2 className={styles.heading} style={{marginBottom: '5px'}}>Discovery</h2>
                {dino.discovery.holotype && (
                    <p className={styles.specimen}>Holotype: {dino.discovery.holotype}</p>
                )}
                {dino.discovery.lectotype && (
                    <p className={styles.specimen}>Lectotype: {dino.discovery.lectotype}</p>
                )}
                {dino.discovery.neotype && (
                    <p className={styles.specimen}>Neotype: {dino.discovery.neotype}</p>
                )}
                <p className={styles.place}>{dino.discovery.locality}, {dino.discovery.region}, {dino.discovery.country}</p>
                <p className={styles.discoverer}>- {dino.discovery.discoverer}, {dino.discovery.year_discovered}</p>

                <h2 className={styles.heading} style={{marginBottom: '5px'}}>Classification</h2>
                <div className={styles.classificationbox}>
                    {dino.classification.order && (
                        <p>Order: {dino.classification.order}</p>
                    )}
                    {dino.classification.clade && (
                        <p>Clade: {dino.classification.clade.map((d, i) => (
                            <span key={i}>{d}{i < dino.classification.clade.length - 1 && ", "}</span>
                        ))}</p>
                    )}
                    {dino.classification.family && (
                        <p>Family: {dino.classification.family}</p>
                    )}
                    {dino.classification.subfamily && (
                        <p>Subfamily: {dino.classification.subfamily}</p>
                    )}
                    {dino.classification.superfamily && (
                        <p>Superfamily: {dino.classification.superfamily}</p>
                    )}
                    {dino.classification.tribe && (
                        <p>Tribe: {dino.classification.tribe}</p>
                    )}
                </div>
                <h2 className={styles.status}>Status: {dino.discovery.status}</h2>
            </div>
        </div>
    )
}