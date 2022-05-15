module.exports = {
    name: 'qlvl',
    description: '!qlvl [number]',
    run: async(client, message, args, qdata) => {
        if(!args.length || !qdata[args[0]]){ return; }
        if(qdata[args[0]]){
            message.reply(qdata[args[0]])
        }
    }
}