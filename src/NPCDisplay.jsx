import NPC from './NPC.ts'

export default function NPCDisplay(props) {
    return (
        <div className="npc-display" >
            <div className="npc-field-row">
                <label htmlFor="npcName" className="npc-field-name">Name</label>
                <div className="npc-field-val" id="npcName">{props.npc.firstName} {props.npc.lastName}</div>
            </div>
            <div className="npc-field-row">
                <label htmlFor="npcClass" className="npc-field-name">Class</label>
                <div className="npc-field-val" id="npcClass">{props.npc.charClass}</div>
            </div>
            <div className="npc-field-row">
                <label htmlFor="npcRace" className="npc-field-name">Race</label>
                <div className="npc-field-val" id="npcRace">{props.npc.race}</div>
            </div>
            <div className="npc-field-row">
                <label htmlFor="hitPoints" className="npc-field-name">HP</label>
                <div className="npc-field-val" id="hitPoints">{props.npc.hitPoints}</div>
            </div>
            <div className="npc-field-row">
                <label htmlFor="armorClass" className="npc-field-name">AC</label>
                <div className="npc-field-val" id="armorClass">{props.npc.armorClass}</div>
            </div>
            <div className="npc-field-row">
                <label htmlFor="toHit" className="npc-field-name">Thac0</label>
                <div className="npc-field-val" id="toHit">{props.npc.toHit}</div>
            </div>
            <div className="npc-field-row">
                <label htmlFor="weapon" className="npc-field-name">Weapon</label>
                <div className="npc-field-val" id="weapon">{props.npc.weapon} {props.npc.weaponDamage}</div>
            </div>
            <div className="npc-field-row">
                <label htmlFor="desc" className="npc-field-name">Description</label>
                <div className="npc-field-val" id="desc">{props.npc.description}</div>
            </div>
        </div>
    );
}