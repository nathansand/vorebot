const Discord = require('discord.js');
const client = new Discord.Client({
    autorun: true
});

client.on('message', function(msg) {
    if (msg.content === 'ping') {
        msg.reply('pong!');
    }
    if (msg.content === 'pong') {
        msg.reply('ping!');
    }

    if (msg.content.startsWith('vc')) {
        msg.reply('sure');
    }

    if (msg.content === '!help') {
        msg.reply("```Here's a list of all the commands I can perform.\n!shutup <user>: Tell another user to stop talking.\n!countto <num>: Counts up to the number provided.\n!add <num1> <num2>: Adds two numbers together.\n!subtract <num1> <num2>: Subtracts the second number from the first.\n!multiply <num1> <num2>: Multiplies the two numbers together.\n!divide <num1> <num2>: Divides the first number by the second number.```")
    }

    if (msg.content === '5123482714huwhuaihrewaj32871')  {
        msg.delete(1)
        client.channels.get("545731783174651909").send('Hello I am vore bot, and I am proud to join this wonderful server.')
        client.channels.get("545731783174651909").send('I am most pleased to allow you to tell other users to politely be quiet by using the !shutup command.')
        client.channels.get("545731783174651909").send('Be sure to use the bots channel if you are going to be using lots of the commands.\nYou can use !help to get info on all the commands you can perform.')
    }

    if (msg.content.startsWith('!countto')) {
        var i;
        var ms = '```\nCounting\n';
        for (i = 1; i <= parseInt(msg.content.substring(9, 11)); i++) {
            ms = ms + i + '\n'
            if (i == parseInt(msg.content.substring(9, 11))) {
                msg.reply(ms + '```')
            }
        }
    }

    if (msg.content.startsWith('!add')) {
        var str;
        var args = msg.content.substring(1).split(' ');
        msg.reply(parseInt(args[1]) + parseInt(args[2]))
    }

    if (msg.content.startsWith('!subtract')) {
        var str;
        var args = msg.content.substring(1).split(' ');
        msg.reply(parseInt(args[1]) - parseInt(args[2]))
    }

    if (msg.content.startsWith('!multiply')) {
        var str;
        var args = msg.content.substring(1).split(' ');
        msg.reply(parseInt(args[1]) * parseInt(args[2]))
    }

    if (msg.content.startsWith('!divide')) {
        var str;
        var args = msg.content.substring(1).split(' ');
        msg.reply(parseInt(args[1]) / parseInt(args[2]))
    }

    if (msg.content.startsWith('!shutup')) {
        const user = msg.mentions.users.first()
        if (user) {
            const member = msg.guild.member(user);
            if (member) {
                msg.delete(1)
                client.channels.get("592930661099372589").send("shut up! " + member)
            };
        } else {
            msg.delete(1)
            client.channels.get("592930661099372589").send("I would be telling someone to shut up here, but " + msg.author.toString() + " forgot to actually @ anyone. So how about you shut up " + msg.author.toString() + "?")
        }
    }
});

client.login(process.env.BOT_TOKEN);
