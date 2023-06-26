module.exports = ({
          name: "örnek",
          $if: "old",
          code: `
          $if[$getGuildVar[language]==eng]
          **is the example command**
          $if[$getGuildVar[language]==tr]
          **Örnek Komuttur.**`
});