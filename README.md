<h1 align="center">Webdesign @cmda-minor-web 1920</h1>

<p align="center"><b>Om de groene energie in huis bij te houden is de volgende applicatie ontwikkelt voor Roger Ravelli. Er is audioondersteuning aanwezig zodat hij met zijn oogaandoening de progressie van zijn zonnepanelen kan bijhouden zonder hier erg vermoeid van te raken. </b>
</p>

<br>

<p align="center">
  <a href="https://web-design-simone.herokuapp.com/">
    <img src="https://img.shields.io/badge/demo-LIVE-brightgreen.svg?style=flat-square" alt="demo">
  </a>
  &nbsp;&nbsp;&nbsp;
</p>

<img width="312" alt="Screenshot 2020-04-29 at 10 32 06" src="https://user-images.githubusercontent.com/45422060/80576006-b76b8280-8a04-11ea-9cc8-6310ba3e5c43.png">
<img width="317" alt="Screenshot 2020-04-29 at 10 32 17" src="https://user-images.githubusercontent.com/45422060/80576012-b9354600-8a04-11ea-8f51-345f97ad7374.png">

## Introductie

Deze applicatie is het eindproduct voor het vak [@cmda-minor-web 18-19](https://github.com/cmda-minor-web/browser-technologies-1819). Voor dit vak moest ik een concept ontwikkelen waardoor Roger zijn leven eens stukje makkelijker wordt gemaakt. Roger heeft een netvlies aandoening waardoor hij in de afgelopen jaren langzaam blind wordt. Hij heeft jaren lang gewerkt als adviseur voor duurzame energie, en kan nu de grafieken en tabellen niet meer goed aflezen. Hij heeft zich erbij neergelegd dat hij moest stoppen met werken, maar als hobby vind hij het nog wel interessant om met duurzame energie bezig te zijn, hier heb ik een oplossing voor bedacht.

## Inhoudspagina

- [Installatie](#Installatie)
- [User Scenario](#User-Scenario)
- [Voorbereiding](#Voorbereiding)
- [Eerste test](#Eerste-test)
  - [Interatie 1](#Iteratie-1)
- [Tweede test](#Tweede-test)
  - [Interatie 2](#Iteratie-2)
- [Derde test](#Derde-test)
  - [Interatie 3](#Iteratie-3)
- [Conclusie testen](#Conclusie-testen)
- [Exclusive Design Principles](#Exclusive-Design-Principles)
  - [Study situation](#Study-situation)
  - [Ignore Conventions](#Ignore-conventions)
  - [Prioritise identity](#Prioritise-identity)
  - [Add nonsense](#Add-nonsense)
- [Wishlist](#Wishlist)
- [Bronnen](#Bronnen)
- [Credits](#Credits)

## Installatie

```bash

#### Open de terminal

#### Clone repository
git clone https://github.com/zeijls/web-design-1920.git

#### Wijzig het pad
cd web-design-1920

#### Installeer dependencies
npm install

#### Start server met node
npm run dev
```

## User Scenario

Brian is 55 jaar, en heeft een lange tijd gewerkt als specialist wat betreft duurzame energie. Hij keurde veel technische tekeningen en plattegronden. Brian wordt sinds de afgelopen 10 jaar langzaam blind, hierdoor zijn de tekeningen, tabellen en grafieken van zijn werk een enorme opgave en heeft hij hier helaas mee moeten stoppen.

Hij is aan het overstappen naar screenreaders en zoom in technieken. Hij heeft hier al veel van geleerd door cursussen, maar vind het nog wel lastig om te gebruiken. Het grootste probleem is dat de meeste websites ook niet toegankelijk genoeg zijn, maar Brian denkt al snel dat het probleem bij hem ligt.

Brian heeft een tijdje terug zonnepanelen aangeschaft om zich toch nog een beetje bezig te kunnen houden met zijn passie. Als het zonnetje lekker schijnt zou hij graag willen inzien hoeveel energie de zonnepanelen hebben opgewekt, en hoeveel geld hij hiermee heeft bespaard. Wat het de dag zelf heeft opgeleverd vind hij het meest interessant, dus dat wilt hij direct in een overzichtje kunnen zien. Soms is hij ook benieuwd naar de progressie van de afgelopen week, maand of jaar.

In principe kan Brian nu nog teksten lezen, maar als het meer als 1 zin is raakt hij erg vermoeid. Hij zou het daardoor fijn vinden als er een audio is die de grafiek ondersteund. Verder wil hij het zicht wat hij nog heeft graag gebruiken, maar alleen als er niet teveel wit op de pagina is, en de contrasten groot zijn.

## Testen

<details><summary>Test 1</summary>

`Voorbereiding`

Vooraf gaand aan het gesprek met Roger zijn wij als groep te werk gegaan met het voorbereiden van de test. 1 iemand nam de leiding met het stellen van de vragen, waardoor niet iedereen door elkaar ging praten. De andere konden inhaken op het moment dat dit nodig was. Ik heb met 3 andere studenten genotuleerd.

Dit gesprek was vooral om kennis te maken. In dit gesprek wilde ik er achter komen welke karaktereigenschappen Roger heeft, wat zijn hobbies zijn en wat hij het meest belangrijk vind. Ik vond het een hele bijzondere ervaring om met iemand zoals Roger te praten. Dit was de eerste keer dat ik zoiets mocht meemaken.

`Bevindingen`

Tijdens de eerste test hebben wij een profiel van Roger opgebouwd, deze is terug te vinden in mijn wiki;
[Profiel Roger Ravelli](https://github.com/Zeijls/web-design-1920/wiki/Profiel-Roger-Ravelli)

</details>

<details><summary>Test 2</summary>

`Voorbereiding`

Belangrijkste punten die ik uit de test wil halen;

- Is het kleurcontrast groot genoeg
- Is de audio op deze manier een meerwaarde voor de grafiek
- Zijn de verschillen in lijnen zo duidelijk?

### Iteratie 1

[Test](https://www.youtube.com/watch?v=gb44xXou2Ds&feature=youtu.be)

Vragen achteraf

- Werkt dit zo voor u?
- Wat werkt niet, wat wel?
- Welke data lijkt u interessant om op deze manier te lezen
- Zijn de contrasten zo groot genoeg?
- In hoeverre is het voor u mogelijk om bepaalde letters op het toetsenbord te vinden.

De test ging verassend goed. Hij was heel positief over de demo. Ik had een filmpje gemaakt van de werking omdat ik wist dat ik het niet ging redden om het prototype in deze korte tijd af te krijgen. Tot mijn verbazing werkte dit best goed voor een eerste iteratie en heb ik hier iteressante punten uit kunnen halen. Hieronder de feedback van Roger;

- Lijnen zijn heel goed en duidelijk te volgen. Kleur contrast is goed.
- Eerste letter van een land intypen is heel goed te doen.
- Vind het lastig om de audio te stoppen, zou hier graag zelf invloed op willen hebben.
- Onderwerpen die ik interessant vind is duurzame energie, en dat de groei per jaar. Of Toegankelijkheidsscores van diensten en websites. (ten opzichten van de fossielen energie)

`Bevindingen`

Naast mijn eigen test kwamen er bij de andere tests ook nog een aantal interessante bevindingen naar voren

- Vind het fijn om de hele grafiek in beeld te hebben.
- Via supernova zet hij de websites die teveel wit hebben, om in darkmode. Dit is niet te zien via screensharing
- 1 zin is de max om te lezen, voordat Roger vermoeid raakt.
- Grafiek klikken werkt het beste, vergeleken met een screenreader of tab.
- Customised screenreader met eigen zinnen werkt super goed
- Houd van een samenvatting, beter voor de tabel of grafiek dan erna
- Zou fijn zijn als Roger de screenreader ook op pauze kunt zetten door een soort "Stop" commando
- Tabben ervaart hij als fijner dan screenreader, omdat hij dan zijn eigen tempo aan kunt geven.

</details>

<details><summary>Test 3</summary>

`Voorbereiding`

Om heel eerlijk te zijn had ik deze test niet voorbereid. Ik had van te voren niet bedacht wat ik wilde vragen en wat ik hoopte dat mij duidelijk werd. Simpelweg omdat ik er totaal niet achterstond wat ik ging testen, dat kwam omdat het nog niet af was.

### Iteratie 2

<img width="1440" alt="Screenshot 2020-04-24 at 10 48 46" src="https://user-images.githubusercontent.com/45422060/80198718-c75c1e80-8620-11ea-8862-b1bcb75160e4.png">

Dit gesprek ging een stuk minder soepel, maar ik heb hier wel enorm veel van geleerd. Het was mijn niet gelukt om alle feedback van week 2 te verwerken in het concept. Ik baalde hier zo ontzettend van dat de test voor mij een beetje nutteloos voelde, en ik had hier niet zoveel voor voorbereid. Maar tot mijn verbazing heb ik enorm veel uit deze test kunnen halen. Belangrijke punten die uit de test naar voren zijn gekomen:

`Bevindingen`

- De website ziet er op Roger zijn desktop heel anders uit doordat hij de zoom techniek gebruikt, en dit is niet zichbaar via de screenshare hoe de test werd afgenomen
- De kleurcontrasten zijn goed, hier hoeft niet meer voor getest te worden
- De grootte en afstand van buttons zijn prima.

Dit zijn punten over het concept, maar ik heb nog veel meer geleerd van het testen en zijn reactie op mij. Voor de testpersoon is het heel fijn als je de test begint met een inleiding, eerst een kort stukje over hoe het gaat (koetjes en kalfjes gesprek), vervolgens een kort stukje vertellen over wat we vorige week hadden gedaan en waar ik in de tussentijd aan heb gewerkt, het is logisch dat Roger niet van 10 verschillende studenten nog precies weet waar ze mee bezig zijn. Daarna even uitleggen wat ik graag zou willen dat hij doet, dus door de applicatie lopen, hardop denken en duidelijk maken dat als we onderweg fouten tegen komen dit een fout is van mij, en vooral niet aan hem ligt.

Na deze introductie kan de test beginnen, het is belangrijk om Roger een opdracht te geven of een vraag te stellen die hij uit de grafiek kan herleiden. Op het moment dat het stil valt, gewoon even laten gebeuren en niets voorzeggen.

Ik ben een heel stuk wijzer geworden van de laatste test. Vooral dat het niet extreem belangrijk is dat je hele concept klopt en voor de volle 100% werkt. Voor mij is het belangrijk dat ik er alsnog achter sta, en niet mijn ontwerp tijdens de test naar beneden haal. Als ik zie wat ik nu alsnog uit deze test heb kunnen halen, is dat genoeg om verder te gaan met de laatste iteratie. Als ik de test had uitgevoerd via bovenstaande beschrijving was dit nog een stuk meer geweest, maar daar heb ik nu van geleerd voor de volgende keer.

### Iteratie 3

`Bevindingen tijdens itereren`

- Onkey events zijn niet nodig, de buttons waren prima te bereiken voor Roger. Hij had hier geen moeite mee.
- Inzoomen op 1 soort energie is geen hoofdfunctie van dit concept. Is handig, maar met de kleur contrasten en audioondersteuning kan Roger de grafiek goed aflezen.

Voor nu heb ik mij heel erg gefocust op welke kleuren een goed contrast hebben, welke plaatsing het beste is enzovoort. Voor nu wil ik mij gaan focussen op de data die Roger interessant vind en hoe dit een meerwaarde heeft voor hem.

- Data over progressie duurzame energie in zijn eigen huis
- Audio ondersteuning verwerken
- Natuurlijk effect verwerken door hem een intro te geven over het weer en de zonnepanelen
- Grapje toevoegen; Zodra hij 2 buttons te snel inklikt wordt hier een reactie op gegeven

Tijdens het aanpassen van het User Scenario kwam ik erachter dat Roger de voortgang van de zonnepanelen hoogstwaarschijnlijk bekijkt vanaf zijn telefoon. Hierdoor is het van belang dat de website mobile first is ontworpen. Verder ga ik naast bovenstaande aanpassingen op de grafiek ook een homescreen, zero state en overzicht per dag, maand en jaar toevoegen.

Om een goed beeld te krijgen van het concept, heb ik het gebruik opgenomen in een filmpje. Hierin worden alle features en functionaliteiten benaderd.

[Eindconcept](https://www.youtube.com/watch?v=2KqR2wtUDv8)
[Demo]("https://web-design-simone.herokuapp.com/")

</details>

## Conclusie testen

<details><summary>Conclusie</summary>

Tijdens het testen heb ik een aantal punten ondervonden die het leven op het web van iemand zo als Roger erg lastig maken. Een groot voorbeeld hiervan is de screenreader. De screenreader kan geen context geven en blijft continu doorratelen. Om die reden heb ik mijn eigen audio ondersteuning aan de website toegevoegd. Nu kan ik context aan het verhaal meegeven, en de screenreader een natuurlijk effect meegeven. Als voorbeeld Roger een goedendag wensen als hij op de website aankomt. Een grapje als hij te ongeduldig doet, en context meegeven aan de aantallen die worden opgenoemd in plaats van enkel de aantallen. Uit de testen is gebleken dat dit voor Roger een enorme meerwaarde geeft aan de ervaring.

Bij voorbaat dacht ik dat Roger enorme knoppen nodig had op de website en zijn zicht niet kon gebruiken. Tijdens het testen bleek dat hij het zicht wat hij heeft maar al te graag gebruikt, alleen niet voor teksten lezen enzovoort. Dat kost hem te veel moeite, maar een knop inklikken of de trend van een grafiek lezen gaat nog best goed. Door de audio ondersteuning aan de website mee te geven kan Roger zelf kiezen hoeveel energie hij er in wilt steken om met zijn zicht de grafiek te volgen, omdat de audio dit ook duidelijk maakt.

Ik vond het een hele bijzondere ervaring om met Roger te mogen testen. Zelfs op de afstand die er tussen ons zat, heb ik hier enorm veel van geleerd. Zoals ik al benoemde in de testresultaten van Iteratie 3 heb ik veel geleerd over het uitvoeren van een test zelf, maar ook inzichten gekregen over de ervaring van een gebruiker met een aandoening op het web. Ik was ervan bewust dat het deze doelgroep niet makkelijk wordt gemaakt op het web. Na dit project zal ik hier meer rekening mee houden met mijn eigen werk.

</details>

## Exclusive Design Principles

Voor dit vak kregen we 4 design principles die we op het concept moesten toepassen. De design principles gaan over [Exclusive Design](https://vasilis.nl/research/about-exclusive-design/) geschreven door Vasilis van Gemert. Om de principes goed te begrijpen heb ik hier zelf aantekeningen van gemaakt in mijn [Wiki](https://github.com/Zeijls/web-design-1920/wiki/Exclusive-Design-~-Vasilis-van-Gemert). Hieronder leg ik per principe uit hoe ik dit heb toegepast op mijn concept voor Roger Ravelli.

<details><summary>De vier principes</summary>

### Study situation

Om de situatie van Roger goed te begrijpen, en te weten voor welke context ik mijn concept ga ontwerpen heb ik een User Scenario geschreven, en een Profiel van Roger opgebouwd.

### Ignore conventions

De screenreader die Roger gebruikt ratelt alles wat er op de website staat aan een stuk op. Verder wordt er alleen verteld wat er staat en geen context gegeven. Dit stoorde mij ontzettend, voor Roger is het al vreselijk om naar een Robot stem te luisteren, en dan wordt het nog erger als hij geen normale pauzes neemt in het verhaal. Ik wilde bij de audio meer context geven en er een natuurlijk draai aan wenden. Hiervoor heb ik mijn eigen "screenreader" gemaakt waarin deze opties wel mogelijk zijn.

### Prioritise identity

De hele applicatie is speciaal voor Roger gemaakt. In de eerste test hebben wij een profiel opgebouwd waaruit duidelijk wordt wat hij interessant vind, wat zijn karaktereigenschappen zijn, waar hij tegenaan loopt en wat zijn leven zou kunnen verbeteren. Hier heb ik op geprobeerd in te spelen met mijn website.

### Add nonsense

Bij Ignore conventions gaf ik al aan dat het mij stoorde dat de screenreader aan een stuk door ratelt, en een robot stem heeft. Nu leek het mij leuk om de screenreader een natuurlijk effect te geven. Voor Roger is het mogelijk in te zoomen op soorten energie. Als hij dit te snel wilt doen geeft de screenreader dit aan, en zegt hij dat die even wat rustiger aan moet doen omdat hij het niet kan bijhouden.

</details>

## Wishlist

- Een laatste test met Roger!
- Eigen stem toevoegen zodat het een natuurlijk effect heeft
- Audio die zelf afspeelt op het goede moment

## Bronnen

- [Essent thuis app](https://www.energieverbruiksmanagers.nl/overzicht-energieverbruiksmanagers/essent-thuis-app-nsure-energielezer/)
- [Essent](https://www.essent.nl/kennisbank/zonnepanelen/hoe-werken-zonnepanelen/opbrengst-zonnepanelen-per-maand)

## Credits

- Koop Reynders, voor zijn extra feedback in de laatste week
- Roger Ravelli, voor al zijn feedback en het testen
