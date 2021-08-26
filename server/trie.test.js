const { expect } = require("@jest/globals");
const Trie = require("./trie.js");

test("should create Trie with word", () => {
    const x = new Trie("helloWorld");
    expect(x.value).toBe("helloWorld");
});

test("should add child to empty tree", () => {
    const x = new Trie("");
    x.add("foo");
    expect(x.children[0].value).toBe("foo");
    expect(x.children[0].isKeyword).toBe(true);
    expect(x.children.length).toBe(1);
    expect(x.children[0].children.length).toBe(0);
});
test("should create third child if letters are shared", () => {
    const x = new Trie("");
    x.add("fog");
    x.add("food");

    expect(x.children[0].value).toBe("fo");
    expect(x.children[0].isKeyword).toBe(false);
    expect(x.children.length).toBe(1);
    expect(x.children[0].children.length).toBe(2);
});
test("should display subtree", () => {
    const x = new Trie("");
    x.add("fog");
    x.add("food");

    expect(x.display()).toStrictEqual({
        value: "",
        isKeyword: false,
        children: [
            {
                value: "fo",
                isKeyword: false,
                children: [
                    {
                        value: "g",
                        isKeyword: true,
                        children: [],
                    },
                    {
                        value: "od",
                        isKeyword: true,
                        children: [],
                    },
                ],
            },
        ],
    });
});

test("redundant Tries should not exist", () => {
    const x = new Trie("");
    x.add("fog");
    x.add("foods");
    x.add("foody");
    x.delete("foods");
    x.delete("foody");

    expect(x.display()).toStrictEqual({
        value: "",
        isKeyword: false,
        children: [
            {
                value: "fog",
                isKeyword: true,
                children: [],
            },
        ],
    });
});
test("should delete correctly", () => {
    const x = new Trie("");
    x.add("hello");
    x.add("hell");
    x.delete("hell");
    expect(x.display()).toStrictEqual({
        value: "",
        isKeyword: false,
        children: [
            {
                value: "hello",
                isKeyword: true,
                children: [],
            },
        ],
    });
});
test("should check whether child exists correctly", () => {
    const x = new Trie("");
    x.add("foo");
    expect(x.contains("foo")).toBe(true);
    x.add("bar");
    expect(x.contains("foo")).toBe(true);
    expect(x.contains("bar")).toBe(true);
    x.add("baz");
    expect(x.contains("baz")).toBe(true);
    expect(x.contains("ba")).toBe(false);
    expect(x.contains("money")).toBe(false);
});
test("should delete child correctly", () => {
    const x = new Trie("");
    x.add("foo");
    x.add("bar");
    x.add("baz");
    expect(x.contains("foo")).toBe(true);
    expect(x.contains("bar")).toBe(true);
    expect(x.contains("baz")).toBe(true);
    expect(x.contains("ba")).toBe(false);
    expect(x.contains("money")).toBe(false);
    x.delete("bar");
    expect(x.contains("bar")).toBe(false);
    expect(x.contains("foo")).toBe(true);
    expect(x.contains("baz")).toBe(true);
    x.delete("baz");
    expect(x.contains("bar")).toBe(false);
    expect(x.contains("foo")).toBe(true);
    expect(x.contains("baz")).toBe(false);
    x.delete("foo");
    expect(x.contains("bar")).toBe(false);
    expect(x.contains("foo")).toBe(false);
    expect(x.contains("baz")).toBe(false);
});

test("should autocomplete correctly", () => {
    const x = new Trie("");
    x.add("foo");
    x.add("bar");
    x.add("barn");
    x.add("barnard");
    x.add("baz");
    x.add("bam");

    expect(x.autocomplete("f")).toStrictEqual(["foo"]);
    expect(x.autocomplete("fo")).toStrictEqual(["foo"]);
    expect(x.autocomplete("foo")).toStrictEqual(["foo"]);
    expect(x.autocomplete("bar")).toStrictEqual(["barnard", "barn", "bar"]);
    expect(x.autocomplete("ba")).toStrictEqual([
        "barnard",
        "barn",
        "bar",
        "baz",
        "bam",
    ]);

    expect(x.autocomplete("fooo")).toStrictEqual([]);
    expect(x.autocomplete("fo%")).toStrictEqual([]);
});
