Concept:

Ik voor een arcade game gekozen, hierbij ben ik  voor een space game gegaan. De bedoeling is dat je tussen de meteorieten vliegt om zo in leven te blijven en je highscore te verbreken.

Stappenplan:

1. Ik ben gaan designen om zo een beeld te scheppen hoe mijn game er ging gaan uit zien.

https://www.figma.com/design/zIxNYXZpT8LhJR0myXNkPV/thibaut_baten_eindopdracht_webscripting?node-id=0-1&t=JKkSpgJfR8pCdcWA-1


2. Als 2de stap ben ik eerst aan de basis van mijn game begonnen en dat was mijn raket besturen met de pijltjes. Hierbij ben ik een youtube video gaan bekijken die deze werkwijze toelichte.

CodingWithRohani. (2023, juli 10). JavaScript Complete Course || #12 Moving Element with Arrow Keys [Video]. YouTube. https://www.youtube.com/watch?v=xNBP2a4_WEM&t=2s

3. In stap 3 heb ik gewerkt aan de 2de grootse visual en dat waren de meteorieten. Hierbij heb ik in 3 stappen gewerkt 
    1. verschijnen en groten
    2. laten vallen
    3. willekeurige spawn

4. Na het grootste deel van de visuals af te hebben ben ik begonnen aan het coderen van mijn startpagina. Hier heb ik gekozen van een soort van pop-up die voor de achtergrond waarbij je lastScore en highscore worden bijgehouden, deze heb ik daar eerst hardcoded geplaast. Onder de score de afbeelding van de raket, met daaronder een flikkerende button die aanspreekt om te starten.

5. Nu was het tijd om aan de detectie functie te beginnen. Ik moest hier zeker stap voor stap te werk gaan en alles goed loggen. Eerst kreeg ik de wiskunde uitleg van de docent en kon ik aan de slag. Na de uitleg heb ik nog een kleine resourch gedaan en kwam ik uit bij een onderwerp van de mdn website. Hieronder de stappen hoe ik te werk ben gegaan: 

    1. Raakt de onderkant van de rotsblok met de bovenkant van de raket.

    2. Is de positie van de rechterkant van de meteoriet groter de positie van de linkerkant van de raket?

    3. Is de positie van de de linkerkant van de meteoriet kleiner dan de positie van de rechterkant van de raket?

    4. Het spel eindigen als de raket en de meteoriet hebben gebotst

    Mozilla Contributors. (z.d.). Element: getBoundingClientRect() method. MDN Web Docs. Geraadpleegd op 26 maart 2025, van https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect

6. De score tellen en bij houden in de index. Dit deed ik via localstorage met een vorig project had ik hier al eerdere ervaring mee. Als je het spel nu op een ander aparaat zou spelen zou je deze score niet meer kunnen ophalen.
