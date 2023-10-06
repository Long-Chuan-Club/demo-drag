class Filp {
	elements = []
	before = []
	after = []
	constructor(elements) {
		this.elements = [...elements]
		this.elements.forEach((element, index) => {
			this.before.push(element.getBoundingClientRect())
		})
	}
	start() {
		console.log(this.beforeX, this.beforeY)
	}
	play() {
		this.elements.forEach((element, index) => {
			this.after.push(element.getBoundingClientRect())
			const deltaX = this.before[index].left - this.after[index].left
			const deltaY = this.before[index].top - this.after[index].top
			const deltaW = this.before[index].width / this.after[index].width
			const deltaH = this.before[index].height / this.after[index].height
			element.animate(
				[
					{
						transformOrigin: "top left",
						transform: ` translate(${deltaX}px, ${deltaY}px) scale(${deltaW}, ${deltaH}) `,
					},
					{ transformOrigin: "top left", transform: "none" },
				],
				{ duration: 300, easing: "ease-in-out", fill: "both" }
			)
		})
	}
}
