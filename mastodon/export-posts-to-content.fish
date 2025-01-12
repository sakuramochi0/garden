#!/usr/bin/env fish
# export all posts from db.sqlite to content/posts directory as Markdown files

sqlite-utils query db.sqlite 'select * from statuses' | jq -c '.[]' | while read post
   set basedir ../content/posts/@sakuramochi0@mastodon-social/
   set filename (echo $post | jq -r '.id').md

   mkdir -p $basedir

   echo $post | sed -e 's/<[^>]*>//g' | sed -e 's/\\\\/\\&bsol;/g'| jq -r '
   "---\n" +
   "created: " + .created_at + "\n" +
   "updated: " + .created_at + "\n" +
   "title: \"" + .content + "\"\n" +
   "---\n\n" +
   .content + "\n\n" +
   "&mdash; " + (.created_at | strptime("%Y-%m-%dT%H:%M:%S %Z") | mktime | strflocaltime("%Y-%m-%d %H:%M:%S %Z")) + "\n\n" +
   "Original URL: " + (.url)' > $basedir$filename
end
