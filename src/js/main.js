import $ from "jquery";

for (var x=0; x<7; x++) {
	$(".container").append(`<div class="blockContainer ${x}">
			<div class="blockHeader">
				<div class="dateTime">
					<div class="date">
					00/00/00
					</div>
					<div class="time">
					99:99
					</div>
				</div>
				<div class="icon">
					<i class="icon${x} fa fa-mobile fa-2x"></i>
				</div>
			</div>
			<div class="msgContainer">
				<div class="msgHeader">
				Header
				</div>
				<div class="msg">
				Message
				</div>
			</div>
		</div>
		`)
}

console.log($(".icon1").html());

$(".icon1").removeClass("fa-mobile fa-2x").addClass("fa-tv fa-lg");
$(".icon2").removeClass("fa-mobile fa-2x").addClass("fa-envelope-o fa-lg");
$(".icon4").removeClass("fa-mobile").addClass("fa-globe");
$(".icon5").removeClass("fa-mobile fa-2x").addClass("fa-tv fa-lg");