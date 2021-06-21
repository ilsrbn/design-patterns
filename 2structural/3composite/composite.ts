abstract class Component {
    parent: Component

	setParent(parent: Component) {
        this.parent = parent
    }

    getParent(): Component {
        return this.parent
    }

    add(component: Component): void { }

    remove(component: Component): void { }

    isComposite(): boolean {
        return false
    }

    abstract operation(): string;
}

class Leaf extends Component {
    operation(): string {
        return 'Leaf'
    }
}

class Composite extends Component {
    children: Component[] = [];

    add(component: Component): void {
        this.children.push(component)
        component.setParent(this)
    }

    remove(component: Component): void {
        const componentIndex = this.children.indexOf(component)
        this.children.splice(componentIndex, 1)

        component.setParent(null)
    }

    isComposite(): boolean {
        return true
    }

    operation(): string {
        const results = [];
        for (const child of this.children) {
            results.push(child.operation())
        }

        return `Branch(${results.join('+')})`
    }
}


