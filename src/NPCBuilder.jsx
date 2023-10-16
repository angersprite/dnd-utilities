import GoonrService from './GoonrService.ts'
import { useState, useEffect } from 'react';
import NPCDisplay from './NPCDisplay.jsx'
import NPC from './NPC.ts'

const goonrService = new GoonrService

export default function NPCBuilder() {
    let [npc, setNPC] = useState(new NPC())
    const [allClasses, setClasses] = useState([]);
    const [allRaces, setRaces] = useState([]);
    const [ raceId, setRaceID ] = useState(-1)
    const [ classId, setClassID ] = useState(-1)

    useEffect(() => {
        goonrService.getClasses()
          .then((response) => response.json())
          .then((data) => {
             setClasses(data);
          })
          .catch((err) => {
             console.log(err.message);
          });
    }, []);

    useEffect(() => {
        goonrService.getRaces()
          .then((response) => response.json())
          .then((data) => {
            setRaces(data);
          })
          .catch((err) => {
             console.log(err.message);
          });
    }, []);

    const generateNPC = async () => {
        let npcAPIResponse = goonrService.getNPC(classId, raceId)
            .then((response) => response.json())
            .then((data) => {
                setNPC(new NPC(
                    data.className,
                    data.race,
                    data.firstName, 
                    data.lastName,
                    data.hitPoints,
                    data.armorType,
                    data.armorClass,
                    data.toHit,
                    data.weapon,
                    data.weaponDamage,
                    data.descriptors,
                    data.skills
                ))
            })
    }

    return (
        <div className="npc-builder-card">
            <div className="npc-form">
                <div className="npc-form-filters">
                    <div className="npc-filter">
                        <label htmlFor="raceSelect">Race:</label>
                        <select id="raceSelect" onChange={(e) => setRaceID(e.target.value)}>
                            <option value="-1">Random</option>
                            {allRaces.map(c => {return (<option value={c.id} key={c.id}>{c.name}</option>)})}
                        </select>
                    </div>

                    <div className="npc-filter">
                        <label htmlFor="raceSelect">Class:</label>
                        <select id="raceSelect" onChange={(e) => setClassID(e.target.value)}>
                            <option value="-1">Random</option>
                            {allClasses.map(c => {return (<option value={c.id} key={c.id}>{c.name}</option>)})}
                        </select>
                    </div>
                </div>
                <button onClick={generateNPC}>Generate</button>
            </div>
            <NPCDisplay npc={npc}></NPCDisplay>
        </div>
    );
}