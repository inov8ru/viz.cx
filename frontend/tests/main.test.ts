import { describe, expect, test } from "vitest"
import { setup, $fetch } from "@nuxt/test-utils"
describe("My test", async () => {
  await setup({
    // test context options
  })
  test("my test", async () => {
    const html = await $fetch('/analytics')
    // console.log(html)
    expect(html.length).greaterThan(1000)
  })
})
