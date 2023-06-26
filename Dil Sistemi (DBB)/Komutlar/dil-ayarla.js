module.exports = ({
          name: "dil-ayarla",
          $if: "old",
          code: `
          $onlyIf[$checkContains[$message[1];tr;eng]!=false;
          Eng :True valid !language tr/eng
          Tr : Doğru kullanım !language tr/eng
          ]
          $if[$message[1]==eng]
          Language set to english
          $setServerVar[language;eng]
          $onlyIf[$getGuildVar[language]!=eng;You cannot select a selected language]
          $endif
          $if[$message[1]==tr]
          Dil türkçe olarak ayarlandı
          $setServerVar[language;tr]
          $onlyIf[$getGuildVar[language]!=tr;Seçili olan bir dili seçemezsin]
          $endif
          $onlyPerms[administrator;
          Eng : Only people with \`Administrator\` authority can use this command
          Tr :Bu komutu sadece \`Yönetici\` yetkisine sahip kişiler kullanabilir]`
});