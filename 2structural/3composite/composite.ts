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