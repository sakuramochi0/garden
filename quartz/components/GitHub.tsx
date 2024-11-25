import styles from "./styles/github.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const GitHub: QuartzComponent = (props: QuartzComponentProps) => {
  return (
    <div class="github">
      <a href="https://github.com/sakuramochi0/garden" target="_blank">
        <div className="toggle" id="github-button" tabIndex={-1} />
        <label id="github-label" tabIndex={-1}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="github"
            x="0px"
            y="0px"
            viewBox="0 0 40 40"
            style="enable-background:new 0 0 40 40"
            xmlSpace="preserve"
          >
            <title>GitHub</title>
            <path fill="black"
                  transform="scale(1.8)"
                  d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
          </svg>
        </label>
      </a>
    </div>
  )
}

GitHub.css = styles

export default (() => GitHub) satisfies QuartzComponentConstructor
