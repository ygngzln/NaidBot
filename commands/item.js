const axios = require('axios')
const discord = require('discord.js')

module.exports = {
    name: 'item',
    description: '!item [name] [type] [tier] [stat]',
    run: async(client, message, args) => {
        if(!args.length){ return; }
        url = `https://api.wynncraft.com/public_api.php?action=itemDB&search=${args[0].replaceAll('_', ' ')}`
        axios.get(url)
        .then(response => {
            let item = {};
            if(args[0].toLowerCase() === "anvil_crawler"){
                item = {
                    name: 'Anvil Crawler',
                    tier: 'Unique',
                    type: 'Dagger',
                    set: null,
                    dropType: 'NORMAL',
                    addedLore: null,
                    sockets: 3,
                    damage: '50-190',
                    earthDamage: '0-0',
                    thunderDamage: '0-1700',
                    waterDamage: '0-0',
                    fireDamage: '0-0',
                    airDamage: '0-0',
                    attackSpeed: 'SUPER_SLOW',
                    level: 99,
                    quest: null,
                    classRequirement: "assassin",
                    strength: 0,
                    dexterity: 50,
                    intelligence: 0,
                    defense: 0,
                    agility: 0,
                    strengthPoints: 0,
                    dexterityPoints: 15,
                    intelligencePoints: 0,
                    defensePoints: 0,
                    agilityPoints: 0,
                    damageBonus: 0,
                    damageBonusRaw: 580,
                    spellDamage: -12,
                    spellDamageRaw: 0,
                    rainbowSpellDamageRaw: 0,
                    healthRegen: 0,
                    healthRegenRaw: 0,
                    healthBonus: 0,
                    poison: 0,
                    lifeSteal: 0,
                    manaRegen: 0,
                    manaSteal: 0,
                    spellCostPct1: 0,
                    spellCostRaw1: 0,
                    spellCostPct2: 0,
                    spellCostRaw2: 0,
                    spellCostPct3: 0,
                    spellCostRaw3: 0,
                    spellCostPct4: 0,
                    spellCostRaw4: 0,
                    thorns: 0,
                    reflection: 0,
                    attackSpeedBonus: -10,
                    speed: -20,
                    exploding: 33,
                    soulPoints: 0,
                    sprint: 0,
                    sprintRegen: 0,
                    jumpHeight: 0,
                    xpBonus: 0,
                    lootBonus: 0,
                    lootQuality: 0,
                    emeraldStealing: 0,
                    gatherXpBonus: 0,
                    gatherSpeed: 0,
                    bonusEarthDamage: 0,
                    bonusThunderDamage: 18,
                    bonusWaterDamage: 0,
                    bonusFireDamage: 0,
                    bonusAirDamage: 0,
                    bonusEarthDefense: 0,
                    bonusThunderDefense: 0,
                    bonusWaterDefense: 0,
                    bonusFireDefense: 0,
                    bonusAirDefense: 0,
                    category: 'weapon'
                  }
            }else{
                item = response.data.items[0]
                let checkItem;
                let checkRare;
                let isNew = false;
                if(args[1]){
                    for(let x in response.data.items){
                        checkItem = args[1][0].toUpperCase() + args[1].slice(1, args[1].length).toLowerCase()
                        if(args[2]){
                            checkRare = args[2][0].toUpperCase() + args[2].slice(1, args[2].length).toLowerCase()
                            if(response.data.items[x].type){
                                if(response.data.items[x].type === checkItem && response.data.items[x].tier === checkItem){
                                    item = response.data.items[x]
                                    args.splice(1,2)
                                    break;
                                }else if(response.data.items[x].type === checkItem){
                                    item = response.data.items[x]
                                    isNew = true;
                                }else if(response.data.items[x].tier === checkItem){
                                    item = response.data.items[x]
                                    isNew = true;
                                }
                            }else if(response.data.items[x].accessoryType){

                            }
                        }else{
                            if(response.data.items[x].type && response.data.items[x].type === checkItem){
                                item = response.data.items[x]
                                args.splice(1,2)
                                break;
                            }else if(response.data.items[x].accessoryType && response.data.items[x].accessoryType === checkItem){
                                item = response.data.items[x]
                                args.splice(1,2)
                                break;
                            }else if(response.data.items[x].tier === checkItem){
                                item = response.data.items[x]
                                args.splice(1,2)
                                break;
                            }
                        }
                    }
                    if(isNew){
                        args.splice(1,2)
                    }
                }
            }
            if(args[1] === "stealing"){
                args[1] = "emeraldStealing"
            }else if(args[1] === "powderSlots" || args[1] === "powders"){
                args[1] = "sockets"
            }else if(args[1] === "lore" || args[1] === "background"){
                args[1] = "addedLore"
            }else if(args[1] === "class" || args[1] === "classReq"){
                args[1] = "classRequirement"
            }else if(args[1] === "mr"){
                args[1] = "manaRegen"
            }else if(args[1] === "spelldmg%" || args[1] === "spell%"){
                args[1] = "spellDamage"
            }else if(args[1] === "maindmg%" || args[1] === "dmg%" || args[1] === "main%"){
                args[1] = "damageBonus"
            }else if(args[1] === "walkSpeed"){
                args[1] = "speed"
            }

            if(item){
                if(item.damage === "0-0"){
                    item.damage = "No Damage"
                }
                if(item.earthDamage === "0-0"){
                    item.earthDamage = "No Earth Damage"
                }
                if(item.thunderDamage === "0-0"){
                    item.thunderDamage = "No Thunder Damage"
                }
                if(item.waterDamage === "0-0"){
                    item.waterDamage = "No Water Damage"  
                }
                if(item.fireDamage === "0-0"){
                    item.fireDamage = "No Fire Damage"
                }
                if(item.airDamage === "0-0"){
                    item.airDamage = "No Air Damage"
                }
                if(!item.health){
                    item.health = 0;
                }
                if(args[1]){
                    if(item[args[1]]){
                        message.channel.send(`${item[args[1]]}`)
                    }else{
                        message.channel.send('This stat does not exist.')
                    }
                }else{
                    let tierEmoji = {
                        "Normal": "⬜",
                        "Unique": "📦",
                        "Set": "🟩",
                        "Rare": "🟣",
                        "Legendary": "🟦",
                        "Fabled": "🟥",
                        "Mythic": "🟪",
                        "Crafted": "🔳",
                        "Dagger": "🗡️",
                        "Spear": "🪓",
                        "Bow": "🏹",
                        "Wand": "🪄",
                        "Relik": "✝️",
                        "Helmet": "🪖",
                        "Chestplate": "👕",
                        "Leggings": "👖",
                        "Boots": "🥾",
                        "Ring": "💍",
                        "Bracelet": "🏮",
                        "Necklace": "📿"
                    }

                    const embed = new discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle(`${item.name}`)
                    .setDescription(`${item.addedLore || ""}`)
                    .addFields(
                        { name: `Level`, value: `${item.level}`},
                        { name: `${item.category === "armor" || item.category === "accessory" ? "Health 💖" : "Damages ⚔️"}`, value: `${item.category === "armor" || item.category === "accessory" ? item.health : "Normal Damage: " + item.damage + "\nEarth Damage: " + item.earthDamage + " 🌎" + "\nThunder Damage: " + item.thunderDamage + " ⚡" + "\nWater Damage: " + item.waterDamage + " 🌊" + "\nFire Damage: " + item.fireDamage + " 🔥" + "\nAir Damage: " + item.airDamage + " 🌪️"}`},
                        { name: "Rarity", value: `${item.tier + " " + tierEmoji[item.tier]}`},
                        { name: "Category", value: `${item.type ? item.type : item.accessoryType} ${item.type ? tierEmoji[item.type] : tierEmoji[item.accessoryType]}`},
                        { name: "Restrictions", value: `${item.restrictions || "None"}`}
                    )
                    message.channel.send({embeds: [embed] })
                }
            }else{
                message.channel.send(`Item not found.`)
            }
        })
        .catch(error => {
            console.log(error)
            message.channel.send('There was an error searching for this item.')
        });
    }
}