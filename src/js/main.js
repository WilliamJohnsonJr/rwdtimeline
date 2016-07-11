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
				Phone
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