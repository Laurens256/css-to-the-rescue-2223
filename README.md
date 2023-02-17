## Dingen die niet (redelijk) kunnen
- Circular slider dmv html range input
- Knoppen die door kleuren cyclen (kan wel met 2 kleuren dmv checkbox)
- Nummers in een bepaalde combinatie
- attr() gebruiken om een css waarde te veranderen (behalve `content`)


## Dingen die wel kunnen
- HTML pattern met css :valid en :invalid om specifieke waardes te accepteren

## Week 1
Tijdens week 1 van dit project ben ik veel bezig geweest met experimenteren en schetsen. Eerste heb ik onderzoek gedaan naar de `:has()` selector. Deze selector zorgt ervoor dat mijn hele project mogelijk is dus is het belangrijk dat er een browser is waarin deze goed werkt.

Naast het onderzoek naar css selectors heb ik er ook voor gekozen om het experimentele css nesting te gebruiken. Css nesting is momenteel alleen beschikbaar in de development versie van Google Chrome. Css nesting laat je code schijven met de volgende syntax:
```css
.container {
	background: black;
  & .child {
	font-size: 2em;
  }
}
```
Uiteindelijk wordt dit door de browser vertaald als:
```css
.container {
	background: black;
}
.container .child {
	font-size: 2em;
}
```
Het nesten van elementen kan nog veel dieper en geavanceerder dan dit door bijvoorbeeld meerdere items te nesten of pseudo selectors te gebruiken. Door te veel of te diep te nesten kan je wel snel het overzicht kwijtraken.

### Schetsen
Tijdens het schetsen van mijn paneel, heb ik ervoor gekozen nog niet al te veel te denken over de uiteindelijke layout. Omdat het paneel modulair is, kan ik altijd nog bepaald modules omwisselen / eruit halen. Voor nu wil ik zoveel mogelijk modules maken en later kiezen welke ik houd en waar ik deze plaats. Hieronder volgen de huidige schetsen.


## Week 2