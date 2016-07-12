import $ from "jquery";

for (var x=0; x<7; x++) {
	$(".container").append(`<div class="blockContainer ${x}">
			<div class="blockHeader">
				<div class="dateTime">
					<div class="date" id="date${x}">
					00/00/00
					</div>
					<div class="time" id="time${x}">
					99:99
					</div>
				</div>
				<div class="icon">
					<i class="icon${x} fa fa-mobile fa-2x"></i>
				</div>
			</div>
			<div class="msgContainer" id="mc${x}">
				<div class="triangle1" id="tri1-${x}">
				</div>
				<div class="triangle2" id="tri2-${x}">
				</div>
				<div class="msgHeader header${x}">
				Header
				</div>
				<div class="msg msg${x}">
				Message
				</div>
			</div>
		</div>
		`);
};

$("#date0").text("4/10/13");
$("#date1").text("4/11/13");
$("#date2").text("4/13/13");
$("#date3").text("4/15/13");
$("#date4").text("4/16/13");
$("#date5").text("4/17/13");
$("#date6").text("4/18/13");

$("#time0").text("18:30");
$("#time1").text("12:04");
$("#time2").text("05:36");
$("#time3").text("13:15");
$("#time4").text("21:30");
$("#time5").text("12:11");
$("#time6").text("09:56");

$(".icon1").removeClass("fa-mobile fa-2x").addClass("fa-tv fa-lg");
$(".icon2").removeClass("fa-mobile fa-2x").addClass("fa-envelope-o fa-lg");
$(".icon4").removeClass("fa-mobile").addClass("fa-globe");
$(".icon5").removeClass("fa-mobile fa-2x").addClass("fa-tv fa-lg");

$(".header0").text("Conversation internat");
$(".header1").text("Baggu intricate the");
$(".header2").text("St Moritz bureaux");
$(".header3").text("Asia-Pacific Porter");
$(".header4").text("Ettinger wardrobe Sw");
$(".header5").text("Extraordinary uniform");
$(".header6").text("Nordic global interna");

$(".msg0").text("Alluring Baggu iconic airport remarkable. Boulevard Melbourne Boeing 787 Marylebone delightful bureaux tote bag Winkreative. Classic ANA Helsinki, Comme des Garçons uniforms alluring cosy intricate. Efficient delightful Muji discerning business class uniforms extraordinary, Fast Lane Toto perfect Tsutaya Marylebone. Signature hub essential ANA pintxos cosy, Shinkansen K-pop. Bureaux Ettinger intricate first-class boutique the best izakaya Scandinavian liveable.Impeccable Toto Airbus A380, Helsinki artisanal Gaggenau first-class Winkreative Shinkansen ryokan exquisite craftsmanship. Signature airport global");
$(".msg1").text("Business class international Gaggenau, signature sharp premium emerging bulletin Nordic exclusive Marylebone K-pop Asia-Pacific. Concierge pintxos Sunspel destination charming iconic ryokan K-pop lovely. Flat white efficient artisanal Ettinger boutique. Ettinger intricate cosy the best, charming impeccable Airbus A380 Washlet global Baggu tote bag craftsmanship Winkreative bureaux perfect. Boulevard exquisite Singapore Boeing 787, smart wardrobe Washlet joy conversation eclectic international alluring Ettinger Melbourne.");
$(".msg2").text("Sleepy intricate Beams first-class bespoke. Nordic international Tsutaya exclusive airport, Helsinki Shinkansen ANA signature remarkable Muji boutique Ginza bureaux. Zürich Lufthansa destination, essential elegant business class vibrant Ginza Washlet handsome Sunspel Scandinavian. Exclusive cosy wardrobe, delightful elegant premium smart business class Melbourne bureaux Lufthansa Fast Lane. Concierge the best classic elegant Airbus A380 Porter. K-pop soft power efficient, bespoke Sunspel lovely eclectic Tsutaya ryokan. Nordic essential charming carefully curated boutique uniforms Winkreative elegant airport St Moritz Singapore Zürich conversation cosy.");
$(".msg3").text("Shinkansen elegant Muji, cosy bulletin impeccable intricate Gaggenau handsome extraordinary boulevard first-class ANA cutting-edge. Bespoke Asia-Pacific essential, Helsinki finest soft power flat white boulevard cutting-edge bulletin airport. Efficient Washlet emerging Melbourne sharp boutique. Concierge hub uniforms finest. Sophisticated bespoke elegant international Helsinki espresso.");
$(".msg4").text("Alluring Baggu iconic airport remarkable. Boulevard Melbourne Boeing 787 Marylebone delightful bureaux tote bag Winkreative. Classic ANA Helsinki, Comme des Garçons uniforms alluring cosy intricate. Efficient delightful Muji discerning business class uniforms extraordinary, Fast Lane Toto perfect Tsutaya Marylebone. Signature hub essential ANA pintxos cosy, Shinkansen K-pop. Bureaux Ettinger intricate first-class boutique the best izakaya Scandinavian liveable.");
$(".msg5").text("Impeccable Toto Airbus A380, Helsinki artisanal Gaggenau first-class Winkreative Shinkansen ryokan exquisite craftsmanship. Signature airport global Lufthansa, Nordic tote bag sleepy Melbourne. Punctual tote bag ryokan Lufthansa, craftsmanship finest smart. Artisanal intricate charming ANA efficient liveable smart conversation Ettinger finest Muji Washlet hand-crafted.");
$(".msg6").text("Business class international Gaggenau, signature sharp premium emerging bulletin Nordic exclusive Marylebone K-pop Asia-Pacific. Concierge pintxos Sunspel destination charming iconic ryokan K-pop lovely. Flat white efficient artisanal Ettinger boutique. Ettinger intricate cosy the best, charming impeccable Airbus A380 Washlet global Baggu tote bag craftsmanship Winkreative bureaux perfect. Boulevard exquisite Singapore Boeing 787, smart wardrobe Washlet joy conversation eclectic international alluring Ettinger Melbourne.Shinkansen elegant Muji, cosy bulletin impeccable intricate Gaggenau handsome extraordinary boulevard first-class ANA cutting-edge. Bespoke Asia-Pacific essential, Helsinki finest soft power flat white boulevard cutting-edge bulletin airport. Efficient Washlet emerging Melbourne sharp boutique. Concierge hub uniforms finest. Sophisticated bespoke elegant international Helsinki espresso.");