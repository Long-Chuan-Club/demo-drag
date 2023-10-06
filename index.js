const container = document.getElementById("container")
let curretNode
let filp
container.addEventListener("dragstart", (e) => {
	setTimeout(() => {
		e.target.classList.add("moving")
	}, 0)
	curretNode = e.target
	e.dataTransfer.effectAllowed = "move"
})

container.addEventListener("dragover", (e) => {
	e.preventDefault()
})

container.addEventListener("dragenter", (e) => {
	e.preventDefault()
	const targetNode = findNode(e.target, "item")
	if (!targetNode) {
		return false
	}
	const list = [...container.children]
	if (list.indexOf(targetNode) - list.indexOf(curretNode) == 0) return
	filp = new Filp(container.children)
	if (list.indexOf(targetNode) - list.indexOf(curretNode) > 0) {
		container.insertBefore(curretNode, targetNode.nextElementSibling)
	} else if (list.indexOf(targetNode) - list.indexOf(curretNode) < 0) {
		container.insertBefore(curretNode, targetNode)
	}
	filp.play()
})

container.addEventListener("dragend", (e) => {
	e.target.classList.remove("moving")
})

container.addEventListener("dragend", (e) => {
	setTimeout(() => {
		e.target.classList.remove("moving")
	}, 0)
})

function findNode(node, target) {
	if (node == document.body) return false
	if ([...node.classList].includes(target)) return node
	return findNode(node.parentNode, target)
}
