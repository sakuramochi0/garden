#!/usr/bin/env bash
# update mastodon statuses db
mastodon-to-sqlite statuses db.sqlite3 -u
