#!/usr/bin/env fish
# export all posts from db.sqlite to content/posts directory as Markdown files

sqlite-utils query db.sqlite3 'select * from statuses order by created_at' | jq -c '.[]' | while read post
   set basedir ../content/posts/@sakuramochi0@mastodon-social/
   set filename (echo $post | jq -r '.url | split("/")[-1]').md

   if [ "$filename" = "activity.md" ]
     echo skip $filename
     continue
   end

   mkdir -p $basedir

   echo $post | jq -r '   "---\n" +
   "created: " + .created_at + "\n" +
   "updated: " + .created_at + "\n" +
   "title: \"" + (.content | sub("<[^>]*>"; ""; "g") | sub("\\\\\\\\"; "&#92;"; "g")[:40]) + "[...]\"\n" +
   "---\n\n" +
   .content + "\n\n" +
   "&mdash; " + (.created_at | strptime("%Y-%m-%dT%H:%M:%S %Z") | mktime | strflocaltime("%Y-%m-%d %H:%M:%S %Z")) + "\n\n" +
   "Original URL: " + .url' > $basedir$filename
end
