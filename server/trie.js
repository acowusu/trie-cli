function intersection(a, b) {
    let intersection = "";

    for (let i = 0; i < Math.min(a.length, b.length); i++) {
        if (a[i] === b[i]) {
            intersection += a[i];
        } else {
            break;
        }
    }
    return intersection;
}
class Node {
    constructor(value = "", isKeyword = false) {
        this.value = value;
        this.children = [];
        this.isKeyword = isKeyword;
    }
    display() {
        return {
            value: this.value,
            isKeyword: this.isKeyword,
            children: this.children.map((child) => child.display()),
        };
    }
    autocomplete(value) {
        let tail = "";
        if (value.length > this.value.length) {
            if (!value.startsWith(this.value)) {
                return [];
            }
            tail = value.substring(this.value.length);
        } else {
            if (!this.value.startsWith(value)) {
                return [];
            }
        }

        const options = this.children.flatMap((child) =>
            child.autocomplete(tail).map((option) => this.value + option),
        );
        if (this.isKeyword && this.value.length >= value.length) {
            options.push(this.value);
        }
        return options;
    }
    delete(value) {
        if (!value.startsWith(this.value)) {
            throw new Error("Item cannot be deleted, it does not exist");
        }
        const tail = value.substring(this.value.length);

        for (let i = 0; i < this.children.length; i++) {
            const child = this.children[i];
            const segment = child.value;

            if (tail.startsWith(segment)) {
                if (tail === segment) {
                    // remove child node
                    child.isKeyword = false;
                    if (child.children.length === 0) {
                        //leaf node
                        this.children.splice(i, 1);
                    }
                    if (
                        child.children.length === 1 &&
                        !child.isKeyword &&
                        child.value !== ""
                    ) {
                        let { value, children, isKeyword } = child.children[0];
                        child.value = child.value + value;
                        child.children = children;
                        child.isKeyword = isKeyword;
                    }
                } else {
                    // remove one of the children of the node at index i
                    child.delete(tail);
                    if (child.children.length === 0 && !child.isKeyword) {
                        this.children.splice(i, 1);
                    }
                    if (
                        this.children.length === 1 &&
                        !this.isKeyword &&
                        this.value !== ""
                    ) {
                        let { value, children, isKeyword } = this.children[0];
                        this.value = this.value + value;
                        this.children = children;
                        this.isKeyword = isKeyword;
                    }
                }
                break;
            }
        }
    }
    contains(value) {
        if (this.value === value) {
            return this.isKeyword;
        } else if (value.startsWith(this.value)) {
            // value with part that matches current node's value removed
            const tail = value.substring(this.value.length);
            return this.children.some((child) => child.contains(tail));
        } else {
            return false;
        }
    }
    add(value) {
        if (value.startsWith(this.value)) {
            const tail = value.substring(this.value.length);

            for (let i = 0; i < this.children.length; i++) {
                const child = this.children[i];
                const machedChars = intersection(tail, child.value);
                if (tail == child.value) {
                    child.isKeyword = true;
                    return;
                } else if (tail.startsWith(child.value)) {
                    child.add(tail);
                    return;
                } else if (machedChars.length > 0) {
                    const newChild = new Node(machedChars, false);
                    newChild.value = machedChars;
                    child.value = child.value.substring(machedChars.length);

                    if (tail.substring(machedChars.length) === "") {
                        newChild.isKeyword = true;
                        newChild.children = [child];
                    } else {
                        newChild.children = [
                            child,
                            new Node(tail.substring(machedChars.length), true),
                        ];
                    }

                    this.children.splice(i, 1, newChild);

                    return;
                }
            }

            this.children.push(new Node(tail, true));
        } else {
            throw new Error("Item cannot be added here");
        }
    }
}
module.exports = Node;
