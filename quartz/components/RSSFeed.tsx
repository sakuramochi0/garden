// @ts-ignore: this is safe, we don't want to actually make darkmode.inline.ts a module as
// modules are automatically deferred and we don't want that to happen for critical beforeDOMLoads
// see: https://v8.dev/features/modules#defer
import styles from "./styles/rss-feed.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { i18n } from "../i18n"

const RSSFeed: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  return (
    <div class="rss-feed">
      <a href="/index.xml">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
             id="RSSicon"
             viewBox="0 0 256 256">
          <title>{i18n(cfg.locale).components.rssFeed.title}</title>
          <defs>
            <linearGradient x1="0.085" y1="0.085" x2="0.915" y2="0.915" id="RSSg">
              <stop offset="0.0" stop-color="#E3702D"></stop>
              <stop offset="0.1071" stop-color="#EA7D31"></stop>
              <stop offset="0.3503" stop-color="#F69537"></stop>
              <stop offset="0.5" stop-color="#FB9E3A"></stop>
              <stop offset="0.7016" stop-color="#EA7C31"></stop>
              <stop offset="0.8866" stop-color="#DE642B"></stop>
              <stop offset="1.0" stop-color="#D95B29"></stop>
            </linearGradient>
          </defs>
          <rect width="256" height="256" rx="55" ry="55" x="0" y="0" fill="#CC5D15"></rect>
          <rect width="246" height="246" rx="50" ry="50" x="5" y="5" fill="#F49C52"></rect>
          <rect width="236" height="236" rx="47" ry="47" x="10" y="10" fill="url(#RSSg)"></rect>
          <circle cx="68" cy="189" r="24" fill="#FFF"></circle>
          <path d="M160 213h-34a82 82 0 0 0 -82 -82v-34a116 116 0 0 1 116 116z" fill="#FFF"></path>
          <path d="M184 213A140 140 0 0 0 44 73 V 38a175 175 0 0 1 175 175z" fill="#FFF"></path>
        </svg>
      </a>
    </div>
  )
}

RSSFeed.css = styles

export default (() => RSSFeed) satisfies QuartzComponentConstructor
