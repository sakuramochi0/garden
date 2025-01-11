import { execSync } from "node:child_process"

import { globby } from "globby"
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkStringify from "remark-stringify"
import remarkFrontmatter from "remark-frontmatter"
import remarkFrontmatterYaml from "remark-frontmatter-yaml"
import { read } from "to-vfile"


async function main() {
  const paths = await globby("content/notes/*.md")

  const previewOrPublic = []
  for await (const path of paths) {
    const state = await readState(path)
    if (state === "preview" || state === "public") {
      previewOrPublic.push(path)
    }
  }

  // unstage all
  execSync(`git restore --staged .`)

  const unstagedFiles = execSync(`git ls-files --exclude-standard --modified content/notes/`).toString().trim().split("\n")
  const untrackedFiles = execSync(`git ls-files --exclude-standard --others content/notes/`).toString().trim().split("\n")
  const changedFiles = unstagedFiles.concat(untrackedFiles)

  const commitFiles = changedFiles.filter(changedFile => previewOrPublic.includes(changedFile))
  if (commitFiles.length === 0) {
    console.log('no posts to commit')
    return
  }
  const commitMessage = `feat: auto commit`
  console.log(execSync(`git add ${commitFiles.join(" ")}`).toString())
  console.log(execSync(`git commit -m '${commitMessage}'`).toString())
  console.log(execSync(`git show @ --name-only`).toString())
  console.log(execSync(`git push`).toString())
}

async function readState(path) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkStringify)
    .use(remarkFrontmatter)
    .use(remarkFrontmatterYaml)
    .process(await read(path))
  return file.data.frontmatter.state || "draft"
}

await main()
