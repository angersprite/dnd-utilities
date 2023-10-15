export default class NPC {
    public charClass: string = ""
    public race: string = ""
    public firstName: string = ""
    public lastName: string = ""
    public hitPoints: string = ""
    public armorClass: string = ""
    public weapon: string = ""
    public weaponDamage: string = ""
    public toHit: string = ""
    public description: string = ""

    constructor(charClass: string, race: string, firstName: string, lastName: string,
        hitPoints: string, armorClass: string, toHit: string, weapon: string, weaponDamage: string,
        description: string) {
        this.charClass = charClass
        this.race = race
        this.firstName = firstName
        this.lastName = lastName
        this.hitPoints = hitPoints
        this.armorClass = armorClass
        this.toHit = toHit
        this.weapon = weapon
        this.weaponDamage = weaponDamage
        this.description = description
    }
}