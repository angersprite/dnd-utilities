export default function NPCBuilder() {
    return (
        <div className="npc-form">
            <div>
                <span className="npc-field">
                    <label htmlFor="raceSelect">Race</label>
                    <select id="raceSelect">
                        <option value="-1">Random</option>
                    </select>
                </span>

                <span className="npc-field">
                    <label htmlFor="raceSelect">Class</label>
                    <select id="raceSelect">
                        <option value="-1">Random</option>
                    </select>
                </span>
            </div>

            <button>Generate</button>
        </div>
    );
}