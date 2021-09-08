// get KD
client.on('messageCreate', async (message) => {
  if (message.author.username == 'sup_abs') {
    cod.codLogin();
    let response = await cod.getLifetimeStats(message.content);
    console.log(JSON.stringify(response.level, 2));
    message.reply(
      `bruh your KD is ${parseFloat(
        JSON.stringify(response.lifetime.all.properties.kdRatio)
      ).toFixed(2)}`
    );
    // message.reply('you broke it');
  }
});
