const { expect } = require("@jest/globals");
const x = require("./trie.js");

test("should display subtree", async () => {
    await x.reset();

    await x.add("fog");
    await x.add("food");

    expect(await x.display()).toStrictEqual({
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

test("redundant Tries should not exist", async () => {
    await x.reset();

    await x.add("fog");
    await x.add("foods");
    await x.add("foody");
    await x.delete("foods");
    await x.delete("foody");

    expect(await x.display()).toStrictEqual({
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
test("should delete correctly", async () => {
    await x.reset();

    await x.add("hello");
    await x.add("hell");
    await x.delete("hell");
    expect(await x.display()).toStrictEqual({
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
test("should check whether child exists correctly", async () => {
    await x.reset();

    await x.add("foo");
    expect(await x.contains("foo")).toBe(true);
    await x.add("bar");
    expect(await x.contains("foo")).toBe(true);
    expect(await x.contains("bar")).toBe(true);
    await x.add("baz");
    expect(await x.contains("baz")).toBe(true);
    expect(await x.contains("ba")).toBe(false);
    expect(await x.contains("money")).toBe(false);
});
test("should delete child correctly", async () => {
    await x.reset();

    await x.add("foo");
    await x.add("bar");
    await x.add("baz");
    expect(await x.contains("foo")).toBe(true);
    expect(await x.contains("bar")).toBe(true);
    expect(await x.contains("baz")).toBe(true);
    expect(await x.contains("ba")).toBe(false);
    expect(await x.contains("money")).toBe(false);
    await x.delete("bar");
    expect(await x.contains("bar")).toBe(false);
    expect(await x.contains("foo")).toBe(true);
    expect(await x.contains("baz")).toBe(true);
    await x.delete("baz");
    expect(await x.contains("bar")).toBe(false);
    expect(await x.contains("foo")).toBe(true);
    expect(await x.contains("baz")).toBe(false);
    await x.delete("foo");
    expect(await x.contains("bar")).toBe(false);
    expect(await x.contains("foo")).toBe(false);
    expect(await x.contains("baz")).toBe(false);
});

test("should autocomplete correctly", async () => {
    await x.reset();

    await x.add("foo");
    await x.add("bar");
    await x.add("barn");
    await x.add("barnard");
    await x.add("baz");
    await x.add("bam");

    expect(await x.autocomplete("f")).toStrictEqual(["foo"]);
    expect(await x.autocomplete("fo")).toStrictEqual(["foo"]);
    expect(await x.autocomplete("foo")).toStrictEqual(["foo"]);
    expect(await x.autocomplete("bar")).toStrictEqual([
        "barnard",
        "barn",
        "bar",
    ]);
    expect(await x.autocomplete("ba")).toStrictEqual([
        "barnard",
        "barn",
        "bar",
        "baz",
        "bam",
    ]);

    expect(await x.autocomplete("fooo")).toStrictEqual([]);
    expect(await x.autocomplete("fod")).toStrictEqual([]);
});
