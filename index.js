const eyes = document.querySelectorAll('.eye');

const anchor_box_left = eyes[0].getBoundingClientRect()
const anchor_left_x = anchor_box_left.left + anchor_box_left.width / 2;
const anchor_left_y = anchor_box_left.top + anchor_box_left.height / 2;

const anchor_box_right = eyes[1].getBoundingClientRect()
const anchor_right_x = anchor_box_right.left + anchor_box_right.width / 2;
const anchor_right_y = anchor_box_right.top + anchor_box_right.height / 2;

document.addEventListener('mousemove', (e) => {
	const mouseX = e.clientX;
	const mouseY = e.clientY;

	const angle_degree_left = angle(mouseX, mouseY, anchor_left_x, anchor_left_y);
	const angle_degree_right = angle(mouseX, mouseY, anchor_right_x, anchor_right_y);

	eyes[0].style.transform = `rotate(${angle_degree_left}deg)`;
	eyes[1].style.transform = `rotate(${angle_degree_right}deg)`;
	eyes[0].style.filter = `hue-rotate(${90 + angle_degree_left}deg)`;
	eyes[1].style.filter = `hue-rotate(${angle_degree_right}deg)`;
})

function angle(cx, cy, ex, ey) {
	const dx = ex - cx;
	const dy = ey - cy;
	const rad = Math.atan2(dy, dx);
	const deg = rad * 180 / Math.PI;
	return deg;
}
