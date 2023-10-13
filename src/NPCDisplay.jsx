export default function NPCDisplay() {
    return (
        <div className="npc-display">
            <div className="npc-field">
                <label htmlFor="npcName">Name</label>
                <div id="npcName"></div>
            </div>
            <div className="npc-field">
                <label htmlFor="npcClass">Class</label>
                <div id="npcClass"></div>
            </div>
            <div className="npc-field">
                <label htmlFor="npcRace">Race</label>
                <div id="npcRace"></div>
            </div>
            <div className="npc-field">
                <label htmlFor="hitPoints">HP</label>
                <div id="hitPoints"></div>
            </div>
            <div className="npc-field">
                <label htmlFor="armorClass">AC</label>
                <div id="armorClass"></div>
            </div>
            <div className="npc-field">
                <label htmlFor="toHit">Thac0</label>
                <div id="toHit"></div>
            </div>
            <div className="npc-field">
                <label htmlFor="equipment">Equipment</label>
                <div id="equipment"></div>
            </div>
            <div className="npc-field">
                <label htmlFor="skills">Special Skills</label>
                <div id="skills"></div>
            </div>
            <div className="npc-field">
                <label htmlFor="desc">Description</label>
                <div id="desc"></div>
            </div>
        </div>
    );
}