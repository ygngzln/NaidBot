module.exports = {
    name: 'lvlq',
    description: '!lvlq [questName]',
    run: async(client, message, args, qdata) => {
        if(!args.length){ return; }
        let split;
        for(let quest in qdata){
            split = qdata[quest].split(",");
            for(x=0;x<split.length;x++){
               if(split[x].trim().toLowerCase() === args[0].toLowerCase().replaceAll("_", " ")){
                   message.channel.send(`Found quest at level ${quest}.`)
                   return;
               }
            }
        }
        message.channel.send("Could not find that quest.")
    }
}